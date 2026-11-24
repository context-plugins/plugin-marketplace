import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Assets } from "./resources/assets.js";
import { Changes } from "./resources/changes.js";
import { Records } from "./resources/records.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Tokens } from "./resources/tokens.js";
import { Users } from "./resources/users.js";
import { Zones } from "./resources/zones.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Best-effort OpenAPI 3.1 description of Apple CloudKit Web Services, the REST surface that lets
 * non-Apple-platform clients read and write data in a CloudKit container's public, private, or
 * shared database.
 */
export class CloudKitClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #assets?: Assets;
  #changes?: Changes;
  #records?: Records;
  #subscriptions?: Subscriptions;
  #tokens?: Tokens;
  #users?: Users;
  #zones?: Zones;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CLOUD_KIT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CloudKitClient/1.0.0 TypeScript", schema: s.string() },
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

  get assets(): Assets {
    return (this.#assets ??= new Assets(this.#rawClient, this.#servers, this.#auth));
  }

  get changes(): Changes {
    return (this.#changes ??= new Changes(this.#rawClient, this.#servers, this.#auth));
  }

  get records(): Records {
    return (this.#records ??= new Records(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers, this.#auth));
  }

  get tokens(): Tokens {
    return (this.#tokens ??= new Tokens(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  get zones(): Zones {
    return (this.#zones ??= new Zones(this.#rawClient, this.#servers, this.#auth));
  }
}
