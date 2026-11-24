import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Heartbeats } from "./resources/heartbeats.js";
import { Incidents } from "./resources/incidents.js";
import { Monitors } from "./resources/monitors.js";
import { StatusPages } from "./resources/status-pages.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Programmatic access to Better Stack's uptime monitoring, heartbeat monitoring, incident
 * management, status pages, escalation policies, and on-call surfaces. Responses follow the
 * JSON:API specification.
 *
 * This document is a best-effort reconstruction from Better Stack's public documentation and is not
 * exhaustive. Refer to https://betterstack.com/docs/uptime/api/ for authoritative reference.
 */
export class BetterStackClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #heartbeats?: Heartbeats;
  #incidents?: Incidents;
  #monitors?: Monitors;
  #statusPages?: StatusPages;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BETTER_STACK_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BetterStackClient/2.0.0 TypeScript", schema: s.string() },
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

  get heartbeats(): Heartbeats {
    return (this.#heartbeats ??= new Heartbeats(this.#rawClient, this.#servers, this.#auth));
  }

  get incidents(): Incidents {
    return (this.#incidents ??= new Incidents(this.#rawClient, this.#servers, this.#auth));
  }

  get monitors(): Monitors {
    return (this.#monitors ??= new Monitors(this.#rawClient, this.#servers, this.#auth));
  }

  get statusPages(): StatusPages {
    return (this.#statusPages ??= new StatusPages(this.#rawClient, this.#servers, this.#auth));
  }
}
