import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTargetAmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget1AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget1AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target1-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget2AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget2AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target2-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget3AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget3AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target3-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget4AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget4AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target4-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget5AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget5AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target5-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget6AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget6AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target6-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget7AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget7AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target7-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget8AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget8AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target8-amazon-simple-queue-service-queues-api.js";
import {
  xAmzTarget9AmazonSimpleQueueServiceQueuesApiSchema,
  type XAmzTarget9AmazonSimpleQueueServiceQueuesApi,
} from "../models/xamz-target9-amazon-simple-queue-service-queues-api.js";
import type { Servers } from "../servers.js";

export class Queues {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Queue
   *
   * @remarks
   * Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep
   * the following in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a
   * standard queue. You can't change the queue type after you create it and you can't convert an
   * existing standard queue into a FIFO queue. You must either create a new FIFO queue for your
   * application or delete your existing standard queue and recreate it as a FIFO queue. For more
   * information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer
   * Guide. If you don't provide a value for an attribute, the queue is created with the default
   * value for the attribute. If you delete a queue, you must wait at least 60 seconds before
   * creating a queue with the same name. To successfully create a new queue, you must provide a
   * queue name that adheres to the limits related to queues and is unique within the scope of your
   * queues. After you create a queue, you must wait at least one second after the queue is created
   * to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action. This
   * action only requires the QueueName parameter. When creating queues, keep the following poi
   *
   * @returns Success
   *
   * @throws {@link Queues.CreateQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQueue(
    request: Queues.CreateQueueRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.CreateQueueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateQueue"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.CreateQueueError,
      },
      options,
    );
  }

  /**
   * Delete Queue
   *
   * @remarks
   * Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful
   * with the DeleteQueue action: When you delete a queue, any messages in the queue are no longer
   * available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you
   * send involving that queue during the 60 seconds might succeed. For example, a SendMessage
   * request might succeed, but after 60 seconds the queue and the message you sent no longer exist.
   * When you delete a queue, you must wait at least 60 seconds before creating a queue with the
   * same name. Cross-account permissions don't apply to this action. For more information, see
   * Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The
   * delete operation uses the HTTP GET verb.
   *
   * @returns Success
   *
   * @throws {@link Queues.DeleteQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteQueue(
    request: Queues.DeleteQueueRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.DeleteQueueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteQueue"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.DeleteQueueError,
      },
      options,
    );
  }

  /**
   * Get Queue Attributes
   *
   * @remarks
   * Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check
   * whether QueueName ends with the .fifo suffix.
   *
   * @returns Success
   *
   * @throws {@link Queues.GetQueueAttributesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQueueAttributes(
    request: Queues.GetQueueAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.GetQueueAttributesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetQueueAttributes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget6AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.GetQueueAttributesError,
      },
      options,
    );
  }

  /**
   * Get Queue Url
   *
   * @remarks
   * The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you
   * know the queue's name but need to retrieve its URL for further operations. To access a queue
   * owned by another Amazon Web Services account, use the QueueOwnerAWSAccountId parameter to
   * specify the account ID of the queue's owner. Note that the queue owner must grant you the
   * necessary permissions to access the queue. For more information about accessing shared queues,
   * see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon
   * SQS Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Queues.GetQueueUrlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQueueUrl(
    request: Queues.GetQueueUrlRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.GetQueueUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetQueueUrl"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget8AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.GetQueueUrlError,
      },
      options,
    );
  }

  /**
   * List Dead Letter Source Queues
   *
   * @remarks
   * Returns a list of your queues that have the RedrivePolicy queue attribute configured with a
   * dead-letter queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter
   * MaxResults in the request to specify the maximum number of results to be returned in the
   * response. If you do not set MaxResults, the response includes a maximum of 1,000 results. If
   * you set MaxResults and there are additional results to display, the response includes a value
   * for NextToken. Use NextToken as a parameter in your next request to ListDeadLetterSourceQueues
   * to receive the next page of results. For more information about using dead-letter queues, see
   * Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Queues.ListDeadLetterSourceQueuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDeadLetterSourceQueues(
    request: Queues.ListDeadLetterSourceQueuesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.ListDeadLetterSourceQueuesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDeadLetterSourceQueues"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget9AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.ListDeadLetterSourceQueuesError,
      },
      options,
    );
  }

  /**
   * List Queues
   *
   * @remarks
   * Returns a list of your queues in the current region. The response includes a maximum of 1,000
   * results. If you specify a value for the optional QueueNamePrefix parameter, only queues with a
   * name that begins with the specified value are returned. The listQueues methods supports
   * pagination. Set parameter MaxResults in the request to specify the maximum number of results to
   * be returned in the response. If you do not set MaxResults, the response includes a maximum of
   * 1,000 results. If you set MaxResults and there are additional results to display, the response
   * includes a value for NextToken. Use NextToken as a parameter in your next request to listQueues
   * to receive the next page of results. Cross-account permissions don't apply to this action. For
   * more information, see Grant cross-account permissions to a role and a username in the Amazon
   * SQS Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Queues.ListQueuesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQueues(
    request: Queues.ListQueuesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.ListQueuesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListQueues"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.ListQueuesError,
      },
      options,
    );
  }

  /**
   * Purge Queue
   *
   * @remarks
   * Deletes available messages in a queue (including in-flight messages) specified by the QueueURL
   * parameter. When you use the PurgeQueue action, you can't retrieve any messages deleted from a
   * queue. The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds
   * regardless of your queue's size. Messages sent to the queue before you call PurgeQueue might be
   * received but are deleted within the next minute. Messages sent to the queue after you call
   * PurgeQueue might be deleted while the queue is being purged.
   *
   * @returns Success
   *
   * @throws {@link Queues.PurgeQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purgeQueue(
    request: Queues.PurgeQueueRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.PurgeQueueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PurgeQueue"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.PurgeQueueError,
      },
      options,
    );
  }

  /**
   * Set Queue Attributes
   *
   * @remarks
   * Sets the value of one or more queue attributes, like a policy. When you change a queue's
   * attributes, the change can take up to 60 seconds for most of the attributes to propagate
   * throughout the Amazon SQS system. Changes made to the MessageRetentionPeriod attribute can take
   * up to 15 minutes and will impact existing messages in the queue potentially causing them to be
   * expired and deleted if the MessageRetentionPeriod is reduced below the age of existing
   * messages. In the future, new attributes might be added. If you write code that calls this
   * action, we recommend that you structure your code so that it can handle new attributes
   * gracefully. Cross-account permissions don't apply to this action. For more information, see
   * Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To
   * remove the ability to change queue permissions, you must deny permission to the AddPermission,
   * RemovePermission, and SetQueueAttributes actions in your IAM policy.
   *
   * @returns Success
   *
   * @throws {@link Queues.SetQueueAttributesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setQueueAttributes(
    request: Queues.SetQueueAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.SetQueueAttributesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SetQueueAttributes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget7AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.SetQueueAttributesError,
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
   * @throws {@link Queues.TagQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagQueue(
    request: Queues.TagQueueRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.TagQueueError> {
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
            schema: xAmzTarget3AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.TagQueueError,
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
   * @throws {@link Queues.UntagQueueError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  untagQueue(
    request: Queues.UntagQueueRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Queues.UntagQueueError> {
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
            schema: xAmzTarget4AmazonSimpleQueueServiceQueuesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Queues.UntagQueueError,
      },
      options,
    );
  }
}

export namespace Queues {
  export type CreateQueueRequestParams = {
    xAmzTarget: XAmzTargetAmazonSimpleQueueServiceQueuesApi;
  };

  export class CreateQueueError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateQueueError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DeleteQueueRequestParams = {
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServiceQueuesApi;
  };

  export class DeleteQueueError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteQueueError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetQueueAttributesRequestParams = {
    xAmzTarget: XAmzTarget6AmazonSimpleQueueServiceQueuesApi;
  };

  export class GetQueueAttributesError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQueueAttributesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type GetQueueUrlRequestParams = {
    xAmzTarget: XAmzTarget8AmazonSimpleQueueServiceQueuesApi;
  };

  export class GetQueueUrlError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQueueUrlError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListDeadLetterSourceQueuesRequestParams = {
    xAmzTarget: XAmzTarget9AmazonSimpleQueueServiceQueuesApi;
  };

  export class ListDeadLetterSourceQueuesError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDeadLetterSourceQueuesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListQueuesRequestParams = {
    xAmzTarget: XAmzTarget2AmazonSimpleQueueServiceQueuesApi;
  };

  export class ListQueuesError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListQueuesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PurgeQueueRequestParams = {
    xAmzTarget: XAmzTarget5AmazonSimpleQueueServiceQueuesApi;
  };

  export class PurgeQueueError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurgeQueueError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SetQueueAttributesRequestParams = {
    xAmzTarget: XAmzTarget7AmazonSimpleQueueServiceQueuesApi;
  };

  export class SetQueueAttributesError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetQueueAttributesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type TagQueueRequestParams = {
    xAmzTarget: XAmzTarget3AmazonSimpleQueueServiceQueuesApi;
  };

  export class TagQueueError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagQueueError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UntagQueueRequestParams = {
    xAmzTarget: XAmzTarget4AmazonSimpleQueueServiceQueuesApi;
  };

  export class UntagQueueError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagQueueError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
