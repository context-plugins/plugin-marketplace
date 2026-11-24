import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionFaceSearchApiSchema,
  type XAmzTargetAmazonRekognitionFaceSearchApi,
} from "../models/xamz-target-amazon-rekognition-face-search-api.js";
import {
  xAmzTarget1AmazonRekognitionFaceSearchApiSchema,
  type XAmzTarget1AmazonRekognitionFaceSearchApi,
} from "../models/xamz-target1-amazon-rekognition-face-search-api.js";
import {
  xAmzTarget2AmazonRekognitionFaceSearchApiSchema,
  type XAmzTarget2AmazonRekognitionFaceSearchApi,
} from "../models/xamz-target2-amazon-rekognition-face-search-api.js";
import type { Servers } from "../servers.js";

export class FaceSearch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Face Search
   *
   * @remarks
   * Gets the face search results for Amazon Rekognition Video face search started by
   * StartFaceSearch. The search returns faces in a collection that match the faces of persons
   * detected in a video. It also includes the time(s) that faces are matched in the video. Face
   * search in a video is an asynchronous operation. You start face search by calling to
   * StartFaceSearch which returns a job identifier (JobId). When the search operation finishes,
   * Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification
   * Service topic registered in the initial call to StartFaceSearch. To get the search results,
   * first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call
   * GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For
   * more information, see Searching Faces in a Collection in the Amazon Rekognition Developer
   * Guide. The search results are retured in an array, Persons, of PersonMatch objects.
   * EachPersonMatch element contains details about the matching faces in the input collection,
   * person information (facial attributes, bounding boxes, and person identifer) for the matched
   * person, and the time the person
   *
   * @returns Success
   *
   * @throws {@link FaceSearch.GetFaceSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFaceSearch(
    request: FaceSearch.GetFaceSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceSearch.GetFaceSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetFaceSearch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionFaceSearchApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceSearch.GetFaceSearchError,
      },
      options,
    );
  }

  /**
   * Search Faces By Image
   *
   * @remarks
   * For a given input image, first detects the largest face in the image, and then searches the
   * specified collection for matching faces. The operation compares the features of the input face
   * with faces in the specified collection. To search for all faces in an input image, you might
   * first call the IndexFaces operation, and then use the face IDs returned in subsequent calls to
   * the SearchFaces operation. You can also call the DetectFaces operation and use the bounding
   * boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage
   * operation. You pass the input image either as base64-encoded image bytes or as a reference to
   * an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations,
   * passing image bytes is not supported. The image must be either a PNG or JPEG formatted file.
   * The response returns an array of faces that match, ordered by similarity score with the highest
   * similarity first. More specifically, it is an array of metadata for each face match found.
   * Along with the metadata, the response also includes a similarity indicating how similar the
   * face is to the input face. In the response, the operation also returns the bo
   *
   * @returns Success
   *
   * @throws {@link FaceSearch.SearchFacesByImage2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchFacesByImage2(
    request: FaceSearch.SearchFacesByImage2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceSearch.SearchFacesByImage2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SearchFacesByImage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionFaceSearchApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceSearch.SearchFacesByImage2Error,
      },
      options,
    );
  }

  /**
   * Start Face Search
   *
   * @remarks
   * Starts the asynchronous search for faces in a collection that match the faces of persons
   * detected in a stored video. The video must be stored in an Amazon S3 bucket. Use Video to
   * specify the bucket name and the filename of the video. StartFaceSearch returns a job identifier
   * (JobId) which you use to get the search results once the search has completed. When searching
   * is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple
   * Notification Service topic that you specify in NotificationChannel. To get the search results,
   * first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call
   * GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For
   * more information, see Searching stored videos for faces.
   *
   * @returns Success
   *
   * @throws {@link FaceSearch.StartFaceSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startFaceSearch(
    request: FaceSearch.StartFaceSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceSearch.StartFaceSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartFaceSearch"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionFaceSearchApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceSearch.StartFaceSearchError,
      },
      options,
    );
  }
}

export namespace FaceSearch {
  export type GetFaceSearchRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionFaceSearchApi;
  };

  export class GetFaceSearchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetFaceSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SearchFacesByImage2Request = {
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceSearchApi;
  };

  export class SearchFacesByImage2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchFacesByImage2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartFaceSearchRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceSearchApi;
  };

  export class StartFaceSearchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartFaceSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
