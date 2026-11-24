import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { photosRequestInternalSchema, type PhotosRequest } from "../models/photos-request.js";
import type { Servers } from "../servers.js";

/**
 * Upload and manage photos on a Facebook Page.
 */
export class Photos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Upload a page photo
   *
   * @remarks
   * Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for
   * later use in posts.
   *
   * @returns Photo uploaded successfully
   *
   * @throws {@link Photos.UploadPagePhotoError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadPagePhoto(
    request: Photos.UploadPagePhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, Photos.UploadPagePhotoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{page_id}/photos"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: photosRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: Photos.UploadPagePhotoError,
      },
      options,
    );
  }
}

export namespace Photos {
  export type UploadPagePhotoRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    body: PhotosRequest;
  };

  export class UploadPagePhotoError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UploadPagePhotoError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
