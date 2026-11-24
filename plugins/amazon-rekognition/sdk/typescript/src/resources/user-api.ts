import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionUserApiSchema,
  type XAmzTargetAmazonRekognitionUserApi,
} from "../models/xamz-target-amazon-rekognition-user-api.js";
import {
  xAmzTarget1AmazonRekognitionUserApiSchema,
  type XAmzTarget1AmazonRekognitionUserApi,
} from "../models/xamz-target1-amazon-rekognition-user-api.js";
import {
  xAmzTarget2AmazonRekognitionUserApiSchema,
  type XAmzTarget2AmazonRekognitionUserApi,
} from "../models/xamz-target2-amazon-rekognition-user-api.js";
import {
  xAmzTarget3AmazonRekognitionUserApiSchema,
  type XAmzTarget3AmazonRekognitionUserApi,
} from "../models/xamz-target3-amazon-rekognition-user-api.js";
import {
  xAmzTarget4AmazonRekognitionUserApiSchema,
  type XAmzTarget4AmazonRekognitionUserApi,
} from "../models/xamz-target4-amazon-rekognition-user-api.js";
import type { Servers } from "../servers.js";

export class UserApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create User
   *
   * @remarks
   * Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter,
   * which is a user provided ID which should be unique within the collection. The provided UserId
   * will alias the system generated UUID to make the UserId more user friendly. Uses a ClientToken,
   * an idempotency token that ensures a call to CreateUser completes only once. If the value is not
   * supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries
   * after a network error results from making multiple CreateUser calls.
   *
   * @returns Success
   *
   * @throws {@link UserApi.CreateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createUser(
    request: UserApi.CreateUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserApi.CreateUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateUser"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionUserApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserApi.CreateUserError,
      },
      options,
    );
  }

  /**
   * Delete User
   *
   * @remarks
   * Deletes the specified UserID within the collection. Faces that are associated with the UserID
   * are disassociated from the UserID before deleting the specified UserID. If the specified
   * Collection or UserID is already deleted or not found, a ResourceNotFoundException will be
   * thrown. If the action is successful with a 200 response, an empty HTTP body is returned.
   *
   * @returns Success
   *
   * @throws {@link UserApi.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteUser(
    request: UserApi.DeleteUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserApi.DeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteUser"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionUserApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserApi.DeleteUserError,
      },
      options,
    );
  }

  /**
   * List Users
   *
   * @remarks
   * Returns metadata of the User such as UserID in the specified collection. Anonymous User (to
   * reserve faces without any identity) is not returned as part of this request. The results are
   * sorted by system generated primary key ID. If the response is truncated, NextToken is returned
   * in the response that can be used in the subsequent request to retrieve the next set of
   * identities.
   *
   * @returns Success
   *
   * @throws {@link UserApi.ListUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listUsers(
    request: UserApi.ListUsersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserApi.ListUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListUsers"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonRekognitionUserApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserApi.ListUsersError,
      },
      options,
    );
  }

  /**
   * Search Users
   *
   * @remarks
   * Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to
   * find the closest UserID (with a highest similarity) to associate a face. The request must be
   * provided with either FaceId or UserId. The operation returns an array of UserID that match the
   * FaceId or UserId, ordered by similarity score with the highest similarity first.
   *
   * @returns Success
   *
   * @throws {@link UserApi.SearchUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchUsers(
    request: UserApi.SearchUsersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserApi.SearchUsersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SearchUsers"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonRekognitionUserApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserApi.SearchUsersError,
      },
      options,
    );
  }

  /**
   * Search Users By Image
   *
   * @remarks
   * Searches for UserIDs using a supplied image. It first detects the largest face in the image,
   * and then searches a specified collection for matching UserIDs. The operation returns an array
   * of UserIDs that match the face in the supplied image, ordered by similarity score with the
   * highest similarity first. It also returns a bounding box for the face found in the input image.
   * Information about faces detected in the supplied image, but not used for the search, is
   * returned in an array of UnsearchedFace objects. If no valid face is detected in the image, the
   * response will contain an empty UserMatches list and no SearchedFace object.
   *
   * @returns Success
   *
   * @throws {@link UserApi.SearchUsersByImageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchUsersByImage(
    request: UserApi.SearchUsersByImageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserApi.SearchUsersByImageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SearchUsersByImage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonRekognitionUserApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserApi.SearchUsersByImageError,
      },
      options,
    );
  }
}

export namespace UserApi {
  export type CreateUserRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionUserApi;
  };

  export class CreateUserError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteUserRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionUserApi;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListUsersRequestParams = {
    xAmzTarget: XAmzTarget2AmazonRekognitionUserApi;
  };

  export class ListUsersError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListUsersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SearchUsersRequestParams = {
    xAmzTarget: XAmzTarget3AmazonRekognitionUserApi;
  };

  export class SearchUsersError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchUsersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SearchUsersByImageRequestParams = {
    xAmzTarget: XAmzTarget4AmazonRekognitionUserApi;
  };

  export class SearchUsersByImageError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchUsersByImageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
