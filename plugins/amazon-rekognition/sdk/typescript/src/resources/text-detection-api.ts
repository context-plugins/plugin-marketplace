import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionTextDetectionApiSchema,
  type XAmzTargetAmazonRekognitionTextDetectionApi,
} from "../models/xamz-target-amazon-rekognition-text-detection-api.js";
import {
  xAmzTarget1AmazonRekognitionTextDetectionApiSchema,
  type XAmzTarget1AmazonRekognitionTextDetectionApi,
} from "../models/xamz-target1-amazon-rekognition-text-detection-api.js";
import {
  xAmzTarget2AmazonRekognitionTextDetectionApiSchema,
  type XAmzTarget2AmazonRekognitionTextDetectionApi,
} from "../models/xamz-target2-amazon-rekognition-text-detection-api.js";
import type { Servers } from "../servers.js";

export class TextDetectionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detect Text
   *
   * @remarks
   * Detects text in the input image and converts it into machine-readable text. Pass the input
   * image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If
   * you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to
   * an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The
   * image must be either a .png or .jpeg formatted file. The DetectText operation returns text in
   * an array of TextDetection elements, TextDetections. Each TextDetection element provides
   * information about a single word or line of text that was detected in the image. A word is one
   * or more script characters that are not separated by spaces. DetectText can detect up to 100
   * words in an image. A line is a string of equally spaced words. A line isn't necessarily a
   * complete sentence. For example, a driver's license number is detected as a line. A line ends
   * when there is no aligned text after it. Also, a line ends when there is a large gap between
   * words, relative to the length of the words. This means, depending on the gap between words,
   * Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don
   *
   * @returns Success
   *
   * @throws {@link TextDetectionApi.DetectText2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectText2(
    request: TextDetectionApi.DetectText2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, TextDetectionApi.DetectText2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectText"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionTextDetectionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TextDetectionApi.DetectText2Error,
      },
      options,
    );
  }

  /**
   * Get Text Detection
   *
   * @remarks
   * Gets the text detection results of a Amazon Rekognition Video analysis started by
   * StartTextDetection. Text detection with Amazon Rekognition Video is an asynchronous operation.
   * You start text detection by calling StartTextDetection which returns a job identifier (JobId)
   * When the text detection operation finishes, Amazon Rekognition publishes a completion status to
   * the Amazon Simple Notification Service topic registered in the initial call to
   * StartTextDetection. To get the results of the text detection operation, first check that the
   * status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and
   * pass the job identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection
   * returns an array of detected text (TextDetections) sorted by the time the text was detected, up
   * to 100 words per frame of video. Each element of the array includes the detected text, the
   * precentage confidence in the acuracy of the detected text, the time the text was detected,
   * bounding box information for where the text was located, and unique identifiers for words and
   * their lines. Use MaxResults parameter to limit the number of text detections returned. If there
   * are
   *
   * @returns Success
   *
   * @throws {@link TextDetectionApi.GetTextDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTextDetection(
    request: TextDetectionApi.GetTextDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TextDetectionApi.GetTextDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetTextDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionTextDetectionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TextDetectionApi.GetTextDetectionError,
      },
      options,
    );
  }

  /**
   * Start Text Detection
   *
   * @remarks
   * Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect
   * text in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
   * filename of the video. StartTextDetection returns a job identifier (JobId) which you use to get
   * the results of the operation. When text detection is finished, Amazon Rekognition Video
   * publishes a completion status to the Amazon Simple Notification Service topic that you specify
   * in NotificationChannel. To get the results of the text detection operation, first check that
   * the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection
   * and pass the job identifier (JobId) from the initial call to StartTextDetection.
   *
   * @returns Success
   *
   * @throws {@link TextDetectionApi.StartTextDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startTextDetection(
    request: TextDetectionApi.StartTextDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TextDetectionApi.StartTextDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartTextDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionTextDetectionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TextDetectionApi.StartTextDetectionError,
      },
      options,
    );
  }
}

export namespace TextDetectionApi {
  export type DetectText2Request = {
    xAmzTarget: XAmzTarget2AmazonRekognitionTextDetectionApi;
  };

  export class DetectText2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectText2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetTextDetectionRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionTextDetectionApi;
  };

  export class GetTextDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetTextDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartTextDetectionRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionTextDetectionApi;
  };

  export class StartTextDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartTextDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
