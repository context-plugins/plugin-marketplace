import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonSimpleQueueServiceTagsApiSchema,
  type XAmzTargetAmazonSimpleQueueServiceTagsApi,
} from "../models/xamz-target-amazon-simple-queue-service-tags-api.js";
import {
  xAmzTarget1AmazonSimpleQueueServiceTagsApiSchema,
  type XAmzTarget1AmazonSimpleQueueServiceTagsApi,
} from "../models/xamz-target1-amazon-simple-queue-service-tags-api.js";
import {
  xAmzTarget2AmazonSimpleQueueServiceTagsApiSchema,
  type XAmzTarget2AmazonSimpleQueueServiceTagsApi,
} from "../models/xamz-target2-amazon-simple-queue-service-tags-api.js";
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
   * List Queue Tags
   *
   * @remarks
   * List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see
   * Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions
   * don't apply to this action. For more information, see Grant cross-account permissions to a role
   * and a username in the Amazon SQS Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Tags.ListQueueTagsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQueueTags(
    request: Tags.ListQueueTagsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tags.ListQueueTagsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListQueueTags"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonSimpleQueueServiceTagsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tags.ListQueueTagsError,
      },
      options,
    );
  }

  /**
   * Tag Queue
   *
   * @remarks
   * Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your
   * Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the
   * following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't
   * have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are
   * case-sensitive. A new tag with a key identical to that of an existing tag overwrites the
   * existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon
   * SQS Developer Guide. Cross-account permissions don't apply to this action. For more
   * information, see Grant cross-account permissions to a role and a username in the Amazon SQS
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Tags.TagQueue2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagQueue2(
    request: Tags.TagQueue2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tags.TagQueue2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagQueue"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonSimpleQueueServiceTagsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tags.TagQueue2Error,
      },
      options,
    );
  }

  /**
   * Untag Queue
   *
   * @remarks
   * Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging
   * Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply
   * to this action. For more information, see Grant cross-account permissions to a role and a
   * username in the Amazon SQS Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Tags.UntagQueue2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  untagQueue2(
    request: Tags.UntagQueue2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tags.UntagQueue2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagQueue"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonSimpleQueueServiceTagsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tags.UntagQueue2Error,
      },
      options,
    );
  }
}

export namespace Tags {
  export type ListQueueTagsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonSimpleQueueServiceTagsApi;
  };

  export class ListQueueTagsError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListQueueTagsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TagQueue2Request = {
    xAmzTarget: XAmzTargetAmazonSimpleQueueServiceTagsApi;
  };

  export class TagQueue2Error extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagQueue2Error> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UntagQueue2Request = {
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServiceTagsApi;
  };

  export class UntagQueue2Error extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagQueue2Error> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
