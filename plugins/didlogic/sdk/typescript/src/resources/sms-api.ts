import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV1SmsRequestSchema, type ApiV1SmsRequest } from "../models/api-v1-sms-request.js";
import { apiV1SmsResponseSchema, type ApiV1SmsResponse } from "../models/api-v1-sms-response.js";
import { apiV1SmsResponse1Schema, type ApiV1SmsResponse1 } from "../models/api-v1-sms-response1.js";
import { apiV1SmsResponse3Schema, type ApiV1SmsResponse3 } from "../models/api-v1-sms-response3.js";
import { apiV1Sms403Error1Schema, type ApiV1Sms403Error1 } from "../models/api-v1-sms403-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import { apiV1SmsResponse21Schema, type ApiV1SmsResponse21 } from "../models/unions/api-v1-sms-response21.js";
import type { Servers } from "../servers.js";

export class SmsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send SMS message
   *
   * @remarks
   * Send an SMS message from a DID number owned by the authenticated user.
   *
   * **Requirements:**
   * - Source DID must be owned by user
   * - Source DID must have SMS enabled
   * - Sufficient account balance for SMS cost
   * - Valid destination phone number
   *
   * **Cost:**
   * - Charged per segment (160 characters)
   * - Price varies by destination country
   *
   * `sms.id` feeds sms_show. See also: numbers_search_show, to find SMS-enabled numbers to buy.
   *
   * @returns Successfully sends SMS message and returns details with ID
   *
   * @throws {@link SmsApi.SmsCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  smsCreate(
    request: SmsApi.SmsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SmsResponse1, SmsApi.SmsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sms"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SmsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1SmsResponse1Schema },
        errorFactory: SmsApi.SmsCreateError,
      },
      options,
    );
  }

  /**
   * List sent SMS messages
   *
   * @remarks
   * Retrieve paginated list of SMS messages sent by the authenticated user. Note: Contact your
   * account manager to set up a Relay URL for inbound messages.
   *
   * `sms[].id` feeds sms_show. Full record: sms_show.
   *
   * @returns Successfully returns paginated list of sent SMS messages
   *
   * @throws {@link SmsApi.SmsIndexError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  smsIndex(
    request: SmsApi.SmsIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1SmsResponse, SmsApi.SmsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sms"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.string(), "1") },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.string(), "20") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SmsResponseSchema },
        errorFactory: SmsApi.SmsIndexError,
      },
      options,
    );
  }

  /**
   * Get SMS message details
   *
   * @remarks
   * Retrieve details of a specific SMS message sent by the authenticated user.
   *
   * **Returned Information:**
   * - SMS ID and status
   * - Source and destination numbers
   * - Message content
   * - Delivery status and timestamps
   * - Cost and segment count
   *
   * Rows: sms_index.
   *
   * @returns Successfully returns SMS message details including status and timestamps
   *
   * @throws {@link SmsApi.SmsShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  smsShow(
    request: SmsApi.SmsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SmsResponse3, SmsApi.SmsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sms/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SmsResponse3Schema },
        errorFactory: SmsApi.SmsShowError,
      },
      options,
    );
  }
}

export namespace SmsApi {
  export type SmsCreateRequest = {
    body: ApiV1SmsRequest;
  };

  export class SmsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"apiV1Sms403Error1", ApiV1Sms403Error1>
      | Declared<"apiV1SmsResponse21", ApiV1SmsResponse21>
      | Undeclared;

    static readonly errors: ErrorDecoders<SmsCreateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "apiV1Sms403Error1", decode: { kind: "json", schema: apiV1Sms403Error1Schema } },
      { on: 422, kind: "apiV1SmsResponse21", decode: { kind: "json", schema: apiV1SmsResponse21Schema } },
    ];
  }

  export type SmsIndexRequest = {
    /** Page number for pagination (starts from 1) @default "1" */
    page?: string;
    /** Number of items per page @default "20" */
    perPage?: string;
  };

  export class SmsIndexError extends ApiError {
    declare readonly payload: Declared<"apiV1Sms403Error1", ApiV1Sms403Error1> | Undeclared;

    static readonly errors: ErrorDecoders<SmsIndexError> = [
      { on: 403, kind: "apiV1Sms403Error1", decode: { kind: "json", schema: apiV1Sms403Error1Schema } },
    ];
  }

  export type SmsShowRequest = {
    /** SMS message id from sms_index, sms_create */
    id: number;
  };

  export class SmsShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Sms403Error1", ApiV1Sms403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SmsShowError> = [
      { on: 403, kind: "apiV1Sms403Error1", decode: { kind: "json", schema: apiV1Sms403Error1Schema } },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
