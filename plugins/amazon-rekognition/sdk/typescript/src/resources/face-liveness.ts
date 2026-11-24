import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionFaceLivenessApiSchema,
  type XAmzTargetAmazonRekognitionFaceLivenessApi,
} from "../models/xamz-target-amazon-rekognition-face-liveness-api.js";
import {
  xAmzTarget1AmazonRekognitionFaceLivenessApiSchema,
  type XAmzTarget1AmazonRekognitionFaceLivenessApi,
} from "../models/xamz-target1-amazon-rekognition-face-liveness-api.js";
import type { Servers } from "../servers.js";

export class FaceLiveness {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Face Liveness Session
   *
   * @remarks
   * This API operation initiates a Face Liveness session. It returns a SessionId, which you can use
   * to start streaming Face Liveness video and get the results for a Face Liveness session. You can
   * use the OutputConfig option in the Settings parameter to provide an Amazon S3 bucket location.
   * The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is
   * defined, raw bytes are sent instead. You can use AuditImagesLimit to limit the number of audit
   * images returned when GetFaceLivenessSessionResults is called. This number is between 0 and 4.
   * By default, it is set to 0. The limit is best effort and based on the duration of the
   * selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose
   * between the 'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared
   * Responsibility page for details on guidance for which setting to choose between these two
   * settings depending on your use case and preferences. This parameter is optional and if no
   * parameter is provided, then the 'FaceMovementAndLightChallenge' settings is applied by default.
   *
   * @returns Success
   *
   * @throws {@link FaceLiveness.CreateFaceLivenessSessionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createFaceLivenessSession(
    request: FaceLiveness.CreateFaceLivenessSessionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceLiveness.CreateFaceLivenessSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateFaceLivenessSession"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionFaceLivenessApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceLiveness.CreateFaceLivenessSessionError,
      },
      options,
    );
  }

  /**
   * Get Face Liveness Session Results
   *
   * @remarks
   * Retrieves the results of a specific Face Liveness session. It requires the sessionId as input,
   * which was created using CreateFaceLivenessSession. Returns the corresponding Face Liveness
   * confidence score, a reference image that includes a face bounding box, and audit images that
   * also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The
   * number of audit images returned by GetFaceLivenessSessionResults is defined by the
   * AuditImagesLimit paramater when calling CreateFaceLivenessSession. Reference images are always
   * returned when possible. For a session that has completed, the response can also include a
   * Feedback list describing conditions that were detected in the selfie-video, such as low
   * lighting or an obstructed face, and Metadata about the client that streamed the session.
   *
   * @returns Success
   *
   * @throws {@link FaceLiveness.GetFaceLivenessSessionResultsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFaceLivenessSessionResults(
    request: FaceLiveness.GetFaceLivenessSessionResultsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceLiveness.GetFaceLivenessSessionResultsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetFaceLivenessSessionResults"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionFaceLivenessApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceLiveness.GetFaceLivenessSessionResultsError,
      },
      options,
    );
  }
}

export namespace FaceLiveness {
  export type CreateFaceLivenessSessionRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionFaceLivenessApi;
  };

  export class CreateFaceLivenessSessionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateFaceLivenessSessionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetFaceLivenessSessionResultsRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceLivenessApi;
  };

  export class GetFaceLivenessSessionResultsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetFaceLivenessSessionResultsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
