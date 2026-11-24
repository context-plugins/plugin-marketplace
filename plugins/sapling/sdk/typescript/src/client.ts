import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { Analysis } from "./resources/analysis.js";
import { Detection } from "./resources/detection.js";
import { Files } from "./resources/files.js";
import { Generation } from "./resources/generation.js";
import { Proofreading } from "./resources/proofreading.js";
import { Service } from "./resources/service.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged account across 2 of this provider's published API definitions:
 * api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition
 * it was published in., Operations tagged analysis across 2 of this provider's published API
 * definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged detection across 2 of this provider's
 * published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the
 * servers of the definition it was published in., Operations tagged files across 2 of this
 * provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path
 * carries the servers of the definition it was published in., Operations tagged generation across 2
 * of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json.
 * Each path carries the servers of the definition it was published in., Operations tagged
 * proofreading across 2 of this provider's published API definitions: api-sapling-openapi.json,
 * sapling-openapi.json. Each path carries the servers of the definition it was published in.,
 * Operations tagged service across 2 of this provider's published API definitions:
 * api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition
 * it was published in.
 */
export class SaplingClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #analysis?: Analysis;
  #detection?: Detection;
  #files?: Files;
  #generation?: Generation;
  #proofreading?: Proofreading;
  #service?: Service;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SAPLING_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SaplingClient/1.4.3 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.4.3", schema: s.string() },
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
   * API key status, usage and quota reporting.
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tone, sentiment, readability, quality, SEO, classification, extraction, style-guide compliance,
   * and inclusive language.
   */
  get analysis(): Analysis {
    return (this.#analysis ??= new Analysis(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * AI-content, language, PII, named-entity, and unsafe-content detection.
   */
  get detection(): Detection {
    return (this.#detection ??= new Detection(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * PDF/Word text extraction and text chunking.
   */
  get files(): Files {
    return (this.#files ??= new Files(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Text rewriting, summarization, translation, and completion.
   */
  get generation(): Generation {
    return (this.#generation ??= new Generation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Grammar and spelling correction.
   */
  get proofreading(): Proofreading {
    return (this.#proofreading ??= new Proofreading(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Health and version probes (no API key).
   */
  get service(): Service {
    return (this.#service ??= new Service(this.#rawClient, this.#servers));
  }
}
