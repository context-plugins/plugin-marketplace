import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionMediaAnalysisJobApiSchema,
  type XAmzTargetAmazonRekognitionMediaAnalysisJobApi,
} from "../models/xamz-target-amazon-rekognition-media-analysis-job-api.js";
import {
  xAmzTarget1AmazonRekognitionMediaAnalysisJobApiSchema,
  type XAmzTarget1AmazonRekognitionMediaAnalysisJobApi,
} from "../models/xamz-target1-amazon-rekognition-media-analysis-job-api.js";
import {
  xAmzTarget2AmazonRekognitionMediaAnalysisJobApiSchema,
  type XAmzTarget2AmazonRekognitionMediaAnalysisJobApi,
} from "../models/xamz-target2-amazon-rekognition-media-analysis-job-api.js";
import type { Servers } from "../servers.js";

export class MediaAnalysisJob {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Media Analysis Job
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Retrieves the results
   * for a given media analysis job. Takes a JobId returned by StartMediaAnalysisJob.
   *
   * @returns Success
   *
   * @throws {@link MediaAnalysisJob.GetMediaAnalysisJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMediaAnalysisJob(
    request: MediaAnalysisJob.GetMediaAnalysisJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MediaAnalysisJob.GetMediaAnalysisJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetMediaAnalysisJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionMediaAnalysisJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MediaAnalysisJob.GetMediaAnalysisJobError,
      },
      options,
    );
  }

  /**
   * List Media Analysis Jobs
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Returns a list of media
   * analysis jobs. Results are sorted by CreationTimestamp in descending order.
   *
   * @returns Success
   *
   * @throws {@link MediaAnalysisJob.ListMediaAnalysisJobsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listMediaAnalysisJobs(
    request: MediaAnalysisJob.ListMediaAnalysisJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MediaAnalysisJob.ListMediaAnalysisJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMediaAnalysisJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionMediaAnalysisJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MediaAnalysisJob.ListMediaAnalysisJobsError,
      },
      options,
    );
  }

  /**
   * Start Media Analysis Job
   *
   * @remarks
   * Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to
   * new customers. For more information, see Rekognition feature availability changes. This change
   * does not impact the availability of other Amazon Rekognition features. Initiates a new media
   * analysis job. Accepts a manifest file in an Amazon S3 bucket. The output is a manifest file and
   * a summary of the manifest stored in the Amazon S3 bucket.
   *
   * @returns Success
   *
   * @throws {@link MediaAnalysisJob.StartMediaAnalysisJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startMediaAnalysisJob(
    request: MediaAnalysisJob.StartMediaAnalysisJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MediaAnalysisJob.StartMediaAnalysisJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartMediaAnalysisJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionMediaAnalysisJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MediaAnalysisJob.StartMediaAnalysisJobError,
      },
      options,
    );
  }
}

export namespace MediaAnalysisJob {
  export type GetMediaAnalysisJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionMediaAnalysisJobApi;
  };

  export class GetMediaAnalysisJobError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetMediaAnalysisJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListMediaAnalysisJobsRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionMediaAnalysisJobApi;
  };

  export class ListMediaAnalysisJobsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMediaAnalysisJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartMediaAnalysisJobRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionMediaAnalysisJobApi;
  };

  export class StartMediaAnalysisJobError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartMediaAnalysisJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
