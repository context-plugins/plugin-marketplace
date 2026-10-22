import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  a2PMessagingPathCheckRequestSchema,
  type A2PMessagingPathCheckRequest,
} from "../models/a2-pmessaging-path-check-request.js";
import {
  a2PMessagingPathCheckResponseSchema,
  type A2PMessagingPathCheckResponse,
} from "../models/a2-pmessaging-path-check-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  twilioListNumbersResponseSchema,
  type TwilioListNumbersResponse,
} from "../models/twilio-list-numbers-response.js";
import {
  twilioNumberAddRequestSchema,
  type TwilioNumberAddRequest,
} from "../models/twilio-number-add-request.js";
import {
  twilioNumberAddResponseSchema,
  type TwilioNumberAddResponse,
} from "../models/twilio-number-add-response.js";
import {
  twilioNumberUpdateRequestSchema,
  type TwilioNumberUpdateRequest,
} from "../models/twilio-number-update-request.js";
import {
  twilioNumberUpdateResponseSchema,
  type TwilioNumberUpdateResponse,
} from "../models/twilio-number-update-response.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to setting up phone numbers in Twilio for use in channels.
 */
export class ChannelsTwilioNumbers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Verify Twilio Us A2P Compliance
   *
   * @remarks
   * Return whether Twilio shows this number on a US A2P messaging path with an approved brand.
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsTwilioNumbersA2PComplianceCheck(
    request: ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckRequest,
    options?: RequestOptions,
  ): ApiPromise<
    A2PMessagingPathCheckResponse,
    ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v1/channels/twilio/{channel_id}/numbers/verify-a2p-compliance",
        ),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: a2PMessagingPathCheckRequestSchema },
      },
      {
        success: { kind: "json", schema: a2PMessagingPathCheckResponseSchema },
        errorFactory: ChannelsTwilioNumbers.ChannelsTwilioNumbersA2PComplianceCheckError,
      },
      options,
    );
  }

  /**
   * Add Twilio Number
   *
   * @remarks
   * Purchase a Twilio number and associate it with a channel.
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsTwilioNumbersAdd(
    request: ChannelsTwilioNumbers.ChannelsTwilioNumbersAddRequest,
    options?: RequestOptions,
  ): ApiPromise<TwilioNumberAddResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/channels/twilio/{channel_id}/numbers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: twilioNumberAddRequestSchema },
      },
      {
        success: { kind: "json", schema: twilioNumberAddResponseSchema },
        errorFactory: ChannelsTwilioNumbers.ChannelsTwilioNumbersAddError,
      },
      options,
    );
  }

  /**
   * List Twilio Phone Numbers
   *
   * @remarks
   * List Twilio phone numbers.
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilioNumbers.ChannelsTwilioNumbersListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsTwilioNumbersList(
    request: ChannelsTwilioNumbers.ChannelsTwilioNumbersListRequest,
    options?: RequestOptions,
  ): ApiPromise<TwilioListNumbersResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/channels/twilio/{channel_id}/numbers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: twilioListNumbersResponseSchema },
        errorFactory: ChannelsTwilioNumbers.ChannelsTwilioNumbersListError,
      },
      options,
    );
  }

  /**
   * Update Twilio Number
   *
   * @remarks
   * Update a Twilio number and associate it with a channel.
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsTwilioNumbersUpdate(
    request: ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<TwilioNumberUpdateResponse, ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/channels/twilio/{channel_id}/numbers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: twilioNumberUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: twilioNumberUpdateResponseSchema },
        errorFactory: ChannelsTwilioNumbers.ChannelsTwilioNumbersUpdateError,
      },
      options,
    );
  }
}

export namespace ChannelsTwilioNumbers {
  export type ChannelsTwilioNumbersA2PComplianceCheckRequest = {
    channelId: number;
    body: A2PMessagingPathCheckRequest;
  };

  export class ChannelsTwilioNumbersA2PComplianceCheckError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioNumbersA2PComplianceCheckError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsTwilioNumbersAddRequest = {
    channelId: number;
    body: TwilioNumberAddRequest;
  };

  export class ChannelsTwilioNumbersAddError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioNumbersAddError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsTwilioNumbersListRequest = {
    channelId: number;
  };

  export class ChannelsTwilioNumbersListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioNumbersListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsTwilioNumbersUpdateRequest = {
    channelId: number;
    body: TwilioNumberUpdateRequest;
  };

  export class ChannelsTwilioNumbersUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioNumbersUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
