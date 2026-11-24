import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionFacialAnalysisApiSchema,
  type XAmzTargetAmazonRekognitionFacialAnalysisApi,
} from "../models/xamz-target-amazon-rekognition-facial-analysis-api.js";
import {
  xAmzTarget1AmazonRekognitionFacialAnalysisApiSchema,
  type XAmzTarget1AmazonRekognitionFacialAnalysisApi,
} from "../models/xamz-target1-amazon-rekognition-facial-analysis-api.js";
import type { Servers } from "../servers.js";

export class FacialAnalysis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Compare Faces
   *
   * @remarks
   * Compares a face in the source input image with each of the 100 largest faces detected in the
   * target input image. If the source image contains multiple faces, the service detects the
   * largest face and compares it with each face detected in the target image. CompareFaces uses
   * machine learning algorithms, which are probabilistic. A false negative is an incorrect
   * prediction that a face in the target image has a low similarity confidence score when compared
   * to the face in the source image. To reduce the probability of false negatives, we recommend
   * that you compare the target image against multiple source images. If you plan to use
   * CompareFaces to make a decision that impacts an individual's rights, privacy, or access to
   * services, we recommend that you pass the result to a human for review and further validation
   * before taking action. You pass the input and target images either as base64-encoded image bytes
   * or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon
   * Rekognition operations, passing image bytes isn't supported. The image must be formatted as a
   * PNG or JPEG file. In response, the operation returns an array of face matches ordered by
   * similarity scor
   *
   * @returns Success
   *
   * @throws {@link FacialAnalysis.CompareFacesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  compareFaces(
    request: FacialAnalysis.CompareFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FacialAnalysis.CompareFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CompareFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionFacialAnalysisApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FacialAnalysis.CompareFacesError,
      },
      options,
    );
  }

  /**
   * Detect Faces
   *
   * @remarks
   * Detects faces within an image that is provided as input. DetectFaces detects the 100 largest
   * faces in the image. For each face detected, the operation returns face details. These details
   * include a bounding box of the face, a confidence value (that the bounding box contains a face),
   * and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and
   * mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most
   * effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect
   * the faces or might detect faces with lower confidence. You pass the input image either as
   * base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the
   * AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image
   * must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the
   * operation does not persist any data. This operation requires permissions to perform the
   * rekognition:DetectFaces action.
   *
   * @returns Success
   *
   * @throws {@link FacialAnalysis.DetectFacesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectFaces(
    request: FacialAnalysis.DetectFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FacialAnalysis.DetectFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionFacialAnalysisApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FacialAnalysis.DetectFacesError,
      },
      options,
    );
  }
}

export namespace FacialAnalysis {
  export type CompareFacesRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionFacialAnalysisApi;
  };

  export class CompareFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CompareFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectFacesRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionFacialAnalysisApi;
  };

  export class DetectFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
