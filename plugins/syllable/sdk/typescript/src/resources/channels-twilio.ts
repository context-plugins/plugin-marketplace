import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { channelSchema, type Channel } from "../models/channel.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  twilioChannelCreateRequestSchema,
  type TwilioChannelCreateRequest,
} from "../models/twilio-channel-create-request.js";
import {
  twilioChannelUpdateRequestSchema,
  type TwilioChannelUpdateRequest,
} from "../models/twilio-channel-update-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Twilio channel configuration.
 */
export class ChannelsTwilio {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Twilio Channel
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilio.ChannelsTwilioCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  channelsTwilioCreate(
    request: ChannelsTwilio.ChannelsTwilioCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, ChannelsTwilio.ChannelsTwilioCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/channels/twilio/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: twilioChannelCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: ChannelsTwilio.ChannelsTwilioCreateError,
      },
      options,
    );
  }

  /**
   * Get Twilio Channel By Id
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilio.ChannelsTwilioGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsTwilioGetById(
    request: ChannelsTwilio.ChannelsTwilioGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, ChannelsTwilio.ChannelsTwilioGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/channels/twilio/{channel_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: ChannelsTwilio.ChannelsTwilioGetByIdError,
      },
      options,
    );
  }

  /**
   * Update Twilio Channel
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTwilio.ChannelsTwilioUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  channelsTwilioUpdate(
    request: ChannelsTwilio.ChannelsTwilioUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, ChannelsTwilio.ChannelsTwilioUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/channels/twilio/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: twilioChannelUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: ChannelsTwilio.ChannelsTwilioUpdateError,
      },
      options,
    );
  }
}

export namespace ChannelsTwilio {
  export type ChannelsTwilioCreateRequest = {
    body: TwilioChannelCreateRequest;
  };

  export class ChannelsTwilioCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsTwilioGetByIdRequest = {
    channelId: number;
  };

  export class ChannelsTwilioGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsTwilioUpdateRequest = {
    body: TwilioChannelUpdateRequest;
  };

  export class ChannelsTwilioUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsTwilioUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
