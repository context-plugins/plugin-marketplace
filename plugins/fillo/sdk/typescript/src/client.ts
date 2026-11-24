import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Agents } from "./resources/agents.js";
import { Credentials } from "./resources/credentials.js";
import { Deliveries } from "./resources/deliveries.js";
import { FilloManagementApi } from "./resources/fillo-management-api.js";
import { Forms } from "./resources/forms.js";
import { Insights } from "./resources/insights.js";
import { Integrations } from "./resources/integrations.js";
import { Members } from "./resources/members.js";
import { Respondents } from "./resources/respondents.js";
import { Responses } from "./resources/responses.js";
import { Settings } from "./resources/settings.js";
import { Storage } from "./resources/storage.js";
import { Webhooks } from "./resources/webhooks.js";
import { WorkspaceApi } from "./resources/workspace-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Agents across 2 of this provider's published API definitions:
 * fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it
 * was published in., Operations tagged Credentials across 2 of this provider's published API
 * definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged Deliveries across 2 of this provider's
 * published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged Fillo Management API across 2
 * of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each
 * path carries the servers of the definition it was published in., Operations tagged Forms across 2
 * of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each
 * path carries the servers of the definition it was published in., Operations tagged Insights
 * across 2 of this provider's published API definitions: fillo-so-openapi.json,
 * fillo-so-openapi.json. Each path carries the servers of the definition it was published in.,
 * Operations tagged Integrations across 2 of this provider's published API definitions:
 * fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it
 * was published in., Operations tagged Members across 2 of this provider's published API
 * definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged Respondents across 2 of this provider's
 * published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged Responses across 2 of this
 * provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each path
 * carries the servers of the definition it was published in., Operations tagged Settings across 2
 * of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json. Each
 * path carries the servers of the definition it was published in., Operations tagged Storage across
 * 2 of this provider's published API definitions: fillo-so-openapi.json, fillo-so-openapi.json.
 * Each path carries the servers of the definition it was published in., Operations tagged Webhooks
 * across 2 of this provider's published API definitions: fillo-so-openapi.json,
 * fillo-so-openapi.json. Each path carries the servers of the definition it was published in.,
 * Operations tagged Workspace across 2 of this provider's published API definitions:
 * fillo-so-openapi.json, fillo-so-openapi.json. Each path carries the servers of the definition it
 * was published in.
 */
export class FilloClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #agents?: Agents;
  #credentials?: Credentials;
  #deliveries?: Deliveries;
  #filloManagementApi?: FilloManagementApi;
  #forms?: Forms;
  #insights?: Insights;
  #integrations?: Integrations;
  #members?: Members;
  #respondents?: Respondents;
  #responses?: Responses;
  #settings?: Settings;
  #storage?: Storage;
  #webhooks?: Webhooks;
  #workspaceApi?: WorkspaceApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FILLO_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FilloClient/1.0.0 TypeScript", schema: s.string() },
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

  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers, this.#auth));
  }

  get credentials(): Credentials {
    return (this.#credentials ??= new Credentials(this.#rawClient, this.#servers, this.#auth));
  }

  get deliveries(): Deliveries {
    return (this.#deliveries ??= new Deliveries(this.#rawClient, this.#servers, this.#auth));
  }

  get filloManagementApi(): FilloManagementApi {
    return (this.#filloManagementApi ??= new FilloManagementApi(this.#rawClient, this.#servers));
  }

  get forms(): Forms {
    return (this.#forms ??= new Forms(this.#rawClient, this.#servers, this.#auth));
  }

  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  get integrations(): Integrations {
    return (this.#integrations ??= new Integrations(this.#rawClient, this.#servers, this.#auth));
  }

  get members(): Members {
    return (this.#members ??= new Members(this.#rawClient, this.#servers, this.#auth));
  }

  get respondents(): Respondents {
    return (this.#respondents ??= new Respondents(this.#rawClient, this.#servers, this.#auth));
  }

  get responses(): Responses {
    return (this.#responses ??= new Responses(this.#rawClient, this.#servers, this.#auth));
  }

  get settings(): Settings {
    return (this.#settings ??= new Settings(this.#rawClient, this.#servers, this.#auth));
  }

  get storage(): Storage {
    return (this.#storage ??= new Storage(this.#rawClient, this.#servers, this.#auth));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }

  get workspaceApi(): WorkspaceApi {
    return (this.#workspaceApi ??= new WorkspaceApi(this.#rawClient, this.#servers, this.#auth));
  }
}
