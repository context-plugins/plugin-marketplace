import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Agent } from "./resources/agent.js";
import { FilesApi } from "./resources/files-api.js";
import { Interact } from "./resources/interact.js";
import { Windows } from "./resources/windows.js";
import { buildServers, type Servers } from "./servers.js";

/**
 *
 *         # Skylight API Documentation
 *
 * This API allows you to interact with Windows instances.
 *
 *         ## Authentication
 *
 * All endpoints require API key authentication. Include your API key in the `X-API-Key` header.
 *
 *         ## Support
 *
 * For support, please join our discord.
 */
export class SkylightApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #windows?: Windows;
  #interact?: Interact;
  #agent?: Agent;
  #filesApi?: FilesApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SKYLIGHT_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SkylightApiClient/1.0.18 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.18", schema: s.string() },
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

  get windows(): Windows {
    return (this.#windows ??= new Windows(this.#rawClient, this.#servers, this.#auth));
  }

  get interact(): Interact {
    return (this.#interact ??= new Interact(this.#rawClient, this.#servers, this.#auth));
  }

  get agent(): Agent {
    return (this.#agent ??= new Agent(this.#rawClient, this.#servers, this.#auth));
  }

  get filesApi(): FilesApi {
    return (this.#filesApi ??= new FilesApi(this.#rawClient, this.#servers, this.#auth));
  }
}
