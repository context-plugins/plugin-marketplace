import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { actAdimagesResponseSchema, type ActAdimagesResponse } from "../models/act-adimages-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Upload and manage images used in ad creatives.
 */
export class AdImages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Upload an ad image
   *
   * @remarks
   * Uploads an image to the ad account image library for use in ad creatives. Accepts image file
   * bytes.
   *
   * @returns Image uploaded successfully
   *
   * @throws {@link AdImages.UploadAdImageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadAdImage(
    request: AdImages.UploadAdImageRequest,
    options?: RequestOptions,
  ): ApiPromise<ActAdimagesResponse, AdImages.UploadAdImageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/adimages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "filename", value: request.filename }] },
      },
      {
        success: { kind: "json", schema: actAdimagesResponseSchema },
        errorFactory: AdImages.UploadAdImageError,
      },
      options,
    );
  }
}

export namespace AdImages {
  export type UploadAdImageRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    /** The image file to upload */
    filename?: FileInput;
  };

  export class UploadAdImageError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UploadAdImageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
