const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'stuff things' },
    { id: '2', title: 'collect all the stars', content: 'stuff things' },
    { id: '3', title: 'egg hunt with yoshi', content: 'carol!' }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
