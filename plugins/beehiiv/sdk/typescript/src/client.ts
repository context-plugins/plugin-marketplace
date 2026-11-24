import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AdNetworkOffers } from "./resources/ad-network-offers.js";
import { AdNetworkReports } from "./resources/ad-network-reports.js";
import { AdvertisementOpportunities } from "./resources/advertisement-opportunities.js";
import { Authorizations } from "./resources/authorizations.js";
import { Authors } from "./resources/authors.js";
import { AutomationJourneys } from "./resources/automation-journeys.js";
import { Automations } from "./resources/automations.js";
import { BulkSubscriptionUpdates } from "./resources/bulk-subscription-updates.js";
import { BulkSubscriptions } from "./resources/bulk-subscriptions.js";
import { ComplimentaryAccessApi } from "./resources/complimentary-access-api.js";
import { ConditionSets } from "./resources/condition-sets.js";
import { CustomFields } from "./resources/custom-fields.js";
import { DataDeletion } from "./resources/data-deletion.js";
import { Engagements } from "./resources/engagements.js";
import { NewsletterListSubscriptions } from "./resources/newsletter-list-subscriptions.js";
import { NewsletterLists } from "./resources/newsletter-lists.js";
import { OauthUsers } from "./resources/oauth-users.js";
import { Podcasts } from "./resources/podcasts.js";
import { Polls } from "./resources/polls.js";
import { PostTemplates } from "./resources/post-templates.js";
import { Posts } from "./resources/posts.js";
import { Publications } from "./resources/publications.js";
import { ReferralProgram } from "./resources/referral-program.js";
import { Segments } from "./resources/segments.js";
import { SubscriptionTags } from "./resources/subscription-tags.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Tiers } from "./resources/tiers.js";
import { Tokens } from "./resources/tokens.js";
import { Webhooks } from "./resources/webhooks.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Webhooks across 2 of this provider's published API definitions:
 * beehiiv-openapi.yml, beehiiv-webhook-events-openapi.yml. Each path carries the servers of the
 * definition it was published in.
 */
export class BeehiivClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #adNetworkOffers?: AdNetworkOffers;
  #adNetworkReports?: AdNetworkReports;
  #advertisementOpportunities?: AdvertisementOpportunities;
  #authorizations?: Authorizations;
  #authors?: Authors;
  #automationJourneys?: AutomationJourneys;
  #automations?: Automations;
  #bulkSubscriptionUpdates?: BulkSubscriptionUpdates;
  #bulkSubscriptions?: BulkSubscriptions;
  #complimentaryAccessApi?: ComplimentaryAccessApi;
  #conditionSets?: ConditionSets;
  #customFields?: CustomFields;
  #dataDeletion?: DataDeletion;
  #engagements?: Engagements;
  #newsletterListSubscriptions?: NewsletterListSubscriptions;
  #newsletterLists?: NewsletterLists;
  #oauthUsers?: OauthUsers;
  #podcasts?: Podcasts;
  #polls?: Polls;
  #postTemplates?: PostTemplates;
  #posts?: Posts;
  #publications?: Publications;
  #referralProgram?: ReferralProgram;
  #segments?: Segments;
  #subscriptionTags?: SubscriptionTags;
  #subscriptions?: Subscriptions;
  #tiers?: Tiers;
  #tokens?: Tokens;
  #webhooks?: Webhooks;
  #workspaces?: Workspaces;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BEEHIIV_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BeehiivClient/1.0.0 TypeScript", schema: s.string() },
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
  }

  get adNetworkOffers(): AdNetworkOffers {
    return (this.#adNetworkOffers ??= new AdNetworkOffers(this.#rawClient, this.#servers));
  }

  get adNetworkReports(): AdNetworkReports {
    return (this.#adNetworkReports ??= new AdNetworkReports(this.#rawClient, this.#servers));
  }

  get advertisementOpportunities(): AdvertisementOpportunities {
    return (this.#advertisementOpportunities ??= new AdvertisementOpportunities(
      this.#rawClient,
      this.#servers,
    ));
  }

  get authorizations(): Authorizations {
    return (this.#authorizations ??= new Authorizations(this.#rawClient, this.#servers));
  }

  get authors(): Authors {
    return (this.#authors ??= new Authors(this.#rawClient, this.#servers));
  }

  get automationJourneys(): AutomationJourneys {
    return (this.#automationJourneys ??= new AutomationJourneys(this.#rawClient, this.#servers));
  }

  get automations(): Automations {
    return (this.#automations ??= new Automations(this.#rawClient, this.#servers));
  }

  get bulkSubscriptionUpdates(): BulkSubscriptionUpdates {
    return (this.#bulkSubscriptionUpdates ??= new BulkSubscriptionUpdates(this.#rawClient, this.#servers));
  }

  get bulkSubscriptions(): BulkSubscriptions {
    return (this.#bulkSubscriptions ??= new BulkSubscriptions(this.#rawClient, this.#servers));
  }

  get complimentaryAccessApi(): ComplimentaryAccessApi {
    return (this.#complimentaryAccessApi ??= new ComplimentaryAccessApi(this.#rawClient, this.#servers));
  }

  get conditionSets(): ConditionSets {
    return (this.#conditionSets ??= new ConditionSets(this.#rawClient, this.#servers));
  }

  get customFields(): CustomFields {
    return (this.#customFields ??= new CustomFields(this.#rawClient, this.#servers));
  }

  get dataDeletion(): DataDeletion {
    return (this.#dataDeletion ??= new DataDeletion(this.#rawClient, this.#servers));
  }

  get engagements(): Engagements {
    return (this.#engagements ??= new Engagements(this.#rawClient, this.#servers));
  }

  get newsletterListSubscriptions(): NewsletterListSubscriptions {
    return (this.#newsletterListSubscriptions ??= new NewsletterListSubscriptions(
      this.#rawClient,
      this.#servers,
    ));
  }

  get newsletterLists(): NewsletterLists {
    return (this.#newsletterLists ??= new NewsletterLists(this.#rawClient, this.#servers));
  }

  get oauthUsers(): OauthUsers {
    return (this.#oauthUsers ??= new OauthUsers(this.#rawClient, this.#servers));
  }

  get podcasts(): Podcasts {
    return (this.#podcasts ??= new Podcasts(this.#rawClient, this.#servers));
  }

  get polls(): Polls {
    return (this.#polls ??= new Polls(this.#rawClient, this.#servers));
  }

  get postTemplates(): PostTemplates {
    return (this.#postTemplates ??= new PostTemplates(this.#rawClient, this.#servers));
  }

  get posts(): Posts {
    return (this.#posts ??= new Posts(this.#rawClient, this.#servers));
  }

  get publications(): Publications {
    return (this.#publications ??= new Publications(this.#rawClient, this.#servers));
  }

  get referralProgram(): ReferralProgram {
    return (this.#referralProgram ??= new ReferralProgram(this.#rawClient, this.#servers));
  }

  get segments(): Segments {
    return (this.#segments ??= new Segments(this.#rawClient, this.#servers));
  }

  get subscriptionTags(): SubscriptionTags {
    return (this.#subscriptionTags ??= new SubscriptionTags(this.#rawClient, this.#servers));
  }

  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers));
  }

  get tiers(): Tiers {
    return (this.#tiers ??= new Tiers(this.#rawClient, this.#servers));
  }

  get tokens(): Tokens {
    return (this.#tokens ??= new Tokens(this.#rawClient, this.#servers));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers));
  }

  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers));
  }
}
