import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { customerUpdateInternalSchema, type CustomerUpdate } from "../models/customer-update.js";
import { customerInternalSchema, type Customer } from "../models/customer.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Read and update your organization's general settings.
 */
export class Customers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get customer
   *
   * @remarks
   * Returns the customer, including its general settings and contact info, scoped to
   * `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token
   * scoped to a different customer gets `403`, even if that customer would otherwise be reachable
   * through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access
   * (`platform:externalApi`).
   *
   * @returns OK - Customer returned.
   *
   * @throws {@link Customers.GetCustomerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomer(
    request: Customers.GetCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<Customer, Customers.GetCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/v1/customers/{customerId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customerInternalSchema },
        errorFactory: Customers.GetCustomerError,
      },
      options,
    );
  }

  /**
   * Update customer
   *
   * @remarks
   * Partially updates the general settings and contact info of the customer identified by
   * `{customerId}`. `{customerId}` must match the customer resolved from the bearer token; a token
   * scoped to a different customer gets `403`, even if that customer would otherwise be reachable
   * through a reseller/MTS relationship. Requires the `Settings` permission and DoiT API access
   * (`platform:externalApi`); updating `allowedInviteDomains` additionally requires the
   * `UsersManager` permission.
   *
   * The request body must use `application/merge-patch+json` (RFC 7396): an omitted field leaves
   * the current value unchanged, and an explicit `null` also leaves it unchanged, except for
   * `urlSlug`, where an explicit empty string removes the customer's active URL slug rather than
   * leaving it unchanged.
   *
   * Fields are nested exactly as `getCustomer` returns them - `currency` and `allowedInviteDomains`
   * under `settings`, `emails` under `contact` - so every value is read and written at the same
   * path. `settings.currency` accepts only the codes listed in the schema and cannot be cleared;
   * `allowedInviteDomains` and `contact.emails` are cleared with an empty array.
   *
   * @returns OK - Customer updated.
   *
   * @throws {@link Customers.UpdateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomer(
    request: Customers.UpdateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Customers.UpdateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/customers/v1/customers/{customerId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customerUpdateInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Customers.UpdateCustomerError,
      },
      options,
    );
  }
}

export namespace Customers {
  export type GetCustomerRequest = {
    /**
     * Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
     * different customer gets `403`.
     */
    customerId: string;
  };

  export class GetCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCustomerRequest = {
    /**
     * Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
     * different customer gets `403`.
     */
    customerId: string;
    body: CustomerUpdate;
  };

  export class UpdateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 415, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error7", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error8", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
