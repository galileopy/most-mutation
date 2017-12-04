# most-mutation
Event Stream from Mutation Observer

``` npm install most-mutation```

```javascript
import mutationStream from 'most-mutation'

const options = {
    attributes: true,
    childList: true,
    characterData: data,
    // this is passed directly to the mutation observer so you can add
    // all the options you can pass to observer.observe
  }

const changes = mutationStream(document.body, options)

// you get back a most stream
changes
  .tap(console.log)
  .drain()
```
