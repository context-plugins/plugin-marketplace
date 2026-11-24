import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Hybrid } from "./resources/hybrid.js";
import { Organizations } from "./resources/organizations.js";
import { Projects } from "./resources/projects.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Apigee API (apigee v1, revision
 * 20261106). 1 operation(s)., Generated from Google's published Discovery document for Apigee API
 * (apigee v1, revision 20261106). 372 operation(s)., Operations tagged Projects across 2 of this
 * provider's published API definitions: apigee-apigee-projects-api-openapi.yml,
 * apigee-apihub-projects-api-openapi.yml. Each path carries the servers of the definition it was
 * published in.
 */
export class ApigeeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #hybrid?: Hybrid;
  #organizations?: Organizations;
  #projects?: Projects;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "APIGEE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ApigeeClient/1.0.0 TypeScript", schema: s.string() },
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

  get hybrid(): Hybrid {
    return (this.#hybrid ??= new Hybrid(this.#rawClient, this.#servers, this.#auth));
  }

  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }
}
