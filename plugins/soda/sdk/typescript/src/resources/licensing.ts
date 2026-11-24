import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiSpuConsumptionResponseSchema,
  type PublicApiSpuConsumptionResponse,
} from "../models/public-api-spu-consumption-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Licensing Endpoints
 */
export class Licensing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get SPU consumption
   *
   * @remarks
   * This endpoint returns the number of SPUs your organization consumed over a period.
   *
   * Both bounds are inclusive whole days and any time component is discarded:
   *
   * - `from`: Optional. Defaults to the first day of the current calendar month.
   *
   * - `to`: Optional. Defaults to today.
   *
   * Only organizations on SPU-based licensing accumulate consumption; others always read zero.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.
   *
   * ## Tags
   *
   * `Licensing`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Licensing.GetApiV1LicensingSpuConsumptionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1LicensingSpuConsumption(
    request: Licensing.GetApiV1LicensingSpuConsumptionRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiSpuConsumptionResponse, Licensing.GetApiV1LicensingSpuConsumptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/licensing/spuConsumption"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiSpuConsumptionResponseSchema },
        errorFactory: Licensing.GetApiV1LicensingSpuConsumptionError,
      },
      options,
    );
  }
}

export namespace Licensing {
  export type GetApiV1LicensingSpuConsumptionRequest = {
    from?: Date;
    to?: Date;
  };

  export class GetApiV1LicensingSpuConsumptionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1LicensingSpuConsumptionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
