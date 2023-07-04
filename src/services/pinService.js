

const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
  };
  
  const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
  };
  
  export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
  }
  
  export const saveFolder = async (folderName) => {
    const folders = await getFolders();
  
    const newFolder = {
      id: generateId(),
      name: folderName,
      pins: []
    };
  
    folders.push(newFolder);
  
    await saveFolders(folders);
  
    return newFolder;
  }
  
  export const savePinInFolder = async (folderId, pinId) => {
  
    const folders = await getFolders();
  
    const folderIndex = folders.findIndex(function(folder) {
      return folder.id === folderId;
    });
  
    if (folderIndex !== -1) {
      folders[folderIndex].pins.push(pinId);
    }
  
    await saveFolders(folders);
  
    return { ...folders[folderIndex] };
  }

  export const getPins = () => {
    return [
      {
        id: '123',
        image: 'https://i.pinimg.com/236x/81/5c/00/815c00b546bd7e270408313eaeca31dd.jpg',
        total: 0
      },
      {
        id: '133',
        image: 'https://i.pinimg.com/736x/67/f2/9c/67f29c7b9588e7db4f344eeebbf22f7c.jpg',
        total: 0
      },
      {
        id: '135',
        image: 'https://i.pinimg.com/564x/2e/a4/38/2ea438556976c84c5cc3a00b2ff06652.jpg',
        total: 0
      },
      {
        id: '155',
        image: 'https://i.pinimg.com/564x/18/3b/74/183b74df45deb5ac651e26faa90cf99d.jpg',
        total: 0
      },
      {
        id: '166',
        image: 'https://i.pinimg.com/564x/05/40/8f/05408ffcda7fdf01e695d94c113fe3a6.jpg',
        total: 0
      },
      {
        id: '177',
        image: 'https://i.pinimg.com/564x/65/e7/35/65e735ba4fe9cc74536abdb4c7ef0cd5.jpg',
        total: 0
      },
      {
        id: '188',
        image: 'https://i.pinimg.com/564x/dd/e9/a7/dde9a7f6165310c7e63ccb7d598b1737.jpg',
        total: 0
      },
      {
        id: '199',
        image: 'https://i.pinimg.com/736x/41/b4/42/41b4425f34a97bfe9e1ef0247a363833.jpg',
        total: 0
      }
    ]
  }