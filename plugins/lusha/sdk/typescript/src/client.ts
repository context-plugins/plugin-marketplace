import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountManagement } from "./resources/account-management.js";
import { Account } from "./resources/account.js";
import { BuyingGroup } from "./resources/buying-group.js";
import { CompaniesTables } from "./resources/companies-tables.js";
import { CompanyFiltersApi } from "./resources/company-filters-api.js";
import { ContactFiltersApi } from "./resources/contact-filters-api.js";
import { ContactsTables } from "./resources/contacts-tables.js";
import { Enrich } from "./resources/enrich.js";
import { Enrichment } from "./resources/enrichment.js";
import { FiltersApi } from "./resources/filters-api.js";
import { Lookalikes } from "./resources/lookalikes.js";
import { ProspectingSearchEnrich } from "./resources/prospecting-search-enrich.js";
import { Prospecting } from "./resources/prospecting.js";
import { SearchEnrich } from "./resources/search-enrich.js";
import { Search } from "./resources/search.js";
import { SignalsApi } from "./resources/signals-api.js";
import { Webhooks } from "./resources/webhooks.js";
import { WebsiteVisits } from "./resources/website-visits.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., ⚠️ **This version is soon to be deprecated.** Please migrate to V3.,
 * **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., ⚠️ **This version is soon to be deprecated.** Please migrate to V3.,
 * ⚠️ **This version is soon to be deprecated.** Please migrate to V3., **This is the Lusha API V3
 * documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., ⚠️ **This version is soon to be deprecated.** Please migrate to V3.,
 * **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., Operations tagged Lookalikes across 2 of this provider's published
 * API definitions: lusha-openapi.yml, lusha-v2-openapi.yaml. Each path carries the servers of the
 * definition it was published in., **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., ⚠️ **This version is soon to be deprecated.** Please migrate to V3.,
 * **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities., Operations tagged Signals across 2 of this provider's published API
 * definitions: lusha-openapi.yml, lusha-v2-openapi.yaml. Each path carries the servers of the
 * definition it was published in., Operations tagged Webhooks across 2 of this provider's published
 * API definitions: lusha-openapi.yml, lusha-v2-openapi.yaml. Each path carries the servers of the
 * definition it was published in., **This is the Lusha API V3 documentation.**
 *
 * V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and
 * richer filter capabilities.
 */
