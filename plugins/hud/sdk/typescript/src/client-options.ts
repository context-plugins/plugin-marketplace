import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions;

type ServerOptions = {
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
