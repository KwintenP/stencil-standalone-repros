importScripts('https://cdn.jsdelivr.net/npm/@stencil/core/compiler/stencil.js');
importScripts('https://cdn.jsdelivr.net/npm/typescript@3.9.6/lib/typescript.js')

console.log('worker inited');
debugger;
stencil.transpile(`/* @jsx h */
import '@stencil/router';
import { h, Component, State, Host } from "@stencil/core";

@Component({
  tag: "my-counter",
  // styleUrl: "index.css",
  shadow: true,
})
export class MyCounter {
  @State() count: number = 4;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return (
      <Host>
        <button onClick={this.dec.bind(this)}>-</button>
        <span>{this.count}</span>
        <button onClick={this.inc.bind(this)}>+</button>
      </Host>
    );
  }
}`, {
  file: 'index.tsx',
  module: 'cjs',
  // script: 'es5',
  style: 'import',
  // componentMetadata: 'compilerstatic'
}, null).then(results => {
  const error = results.diagnostics[0];

  console.log(error);


})