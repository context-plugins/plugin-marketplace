import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Blob } from "./resources/blob.js";
import { Contact } from "./resources/contact.js";
import { HealthApi } from "./resources/health-api.js";
import { Subscribe } from "./resources/subscribe.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * JSON-RPC methods in the `blob` module of celestia-node. Used to submit, retrieve, and prove blobs
 * of arbitrary data published to the Celestia data availability layer against one or more
 * namespaces. Blobs are the canonical payload unit for rollups and other applications using
 * Celestia for DA., HTTP endpoints for the Celestia marketing website. This is not the Celestia
 * blockchain Node API. Use https://docs.celestia.org/build/rpc/node-api/ for the node JSON-RPC API,
 * authentication, and OpenRPC schemas. Contact and newsletter submissions require user consent;
 * newsletter subscriptions also require browser reCAPTCHA., HTTP endpoints for the Celestia
 * marketing website. This is not the Celestia blockchain Node API. Use
 * https://docs.celestia.org/build/rpc/node-api/ for the node JSON-RPC API, authentication, and
 * OpenRPC schemas. Contact and newsletter submissions require user consent; newsletter
 * subscriptions also require browser reCAPTCHA., HTTP endpoints for the Celestia marketing website.
 * This is not the Celestia blockchain Node API. Use https://docs.celestia.org/build/rpc/node-api/
 * for the node JSON-RPC API, authentication, and OpenRPC schemas. Contact and newsletter
 * submissions require user consent; newsletter subscriptions also require browser reCAPTCHA.
 */
export class CelestiaClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #blob?: Blob;
  #contact?: Contact;
  #healthApi?: HealthApi;
  #subscribe?: Subscribe;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CELESTIA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CelestiaClient/0.1.0 TypeScript", schema: s.string() },
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

  /**
   * Submit, retrieve, and prove blobs against Celestia namespaces.
   */
  get blob(): Blob {
    return (this.#blob ??= new Blob(this.#rawClient, this.#servers, this.#auth));
  }

  get contact(): Contact {
    return (this.#contact ??= new Contact(this.#rawClient, this.#servers));
  }

  get healthApi(): HealthApi {
    return (this.#healthApi ??= new HealthApi(this.#rawClient, this.#servers));
  }

  get subscribe(): Subscribe {
    return (this.#subscribe ??= new Subscribe(this.#rawClient, this.#servers));
  }
}
