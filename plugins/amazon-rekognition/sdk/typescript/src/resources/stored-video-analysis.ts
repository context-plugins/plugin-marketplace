import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionStoredVideoAnalysisApiSchema,
  type XAmzTargetAmazonRekognitionStoredVideoAnalysisApi,
} from "../models/xamz-target-amazon-rekognition-stored-video-analysis-api.js";
import {
  xAmzTarget1AmazonRekognitionStoredVideoAnalysisApiSchema,
  type XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi,
} from "../models/xamz-target1-amazon-rekognition-stored-video-analysis-api.js";
import type { Servers } from "../servers.js";

export class StoredVideoAnalysis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Label Detection
   *
   * @remarks
   * Gets the label detection results of a Amazon Rekognition Video analysis started by
   * StartLabelDetection. The label detection operation is started by a call to StartLabelDetection
   * which returns a job identifier (JobId). When the label detection operation finishes, Amazon
   * Rekognition publishes a completion status to the Amazon Simple Notification Service topic
   * registered in the initial call to StartlabelDetection. To get the results of the label
   * detection operation, first check that the status value published to the Amazon SNS topic is
   * SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial
   * call to StartLabelDetection. GetLabelDetection returns an array of detected labels (Labels)
   * sorted by the time the labels were detected. You can also sort by the label name by specifying
   * NAME for the SortBy input parameter. If there is no NAME specified, the default sort is by
   * timestamp. You can select how results are aggregated by using the AggregateBy input parameter.
   * The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which
   * aggregates all instances of labels detected in a given segment. The returned Labels array may
   * include the
   *
   * @returns Success
   *
   * @throws {@link StoredVideoAnalysis.GetLabelDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLabelDetection(
    request: StoredVideoAnalysis.GetLabelDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StoredVideoAnalysis.GetLabelDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetLabelDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionStoredVideoAnalysisApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StoredVideoAnalysis.GetLabelDetectionError,
      },
      options,
    );
  }

  /**
   * Start Label Detection
   *
   * @remarks
   * Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect
   * labels in a video. Labels are instances of real-world entities. This includes objects like
   * flower, tree, and table; events like wedding, graduation, and birthday party; concepts like
   * landscape, evening, and nature; and activities like a person getting out of a car or a person
   * skiing. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name
   * and the filename of the video. StartLabelDetection returns a job identifier (JobId) which you
   * use to get the results of the operation. When label detection is finished, Amazon Rekognition
   * Video publishes a completion status to the Amazon Simple Notification Service topic that you
   * specify in NotificationChannel. To get the results of the label detection operation, first
   * check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call
   * GetLabelDetection and pass the job identifier (JobId) from the initial call to
   * StartLabelDetection. Optional Parameters StartLabelDetection has the GENERAL_LABELS Feature
   * applied by default. This feature allows you to provide filtering criteria to the Settings
   * parameter. Yo
   *
   * @returns Success
   *
   * @throws {@link StoredVideoAnalysis.StartLabelDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startLabelDetection(
    request: StoredVideoAnalysis.StartLabelDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, StoredVideoAnalysis.StartLabelDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartLabelDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionStoredVideoAnalysisApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StoredVideoAnalysis.StartLabelDetectionError,
      },
      options,
    );
  }
}

export namespace StoredVideoAnalysis {
  export type GetLabelDetectionRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionStoredVideoAnalysisApi;
  };

  export class GetLabelDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartLabelDetectionRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi;
  };

  export class StartLabelDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartLabelDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
