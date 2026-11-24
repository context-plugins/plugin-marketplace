import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { CampaignDiscountCodes } from "./resources/campaign-discount-codes.js";
import { CampaignMembers } from "./resources/campaign-members.js";
import { CampaignTeams } from "./resources/campaign-teams.js";
import { CampaignTickets } from "./resources/campaign-tickets.js";
import { Campaigns } from "./resources/campaigns.js";
import { ContactActivities } from "./resources/contact-activities.js";
import { ContactTags } from "./resources/contact-tags.js";
import { Contacts } from "./resources/contacts.js";
import { Funds } from "./resources/funds.js";
import { HouseholdContacts } from "./resources/household-contacts.js";
import { Households } from "./resources/households.js";
import { Messages } from "./resources/messages.js";
import { Payouts } from "./resources/payouts.js";
import { Pledges } from "./resources/pledges.js";
import { RecurringPlans } from "./resources/recurring-plans.js";
import { SsoAccounts } from "./resources/sso-accounts.js";
import { SsoCampaigns } from "./resources/sso-campaigns.js";
import { Tickets } from "./resources/tickets.js";
import { Transactions } from "./resources/transactions.js";
import { WebhookActivities } from "./resources/webhook-activities.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Givebutter Public API - Access and manage your campaigns, contacts, transactions, and more.
 */
export class GivebutterClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #campaignDiscountCodes?: CampaignDiscountCodes;
  #campaignMembers?: CampaignMembers;
  #campaignTeams?: CampaignTeams;
  #campaignTickets?: CampaignTickets;
  #campaigns?: Campaigns;
  #contactActivities?: ContactActivities;
  #contactTags?: ContactTags;
  #contacts?: Contacts;
  #funds?: Funds;
  #householdContacts?: HouseholdContacts;
  #households?: Households;
  #messages?: Messages;
  #payouts?: Payouts;
  #pledges?: Pledges;
  #recurringPlans?: RecurringPlans;
  #ssoAccounts?: SsoAccounts;
  #ssoCampaigns?: SsoCampaigns;
  #tickets?: Tickets;
  #transactions?: Transactions;
  #webhookActivities?: WebhookActivities;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GIVEBUTTER_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GivebutterClient/1.0.0 TypeScript", schema: s.string() },
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

  get campaignDiscountCodes(): CampaignDiscountCodes {
    return (this.#campaignDiscountCodes ??= new CampaignDiscountCodes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get campaignMembers(): CampaignMembers {
    return (this.#campaignMembers ??= new CampaignMembers(this.#rawClient, this.#servers, this.#auth));
  }

  get campaignTeams(): CampaignTeams {
    return (this.#campaignTeams ??= new CampaignTeams(this.#rawClient, this.#servers, this.#auth));
  }

  get campaignTickets(): CampaignTickets {
    return (this.#campaignTickets ??= new CampaignTickets(this.#rawClient, this.#servers, this.#auth));
  }

  get campaigns(): Campaigns {
    return (this.#campaigns ??= new Campaigns(this.#rawClient, this.#servers, this.#auth));
  }

  get contactActivities(): ContactActivities {
    return (this.#contactActivities ??= new ContactActivities(this.#rawClient, this.#servers, this.#auth));
  }

  get contactTags(): ContactTags {
    return (this.#contactTags ??= new ContactTags(this.#rawClient, this.#servers, this.#auth));
  }

  get contacts(): Contacts {
    return (this.#contacts ??= new Contacts(this.#rawClient, this.#servers, this.#auth));
  }

  get funds(): Funds {
    return (this.#funds ??= new Funds(this.#rawClient, this.#servers, this.#auth));
  }

  get householdContacts(): HouseholdContacts {
    return (this.#householdContacts ??= new HouseholdContacts(this.#rawClient, this.#servers, this.#auth));
  }

  get households(): Households {
    return (this.#households ??= new Households(this.#rawClient, this.#servers, this.#auth));
  }

  get messages(): Messages {
    return (this.#messages ??= new Messages(this.#rawClient, this.#servers, this.#auth));
  }

  get payouts(): Payouts {
    return (this.#payouts ??= new Payouts(this.#rawClient, this.#servers, this.#auth));
  }

  get pledges(): Pledges {
    return (this.#pledges ??= new Pledges(this.#rawClient, this.#servers, this.#auth));
  }

  get recurringPlans(): RecurringPlans {
    return (this.#recurringPlans ??= new RecurringPlans(this.#rawClient, this.#servers, this.#auth));
  }

  get ssoAccounts(): SsoAccounts {
    return (this.#ssoAccounts ??= new SsoAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  get ssoCampaigns(): SsoCampaigns {
    return (this.#ssoCampaigns ??= new SsoCampaigns(this.#rawClient, this.#servers, this.#auth));
  }

  get tickets(): Tickets {
    return (this.#tickets ??= new Tickets(this.#rawClient, this.#servers, this.#auth));
  }

  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  get webhookActivities(): WebhookActivities {
    return (this.#webhookActivities ??= new WebhookActivities(this.#rawClient, this.#servers, this.#auth));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
