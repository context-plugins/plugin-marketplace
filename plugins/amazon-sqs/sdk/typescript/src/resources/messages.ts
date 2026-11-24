import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class Messages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Message Move Task
   *
   * @remarks
   * Cancels a specified message movement task. A message movement can only be cancelled when the
   * current status is RUNNING. Cancelling a message movement task does not revert the messages that
   * have already been moved. It can only stop the messages that have not been moved yet. This
   * action is currently limited to supporting message redrive from dead-letter queues (DLQs) only.
   * In this context, the source queue is the dead-letter queue (DLQ), while the destination queue
   * can be the original source queue (from which the messages were driven to the
   * dead-letter-queue), or a custom destination queue. Only one active message movement task is
   * supported per queue at any given time.
   *
   * @returns Success
   *
   * @throws {@link Messages.CancelMessageMoveTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelMessageMoveTask(
    request: Messages.CancelMessageMoveTaskRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.CancelMessageMoveTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CancelMessageMoveTask"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.CancelMessageMoveTaskError,
      },
      options,
    );
  }

  /**
   * Change Message Visibility
   *
   * @remarks
   * Changes the visibility timeout of a specified message in a queue to a new value. The default
   * visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12
   * hours. For more information, see Visibility Timeout in the Amazon SQS Developer Guide. For
   * example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you
   * received the message, and you send a ChangeMessageVisibility call with VisibilityTimeout set to
   * 10 seconds, the 10 seconds begin to count from the time that you make the
   * ChangeMessageVisibility call. Thus, any attempt to change the visibility timeout or to delete
   * that message 10 seconds after you initially change the visibility timeout (a total of 25
   * seconds) might result in an error. An Amazon SQS message has three basic states: Sent to a
   * queue by a producer. Received from the queue by a consumer. Deleted from the queue. A message
   * is considered to be stored after it is sent to a queue by a producer, but not yet received from
   * the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of
   * stored messages. A message is considered to be in flight after it is received from a queue by a
   * consume
   *
   * @returns Success
   *
   * @throws {@link Messages.ChangeMessageVisibilityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changeMessageVisibility(
    request: Messages.ChangeMessageVisibilityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.ChangeMessageVisibilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ChangeMessageVisibility"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.ChangeMessageVisibilityError,
      },
      options,
    );
  }

  /**
   * Change Message Visibility Batch
   *
   * @remarks
   * Changes the visibility timeout of multiple messages. This is a batch version of
   * ChangeMessageVisibility. The result of the action on each message is reported individually in
   * the response. You can send up to 10 ChangeMessageVisibility requests with each
   * ChangeMessageVisibilityBatch action. Because the batch request can result in a combination of
   * successful and unsuccessful actions, you should check for batch errors even when the call
   * returns an HTTP status code of 200.
   *
   * @returns Success
   *
   * @throws {@link Messages.ChangeMessageVisibilityBatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changeMessageVisibilityBatch(
    request: Messages.ChangeMessageVisibilityBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.ChangeMessageVisibilityBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ChangeMessageVisibilityBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.ChangeMessageVisibilityBatchError,
      },
      options,
    );
  }

  /**
   * Delete Message
   *
   * @remarks
   * Deletes the specified message from the specified queue. To select the message to delete, use
   * the ReceiptHandle of the message (not the MessageId which you receive when you send the
   * message). Amazon SQS can delete a message from a queue even if a visibility timeout setting
   * causes the message to be locked by another consumer. Amazon SQS automatically deletes messages
   * left in a queue longer than the retention period configured for the queue. Each time you
   * receive a message, meaning when a consumer retrieves a message from the queue, it comes with a
   * unique ReceiptHandle. If you receive the same message more than once, you will get a different
   * ReceiptHandle each time. When you want to delete a message using the DeleteMessage action, you
   * must use the ReceiptHandle from the most recent time you received the message. If you use an
   * old ReceiptHandle, the request will succeed, but the message might not be deleted. For standard
   * queues, it is possible to receive a message even after you delete it. This might happen on rare
   * occasions if one of the servers which stores a copy of the message is unavailable when you send
   * the request to delete the message. The copy remains on the server and might b
   *
   * @returns Success
   *
   * @throws {@link Messages.DeleteMessageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMessage(
    request: Messages.DeleteMessageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.DeleteMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteMessage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.DeleteMessageError,
      },
      options,
    );
  }

  /**
   * Delete Message Batch
   *
   * @remarks
   * Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage.
   * The result of the action on each message is reported individually in the response. Because the
   * batch request can result in a combination of successful and unsuccessful actions, you should
   * check for batch errors even when the call returns an HTTP status code of 200.
   *
   * @returns Success
   *
   * @throws {@link Messages.DeleteMessageBatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMessageBatch(
    request: Messages.DeleteMessageBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.DeleteMessageBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteMessageBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.DeleteMessageBatchError,
      },
      options,
    );
  }

  /**
   * List Message Move Tasks
   *
   * @remarks
   * Gets the most recent message movement tasks (up to 10) under a specific source queue. This
   * action is currently limited to supporting message redrive from dead-letter queues (DLQs) only.
   * In this context, the source queue is the dead-letter queue (DLQ), while the destination queue
   * can be the original source queue (from which the messages were driven to the
   * dead-letter-queue), or a custom destination queue. Only one active message movement task is
   * supported per queue at any given time.
   *
   * @returns Success
   *
   * @throws {@link Messages.ListMessageMoveTasksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMessageMoveTasks(
    request: Messages.ListMessageMoveTasksRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.ListMessageMoveTasksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMessageMoveTasks"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.ListMessageMoveTasksError,
      },
      options,
    );
  }

  /**
   * Receive Message
   *
   * @remarks
   * Retrieves one or more messages (up to 10), from the specified queue. Using the WaitTimeSeconds
   * parameter enables long-poll support. For more information, see Amazon SQS Long Polling in the
   * Amazon SQS Developer Guide. Short poll is the default behavior where a weighted random set of
   * machines is sampled on a ReceiveMessage call. Therefore, only the messages on the sampled
   * machines are returned. If the number of messages in the queue is small (fewer than 1,000), you
   * most likely get fewer messages than you requested per ReceiveMessage call. If the number of
   * messages in the queue is extremely small, you might not receive any messages in a particular
   * ReceiveMessage response. If this happens, repeat the request. For each message returned, the
   * response includes the following: The message body. An MD5 digest of the message body. For
   * information about MD5, see RFC1321. The MessageId you received when you sent the message to the
   * queue. The receipt handle. The message attributes. An MD5 digest of the message attributes. The
   * receipt handle is the identifier you must provide when deleting the message. For more
   * information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. You
   *
   * @returns Success
   *
   * @throws {@link Messages.ReceiveMessageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  receiveMessage(
    request: Messages.ReceiveMessageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.ReceiveMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ReceiveMessage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.ReceiveMessageError,
      },
      options,
    );
  }

  /**
   * Send Message
   *
   * @remarks
   * Delivers a message to the specified queue. A message can include only XML, JSON, and
   * unformatted text. The following Unicode characters are allowed. For more information, see the
   * W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000
   * to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the
   * message and returns an InvalidMessageContents error. Ensure that your message body includes
   * only valid characters to avoid this exception.
   *
   * @returns Success
   *
   * @throws {@link Messages.SendMessageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendMessage(
    request: Messages.SendMessageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.SendMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SendMessage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.SendMessageError,
      },
      options,
    );
  }

  /**
   * Send Message Batch
   *
   * @remarks
   * You can use SendMessageBatch to send up to 10 messages to the specified queue by assigning
   * either identical or different values to each message (or by not assigning values at all). This
   * is a batch version of SendMessage. For a FIFO queue, multiple messages within a single batch
   * are enqueued in the order they are sent. The result of sending each message is reported
   * individually in the response. Because the batch request can result in a combination of
   * successful and unsuccessful actions, you should check for batch errors even when the call
   * returns an HTTP status code of 200. The maximum allowed individual message size and the maximum
   * total payload size (the sum of the individual lengths of all of the batched messages) are both
   * 1 MiB 1,048,576 bytes. A message can include only XML, JSON, and unformatted text. The
   * following Unicode characters are allowed. For more information, see the W3C specification for
   * characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a
   * message contains characters outside the allowed set, Amazon SQS rejects the message and returns
   * an InvalidMessageContents error. Ensure that your message body includes only valid characters
   * to
   *
   * @returns Success
   *
   * @throws {@link Messages.SendMessageBatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendMessageBatch(
    request: Messages.SendMessageBatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.SendMessageBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SendMessageBatch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.SendMessageBatchError,
      },
      options,
    );
  }

  /**
   * Start Message Move Task
   *
   * @remarks
   * Starts an asynchronous task to move messages from a specified source queue to a specified
   * destination queue. This action is currently limited to supporting message redrive from queues
   * that are configured as dead-letter queues (DLQs) of other Amazon SQS queues only. Non-SQS queue
   * sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not
   * supported. In dead-letter queues redrive context, the StartMessageMoveTask the source queue is
   * the DLQ, while the destination queue can be the original source queue (from which the messages
   * were driven to the dead-letter-queue), or a custom destination queue. Only one active message
   * movement task is supported per queue at any given time.
   *
   * @returns Success
   *
   * @throws {@link Messages.StartMessageMoveTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startMessageMoveTask(
    request: Messages.StartMessageMoveTaskRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Messages.StartMessageMoveTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartMessageMoveTask"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Messages.StartMessageMoveTaskError,
      },
      options,
    );
  }
}

export namespace Messages {
  export type CancelMessageMoveTaskRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class CancelMessageMoveTaskError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelMessageMoveTaskError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ChangeMessageVisibilityRequestParams = {
    xAmzTarget: XAmzTarget5;
  };

  export class ChangeMessageVisibilityError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChangeMessageVisibilityError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ChangeMessageVisibilityBatchRequestParams = {
    xAmzTarget: XAmzTarget6;
  };

  export class ChangeMessageVisibilityBatchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChangeMessageVisibilityBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMessageRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class DeleteMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMessageError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMessageBatchRequestParams = {
    xAmzTarget: XAmzTarget8;
  };

  export class DeleteMessageBatchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMessageBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ListMessageMoveTasksRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListMessageMoveTasksError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMessageMoveTasksError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ReceiveMessageRequestParams = {
    xAmzTarget: XAmzTarget7;
  };

  export class ReceiveMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReceiveMessageError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SendMessageRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class SendMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendMessageError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type SendMessageBatchRequestParams = {
    xAmzTarget: XAmzTarget9;
  };

  export class SendMessageBatchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendMessageBatchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type StartMessageMoveTaskRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class StartMessageMoveTaskError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMessageMoveTaskError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
