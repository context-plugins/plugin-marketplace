import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * Authenticate every request with a **Service Access Token** or **Organization Token**. Set the
   * token value in the `Authorization: Bearer <token>` header.
   *
   * **Service Access Token**: Scoped to a single service. Use when automating service-level
   * configuration or runtime flows.
   *
   * **Organization Token**: Scoped to the organization; inherits permissions across services. Use
   * for org-wide automation or when managing multiple services programmatically.
   *
   * Both token types are issued by the Authlete console or provisioning APIs.
   */
  readonly bearer?: TokenProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      /** 🇺🇸 US Cluster */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      /** 🇺🇸 US Cluster */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment3;
      /** 🇺🇸 US Cluster */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment4;
      /** 🇺🇸 US Cluster */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment5;
      /** 🇺🇸 US Cluster */
      readonly serverOptions?: {
        baseUrl?: string;
      };
    };
