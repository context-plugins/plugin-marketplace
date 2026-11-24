import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AttachmentRestController } from "./resources/attachment-rest-controller.js";
import { EntitlementRestController } from "./resources/entitlement-rest-controller.js";
import { Events } from "./resources/events.js";
import { IncomingWebhooksRestController } from "./resources/incoming-webhooks-rest-controller.js";
import { Metrics } from "./resources/metrics.js";
import { PackageDependencies } from "./resources/package-dependencies.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This resource represents events. Use this resource to send events into an event source., This
 * resource represents metrics. Use this resource to send metric values into a component's metric
 * source., This resource represents package dependencies. Use this resource to associate package
 * dependencies with a component.
 */
export class AtlassianCompassClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #attachmentRestController?: AttachmentRestController;
  #entitlementRestController?: EntitlementRestController;
  #events?: Events;
  #incomingWebhooksRestController?: IncomingWebhooksRestController;
  #metrics?: Metrics;
  #packageDependencies?: PackageDependencies;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ATLASSIAN_COMPASS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AtlassianCompassClient/1.0.0 TypeScript", schema: s.string() },
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

  get attachmentRestController(): AttachmentRestController {
    return (this.#attachmentRestController ??= new AttachmentRestController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get entitlementRestController(): EntitlementRestController {
    return (this.#entitlementRestController ??= new EntitlementRestController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This resource represents events. Use this resource to send events into an event source.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get incomingWebhooksRestController(): IncomingWebhooksRestController {
    return (this.#incomingWebhooksRestController ??= new IncomingWebhooksRestController(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * This resource represents metrics. Use this resource to send metric values into a component's
   * metric source.
   */
  get metrics(): Metrics {
    return (this.#metrics ??= new Metrics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * This resource represents package dependencies. Use this resource to associate package
   * dependencies with a component.
   */
  get packageDependencies(): PackageDependencies {
    return (this.#packageDependencies ??= new PackageDependencies(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
