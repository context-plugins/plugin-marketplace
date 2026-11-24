import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { Authentication } from "./resources/authentication.js";
import { Bulk } from "./resources/bulk.js";
import { Documents } from "./resources/documents.js";
import { PublicForms } from "./resources/public-forms.js";
import { SignRequests } from "./resources/sign-requests.js";
import { Templates } from "./resources/templates.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Electronic signature API (eIDAS SES level) with OTP verification (email or SMS).
 */
export class JuriSignClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #authentication?: Authentication;
  #bulk?: Bulk;
  #documents?: Documents;
  #publicForms?: PublicForms;
  #signRequests?: SignRequests;
  #templates?: Templates;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "JURI_SIGN_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "JuriSignClient/3.24.1 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.24.1", schema: s.string() },
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
   * Credit balance and plan
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Obtain and revoke API tokens
   */
  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Merge templates and bulk campaigns (one individualised request per recipient)
   */
  get bulk(): Bulk {
    return (this.#bulk ??= new Bulk(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload and manage PDF documents
   */
  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Shareable links: each respondent signs their own generated request, no account needed
   */
  get publicForms(): PublicForms {
    return (this.#publicForms ??= new PublicForms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, send, and track signature requests
   */
  get signRequests(): SignRequests {
    return (this.#signRequests ??= new SignRequests(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Reusable sign request templates
   */
  get templates(): Templates {
    return (this.#templates ??= new Templates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage webhook endpoints for event notifications
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
