import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Analytics } from "./resources/analytics.js";
import { ApIs } from "./resources/ap-is.js";
import { ApiKeys } from "./resources/api-keys.js";
import { Branches } from "./resources/branches.js";
import { Categories } from "./resources/categories.js";
import { Changelog } from "./resources/changelog.js";
import { CustomPages } from "./resources/custom-pages.js";
import { Guides } from "./resources/guides.js";
import { Images } from "./resources/images.js";
import { Metrics } from "./resources/metrics.js";
import { Recipes } from "./resources/recipes.js";
import { Search } from "./resources/search.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The ReadMe Developer Metrics API powers the Developer Dashboard. It accepts API request logs from
 * Metrics SDKs (Node.js, Python, Ruby, PHP, .NET) and exposes analytics including page quality
 * scores, page view statistics, and search analytics so teams can investigate API usage by key or
 * email and debug requests in real time., The ReadMe API (v2) lets you programmatically control
 * your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog,
 * custom pages, categories, branches (versions), images, recipes, and search., The ReadMe API (v2)
 * lets you programmatically control your ReadMe developer hub. It manages API definitions, API
 * reference pages, guides, changelog, custom pages, categories, branches (versions), images,
 * recipes, and search., The ReadMe API (v2) lets you programmatically control your ReadMe developer
 * hub. It manages API definitions, API reference pages, guides, changelog, custom pages,
 * categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you
 * programmatically control your ReadMe developer hub. It manages API definitions, API reference
 * pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and
 * search., The ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It
 * manages API definitions, API reference pages, guides, changelog, custom pages, categories,
 * branches (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically
 * control your ReadMe developer hub. It manages API definitions, API reference pages, guides,
 * changelog, custom pages, categories, branches (versions), images, recipes, and search., The
 * ReadMe API (v2) lets you programmatically control your ReadMe developer hub. It manages API
 * definitions, API reference pages, guides, changelog, custom pages, categories, branches
 * (versions), images, recipes, and search., The ReadMe API (v2) lets you programmatically control
 * your ReadMe developer hub. It manages API definitions, API reference pages, guides, changelog,
 * custom pages, categories, branches (versions), images, recipes, and search., The ReadMe Developer
 * Metrics API powers the Developer Dashboard. It accepts API request logs from Metrics SDKs
 * (Node.js, Python, Ruby, PHP, .NET) and exposes analytics including page quality scores, page view
 * statistics, and search analytics so teams can investigate API usage by key or email and debug
 * requests in real time., The ReadMe API (v2) lets you programmatically control your ReadMe
 * developer hub. It manages API definitions, API reference pages, guides, changelog, custom pages,
 * categories, branches (versions), images, recipes, and search., The ReadMe API (v2) lets you
 * programmatically control your ReadMe developer hub. It manages API definitions, API reference
 * pages, guides, changelog, custom pages, categories, branches (versions), images, recipes, and
 * search.
 */
export class ReadMeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analytics?: Analytics;
  #apiKeys?: ApiKeys;
  #apIs?: ApIs;
  #branches?: Branches;
  #categories?: Categories;
  #changelog?: Changelog;
  #customPages?: CustomPages;
  #guides?: Guides;
  #images?: Images;
  #metrics?: Metrics;
  #recipes?: Recipes;
  #search?: Search;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "READ_ME_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ReadMeClient/1.0.0 TypeScript", schema: s.string() },
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
   * Page view, quality, and search analytics
   */
  get analytics(): Analytics {
    return (this.#analytics ??= new Analytics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage ReadMe API keys
   */
  get apiKeys(): ApiKeys {
    return (this.#apiKeys ??= new ApiKeys(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage API definitions and reference pages
   */
  get apIs(): ApIs {
    return (this.#apIs ??= new ApIs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage versions and branches
   */
  get branches(): Branches {
    return (this.#branches ??= new Branches(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage sidebar groupings
   */
  get categories(): Categories {
    return (this.#categories ??= new Categories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage changelog posts
   */
  get changelog(): Changelog {
    return (this.#changelog ??= new Changelog(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage custom documentation pages
   */
  get customPages(): CustomPages {
    return (this.#customPages ??= new CustomPages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage knowledge base guide pages
   */
  get guides(): Guides {
    return (this.#guides ??= new Guides(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload and manage images
   */
  get images(): Images {
    return (this.#images ??= new Images(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Send API request metrics from server-side SDKs
   */
  get metrics(): Metrics {
    return (this.#metrics ??= new Metrics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage interactive recipe content
   */
  get recipes(): Recipes {
    return (this.#recipes ??= new Recipes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search knowledge base content
   */
  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }
}
