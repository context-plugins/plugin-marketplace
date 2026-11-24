import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { discoveryAcceptedSchema, type DiscoveryAccepted } from "../models/discovery-accepted.js";
import { discoveryRequestInternalSchema, type DiscoveryRequest } from "../models/discovery-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Bulk account expansion into net-new contacts
 */
export class Discovery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit a bulk account discovery (expansion) job
   *
   * @remarks
   * Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is
   * mandatory for each account.
   *
   * @returns Bulk job successfully accepted
   *
   * @throws {@link Discovery.DiscoverCompanyContactsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  discoverCompanyContacts(
    request: Discovery.DiscoverCompanyContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscoveryAccepted, Discovery.DiscoverCompanyContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/expansion/company"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: discoveryRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: discoveryAcceptedSchema },
        errorFactory: Discovery.DiscoverCompanyContactsError,
      },
      options,
    );
  }
}

export namespace Discovery {
  export type DiscoverCompanyContactsRequest = {
    body: DiscoveryRequest;
  };

  export class DiscoverCompanyContactsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DiscoverCompanyContactsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 427, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
