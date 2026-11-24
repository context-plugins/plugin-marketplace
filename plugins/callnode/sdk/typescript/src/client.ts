import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { CallRecords } from "./resources/call-records.js";
import { Email } from "./resources/email.js";
import { Faxes } from "./resources/faxes.js";
import { MessagingApi } from "./resources/messaging-api.js";
import { OutboundCalls } from "./resources/outbound-calls.js";
import { PhoneNumbers } from "./resources/phone-numbers.js";
import { SipTrunks } from "./resources/sip-trunks.js";
import { Wholesale } from "./resources/wholesale.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Call Records across 2 of this provider's published API definitions:
 * callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition
 * it was published in., Operations tagged Email across 2 of this provider's published API
 * definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Faxes across 2 of this provider's published
 * API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of
 * the definition it was published in., Operations tagged Messaging across 2 of this provider's
 * published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Outbound Calls across 2 of this
 * provider's published API definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path
 * carries the servers of the definition it was published in., Operations tagged Phone Numbers
 * across 2 of this provider's published API definitions: callnode-openapi.yaml,
 * callnode-io-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged SIP Trunks across 2 of this provider's published API definitions:
 * callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the definition
 * it was published in., Operations tagged Wholesale across 2 of this provider's published API
 * definitions: callnode-openapi.yaml, callnode-io-openapi.yml. Each path carries the servers of the
 * definition it was published in.
 */
export class CallNodeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #callRecords?: CallRecords;
  #email?: Email;
  #faxes?: Faxes;
  #messagingApi?: MessagingApi;
  #outboundCalls?: OutboundCalls;
  #phoneNumbers?: PhoneNumbers;
  #sipTrunks?: SipTrunks;
  #wholesale?: Wholesale;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CALL_NODE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CallNodeClient/1.0.0 TypeScript", schema: s.string() },
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
   * Read-only records of calls on your numbers — inbound and outbound, with timings, status, end
   * reason, and the SIP-level hangup cause.
   */
  get callRecords(): CallRecords {
    return (this.#callRecords ??= new CallRecords(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Programmable email: verify a sending domain you control, send transactional email from any
   * address on it, list messages, and receive delivery events (delivered, delayed, bounced,
   * complained, failed) signed to your webhook. Billed per recipient accepted for delivery; message
   * bodies are not stored.
   */
  get email(): Email {
    return (this.#email ??= new Email(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Hosted fax: send a PDF or TIFF as a fax, list and retrieve faxes sent and received on your
   * numbers, download the document, delete it. Billed per page for the pages actually transmitted;
   * documents are kept until you delete them.
   */
  get faxes(): Faxes {
    return (this.#faxes ??= new Faxes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Send and retrieve SMS/MMS messages.
   */
  get messagingApi(): MessagingApi {
    return (this.#messagingApi ??= new MessagingApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Originate, retrieve, list, and cancel outbound voice calls.
   */
  get outboundCalls(): OutboundCalls {
    return (this.#outboundCalls ??= new OutboundCalls(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search inventory, purchase numbers, provision webhooks, and release numbers.
   */
  get phoneNumbers(): PhoneNumbers {
    return (this.#phoneNumbers ??= new PhoneNumbers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, list, update, and delete saved SIP trunks (egress BYOC + ingress).
   */
  get sipTrunks(): SipTrunks {
    return (this.#sipTrunks ??= new SipTrunks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Wholesale (SBC-as-a-Service) DID ordering — US and international numbers delivered straight to
   * your SIP endpoint. Requires wholesale to be active on your account and completed business
   * verification; every endpoint otherwise returns 403.
   *
   * **Outbound PSTN termination is SIP, not HTTP.** Where it is enabled on your account you send us
   * an INVITE on your trunk and we complete the call; there is no HTTP endpoint to call, so it is
   * not described below. The rules that matter — the caller ID you may present, what each refusal
   * code means, and how minutes are charged — are in the SIP trunking guide under "Wholesale
   * outbound termination". Whether it is enabled on your account, and at what rate, is shown on
   * your SBC Tenant page in the dashboard.
   */
  get wholesale(): Wholesale {
    return (this.#wholesale ??= new Wholesale(this.#rawClient, this.#servers, this.#auth));
  }
}
