let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, i) => ({
    originalName: name,
    modifiedName: modifiedNames[i],
    id: id++
  }));
}
