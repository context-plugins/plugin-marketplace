import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AttachmentsApi } from "./resources/attachments-api.js";
import { Columns } from "./resources/columns.js";
import { DataApi } from "./resources/data-api.js";
import { Docs } from "./resources/docs.js";
import { Forms } from "./resources/forms.js";
import { Orgs } from "./resources/orgs.js";
import { Profile } from "./resources/profile.js";
import { Records } from "./resources/records.js";
import { Scim } from "./resources/scim.js";
import { ServiceAccounts } from "./resources/service-accounts.js";
import { Session } from "./resources/session.js";
import { Sql } from "./resources/sql.js";
import { Tables } from "./resources/tables.js";
import { Templates } from "./resources/templates.js";
import { UsersApi } from "./resources/users-api.js";
import { Webhooks } from "./resources/webhooks.js";
import { Widgets } from "./resources/widgets.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * An API for manipulating Grist sites, workspaces, and documents.
 *
 * # Authentication
 *
 * The Grist API accepts two credential types in the `Authorization: Bearer` header: [API
 * keys](../rest-api/) and [OAuth access tokens](../oauth-apps/).
 *
 * <SecurityDefinitions />
 */
export class GristApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #orgs?: Orgs;
  #workspaces?: Workspaces;
  #docs?: Docs;
  #records?: Records;
  #tables?: Tables;
  #columns?: Columns;
  #dataApi?: DataApi;
  #attachmentsApi?: AttachmentsApi;
  #webhooks?: Webhooks;
  #sql?: Sql;
  #usersApi?: UsersApi;
  #serviceAccounts?: ServiceAccounts;
  #scim?: Scim;
  #templates?: Templates;
  #widgets?: Widgets;
  #forms?: Forms;
  #profile?: Profile;
  #session?: Session;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GRIST_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GristApiClient/1.0.1 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.1", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Team sites and personal spaces are called 'orgs' in the API.
   */
  get orgs(): Orgs {
    return (this.#orgs ??= new Orgs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sites can be organized into groups of documents called workspaces.
   */
  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Workspaces contain collections of Grist documents.
   */
  get docs(): Docs {
    return (this.#docs ??= new Docs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tables contain collections of records (also called rows).
   */
  get records(): Records {
    return (this.#records ??= new Records(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Documents are structured as a collection of tables.
   */
  get tables(): Tables {
    return (this.#tables ??= new Tables(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tables are structured as a collection of columns.
   */
  get columns(): Columns {
    return (this.#columns ??= new Columns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Work with table data, using a (now deprecated) columnar format. We now recommend the `records`
   * endpoints.
   */
  get dataApi(): DataApi {
    return (this.#dataApi ??= new DataApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Documents may include attached files. Data records can refer to these using a column of type
   * `Attachments`.
   */
  get attachmentsApi(): AttachmentsApi {
    return (this.#attachmentsApi ??= new AttachmentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Document changes can trigger requests to URLs called webhooks.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sql endpoint to query data from documents.
   */
  get sql(): Sql {
    return (this.#sql ??= new Sql(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Grist users.
   */
  get usersApi(): UsersApi {
    return (this.#usersApi ??= new UsersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Impersonations to manage grist resources through REST APIs with specific rights.
   */
  get serviceAccounts(): ServiceAccounts {
    return (this.#serviceAccounts ??= new ServiceAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * SCIM
   */
  get scim(): Scim {
    return (this.#scim ??= new Scim(this.#rawClient, this.#servers, this.#auth));
  }

  get templates(): Templates {
    return (this.#templates ??= new Templates(this.#rawClient, this.#servers, this.#auth));
  }

  get widgets(): Widgets {
    return (this.#widgets ??= new Widgets(this.#rawClient, this.#servers, this.#auth));
  }

  get forms(): Forms {
    return (this.#forms ??= new Forms(this.#rawClient, this.#servers, this.#auth));
  }

  get profile(): Profile {
    return (this.#profile ??= new Profile(this.#rawClient, this.#servers, this.#auth));
  }

  get session(): Session {
    return (this.#session ??= new Session(this.#rawClient, this.#servers, this.#auth));
  }
}
