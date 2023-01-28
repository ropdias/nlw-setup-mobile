export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined; // No props from one screen to another
      new: undefined; // No props from one screen to another
      habit: {
        date: string; // We are defining here what prop we want from one screen to another
      };
    }
  }
}
