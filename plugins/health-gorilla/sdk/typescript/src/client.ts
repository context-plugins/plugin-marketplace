import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { BinaryApi } from "./resources/binary-api.js";
import { CapabilityStatementApi } from "./resources/capability-statement-api.js";
import { CoverageApi } from "./resources/coverage-api.js";
import { DiagnosticReportApi } from "./resources/diagnostic-report-api.js";
import { DocumentReferenceApi } from "./resources/document-reference-api.js";
import { Observation } from "./resources/observation.js";
import { PatientApi } from "./resources/patient-api.js";
import { PractitionerApi } from "./resources/practitioner-api.js";
import { RequestGroupApi } from "./resources/request-group-api.js";
import { ServiceRequestApi } from "./resources/service-request-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * HL7 FHIR R4 REST API for the Health Gorilla health-data interoperability network. Provides access
 * to patient records, person-authorized federated record retrieval across national exchange
 * networks (QHIN / TEFCA), diagnostic (lab and radiology) ordering and results, clinical documents,
 * and coverage/eligibility data. All requests require OAuth 2.0 bearer authentication.
 */
export class HealthGorillaClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #binaryApi?: BinaryApi;
  #capabilityStatementApi?: CapabilityStatementApi;
  #coverageApi?: CoverageApi;
  #diagnosticReportApi?: DiagnosticReportApi;
  #documentReferenceApi?: DocumentReferenceApi;
  #observation?: Observation;
  #patientApi?: PatientApi;
  #practitionerApi?: PractitionerApi;
  #requestGroupApi?: RequestGroupApi;
  #serviceRequestApi?: ServiceRequestApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "HEALTH_GORILLA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "HealthGorillaClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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
   * Raw clinical document content.
   */
  get binaryApi(): BinaryApi {
    return (this.#binaryApi ??= new BinaryApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * FHIR server capability discovery.
   */
  get capabilityStatementApi(): CapabilityStatementApi {
    return (this.#capabilityStatementApi ??= new CapabilityStatementApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Patient insurance coverage / eligibility.
   */
  get coverageApi(): CoverageApi {
    return (this.#coverageApi ??= new CoverageApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Structured lab and radiology results.
   */
  get diagnosticReportApi(): DiagnosticReportApi {
    return (this.#diagnosticReportApi ??= new DiagnosticReportApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Clinical document metadata.
   */
  get documentReferenceApi(): DocumentReferenceApi {
    return (this.#documentReferenceApi ??= new DocumentReferenceApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Individual result observations.
   */
  get observation(): Observation {
    return (this.#observation ??= new Observation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Patient demographics and patient-scoped record retrieval.
   */
  get patientApi(): PatientApi {
    return (this.#patientApi ??= new PatientApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Ordering and rendering providers.
   */
  get practitionerApi(): PractitionerApi {
    return (this.#practitionerApi ??= new PractitionerApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Parent diagnostic orders nesting individual ServiceRequest tests.
   */
  get requestGroupApi(): RequestGroupApi {
    return (this.#requestGroupApi ??= new RequestGroupApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Diagnostic (lab and radiology) order requests.
   */
  get serviceRequestApi(): ServiceRequestApi {
    return (this.#serviceRequestApi ??= new ServiceRequestApi(this.#rawClient, this.#servers, this.#auth));
  }
}
