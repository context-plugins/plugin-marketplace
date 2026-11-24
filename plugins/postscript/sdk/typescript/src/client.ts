import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Compliance } from "./resources/compliance.js";
import { Events } from "./resources/events.js";
import { Identity } from "./resources/identity.js";
import { Keywords } from "./resources/keywords.js";
import { Messages } from "./resources/messages.js";
import { Subscribers } from "./resources/subscribers.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Postscript Partner API (v2) lets partners and Shopify shops manage SMS subscribers, send
 * custom events into Flows, send transactional and conversational messages, read opt-in keywords,
 * configure webhook subscriptions, and run TCPA compliance operations (unsubscribe, redact).
 * Harvested verbatim from the per-operation OpenAPI definitions published on
 * https://developers.postscript.io/reference.
 */
export class PostscriptClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #compliance?: Compliance;
  #events?: Events;
  #identity?: Identity;
  #keywords?: Keywords;
  #messages?: Messages;
  #subscribers?: Subscribers;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "POSTSCRIPT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "PostscriptClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
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
   * TCPA compliance operations — unsubscribe and redact a subscriber.
   */
  get compliance(): Compliance {
    return (this.#compliance ??= new Compliance(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Send custom events for use in Postscript Flows and triggers.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Verify the identity and scope of the calling API token.
   */
  get identity(): Identity {
    return (this.#identity ??= new Identity(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Read the opt-in keywords configured for a shop.
   */
  get keywords(): Keywords {
    return (this.#keywords ??= new Keywords(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Send messages and read message requests and sent messages.
   */
  get messages(): Messages {
    return (this.#messages ??= new Messages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Read and update SMS subscribers for a shop.
   */
  get subscribers(): Subscribers {
    return (this.#subscribers ??= new Subscribers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, read, update and delete webhook subscriptions; fetch the signing token, sample payloads
   * and test deliveries.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
