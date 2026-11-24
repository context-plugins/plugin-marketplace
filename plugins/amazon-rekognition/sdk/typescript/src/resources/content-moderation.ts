import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionContentModerationApiSchema,
  type XAmzTargetAmazonRekognitionContentModerationApi,
} from "../models/xamz-target-amazon-rekognition-content-moderation-api.js";
import {
  xAmzTarget1AmazonRekognitionContentModerationApiSchema,
  type XAmzTarget1AmazonRekognitionContentModerationApi,
} from "../models/xamz-target1-amazon-rekognition-content-moderation-api.js";
import {
  xAmzTarget2AmazonRekognitionContentModerationApiSchema,
  type XAmzTarget2AmazonRekognitionContentModerationApi,
} from "../models/xamz-target2-amazon-rekognition-content-moderation-api.js";
import type { Servers } from "../servers.js";

export class ContentModeration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detect Moderation Labels
   *
   * @remarks
   * Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to
   * moderate images depending on your requirements. For example, you might want to filter images
   * that contain nudity, but not images containing suggestive content. To filter images, use the
   * labels returned by DetectModerationLabels to determine which types of content are appropriate.
   * For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition
   * Developer Guide. You pass the input image either as base64-encoded image bytes or as a
   * reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition
   * operations, passing image bytes is not supported. The image must be either a PNG or JPEG
   * formatted file. You can specify an adapter to use when retrieving label predictions by
   * providing a ProjectVersionArn to the ProjectVersion argument.
   *
   * @returns Success
   *
   * @throws {@link ContentModeration.DetectModerationLabelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectModerationLabels(
    request: ContentModeration.DetectModerationLabelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContentModeration.DetectModerationLabelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectModerationLabels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionContentModerationApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContentModeration.DetectModerationLabelsError,
      },
      options,
    );
  }

  /**
   * Get Content Moderation
   *
   * @remarks
   * Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon
   * Rekognition Video analysis started by StartContentModeration. For a list of moderation labels
   * in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition Video
   * inappropriate or offensive content detection in a stored video is an asynchronous operation.
   * You start analysis by calling StartContentModeration which returns a job identifier (JobId).
   * When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon
   * Simple Notification Service topic registered in the initial call to StartContentModeration. To
   * get the results of the content analysis, first check that the status value published to the
   * Amazon SNS topic is SUCCEEDED. If so, call GetContentModeration and pass the job identifier
   * (JobId) from the initial call to StartContentModeration. For more information, see Working with
   * Stored Videos in the Amazon Rekognition Devlopers Guide. GetContentModeration returns detected
   * inappropriate, unwanted, or offensive content moderation labels, and the time they are
   * detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default
   *
   * @returns Success
   *
   * @throws {@link ContentModeration.GetContentModerationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContentModeration(
    request: ContentModeration.GetContentModerationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContentModeration.GetContentModerationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetContentModeration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionContentModerationApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContentModeration.GetContentModerationError,
      },
      options,
    );
  }

  /**
   * Start Content Moderation
   *
   * @remarks
   * Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored
   * video. For a list of moderation labels in Amazon Rekognition, see Using the image and video
   * moderation APIs. Amazon Rekognition Video can moderate content in a video stored in an Amazon
   * S3 bucket. Use Video to specify the bucket name and the filename of the video.
   * StartContentModeration returns a job identifier (JobId) which you use to get the results of the
   * analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion
   * status to the Amazon Simple Notification Service topic that you specify in NotificationChannel.
   * To get the results of the content analysis, first check that the status value published to the
   * Amazon SNS topic is SUCCEEDED. If so, call GetContentModeration and pass the job identifier
   * (JobId) from the initial call to StartContentModeration. For more information, see Moderating
   * content in the Amazon Rekognition Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link ContentModeration.StartContentModerationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startContentModeration(
    request: ContentModeration.StartContentModerationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContentModeration.StartContentModerationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartContentModeration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionContentModerationApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContentModeration.StartContentModerationError,
      },
      options,
    );
  }
}

export namespace ContentModeration {
  export type DetectModerationLabelsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionContentModerationApi;
  };

  export class DetectModerationLabelsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DetectModerationLabelsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetContentModerationRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionContentModerationApi;
  };

  export class GetContentModerationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetContentModerationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartContentModerationRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionContentModerationApi;
  };

  export class StartContentModerationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartContentModerationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
