import { Stream } from 'most'
class MutationStream {
  constructor (node, config) {
    this.observer = null
    this.config = config
    this.node = node
  }

  run (sink, scheduler) {
    const send = e => tryEvent(scheduler.now(), e, sink)
    this.observer = new MutationObserver(send, this.config)
    this.observer.observe(this.node, this.config)
    const dispose = () => this.observer.disconnect()
    return { dispose }
  }
}

function tryEvent (t, x, sink) {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}

export default (node, config) => {
  return new Stream( new MutationStream (node, config ))
}
