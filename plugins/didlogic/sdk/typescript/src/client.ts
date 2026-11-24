import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountBalance } from "./resources/account-balance.js";
import { ApiAccess } from "./resources/api-access.js";
import { Calls } from "./resources/calls.js";
import { Click2Call } from "./resources/click2-call.js";
import { HlrLookups } from "./resources/hlr-lookups.js";
import { Identities } from "./resources/identities.js";
import { InboundDestinations } from "./resources/inbound-destinations.js";
import { KycDocuments } from "./resources/kyc-documents.js";
import { NumbersInventory } from "./resources/numbers-inventory.js";
import { Purchases } from "./resources/purchases.js";
import { Reports } from "./resources/reports.js";
import { RiskChecks } from "./resources/risk-checks.js";
import { SipAccounts } from "./resources/sip-accounts.js";
import { SmsApi } from "./resources/sms-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Account Balance across 2 of this provider's published API definitions:
 * didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged API Access across 2 of this provider's
 * published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Calls across 2
 * of this provider's published API definitions: didlogic-com-public-api-openapi.yaml,
 * didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Click2Call across 2 of this provider's published API definitions:
 * didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged HLR Lookups across 2 of this provider's
 * published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Identities
 * across 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml,
 * didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Inbound Destinations across 2 of this provider's published API definitions:
 * didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged KYC Documents across 2 of this provider's
 * published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Numbers &
 * Inventory across 2 of this provider's published API definitions:
 * didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged Purchases across 2 of this provider's
 * published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Reports across
 * 2 of this provider's published API definitions: didlogic-com-public-api-openapi.yaml,
 * didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Risk Checks across 2 of this provider's published API definitions:
 * didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged SIP Accounts across 2 of this provider's
 * published API definitions: didlogic-com-public-api-openapi.yaml, didlogic-com-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged SMS across 2
 * of this provider's published API definitions: didlogic-com-public-api-openapi.yaml,
 * didlogic-com-openapi.yml. Each path carries the servers of the definition it was published in.
 */
export class DidLogicClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountBalance?: AccountBalance;
  #apiAccess?: ApiAccess;
  #calls?: Calls;
  #click2Call?: Click2Call;
  #hlrLookups?: HlrLookups;
  #identities?: Identities;
  #inboundDestinations?: InboundDestinations;
  #kycDocuments?: KycDocuments;
  #numbersInventory?: NumbersInventory;
  #purchases?: Purchases;
  #reports?: Reports;
  #riskChecks?: RiskChecks;
  #sipAccounts?: SipAccounts;
  #smsApi?: SmsApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DID_LOGIC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DidLogicClient/1.0.0 TypeScript", schema: s.string() },
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

  get accountBalance(): AccountBalance {
    return (this.#accountBalance ??= new AccountBalance(this.#rawClient, this.#servers, this.#auth));
  }

  get apiAccess(): ApiAccess {
    return (this.#apiAccess ??= new ApiAccess(this.#rawClient, this.#servers, this.#auth));
  }

  get calls(): Calls {
    return (this.#calls ??= new Calls(this.#rawClient, this.#servers, this.#auth));
  }

  get click2Call(): Click2Call {
    return (this.#click2Call ??= new Click2Call(this.#rawClient, this.#servers, this.#auth));
  }

  get hlrLookups(): HlrLookups {
    return (this.#hlrLookups ??= new HlrLookups(this.#rawClient, this.#servers, this.#auth));
  }

  get identities(): Identities {
    return (this.#identities ??= new Identities(this.#rawClient, this.#servers, this.#auth));
  }

  get inboundDestinations(): InboundDestinations {
    return (this.#inboundDestinations ??= new InboundDestinations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get kycDocuments(): KycDocuments {
    return (this.#kycDocuments ??= new KycDocuments(this.#rawClient, this.#servers, this.#auth));
  }

  get numbersInventory(): NumbersInventory {
    return (this.#numbersInventory ??= new NumbersInventory(this.#rawClient, this.#servers, this.#auth));
  }

  get purchases(): Purchases {
    return (this.#purchases ??= new Purchases(this.#rawClient, this.#servers, this.#auth));
  }

  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  get riskChecks(): RiskChecks {
    return (this.#riskChecks ??= new RiskChecks(this.#rawClient, this.#servers, this.#auth));
  }

  get sipAccounts(): SipAccounts {
    return (this.#sipAccounts ??= new SipAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  get smsApi(): SmsApi {
    return (this.#smsApi ??= new SmsApi(this.#rawClient, this.#servers, this.#auth));
  }
}
