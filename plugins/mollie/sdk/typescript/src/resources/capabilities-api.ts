import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Capabilities API
 */
export class CapabilitiesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List capabilities
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Retrieve a list of capabilities for an organization.
   *
   * This API provides detailed insights into the specific requirements and status of each client's
   * onboarding journey.
   *
   * Capabilities are at the organization level, indicating if the organization can perform a given
   * capability. Capabilities may have requirements, which provide more information on what is
   * needed to use this capability. Requirements may have a due date, which indicates the date by
   * which the requirement should be fulfilled. If a requirement is past due, the capability is
   * disabled until the requirement is fulfilled.
   *
   * For payments, regardless them being at the profile level, the capability is listed at the
   * organization level. This means that if at least one of the clients's profiles can receive
   * payments, the payments capability is enabled, communicating that the organization can indeed
   * receive payments.
   *
   * @returns A list of capabilities.
   *
   * @throws {@link CapabilitiesApi.ListCapabilitiesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCapabilities(
    request: CapabilitiesApi.ListCapabilitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CapabilitiesApi.ListCapabilitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/capabilities"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CapabilitiesApi.ListCapabilitiesError,
      },
      options,
    );
  }
}

export namespace CapabilitiesApi {
  export type ListCapabilitiesRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListCapabilitiesError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCapabilitiesError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
