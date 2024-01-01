interface IConfig {
  name: string;
  port: number;
  schemas: Map<string, Map<string, ISchemaConfig>>;
  api: Map<string, IApiConfig>;
}

interface IApiConfig {
  get?: IRequestConfig;
  post?: IRequestConfig;
  put?: IRequestConfig;
  delete?: IRequestConfig;
  head?: IRequestConfig;
}

interface IRequestConfig {
  latency?: number;
  response: IRequestConfig;
  payload: IPayloadConfig;
}

interface IResponseConfig {
  status: number;
  data: Map<string, any>;
}

interface IPayloadConfig {
  schema: string;
  validate?: boolean;
}

interface ISchemaConfig {
  type: "string" | "number" | "object";
  pattern?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
