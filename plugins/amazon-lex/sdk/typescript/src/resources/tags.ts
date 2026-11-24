import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
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
  listTagsForResourceResponseSchema,
  type ListTagsForResourceResponse,
} from "../models/list-tags-for-resource-response.js";
import {
  modelsLexListTagsForResourceResponseSchema,
  type ModelsLexListTagsForResourceResponse,
} from "../models/models-lex-list-tags-for-resource-response.js";
import {
  modelsLexTagResourceRequestSchema,
  type ModelsLexTagResourceRequest,
} from "../models/models-lex-tag-resource-request.js";
import {
  modelsLexUntagResourceRequestSchema,
  type ModelsLexUntagResourceRequest,
} from "../models/models-lex-untag-resource-request.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { tagResourceRequestSchema, type TagResourceRequest } from "../models/tag-resource-request.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { untagResourceRequestSchema, type UntagResourceRequest } from "../models/untag-resource-request.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Tags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can
   * have tags associated with them.
   *
   * @returns Success
   *
   * @throws {@link Tags.ListTagsForResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTagsForResource(
    request: Tags.ListTagsForResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListTagsForResourceResponse, Tags.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceARN}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceARN", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTagsForResourceResponseSchema },
        errorFactory: Tags.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot
   * channels can have tags associated with them.
   *
   * @returns Success
   *
   * @throws {@link Tags.ListTagsForResource1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  listTagsForResource1(
    request: Tags.ListTagsForResource1Request,
    options?: RequestOptions,
  ): ApiPromise<ModelsLexListTagsForResourceResponse, Tags.ListTagsForResource1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelsLexListTagsForResourceResponseSchema },
        errorFactory: Tags.ListTagsForResource1Error,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds the specified tags to the specified resource. If a tag key already exists, the existing
   * value is replaced with the new value.
   *
   * @returns Success
   *
   * @throws {@link Tags.TagResourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagResource(
    request: Tags.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tags.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceARN}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceARN", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tagResourceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tags.TagResourceError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds the specified tags to the specified resource. If a tag key already exists, the existing
   * value is replaced with the new value.
   *
   * @returns Success
   *
   * @throws {@link Tags.TagResource1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  tagResource1(
    request: Tags.TagResource1Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tags.TagResource1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexTagResourceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tags.TagResource1Error,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes tags from a bot, bot alias, or bot channel.
   *
   * @returns Success
   *
   * @throws {@link Tags.UntagResourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  untagResource(
    request: Tags.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tags.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceARN}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceARN", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => untagResourceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tags.UntagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes tags from a bot, bot alias or bot channel.
   *
   * @returns Success
   *
   * @throws {@link Tags.UntagResource1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  untagResource1(
    request: Tags.UntagResource1Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tags.UntagResource1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2TagsApi("/tags/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => modelsLexUntagResourceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tags.UntagResource1Error,
      },
      options,
    );
  }
}

export namespace Tags {
  export type ListTagsForResourceRequestParams = {
    resourceArn: string;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListTagsForResource1Request = {
    resourceArn: string;
  };

  export class ListTagsForResource1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResource1Error> = [
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

  export type TagResourceRequestParams = {
    resourceArn: string;
    body?: TagResourceRequest;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type TagResource1Request = {
    resourceArn: string;
    body?: ModelsLexTagResourceRequest;
  };

  export class TagResource1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResource1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
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

  export type UntagResourceRequestParams = {
    resourceArn: string;
    body?: UntagResourceRequest;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UntagResource1Request = {
    resourceArn: string;
    body?: ModelsLexUntagResourceRequest;
  };

  export class UntagResource1Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagResource1Error> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
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
}
