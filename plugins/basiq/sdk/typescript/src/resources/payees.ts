import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  badRequestErrorSchemaSchema,
  type BadRequestErrorSchema,
} from "../models/bad-request-error-schema.js";
import {
  forbiddenAccessError1Schema,
  type ForbiddenAccessError1,
} from "../models/forbidden-access-error1.js";
import { notFoundErrorSchemaSchema, type NotFoundErrorSchema } from "../models/not-found-error-schema.js";
import { payeeDetailsResponseSchema, type PayeeDetailsResponse } from "../models/payee-details-response.js";
import { payeesListResponseSchema, type PayeesListResponse } from "../models/payees-list-response.js";
import {
  unauthorizedErrorSchemaSchema,
  type UnauthorizedErrorSchema,
} from "../models/unauthorized-error-schema.js";
import type { Servers } from "../servers.js";

export class Payees {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Payee Details
   *
   * @remarks
   * Retrieves detailed information for a specific payee. The response includes type-specific
   * details based on the payee type (domestic, biller, international, or digitalWallet).
   *
   * @returns Successful response with payee details. The response structure varies based on the
   * payee type.
   *
   * @throws {@link Payees.GetPayeeDetailsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayeeDetails(
    request: Payees.GetPayeeDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayeeDetailsResponse, Payees.GetPayeeDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/payees/{payeeId}"),
        auth: this.#auth.servicesToken,
        pathParams: [
          { name: "userId", value: request.userId, schema: s.string() },
          { name: "payeeId", value: request.payeeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payeeDetailsResponseSchema },
        errorFactory: Payees.GetPayeeDetailsError,
      },
      options,
    );
  }

  /**
   * List Payees
   *
   * @remarks
   * Retrieves a paginated list of payees for a specific user. Supports filtering by payee type,
   * connection ID, and creation date.
   *
   * @returns Successful response with a list of payees.
   *
   * @throws {@link Payees.GetPayeesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayees(
    request: Payees.GetPayeesRequest,
    options?: RequestOptions,
  ): ApiPromise<PayeesListResponse, Payees.GetPayeesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{userId}/payees"),
        auth: this.#auth.servicesToken,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payeesListResponseSchema },
        errorFactory: Payees.GetPayeesError,
      },
      options,
    );
  }
}

export namespace Payees {
  export type GetPayeeDetailsRequest = {
    /** The unique identifier of the user. */
    userId: string;
    /** The unique identifier of the payee. */
    payeeId: string;
  };

  export class GetPayeeDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorSchema", BadRequestErrorSchema>
      | Declared<"unauthorizedErrorSchema", UnauthorizedErrorSchema>
      | Declared<"forbiddenAccessError1", ForbiddenAccessError1>
      | Declared<"notFoundErrorSchema", NotFoundErrorSchema>
      | Declared<"notFoundErrorSchema2", NotFoundErrorSchema>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPayeeDetailsError> = [
      {
        on: 400,
        kind: "badRequestErrorSchema",
        decode: { kind: "json", schema: badRequestErrorSchemaSchema },
      },
      {
        on: 401,
        kind: "unauthorizedErrorSchema",
        decode: { kind: "json", schema: unauthorizedErrorSchemaSchema },
      },
      {
        on: 403,
        kind: "forbiddenAccessError1",
        decode: { kind: "json", schema: forbiddenAccessError1Schema },
      },
      { on: 404, kind: "notFoundErrorSchema", decode: { kind: "json", schema: notFoundErrorSchemaSchema } },
      { on: 500, kind: "notFoundErrorSchema2", decode: { kind: "json", schema: notFoundErrorSchemaSchema } },
    ];
  }

  export type GetPayeesRequest = {
    /** The unique identifier of the user. */
    userId: string;
    /**
     * The maximum number of payees to return per page. Valid values are 1-500. Default is 25.
     *
     * @default 25
     */
    limit?: number;
    /**
     * Filter expression to narrow down results. Supports the following filters:
     * - `type.eq('value')` - Filter by payee type (domestic, biller, international, digitalWallet)
     * - `connectionId.eq('value')` - Filter by connection ID
     * - `created.bt('startDate','endDate')` - Filter by creation date range
     * - `created.gt('date')` - Filter by creation date greater than
     * - `created.gteq('date')` - Filter by creation date greater than or equal
     * - `created.lt('date')` - Filter by creation date less than
     * - `created.lteq('date')` - Filter by creation date less than or equal
     * - `created.eq('date')` - Filter by creation date equal to
     */
    filter?: string;
  };

  export const getPayeesRequestSchema: Schema<GetPayeesRequest> = s.lazySchema(() =>
    s.object<GetPayeesRequest>({
      userId: s.string(),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 25),
      filter: s.optional(s.string()),
    }),
  );

  export class GetPayeesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorSchema", BadRequestErrorSchema>
      | Declared<"unauthorizedErrorSchema", UnauthorizedErrorSchema>
      | Declared<"forbiddenAccessError1", ForbiddenAccessError1>
      | Declared<"notFoundErrorSchema", NotFoundErrorSchema>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPayeesError> = [
      {
        on: 400,
        kind: "badRequestErrorSchema",
        decode: { kind: "json", schema: badRequestErrorSchemaSchema },
      },
      {
        on: 401,
        kind: "unauthorizedErrorSchema",
        decode: { kind: "json", schema: unauthorizedErrorSchemaSchema },
      },
      {
        on: 403,
        kind: "forbiddenAccessError1",
        decode: { kind: "json", schema: forbiddenAccessError1Schema },
      },
      { on: 500, kind: "notFoundErrorSchema", decode: { kind: "json", schema: notFoundErrorSchemaSchema } },
    ];
  }
}
