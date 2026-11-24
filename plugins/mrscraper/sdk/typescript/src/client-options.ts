import type { SecretProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * atk_example_not_a_real_token
   *
   * @remarks
   * Unset, it is read from `MR_SCRAPER_API_KEY`.
   */
  readonly apiKey?: SecretProvider | undefined;
  /**
   * "Bearer <token>" — a MrScraper API token, or an OAuth 2.1 access token issued by the platform
   * for the MCP connector (scopes: scrape:read for GET /, scrape:write for POST /, account:read for
   * GET /subscription-accounts).
   *
   * @remarks
   * Unset, it is read from `MR_SCRAPER_BEARER_AUTH`.
   */
  readonly bearerAuth?: SecretProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    default?: {
      baseUrl?: string;
    };
    defaultScraperServiceGatewayAuthApi?: {
      baseUrl?: string;
    };
  };
};
