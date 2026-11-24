import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionStreamProcessorApiSchema,
  type XAmzTargetAmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target-amazon-rekognition-stream-processor-api.js";
import {
  xAmzTarget1AmazonRekognitionStreamProcessorApiSchema,
  type XAmzTarget1AmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target1-amazon-rekognition-stream-processor-api.js";
import {
  xAmzTarget2AmazonRekognitionStreamProcessorApiSchema,
  type XAmzTarget2AmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target2-amazon-rekognition-stream-processor-api.js";
import {
  xAmzTarget3AmazonRekognitionStreamProcessorApiSchema,
  type XAmzTarget3AmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target3-amazon-rekognition-stream-processor-api.js";
import {
  xAmzTarget4AmazonRekognitionStreamProcessorApiSchema,
  type XAmzTarget4AmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target4-amazon-rekognition-stream-processor-api.js";
import {
  xAmzTarget5AmazonRekognitionStreamProcessorApiSchema,
  type XAmzTarget5AmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target5-amazon-rekognition-stream-processor-api.js";
import {
  xAmzTarget6AmazonRekognitionStreamProcessorApiSchema,
  type XAmzTarget6AmazonRekognitionStreamProcessorApi,
} from "../models/xamz-target6-amazon-rekognition-stream-processor-api.js";
import type { Servers } from "../servers.js";

export class StreamProcessorApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Stream Processor
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Creates an Amazon
   * Rekognition stream processor that you can use to detect and recognize faces or to detect labels
   * in a streaming video. Amazon Rekognition Video is a consumer of live video from Amazon Kinesis
   * Video Streams. There are two different settings for stream processors in Amazon Rekognition:
   * detecting faces and detecting labels. If you are creating a stream processor for detecting
   * faces, you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output)
   * stream for receiving the output. You must use the FaceSearch option in Settings, specifying the
   * collection that contains the faces you want to recognize. After you have finished analyzing a
   * streaming video, use StopStreamProcessor to stop processing. If you are creating a stream
   * processor to detect labels, you provide as input a Kinesis video stream (Input), Amazon S3
   * bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.CreateStreamProcessorError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createStreamProcessor(
    request: StreamProcessorApi.CreateStreamProcessorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.CreateStreamProcessorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateStreamProcessor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.CreateStreamProcessorError,
      },
      options,
    );
  }

  /**
   * Delete Stream Processor
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Deletes the stream
   * processor identified by Name. You assign the value for Name when you create the stream
   * processor with CreateStreamProcessor. You might not be able to use the same name for a stream
   * processor for a few seconds after calling DeleteStreamProcessor.
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.DeleteStreamProcessorError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteStreamProcessor(
    request: StreamProcessorApi.DeleteStreamProcessorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.DeleteStreamProcessorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteStreamProcessor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.DeleteStreamProcessorError,
      },
      options,
    );
  }

  /**
   * Describe Stream Processor
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Provides information
   * about a stream processor created by CreateStreamProcessor. You can get information about the
   * input and output streams, the input parameters for the face recognition being performed, and
   * the current status of the stream processor.
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.DescribeStreamProcessorError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStreamProcessor(
    request: StreamProcessorApi.DescribeStreamProcessorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.DescribeStreamProcessorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStreamProcessor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.DescribeStreamProcessorError,
      },
      options,
    );
  }

  /**
   * List Stream Processors
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Gets a list of stream
   * processors that you have created with CreateStreamProcessor.
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.ListStreamProcessorsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listStreamProcessors(
    request: StreamProcessorApi.ListStreamProcessorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.ListStreamProcessorsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListStreamProcessors"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.ListStreamProcessorsError,
      },
      options,
    );
  }

  /**
   * Start Stream Processor
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Starts processing a
   * stream processor. You create a stream processor by calling CreateStreamProcessor. To tell
   * StartStreamProcessor which stream processor to start, use the value of the Name field specified
   * in the call to CreateStreamProcessor. If you are using a label detection stream processor to
   * detect labels, you need to provide a Start selector and a Stop selector to determine the length
   * of the stream processing time.
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.StartStreamProcessorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startStreamProcessor(
    request: StreamProcessorApi.StartStreamProcessorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.StartStreamProcessorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartStreamProcessor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.StartStreamProcessorError,
      },
      options,
    );
  }

  /**
   * Stop Stream Processor
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Stops a running stream
   * processor that was created by CreateStreamProcessor.
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.StopStreamProcessorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopStreamProcessor(
    request: StreamProcessorApi.StopStreamProcessorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.StopStreamProcessorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopStreamProcessor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.StopStreamProcessorError,
      },
      options,
    );
  }

  /**
   * Update Stream Processor
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Allows you to update a
   * stream processor. You can change some settings and regions of interest and delete certain
   * parameters.
   *
   * @returns Success
   *
   * @throws {@link StreamProcessorApi.UpdateStreamProcessorError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateStreamProcessor(
    request: StreamProcessorApi.UpdateStreamProcessorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StreamProcessorApi.UpdateStreamProcessorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateStreamProcessor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget6AmazonRekognitionStreamProcessorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StreamProcessorApi.UpdateStreamProcessorError,
      },
      options,
    );
  }
}

export namespace StreamProcessorApi {
  export type CreateStreamProcessorRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionStreamProcessorApi;
  };

  export class CreateStreamProcessorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateStreamProcessorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteStreamProcessorRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionStreamProcessorApi;
  };

  export class DeleteStreamProcessorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStreamProcessorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeStreamProcessorRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionStreamProcessorApi;
  };

  export class DescribeStreamProcessorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStreamProcessorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListStreamProcessorsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonRekognitionStreamProcessorApi;
  };

  export class ListStreamProcessorsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListStreamProcessorsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartStreamProcessorRequestParams = {
    xAmzTarget: XAmzTarget4AmazonRekognitionStreamProcessorApi;
  };

  export class StartStreamProcessorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartStreamProcessorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StopStreamProcessorRequestParams = {
    xAmzTarget: XAmzTarget5AmazonRekognitionStreamProcessorApi;
  };

  export class StopStreamProcessorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopStreamProcessorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateStreamProcessorRequestParams = {
    xAmzTarget: XAmzTarget6AmazonRekognitionStreamProcessorApi;
  };

  export class UpdateStreamProcessorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStreamProcessorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
