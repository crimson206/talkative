# Enhanced Markdown Example

## Table Of Contents

[TOC]

## Introduction
This is a **bold** text with [a link](https://example.com).

## Code Examples

### JavaScript
```javascript
function helloWorld() {
  console.log("Hello, World!");
}
```

### Python
```python
def hello_world():
    print("Hello, World!")

a = hello_world()
```

### Java
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## Math Expressions
Inline math: $E = mc^2$

Block math:
$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

## Emoji
:smile: :heart: :rocket:

## Tasklist
* [ ] To do
* [x] Done

## Image
![Image](logo128.png)

## Highlighted Code
<div class="highlighted-code">
<div style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: #cccccc;">{</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; </span><span style="color: #9cdcfe;">"compilerOptions"</span><span style="color: #cccccc;">: {</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"target"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"ES2022"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"module"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"commonjs"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"declaration"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"outDir"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"./dist"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"strict"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"esModuleInterop"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"types"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"node"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"jest"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"@testing-library/jest-dom"</span><span style="color: #cccccc;">],</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"lib"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"dom"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"dom.iterable"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"ES2022"</span><span style="color: #cccccc;">],</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"jsx"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"react-jsx"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"resolveJsonModule"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; },</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; </span><span style="color: #9cdcfe;">"include"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"src"</span><span style="color: #cccccc;">],</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; </span><span style="color: #9cdcfe;">"exclude"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"node_modules"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"**/__tests__/*"</span><span style="color: #cccccc;">]</span></div><div><span style="color: #cccccc;">&nbsp; }</span></div></div>
</div>


## Buy

[Intro](#introduction)




## Dynamic Rendered
```json
{
    "type": "dynamicRenderer",
    "id": "dynamicComponent",
    "props": {
        "title": "Dynamic Counter and List",
        "initialCount": 5,
        "items": ["Item 1", "Item 2", "Item 3"],
        "fetchDataUrl": "https://api.example.com/data"
    }
}
```

More content here...

```json
{
    "type": "dynamicRenderer",
    "id": "dynamicComponent",
    "props": {
        "title": "Another Dynamic Component",
        "initialCount": 10,
        "items": ["First", "Second", "Third", "Fourth"],
        "fetchDataUrl": "https://api.anotherexample.com/data"
    }
}

```

```ts
const spec = {
    type: "dynamicRenderer",
    id: "highlighted",
    props: {
        highlightedHTML: `<div style="color: #cccccc;background-color: #1f1f1f;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: #cccccc;">{</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; </span><span style="color: #9cdcfe;">"compilerOptions"</span><span style="color: #cccccc;">: {</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"target"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"ES2022"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"module"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"commonjs"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"declaration"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"outDir"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"./dist"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"strict"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"esModuleInterop"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"types"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"node"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"jest"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"@testing-library/jest-dom"</span><span style="color: #cccccc;">],</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"lib"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"dom"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"dom.iterable"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"ES2022"</span><span style="color: #cccccc;">],</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"jsx"</span><span style="color: #cccccc;">: </span><span style="color: #ce9178;">"react-jsx"</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; </span><span style="color: #9cdcfe;">"resolveJsonModule"</span><span style="color: #cccccc;">: </span><span style="color: #569cd6;">true</span><span style="color: #cccccc;">,</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; },</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; </span><span style="color: #9cdcfe;">"include"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"src"</span><span style="color: #cccccc;">],</span></div><div><span style="color: #cccccc;">&nbsp; &nbsp; </span><span style="color: #9cdcfe;">"exclude"</span><span style="color: #cccccc;">: [</span><span style="color: #ce9178;">"node_modules"</span><span style="color: #cccccc;">, </span><span style="color: #ce9178;">"**/__tests__/*"</span><span style="color: #cccccc;">]</span></div><div><span style="color: #cccccc;">&nbsp; }</span></div></div>`
    }
}
```
