import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * OAuth 2.0 bearer access token. Obtain a token using the client credentials issued during
   * onboarding via the Health Gorilla OAuth 2.0 token endpoint, then pass it as `Authorization:
   * Bearer {token}`.
   *
   * @remarks
   * Unset, it is read from `HEALTH_GORILLA_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** Production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** Production */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
