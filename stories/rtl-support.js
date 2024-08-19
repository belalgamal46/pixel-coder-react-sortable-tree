import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableTree from '../src';
// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: 'Chicken',
          expanded: true,
          children: [
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 300, width: 600 }}>
        <DndProvider backend={HTML5Backend}>
          <SortableTree
            rowDirection="rtl"
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
          />
        </DndProvider>
      </div>
    );
  }
}
