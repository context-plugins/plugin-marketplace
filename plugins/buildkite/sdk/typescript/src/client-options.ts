import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /** Unset, it is read from `BUILDKITE_BEARER_AUTH`. */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /**
         * Buildkite REST API v2, Standard Agent API, Buildkite REST API v2, Buildkite REST API v2,
         * Buildkite REST API v2, Buildkite REST API v2, Buildkite REST API v2, Standard Agent API,
         * Buildkite REST API v2, Buildkite REST API v2
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * Buildkite REST API v2, Standard Agent API, Buildkite REST API v2, Buildkite REST API v2,
         * Buildkite REST API v2, Buildkite REST API v2, Buildkite REST API v2, Standard Agent API,
         * Buildkite REST API v2, Buildkite REST API v2
         */
        defaultBuildkiteAgentMetricsApi?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /**
         * Buildkite REST API v2, Standard Agent API, Buildkite REST API v2, Buildkite REST API v2,
         * Buildkite REST API v2, Buildkite REST API v2, Buildkite REST API v2, Standard Agent API,
         * Buildkite REST API v2, Buildkite REST API v2
         */
        default?: {
          baseUrl?: string;
        };
        /**
         * Buildkite REST API v2, Standard Agent API, Buildkite REST API v2, Buildkite REST API v2,
         * Buildkite REST API v2, Buildkite REST API v2, Buildkite REST API v2, Standard Agent API,
         * Buildkite REST API v2, Buildkite REST API v2
         */
        defaultBuildkiteAgentMetricsApi?: {
          baseUrl?: string;
        };
      };
    };
