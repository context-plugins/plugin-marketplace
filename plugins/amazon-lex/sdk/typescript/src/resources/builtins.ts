import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  getBuiltinIntentResponseSchema,
  type GetBuiltinIntentResponse,
} from "../models/get-builtin-intent-response.js";
import {
  getBuiltinIntentsResponseSchema,
  type GetBuiltinIntentsResponse,
} from "../models/get-builtin-intents-response.js";
import {
  getBuiltinSlotTypesResponseSchema,
  type GetBuiltinSlotTypesResponse,
} from "../models/get-builtin-slot-types-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import {
  listBuiltInIntentsRequestSchema,
  type ListBuiltInIntentsRequest,
} from "../models/list-built-in-intents-request.js";
import {
  listBuiltInIntentsResponseSchema,
  type ListBuiltInIntentsResponse,
} from "../models/list-built-in-intents-response.js";
import {
  listBuiltInSlotTypesRequestSchema,
  type ListBuiltInSlotTypesRequest,
} from "../models/list-built-in-slot-types-request.js";
import {
  listBuiltInSlotTypesResponseSchema,
  type ListBuiltInSlotTypesResponse,
} from "../models/list-built-in-slot-types-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Builtins {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Builtin Intent
   *
   * @remarks
   * Returns information about a built-in intent. This operation requires permission for the
   * lex:GetBuiltinIntent action.
   *
   * @returns Success
   *
   * @throws {@link Builtins.GetBuiltinIntentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBuiltinIntent(
    request: Builtins.GetBuiltinIntentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetBuiltinIntentResponse, Builtins.GetBuiltinIntentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BuiltinsApi(
          "/builtins/intents/{signature}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "signature", value: request.signature, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBuiltinIntentResponseSchema },
        errorFactory: Builtins.GetBuiltinIntentError,
      },
      options,
    );
  }

  /**
   * Get Builtin Intents
   *
   * @remarks
   * Gets a list of built-in intents that meet the specified criteria. This operation requires
   * permission for the lex:GetBuiltinIntents action.
   *
   * @returns Success
   *
   * @throws {@link Builtins.GetBuiltinIntentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBuiltinIntents(
    options?: RequestOptions,
  ): ApiPromise<GetBuiltinIntentsResponse, Builtins.GetBuiltinIntentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/intents"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBuiltinIntentsResponseSchema },
        errorFactory: Builtins.GetBuiltinIntentsError,
      },
      options,
    );
  }

  /**
   * Get Builtin Slot Types
   *
   * @remarks
   * Gets a list of built-in slot types that meet the specified criteria. For a list of built-in
   * slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission
   * for the lex:GetBuiltInSlotTypes action.
   *
   * @returns Success
   *
   * @throws {@link Builtins.GetBuiltinSlotTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getBuiltinSlotTypes(
    options?: RequestOptions,
  ): ApiPromise<GetBuiltinSlotTypesResponse, Builtins.GetBuiltinSlotTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BuiltinsApi("/builtins/slottypes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBuiltinSlotTypesResponseSchema },
        errorFactory: Builtins.GetBuiltinSlotTypesError,
      },
      options,
    );
  }

  /**
   * List Built In Intents
   *
   * @remarks
   * Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a
   * built-in intent as a the base for your own intent, include the built-in intent signature in the
   * parentIntentSignature parameter when you call the CreateIntent operation. For more information,
   * see CreateIntent.
   *
   * @returns Success
   *
   * @throws {@link Builtins.ListBuiltInIntentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuiltInIntents(
    request: Builtins.ListBuiltInIntentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBuiltInIntentsResponse, Builtins.ListBuiltInIntentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BuiltinsApi(
          "/builtins/locales/{localeId}/intents",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "localeId", value: request.localeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBuiltInIntentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBuiltInIntentsResponseSchema },
        errorFactory: Builtins.ListBuiltInIntentsError,
      },
      options,
    );
  }

  /**
   * List Built In Slot Types
   *
   * @remarks
   * Gets a list of built-in slot types that meet the specified criteria.
   *
   * @returns Success
   *
   * @throws {@link Builtins.ListBuiltInSlotTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuiltInSlotTypes(
    request: Builtins.ListBuiltInSlotTypesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListBuiltInSlotTypesResponse, Builtins.ListBuiltInSlotTypesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BuiltinsApi(
          "/builtins/locales/{localeId}/slottypes",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "localeId", value: request.localeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBuiltInSlotTypesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBuiltInSlotTypesResponseSchema },
        errorFactory: Builtins.ListBuiltInSlotTypesError,
      },
      options,
    );
  }
}

export namespace Builtins {
  export type GetBuiltinIntentRequestParams = {
    signature: string;
  };

  export class GetBuiltinIntentError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBuiltinIntentError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export class GetBuiltinIntentsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBuiltinIntentsError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
    ];
  }

  export class GetBuiltinSlotTypesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBuiltinSlotTypesError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
    ];
  }

  export type ListBuiltInIntentsRequestParams = {
    localeId: string;
    body?: ListBuiltInIntentsRequest;
  };

  export class ListBuiltInIntentsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBuiltInIntentsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListBuiltInSlotTypesRequestParams = {
    localeId: string;
    body?: ListBuiltInSlotTypesRequest;
  };

  export class ListBuiltInSlotTypesError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBuiltInSlotTypesError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
