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
          title: 'Managers',
          expanded: true,
          children: [
            {
              title: 'Rob',
              children: [],
              isPerson: true,
            },
            {
              title: 'Joe',
              children: [],
              isPerson: true,
            },
          ],
        },
        {
          title: 'Clerks',
          expanded: true,
          children: [
            {
              title: 'Bertha',
              children: [],
              isPerson: true,
            },
            {
              title: 'Billy',
              children: [],
              isPerson: true,
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div style={{ height: 300 }}>
          <DndProvider backend={HTML5Backend}>
            <SortableTree
              treeData={this.state.treeData}
              canNodeHaveChildren={node => !node.isPerson}
              onChange={treeData => this.setState({ treeData })}
            />
          </DndProvider>
        </div>
      </div>
    );
  }
}
