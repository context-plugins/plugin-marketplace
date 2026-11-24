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
import { videosRequestInternalSchema, type VideosRequest } from "../models/videos-request.js";
import type { Servers } from "../servers.js";

/**
 * Upload and manage videos on a Facebook Page.
 */
export class Videos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Upload a page video
   *
   * @remarks
   * Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for
   * large files.
   *
   * @returns Video uploaded successfully
   *
   * @throws {@link Videos.UploadPageVideoError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadPageVideo(
    request: Videos.UploadPageVideoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, Videos.UploadPageVideoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{page_id}/videos"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: videosRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: Videos.UploadPageVideoError,
      },
      options,
    );
  }
}

export namespace Videos {
  export type UploadPageVideoRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    body: VideosRequest;
  };

  export class UploadPageVideoError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UploadPageVideoError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
