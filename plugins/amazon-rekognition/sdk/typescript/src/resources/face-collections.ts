import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionFaceCollectionsApiSchema,
  type XAmzTargetAmazonRekognitionFaceCollectionsApi,
} from "../models/xamz-target-amazon-rekognition-face-collections-api.js";
import {
  xAmzTarget1AmazonRekognitionFaceCollectionsApiSchema,
  type XAmzTarget1AmazonRekognitionFaceCollectionsApi,
} from "../models/xamz-target1-amazon-rekognition-face-collections-api.js";
import {
  xAmzTarget2AmazonRekognitionFaceCollectionsApiSchema,
  type XAmzTarget2AmazonRekognitionFaceCollectionsApi,
} from "../models/xamz-target2-amazon-rekognition-face-collections-api.js";
import type { Servers } from "../servers.js";

export class FaceCollections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Collection
   *
   * @remarks
   * Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces
   * operation. For example, you might create collections, one for each of your application users. A
   * user can then index faces using the IndexFaces operation and persist results in a specific
   * collection. Then, a user can search the collection for faces in the user-specific container.
   * When you create a collection, it is associated with the latest version of the face model
   * version. Collection names are case-sensitive. This operation requires permissions to perform
   * the rekognition:CreateCollection action. If you want to tag your collection, you also require
   * permission to perform the rekognition:TagResource operation.
   *
   * @returns Success
   *
   * @throws {@link FaceCollections.CreateCollectionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCollection(
    request: FaceCollections.CreateCollectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceCollections.CreateCollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateCollection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionFaceCollectionsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceCollections.CreateCollectionError,
      },
      options,
    );
  }

  /**
   * Index Faces
   *
   * @remarks
   * Detects faces in the input image and adds them to the specified collection. Amazon Rekognition
   * doesn't save the actual faces that are detected. Instead, the underlying detection algorithm
   * first detects the faces in the input image. For each face, the algorithm extracts facial
   * features into a feature vector, and stores it in the backend database. Amazon Rekognition uses
   * feature vectors when it performs face match and search operations using the SearchFaces and
   * SearchFacesByImage operations. For more information, see Adding faces to a collection in the
   * Amazon Rekognition Developer Guide. To get the number of faces in a collection, call
   * DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes
   * the 15 largest faces in the input image. Later versions of the face detection model index the
   * 100 largest faces in the input image. If you're using version 4 or later of the face model,
   * image orientation information is not returned in the OrientationCorrection field. To determine
   * which version of the model you're using, call DescribeCollection and supply the collection ID.
   * You can also get the model version from the value of FaceModelVersion in the response
   *
   * @returns Success
   *
   * @throws {@link FaceCollections.IndexFacesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexFaces(
    request: FaceCollections.IndexFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceCollections.IndexFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#IndexFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionFaceCollectionsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceCollections.IndexFacesError,
      },
      options,
    );
  }

  /**
   * List Collections
   *
   * @remarks
   * Returns list of collection IDs in your account. If the result is truncated, the response also
   * provides a NextToken that you can use in the subsequent request to fetch the next set of
   * collection IDs. For an example, see Listing collections in the Amazon Rekognition Developer
   * Guide. This operation requires permissions to perform the rekognition:ListCollections action.
   *
   * @returns Success
   *
   * @throws {@link FaceCollections.ListCollectionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCollections(
    request: FaceCollections.ListCollectionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceCollections.ListCollectionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCollections"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionFaceCollectionsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceCollections.ListCollectionsError,
      },
      options,
    );
  }
}

export namespace FaceCollections {
  export type CreateCollectionRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceCollectionsApi;
  };

  export class CreateCollectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IndexFacesRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionFaceCollectionsApi;
  };

  export class IndexFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<IndexFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListCollectionsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceCollectionsApi;
  };

  export class ListCollectionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCollectionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
