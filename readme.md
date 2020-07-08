# Ginger Body Plugin

Allows the alteration of the HTML body directly from the ginger views. 
e.g. Change the bodyClass of the document based on dynamically loaded data


## Setup

1. Install the plugin

```
yarn add @ginger/body
```

2. Declare the plugin

```
import { GingerBodyPlugin } from '@ginger/body'

app.use(VueGinger, {
  plugins: [{ optins: {}, plugin: GingerBodyPlugin }]
})
```
