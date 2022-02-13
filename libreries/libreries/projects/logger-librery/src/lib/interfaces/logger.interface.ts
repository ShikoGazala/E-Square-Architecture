export interface LoggerConfig {
  message: string;
  timestamp: number;
  target: Target;
  isProduction: boolean;
}

export enum Target {
  Console = 'console',
  Localstorage = 'localstorage',
}