export class LushaClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #accountManagement?: AccountManagement;
  #buyingGroup?: BuyingGroup;
  #companiesTables?: CompaniesTables;
  #companyFiltersApi?: CompanyFiltersApi;
  #contactFiltersApi?: ContactFiltersApi;
  #contactsTables?: ContactsTables;
  #enrich?: Enrich;
  #enrichment?: Enrichment;
  #filtersApi?: FiltersApi;
  #lookalikes?: Lookalikes;
  #prospecting?: Prospecting;
  #prospectingSearchEnrich?: ProspectingSearchEnrich;
  #search?: Search;
  #searchEnrich?: SearchEnrich;
  #signalsApi?: SignalsApi;
  #webhooks?: Webhooks;
  #websiteVisits?: WebsiteVisits;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "LUSHA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "LushaClient/1.0.0 TypeScript", schema: s.string() },
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
   * **Account API:** Retrieve account usage, credit balance, rate limits, plan details, and
   * pricing.
   *
   * Use this endpoint to monitor consumption and understand the credit cost of each action type in
   * the public API flow.
   *
   * > **Rate limit:** 5 requests per minute.
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage your account and monitor usage.
   *
   * Use this endpoint to:
   * - Monitor credit usage
   * - Understand consumption patterns
   * - Align API usage with plan limits
   * - Support governance and production operations
   *
   * Account-level insights are especially important for teams running Lusha at scale or across
   * multiple systems.
   */
  get accountManagement(): AccountManagement {
    return (this.#accountManagement ??= new AccountManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Buying Group API:** Identify and prioritize the buying committee within a set of target
   * companies.
   */
  get buyingGroup(): BuyingGroup {
    return (this.#buyingGroup ??= new BuyingGroup(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Companies Tables API:** Create and manage persistent tables of companies inside Lusha.
   */
  get companiesTables(): CompaniesTables {
    return (this.#companiesTables ??= new CompaniesTables(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Available filters for company searches
   */
  get companyFiltersApi(): CompanyFiltersApi {
    return (this.#companyFiltersApi ??= new CompanyFiltersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Available filters for contact searches
   */
  get contactFiltersApi(): ContactFiltersApi {
    return (this.#contactFiltersApi ??= new ContactFiltersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Contacts Tables API:** Create and manage persistent tables of contacts inside Lusha.
   */
  get contactsTables(): ContactsTables {
    return (this.#contactsTables ??= new ContactsTables(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Enrich APIs:** Retrieve full profile data for contacts or companies by ID.
   *
   * Pass IDs from Search results to reveal emails, phones, and full firmographic data.
   *
   * > **Billing:** Charged per revealed field via per-datapoint pricing (`revealEmail`,
   * `revealPhone`, `reveal_company`).
   */
  get enrich(): Enrich {
    return (this.#enrich ??= new Enrich(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **What is enrichment?**
   *
   * Enrichment is the process of adding missing or updated data to existing contact or company
   * records.
   */
  get enrichment(): Enrichment {
    return (this.#enrichment ??= new Enrichment(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Filter APIs:** Retrieve available filter values for prospecting.
   *
   * Use the discovery endpoints to list all available filter types, then fetch valid values for a
   * specific filter type before building a prospecting request.
   *
   * **Contact filter types:** `departments`, `seniority`, `existingDataPoints`, `countries`,
   * `locations`
   *
   * **Company filter types:** `names`, `sizes`, `revenues`, `locations`, `sics`, `naics`,
   * `industriesLabels`, `intentTopics`, `technologies`
   */
  get filtersApi(): FiltersApi {
    return (this.#filtersApi ??= new FiltersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Lookalike APIs:** Use AI-powered recommendations to discover contacts and companies similar
   * to your best existing customers. The Contact Lookalikes and Company Lookalikes endpoints return
   * paginated results you can pipe directly into Enrich for full data.
   *
   * Pass `tableId` to also persist matching results into an existing table. See Contacts Tables or
   * Companies Tables.
   */
  get lookalikes(): Lookalikes {
    return (this.#lookalikes ??= new Lookalikes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Prospecting APIs:** Filter-based search for contacts and companies.
   */
  get prospecting(): Prospecting {
    return (this.#prospecting ??= new Prospecting(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * With Lusha's Prospecting API, you can query Lusha's extensive database based on specific
   * criteria (such as job title, seniority, location, and more) to retrieve detailed contact and
   * company information.
   */
  get prospectingSearchEnrich(): ProspectingSearchEnrich {
    return (this.#prospectingSearchEnrich ??= new ProspectingSearchEnrich(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * **Search APIs:** Find contacts or companies using known identifiers.
   *
   * Look up contacts by `id`, `linkedinUrl`, `email`, or `firstName` + `lastName` +
   * `companyName`/`companyDomain`. Look up companies by `id`, `name`, or `domain`.
   *
   * Returns a non-PII preview of each profile with a `has` field listing available data points and
   * a `canReveal` field showing what can be unlocked via Enrich.
   *
   * > **Billing:** Charged per successful result via the `api_search` action.
   */
  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * **Search & Enrich APIs:** Find and retrieve full contact or company data in a single call.
   *
   * Combines Search and Enrich into one request. Provide identifiers and control what gets revealed
   * via the `reveal` field.
   *
   * > **Billing:** Two charges apply — one for the search (`api_search`) and one per revealed
   * field.
   */
  get searchEnrich(): SearchEnrich {
    return (this.#searchEnrich ??= new SearchEnrich(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Real-world activity data for contacts and companies.
   */
  get signalsApi(): SignalsApi {
    return (this.#signalsApi ??= new SignalsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Subscribe to real-time notifications when contacts change jobs or companies experience key
   * business events.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve companies ranked by website-visit signals for your tracked domains.
   *
   * Domains must be configured for tracking in the dashboard. Each result combines a V3 company
   * firmographic preview with behavioral visit metrics (score, sessions, unique visitors, avg
   * session length, and more).
   */
  get websiteVisits(): WebsiteVisits {
    return (this.#websiteVisits ??= new WebsiteVisits(this.#rawClient, this.#servers, this.#auth));
  }
}
