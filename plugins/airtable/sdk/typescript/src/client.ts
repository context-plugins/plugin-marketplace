import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Bases } from "./resources/bases.js";
import { Comments } from "./resources/comments.js";
import { Fields } from "./resources/fields.js";
import { Groups } from "./resources/groups.js";
import { Records } from "./resources/records.js";
import { Tables } from "./resources/tables.js";
import { Users } from "./resources/users.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Airtable Metadata API provides access to base and schema management operations. You can list
 * bases, retrieve base schemas with table and field definitions, create new bases, tables, and
 * fields, and update table and field configurations programmatically. This API enables developers
 * to introspect and modify the structure of their Airtable data., The Airtable API can be used to
 * integrate your data in Airtable with any external system. The API closely follows REST semantics,
 * uses JSON to encode objects, and relies on standard HTTP codes to signal operation outcomes. It
 * provides full CRUD operations on records, comment management, and webhook subscriptions for
 * real-time notifications., The Airtable Metadata API provides access to base and schema management
 * operations. You can list bases, retrieve base schemas with table and field definitions, create
 * new bases, tables, and fields, and update table and field configurations programmatically. This
 * API enables developers to introspect and modify the structure of their Airtable data., The
 * Airtable SCIM API supports the System for Cross-domain Identity Management (SCIM 2.0)
 * specification for automated user and group provisioning. It enables identity providers like Okta
 * and Microsoft Entra ID to manage user accounts and group memberships programmatically. SCIM is
 * available for Enterprise License Agreement (ELA) and CLAIM enterprise accounts with SSO
 * configured., The Airtable API can be used to integrate your data in Airtable with any external
 * system. The API closely follows REST semantics, uses JSON to encode objects, and relies on
 * standard HTTP codes to signal operation outcomes. It provides full CRUD operations on records,
 * comment management, and webhook subscriptions for real-time notifications., The Airtable Metadata
 * API provides access to base and schema management operations. You can list bases, retrieve base
 * schemas with table and field definitions, create new bases, tables, and fields, and update table
 * and field configurations programmatically. This API enables developers to introspect and modify
 * the structure of their Airtable data., The Airtable SCIM API supports the System for Cross-domain
 * Identity Management (SCIM 2.0) specification for automated user and group provisioning. It
 * enables identity providers like Okta and Microsoft Entra ID to manage user accounts and group
 * memberships programmatically. SCIM is available for Enterprise License Agreement (ELA) and CLAIM
 * enterprise accounts with SSO configured., The Airtable API can be used to integrate your data in
 * Airtable with any external system. The API closely follows REST semantics, uses JSON to encode
 * objects, and relies on standard HTTP codes to signal operation outcomes. It provides full CRUD
 * operations on records, comment management, and webhook subscriptions for real-time notifications.
 */
export class AirtableClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #bases?: Bases;
  #comments?: Comments;
  #fields?: Fields;
  #groups?: Groups;
  #records?: Records;
  #tables?: Tables;
  #users?: Users;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AIRTABLE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AirtableClient/1.0.0 TypeScript", schema: s.string() },
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

  /**
   * List and create bases, retrieve base schemas
   */
  get bases(): Bases {
    return (this.#bases ??= new Bases(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage comments on individual records
   */
  get comments(): Comments {
    return (this.#comments ??= new Comments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create and update field definitions within a table
   */
  get fields(): Fields {
    return (this.#fields ??= new Fields(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * SCIM group provisioning and management
   */
  get groups(): Groups {
    return (this.#groups ??= new Groups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, read, update, and delete records in a table
   */
  get records(): Records {
    return (this.#records ??= new Records(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create and update table definitions within a base
   */
  get tables(): Tables {
    return (this.#tables ??= new Tables(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * SCIM user provisioning and management
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Subscribe to real-time change notifications on bases
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
