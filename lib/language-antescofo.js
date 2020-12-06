'use babel'

import AntescofoView from './language-antescofo-view';
import { CompositeDisposable } from 'atom';

const osc = require('node-osc');
let editor, client = null;
let host = "localhost";
let port = 5678;

export default {

  antescofoView: null,
//  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.antescofoView = new AntescofoView(state.antescofoViewState);
/*    this.modalPanel = atom.workspace.addModalPanel({
      item: this.antescofoView.getElement(),
      visible: false});*/

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable;

    // Register command that toggles this view
    return this.subscriptions.add(atom.commands.add('atom-workspace', {
      'antescofo:init': () => this.init(),
      'antescofo:startantescofo' : () => this.startantescofo(),
      'antescofo:oscsend' : () => this.oscsend(),
      'antescofo:startfromlabel' : () => this.startfromlabel(),
      'antescofo:stoptantescofo' : () => this.stoptantescofo(),
      'antescofo:Loadantescofo' : () => this.loadantescofo(),
      'antescofo:nextevent' : () => this.nextevent()
    }));
  },

  deactivate() {
//    this.modalPanel.destroy();
    this.subscriptions.dispose();
    return this.antescofoView.destroy();
  },

  serialize() {
    return {
      antescofoViewState: this.antescofoView.serialize()
    };
  },

  init() {
    if (!client)
    {
      client = new osc.Client(host, port);
      console.log('Antescofo OSC transmission activated\n host: %s, port: %d',host, port);
    }
  },

  oscsend() {
    if (!client)
      this.init();
    editor = atom.workspace.getActiveTextEditor();
    if (editor) {
      const selection = editor.getSelectedText();
      if (selection)
      {
        client.send('/antescofo/cmd', 'playstring', selection);
      }
      else
      {
        const line = editor.lineTextForBufferRow(
          editor.getCursorBufferPosition().row);
          client.send('/antescofo/cmd', 'playstring', line);
      }
    }
    console.log('Sent to Antescofo!');
  },

  startantescofo() {
    if (!client)
      this.init();
    client.send('/antescofo/cmd', 'start');
  },

  stoptantescofo() {
    if (!client)
      this.init();
    client.send('/antescofo/cmd', 'stop');
  },

  loadantescofo() {
    if (!client)
      this.init();
    editor = atom.workspace.getActiveTextEditor();
    client.send('/antescofo/cmd', 'score', editor.getPath());
  },

  startfromlabel() {
    if (!client)
      this.init();
    editor = atom.workspace.getActiveTextEditor();
    client.send('/antescofo/cmd', 'startfromlabel');
  },

  nextevent() {
    if (!client)
      this.init();
    editor = atom.workspace.getActiveTextEditor();
    client.send('/antescofo/cmd', 'nextevent');
  },


};
//compare with previous implementation
