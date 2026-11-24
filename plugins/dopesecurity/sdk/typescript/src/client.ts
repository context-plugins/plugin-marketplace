import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Authorization } from "./resources/authorization.js";
import { CustomCategoriesApi } from "./resources/custom-categories-api.js";
import { Endpoints } from "./resources/endpoints.js";
import { Policies } from "./resources/policies.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Flightdeck API by dope.security. Manage policies, custom categories, URL/application bypass,
 * SSL inspection, and endpoint status for the dope.swg Secure Web Gateway. Authentication uses the
 * OAuth 2.0 Client Credentials flow; the returned bearer token is required on all non-token calls.
 */
export class DopeSecurityClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #authorization?: Authorization;
  #customCategoriesApi?: CustomCategoriesApi;
  #endpoints?: Endpoints;
  #policies?: Policies;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DOPE_SECURITY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DopeSecurityClient/1.0.3 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.3", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Everything about authorizing calls to Flightdeck
   */
  get authorization(): Authorization {
    return (this.#authorization ??= new Authorization(this.#rawClient, this.#servers));
  }

  /**
   * Everything about your Custom Categories
   */
  get customCategoriesApi(): CustomCategoriesApi {
    return (this.#customCategoriesApi ??= new CustomCategoriesApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Everything about your endpoints
   */
  get endpoints(): Endpoints {
    return (this.#endpoints ??= new Endpoints(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Everything about your Policies
   */
  get policies(): Policies {
    return (this.#policies ??= new Policies(this.#rawClient, this.#servers, this.#auth));
  }
}
