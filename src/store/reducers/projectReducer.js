const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'stuff things' },
    { id: '2', title: 'collect all the stars', content: 'stuff things' },
    { id: '3', title: 'egg hunt with yoshi', content: 'carol!' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Create project error', action.err);
      return state;
    case 'DELETE_PROJECT':
      console.log('Deleted project');
      return state;
    case 'DELETED_PROJECT_ERROR':
      console.log('Delete project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
