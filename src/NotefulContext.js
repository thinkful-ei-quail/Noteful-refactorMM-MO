import React from 'react';

const NotefulContext = React.createContext({
  notes: [],
  folders: []
  
});

NotefulContext.displayName ='NoteContext';

export default NotefulContext