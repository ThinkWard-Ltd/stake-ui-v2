type Skin = {
  active: string;
  ready: string;
  inactive: string;
  notReady: string;
  deactivating: string;
};

const _skin: Skin = {
  active: '#001B30',
  ready: '#0049B0',
  notReady: '#ccc',
  inactive: 'red',
  deactivating: 'rgb(255, 121, 42)',
};

export function instance(): Skin {
  return _skin;
}
