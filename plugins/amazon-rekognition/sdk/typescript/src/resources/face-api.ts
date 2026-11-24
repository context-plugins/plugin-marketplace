import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionFaceApiSchema,
  type XAmzTargetAmazonRekognitionFaceApi,
} from "../models/xamz-target-amazon-rekognition-face-api.js";
import {
  xAmzTarget1AmazonRekognitionFaceApiSchema,
  type XAmzTarget1AmazonRekognitionFaceApi,
} from "../models/xamz-target1-amazon-rekognition-face-api.js";
import {
  xAmzTarget2AmazonRekognitionFaceApiSchema,
  type XAmzTarget2AmazonRekognitionFaceApi,
} from "../models/xamz-target2-amazon-rekognition-face-api.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import type { Servers } from "../servers.js";

export class FaceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Associate Faces
   *
   * @remarks
   * Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId
   * that are present in the FaceIds list is associated with the provided UserID. The number of
   * FaceIds that can be used as input in a single request is limited to 100. Note that the total
   * number of faces that can be associated with a single UserID is also limited to 100. Once a
   * UserID has 100 faces associated with it, no additional faces can be added. If more API calls
   * are made after the limit is reached, a ServiceQuotaExceededException will result. The
   * UserMatchThreshold parameter specifies the minimum user match confidence required for the face
   * to be associated with a UserID that has at least one FaceID already associated. This ensures
   * that the FaceIds are associated with the right UserID. The value ranges from 0-100 and default
   * value is 75. If successful, an array of AssociatedFace objects containing the associated
   * FaceIds is returned. If a given face is already associated with the given UserID, it will be
   * ignored and will not be returned in the response. If a given face is already associated to a
   * different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there
   *
   * @returns Success
   *
   * @throws {@link FaceApi.AssociateFacesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateFaces(
    request: FaceApi.AssociateFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceApi.AssociateFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionFaceApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceApi.AssociateFacesError,
      },
      options,
    );
  }

  /**
   * Delete Faces
   *
   * @remarks
   * Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove
   * from the collection. This operation requires permissions to perform the rekognition:DeleteFaces
   * action.
   *
   * @returns Success
   *
   * @throws {@link FaceApi.DeleteFacesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFaces(
    request: FaceApi.DeleteFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceApi.DeleteFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionFaceApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceApi.DeleteFacesError,
      },
      options,
    );
  }

  /**
   * Disassociate Faces
   *
   * @remarks
   * Removes the association between a Face supplied in an array of FaceIds and the User. If the
   * User is not present already, then a ResourceNotFound exception is thrown. If successful, an
   * array of faces that are disassociated from the User is returned. If a given face is already
   * disassociated from the given UserID, it will be ignored and not be returned in the response. If
   * a given face is already associated with a different User or not found in the collection it will
   * be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100 face IDs from a user
   * at one time.
   *
   * @returns Success
   *
   * @throws {@link FaceApi.DisassociateFacesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  disassociateFaces(
    request: FaceApi.DisassociateFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceApi.DisassociateFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DisassociateFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionFaceApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceApi.DisassociateFacesError,
      },
      options,
    );
  }

  /**
   * List Faces
   *
   * @remarks
   * Returns metadata for faces in the specified collection. This metadata includes information such
   * as the bounding box coordinates, the confidence (that the bounding box contains a face), and
   * face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer
   * Guide. This operation requires permissions to perform the rekognition:ListFaces action.
   *
   * @returns Success
   *
   * @throws {@link FaceApi.ListFacesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFaces(
    request: FaceApi.ListFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceApi.ListFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceApi.ListFacesError,
      },
      options,
    );
  }

  /**
   * Search Faces
   *
   * @remarks
   * For a given input face ID, searches for matching faces in the collection the face belongs to.
   * You get a face ID when you add a face to the collection using the IndexFaces operation. The
   * operation compares the features of the input face with faces in the specified collection. You
   * can also search faces without indexing faces by using the SearchFacesByImage operation. The
   * operation response returns an array of faces that match, ordered by similarity score with the
   * highest similarity first. More specifically, it is an array of metadata for each face match
   * that is found. Along with the metadata, the response also includes a confidence value for each
   * face match, indicating the confidence that the specific face matches the input face. For an
   * example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide.
   * This operation requires permissions to perform the rekognition:SearchFaces action.
   *
   * @returns Success
   *
   * @throws {@link FaceApi.SearchFacesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchFaces(
    request: FaceApi.SearchFacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceApi.SearchFacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SearchFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceApi.SearchFacesError,
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
   * @throws {@link FaceApi.SearchFacesByImageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchFacesByImage(
    request: FaceApi.SearchFacesByImageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, FaceApi.SearchFacesByImageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SearchFacesByImage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FaceApi.SearchFacesByImageError,
      },
      options,
    );
  }
}

export namespace FaceApi {
  export type AssociateFacesRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionFaceApi;
  };

  export class AssociateFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteFacesRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceApi;
  };

  export class DeleteFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DisassociateFacesRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceApi;
  };

  export class DisassociateFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListFacesRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SearchFacesRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class SearchFacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchFacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SearchFacesByImageRequestParams = {
    xAmzTarget: XAmzTarget5;
  };

  export class SearchFacesByImageError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchFacesByImageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
