import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiChecksResponseSchema,
  type PublicApiChecksResponse,
} from "../models/public-api-checks-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Check Endpoints
 */
export class Checks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a check
   *
   * @remarks
   * This endpoint allows you to delete a specific check in your organization's Soda Cloud account.
   *
   * ## Authorization
   *
   * Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission
   * (V4 datasets) can delete checks. Soda Cloud Admins can delete checks for all datasets. **See
   * Manage dataset roles for more information.**
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Checks`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @throws {@link Checks.DeleteApiV1ChecksCheckIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1ChecksCheckId(
    request: Checks.DeleteApiV1ChecksCheckIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Checks.DeleteApiV1ChecksCheckIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/checks/{checkId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "checkId", value: request.checkId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Checks.DeleteApiV1ChecksCheckIdError,
      },
      options,
    );
  }

  /**
   * Check information
   *
   * @remarks
   * This endpoint enables you to gather information about the checks that in exist in your
   * organization's Soda Cloud account, including information about the datasets and agreements with
   * which they are associated and the incidents to which they are linked. .
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `datasetId`: Optionally, use this parameter to collect only the information for checks
   *   associated with a specific dataset. Find the `datasetId` in the URL of the dataset page in
   *   Soda Cloud.
   *
   * - `dataStandardId`: Optionally, use this parameter to collect only the information for checks
   *   belonging to a specific data standard. Find the `dataStandardId` in the URL of the data
   *   standard page in Soda Cloud.
   *
   * - `checkIds`: Optionally, use this parameter to collect only the information for a specific
   *   batch of checks. Provide multiple values as a comma-separated list of check IDs, which you
   *   can find on the individual check pages in Soda Cloud. This query parameter is limited to 1000
   *   check IDs and it can't be combined with other query parameters like `page`, `datasetId`,
   *   `size`.
   *
   * If not specified, the query gathers information for all checks in the account and sorts the
   * results by check name in ascending order.
   *
   * ## Authorization
   *
   * Soda only returns the checks linked to datasets to which the user has **View dataset**
   * permissions. Soda Cloud Admins have access to all checks.**See Manage dataset roles for more
   * information.**
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Checks`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Checks.GetApiV1ChecksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Checks(
    request: Checks.GetApiV1ChecksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiChecksResponse, Checks.GetApiV1ChecksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/checks"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "checkIds", value: request.checkIds, schema: s.optional(s.string()) },
          { name: "dataStandardId", value: request.dataStandardId, schema: s.optional(s.string()) },
          { name: "datasetId", value: request.datasetId, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiChecksResponseSchema },
        errorFactory: Checks.GetApiV1ChecksError,
      },
      options,
    );
  }
}

export namespace Checks {
  export type DeleteApiV1ChecksCheckIdRequest = {
    checkId: string;
  };

  export class DeleteApiV1ChecksCheckIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1ChecksCheckIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ChecksRequest = {
    checkIds?: string;
    dataStandardId?: string;
    datasetId?: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1ChecksError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ChecksError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
