import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Access } from "./resources/access.js";
import { AdditionalInformation } from "./resources/additional-information.js";
import { BillingAndCredits } from "./resources/billing-and-credits.js";
import { DocumentApi } from "./resources/document-api.js";
import { Identification } from "./resources/identification.js";
import { Monitoring } from "./resources/monitoring.js";
import { Report } from "./resources/report.js";
import { Reports } from "./resources/reports.js";
import { Seal } from "./resources/seal.js";
import { SendTo } from "./resources/send-to.js";
import { SignatureAttachmentApi } from "./resources/signature-attachment-api.js";
import { SignatureHandling } from "./resources/signature-handling.js";
import { SignatureObserverApi } from "./resources/signature-observer-api.js";
import { SignatureSigner } from "./resources/signature-signer.js";
import { Signature } from "./resources/signature.js";
import { User } from "./resources/user.js";
import { Validation } from "./resources/validation.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Access across 5 of this provider's published API definitions:
 * skribble-sign-v3-openapi.yml, skribble-validation-v1-openapi.yml, skribble-sign-v2-openapi.yml,
 * skribble-sign-v3-openapi.yml, skribble-validation-v1-openapi.yml. Each path carries the servers
 * of the definition it was published in., Operations tagged Additional Information across 2 of this
 * provider's published API definitions: skribble-validation-v1-openapi.yml,
 * skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was
 * published in., Operations tagged Billing and Credits across 2 of this provider's published API
 * definitions: skribble-validation-v1-openapi.yml, skribble-validation-v1-openapi.yml. Each path
 * carries the servers of the definition it was published in., Operations tagged Document across 3
 * of this provider's published API definitions: skribble-sign-v3-openapi.yml,
 * skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Identification across 3 of this provider's
 * published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml,
 * skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Monitoring across 3 of this provider's published API definitions:
 * skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Report across
 * 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml,
 * skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Reports across 2 of this provider's published
 * API definitions: skribble-validation-v1-openapi.yml, skribble-validation-v1-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Seal across 3
 * of this provider's published API definitions: skribble-sign-v3-openapi.yml,
 * skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged SendTo across 3 of this provider's published
 * API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml,
 * skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Signature across 3 of this provider's published API definitions:
 * skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Signature
 * Attachment across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml,
 * skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Signature Handling across 3 of this provider's
 * published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml,
 * skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Signature Observer across 2 of this provider's published API definitions:
 * skribble-sign-v3-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Signature Signer across 3 of this provider's
 * published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml,
 * skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged User across 3 of this provider's published API definitions:
 * skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Validation
 * across 2 of this provider's published API definitions: skribble-validation-v1-openapi.yml,
 * skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was
 * published in.
 */
export class SkribbleClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #access?: Access;
  #additionalInformation?: AdditionalInformation;
  #billingAndCredits?: BillingAndCredits;
  #documentApi?: DocumentApi;
  #identification?: Identification;
  #monitoring?: Monitoring;
  #report?: Report;
  #reports?: Reports;
  #seal?: Seal;
  #sendTo?: SendTo;
  #signature?: Signature;
  #signatureAttachmentApi?: SignatureAttachmentApi;
  #signatureHandling?: SignatureHandling;
  #signatureObserverApi?: SignatureObserverApi;
  #signatureSigner?: SignatureSigner;
  #user?: User;
  #validation?: Validation;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SKRIBBLE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SkribbleClient/1.0.0 TypeScript", schema: s.string() },
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
   * Endpoints for authentication, authorization, and user access management.
   */
  get access(): Access {
    return (this.#access ??= new Access(this.#rawClient, this.#servers));
  }

  /**
   * Endpoints providing extra metadata or supplementary details for documents.
   */
  get additionalInformation(): AdditionalInformation {
    return (this.#additionalInformation ??= new AdditionalInformation(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Endpoints for managing account credits, billing information, and payment operations.
   */
  get billingAndCredits(): BillingAndCredits {
    return (this.#billingAndCredits ??= new BillingAndCredits(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for uploading and managing documents.
   */
  get documentApi(): DocumentApi {
    return (this.#documentApi ??= new DocumentApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for retrieving, checking status, and downloading identification evidence collected
   * during identification.
   */
  get identification(): Identification {
    return (this.#identification ??= new Identification(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for monitoring system health.
   */
  get monitoring(): Monitoring {
    return (this.#monitoring ??= new Monitoring(this.#rawClient, this.#servers));
  }

  /**
   * Endpoints for signature activity reporting.
   */
  get report(): Report {
    return (this.#report ??= new Report(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for generating, retrieving, and managing reports related to document processing.
   */
  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for applying electronic seals to documents.
   */
  get seal(): Seal {
    return (this.#seal ??= new Seal(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for the Send-To signing flow.
   */
  get sendTo(): SendTo {
    return (this.#sendTo ??= new SendTo(this.#rawClient, this.#servers));
  }

  /**
   * Endpoints for creating and managing signature requests.
   */
  get signature(): Signature {
    return (this.#signature ??= new Signature(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing attachments on a signature request.
   */
  get signatureAttachmentApi(): SignatureAttachmentApi {
    return (this.#signatureAttachmentApi ??= new SignatureAttachmentApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Endpoints for handling signature requests and callbacks.
   */
  get signatureHandling(): SignatureHandling {
    return (this.#signatureHandling ??= new SignatureHandling(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for managing observers on a signature request.
   */
  get signatureObserverApi(): SignatureObserverApi {
    return (this.#signatureObserverApi ??= new SignatureObserverApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Endpoints for managing signers on a signature request.
   */
  get signatureSigner(): SignatureSigner {
    return (this.#signatureSigner ??= new SignatureSigner(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for user information and signature quality queries.
   */
  get user(): User {
    return (this.#user ??= new User(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints to validate documents, data formats, and signatures.
   */
  get validation(): Validation {
    return (this.#validation ??= new Validation(this.#rawClient, this.#servers, this.#auth));
  }
}
