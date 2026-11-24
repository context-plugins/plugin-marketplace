import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Free key includes 50 calls a month; higher volume on a paid plan. Get one at
   * https://data.useplinth.com/pricing., Free key includes 50 calls a day across /grants/*; the
   * organization endpoints and SQL need a paid plan. Get one at
   * https://data.useplinth.com/pricing., Free key includes 50 calls a day across /grants/*; the
   * organization endpoints and SQL need a paid plan. Get one at
   * https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a
   * paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a day
   * across /grants/*; the organization endpoints and SQL need a paid plan. Get one at
   * https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a
   * paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a day
   * across /grants/*; the organization endpoints and SQL need a paid plan. Get one at
   * https://data.useplinth.com/pricing., Free key includes 50 calls a month; higher volume on a
   * paid plan. Get one at https://data.useplinth.com/pricing., Free key includes 50 calls a month;
   * higher volume on a paid plan. Get one at https://data.useplinth.com/pricing.
   *
   * @remarks
   * Unset, it is read from `PLINTH_US_GRANTS_DATA_API_KEY_AUTH`.
   */
  readonly apiKeyAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  /** Plinth US philanthropy data */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
