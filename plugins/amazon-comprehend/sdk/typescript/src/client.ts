import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AmazonComprehend } from "./resources/amazon-comprehend.js";
import { Operations } from "./resources/operations.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Comprehend. 84 operation(s)., Generated
 * from AWS's published Smithy model for Amazon Comprehend. 10 operation(s).
 */
export class AmazonComprehendClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #amazonComprehend?: AmazonComprehend;
  #operations?: Operations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_COMPREHEND_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonComprehendClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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

  get amazonComprehend(): AmazonComprehend {
    return (this.#amazonComprehend ??= new AmazonComprehend(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }
}
