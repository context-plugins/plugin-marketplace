import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { BulkCheck } from "./resources/bulk-check.js";
import { Check } from "./resources/check.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Mailboxlayer offers a simple REST-based JSON API enabling you to thoroughly check and verify
 * email addresses right at the point of entry into your system.
 */
export class MailboxlayerClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #bulkCheck?: BulkCheck;
  #check?: Check;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "MAILBOXLAYER_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "MailboxlayerClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options);
  }

  get bulkCheck(): BulkCheck {
    return (this.#bulkCheck ??= new BulkCheck(this.#rawClient, this.#servers, this.#auth));
  }

  get check(): Check {
    return (this.#check ??= new Check(this.#rawClient, this.#servers, this.#auth));
  }
}
