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
import type { Servers } from "../servers.js";

export class CelebrityRecognitionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Celebrity Recognition
   *
   * @remarks
   * Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by
   * StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation.
   * Analysis is started by a call to StartCelebrityRecognition which returns a job identifier
   * (JobId). When the celebrity recognition operation finishes, Amazon Rekognition Video publishes
   * a completion status to the Amazon Simple Notification Service topic registered in the initial
   * call to StartCelebrityRecognition. To get the results of the celebrity recognition analysis,
   * first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call
   * GetCelebrityDetection and pass the job identifier (JobId) from the initial call to
   * StartCelebrityDetection. For more information, see Working With Stored Videos in the Amazon
   * Rekognition Developer Guide. GetCelebrityRecognition returns detected celebrities and the
   * time(s) they are detected in an array (Celebrities) of CelebrityRecognition objects. Each
   * CelebrityRecognition contains information about the celebrity in a CelebrityDetail object and
   * the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores information
   * about the
   *
   * @returns Success
   *
   * @throws {@link CelebrityRecognitionApi.GetCelebrityRecognitionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCelebrityRecognition(
    request: CelebrityRecognitionApi.GetCelebrityRecognitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CelebrityRecognitionApi.GetCelebrityRecognitionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetCelebrityRecognition"),
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
        errorFactory: CelebrityRecognitionApi.GetCelebrityRecognitionError,
      },
      options,
    );
  }

  /**
   * Recognize Celebrities
   *
   * @remarks
   * Returns an array of celebrities recognized in the input image. For more information, see
   * Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns
   * the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces
   * array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't
   * return celebrities whose faces aren't among the largest 64 faces in the image. For each
   * celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object
   * contains the celebrity name, ID, URL links to additional information, match confidence, and a
   * ComparedFace object that you can use to locate the celebrity's face on the image. Amazon
   * Rekognition doesn't retain information about which images a celebrity has been recognized in.
   * Your application must store this information and use the Celebrity ID property as a unique
   * identifier for the celebrity. If you don't store the celebrity name or additional information
   * URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call
   * to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image
   *
   * @returns Success
   *
   * @throws {@link CelebrityRecognitionApi.RecognizeCelebritiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  recognizeCelebrities(
    request: CelebrityRecognitionApi.RecognizeCelebritiesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CelebrityRecognitionApi.RecognizeCelebritiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RecognizeCelebrities"),
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
        errorFactory: CelebrityRecognitionApi.RecognizeCelebritiesError,
      },
      options,
    );
  }

  /**
   * Start Celebrity Recognition
   *
   * @remarks
   * Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can
   * detect celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the
   * bucket name and the filename of the video. StartCelebrityRecognition returns a job identifier
   * (JobId) which you use to get the results of the analysis. When celebrity recognition analysis
   * is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple
   * Notification Service topic that you specify in NotificationChannel. To get the results of the
   * celebrity recognition analysis, first check that the status value published to the Amazon SNS
   * topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId)
   * from the initial call to StartCelebrityRecognition. For more information, see Recognizing
   * celebrities in the Amazon Rekognition Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link CelebrityRecognitionApi.StartCelebrityRecognitionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startCelebrityRecognition(
    request: CelebrityRecognitionApi.StartCelebrityRecognitionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CelebrityRecognitionApi.StartCelebrityRecognitionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartCelebrityRecognition"),
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
        errorFactory: CelebrityRecognitionApi.StartCelebrityRecognitionError,
      },
      options,
    );
  }
}

export namespace CelebrityRecognitionApi {
  export type GetCelebrityRecognitionRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class GetCelebrityRecognitionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCelebrityRecognitionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RecognizeCelebritiesRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class RecognizeCelebritiesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RecognizeCelebritiesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartCelebrityRecognitionRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class StartCelebrityRecognitionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartCelebrityRecognitionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
