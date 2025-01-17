import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              Inicio: 'one',
            },
          },
          TabTwo: {
            screens: {
              Oficinas: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
