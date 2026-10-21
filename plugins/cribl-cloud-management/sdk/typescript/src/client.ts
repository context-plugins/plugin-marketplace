import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ApiCredentials } from "./resources/api-credentials.js";
import { Billing } from "./resources/billing.js";
import { Health } from "./resources/health.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Public API for the Cribl.Cloud platform. Powers the Speakeasy SDK.
 */
export class CriblCloudPublicApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #apiCredentials?: ApiCredentials;
  #billing?: Billing;
  #workspaces?: Workspaces;
  #health?: Health;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CRIBL_CLOUD_PUBLIC_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CriblCloudPublicApiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Operations related to API credentials
   */
  get apiCredentials(): ApiCredentials {
    return (this.#apiCredentials ??= new ApiCredentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Billing and FinOps data
   */
  get billing(): Billing {
    return (this.#billing ??= new Billing(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Workspaces
   */
  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to application health status
   */
  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers, this.#auth));
  }
}
