import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { OtaUpdates } from "./resources/ota-updates.js";
import { SoftwareConfigurations } from "./resources/software-configurations.js";
import { Tags } from "./resources/tags.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Amazon FreeRTOS Management API provides programmatic access to manage FreeRTOS software
 * configurations, OTA updates, and device connectivity for microcontroller-based IoT devices.
 */
export class AmazonFreeRtosClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #otaUpdates?: OtaUpdates;
  #softwareConfigurations?: SoftwareConfigurations;
  #tags?: Tags;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_FREE_RTOS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonFreeRtosClient/0.1.0 TypeScript", schema: s.string() },
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
   * Over-the-air firmware update management
   */
  get otaUpdates(): OtaUpdates {
    return (this.#otaUpdates ??= new OtaUpdates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * FreeRTOS software configuration management
   */
  get softwareConfigurations(): SoftwareConfigurations {
    return (this.#softwareConfigurations ??= new SoftwareConfigurations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Resource metadata labels
   */
  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }
}
