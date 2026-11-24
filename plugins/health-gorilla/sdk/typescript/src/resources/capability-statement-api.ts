import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { capabilityStatementSchema, type CapabilityStatement } from "../models/capability-statement.js";
import type { Servers } from "../servers.js";

/**
 * FHIR server capability discovery.
 */
export class CapabilityStatementApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve the FHIR server CapabilityStatement
   *
   * @remarks
   * Returns the FHIR R4 CapabilityStatement describing supported resources, search parameters,
   * operations, and authentication.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCapabilityStatement(options?: RequestOptions): ApiPromise<CapabilityStatement, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metadata"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: capabilityStatementSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
