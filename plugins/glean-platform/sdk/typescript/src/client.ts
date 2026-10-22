import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AdminAgents } from "./resources/admin-agents.js";
import { AdminUsage } from "./resources/admin-usage.js";
import { Agents } from "./resources/agents.js";
import { Chat } from "./resources/chat.js";
import { Departments } from "./resources/departments.js";
import { IdPGroupsApi } from "./resources/id-pgroups-api.js";
import { Search } from "./resources/search.js";
import { Skills } from "./resources/skills.js";
import { Triggers } from "./resources/triggers.js";
import { Usage } from "./resources/usage.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

export class GleanPlatformApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #agents?: Agents;
  #chat?: Chat;
  #skills?: Skills;
  #search?: Search;
  #adminUsage?: AdminUsage;
  #usage?: Usage;
  #departments?: Departments;
  #idPGroupsApi?: IdPGroupsApi;
  #users?: Users;
  #adminAgents?: AdminAgents;
  #triggers?: Triggers;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GLEAN_PLATFORM_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GleanPlatformApiClient/0.1.0 TypeScript", schema: s.string() },
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

  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers, this.#auth));
  }

  get chat(): Chat {
    return (this.#chat ??= new Chat(this.#rawClient, this.#servers, this.#auth));
  }

  get skills(): Skills {
    return (this.#skills ??= new Skills(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get adminUsage(): AdminUsage {
    return (this.#adminUsage ??= new AdminUsage(this.#rawClient, this.#servers, this.#auth));
  }

  get usage(): Usage {
    return (this.#usage ??= new Usage(this.#rawClient, this.#servers, this.#auth));
  }

  get departments(): Departments {
    return (this.#departments ??= new Departments(this.#rawClient, this.#servers, this.#auth));
  }

  get idPGroupsApi(): IdPGroupsApi {
    return (this.#idPGroupsApi ??= new IdPGroupsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  get adminAgents(): AdminAgents {
    return (this.#adminAgents ??= new AdminAgents(this.#rawClient, this.#servers, this.#auth));
  }

  get triggers(): Triggers {
    return (this.#triggers ??= new Triggers(this.#rawClient, this.#servers, this.#auth));
  }
}
