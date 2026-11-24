import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createCustomerPortalRequestInternalSchema,
  type CreateCustomerPortalRequest,
} from "../models/create-customer-portal-request.js";
import { customerPortalSchema, type CustomerPortal } from "../models/customer-portal.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class CustomerPortals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a customer portal session
   *
   * @remarks
   * Creates a portal session for the customer. Returns a short-lived URL to the customer portal.
   *
   * @returns 201
   *
   * @throws {@link CustomerPortals.CreateCustomerPortalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerPortal(
    request: CustomerPortals.CreateCustomerPortalRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomerPortal, CustomerPortals.CreateCustomerPortalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/customer-portals/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCustomerPortalRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: customerPortalSchema },
        errorFactory: CustomerPortals.CreateCustomerPortalError,
      },
      options,
    );
  }
}

export namespace CustomerPortals {
  export type CreateCustomerPortalRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateCustomerPortalRequest;
  };

  export class CreateCustomerPortalError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerPortalError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
