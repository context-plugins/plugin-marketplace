import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * RocketReach account API key. You can locate your API Key from the "My API Key" section of the
   * [API account page](https://rocketreach.co/account?section=nav_gen_api). Requests to the API are
   * authenticated using the Api-Key request header. Older clients may use an `api_key` query
   * parameter, but this behavior is deprecated.
   *
   * @remarks
   * Unset, it is read from `ROCKET_REACH_ROCKET_REACH_API_KEY`.
   */
  readonly rocketReachApiKey?: SecretProvider | undefined;
};

type ServerOptions = {
  /** v2 Production Server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
