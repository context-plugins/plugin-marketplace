import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorSchema, type Error } from "../models/error.js";
import { uploadUrlResponseInternalSchema, type UploadUrlResponse } from "../models/upload-url-response.js";
import type { Servers } from "../servers.js";

/**
 * File upload endpoints provide pre-signed URLs for securely uploading build artifacts to
 * Contentstack Launch infrastructure before triggering a deployment.
 */
export class FileUploads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get project upload URL
   *
   * @remarks
   * Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file.
   * Use this URL to upload your build package before triggering a deployment.
   *
   * @returns A pre-signed upload URL for project files.
   *
   * @throws {@link FileUploads.GetProjectUploadUrlError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectUploadUrl(
    options?: RequestOptions,
  ): ApiPromise<UploadUrlResponse, FileUploads.GetProjectUploadUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects/upload-url"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadUrlResponseInternalSchema },
        errorFactory: FileUploads.GetProjectUploadUrlError,
      },
      options,
    );
  }
}

export namespace FileUploads {
  export class GetProjectUploadUrlError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectUploadUrlError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
