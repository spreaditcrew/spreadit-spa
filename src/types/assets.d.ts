interface Styles {
  [key: string]: string;
}

type url = string;

declare module '*.scss' {
  export default '' as Styles;
}

declare module '*.css' {
  export default '' as Styles;
}

declare module '*.png' {
  export default '' as url;
}

declare module '*.jpg' {
  export default '' as url;
}

declare module '*.jpeg' {
  export default '' as url;
}
