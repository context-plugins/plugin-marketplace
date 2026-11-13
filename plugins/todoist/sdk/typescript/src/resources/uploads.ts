import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseDeleteUploadApiV1UploadsDeleteSchema,
  type ResponseDeleteUploadApiV1UploadsDelete,
} from "../models/response-delete-upload-api-v1-uploads-delete.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { uploadResultSchema, type UploadResult } from "../models/upload-result.js";
import type { Servers } from "../servers.js";

/**
 * Availability of uploads functionality and the maximum size for a file attachment are dependent on
 * the current user plan. These values are indicated by the `uploads` and `upload_limit_mb`
 * properties of the user plan limits object.
 *
 * Files can be uploaded to our servers and used as [File
 * Attachments](#tag/Sync/Comments/File-Attachments) in [comments](#tag/Comments).
 */
export class Uploads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Upload
   *
   * @remarks
   * Delete an uploaded file.
   *
   * The file must belong to the authenticated user. Returns `FILE_NOT_FOUND` when the upload cannot
   * be found.
   *
   * @returns Successful Response
   *
   * @throws {@link Uploads.DeleteUploadApiV1UploadsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUploadApiV1UploadsDelete(
    request: Uploads.DeleteUploadApiV1UploadsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseDeleteUploadApiV1UploadsDelete, Uploads.DeleteUploadApiV1UploadsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/uploads"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "file_url", value: request.fileUrl, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseDeleteUploadApiV1UploadsDeleteSchema },
        errorFactory: Uploads.DeleteUploadApiV1UploadsDeleteError,
      },
      options,
    );
  }

  /**
   * Upload File
   *
   * @remarks
   * Upload a file to Todoist.
   *
   * This endpoint accepts file uploads via two methods:
   *
   * 1. **Multipart form-data** (recommended):
   *    - Send the file as a form field with the actual file content
   *    - Optionally include `project_id` as another form field
   *    - The filename will be extracted from the Content-Disposition header
   *
   * 2. **Raw binary stream**:
   *    - Send the file content directly in the request body
   *    - Set `Content-Type` header to the file's MIME type
   *    - Set `X-File-Name` header with the desired filename
   *    - Optionally include `project_id` as a query parameter
   *
   * The optional `project_id` parameter can be used to apply workspace-specific upload limits when
   * uploading to a workspace project.
   *
   * @returns Successful Response
   *
   * @throws {@link Uploads.UploadFileApiV1UploadsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadFileApiV1UploadsPost(
    request: Uploads.UploadFileApiV1UploadsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadResult, Uploads.UploadFileApiV1UploadsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/uploads"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "file_name",
              value: request.fileName,
              schema: s.optionalNullable(s.string()),
            },
            {
              kind: "text",
              name: "project_id",
              value: request.projectId,
              schema: s.optionalNullable(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: uploadResultSchema },
        errorFactory: Uploads.UploadFileApiV1UploadsPostError,
      },
      options,
    );
  }
}

export namespace Uploads {
  export type DeleteUploadApiV1UploadsDeleteRequest = {
    fileUrl: string;
  };

  export const deleteUploadApiV1UploadsDeleteRequestSchema: Schema<DeleteUploadApiV1UploadsDeleteRequest> =
    s.lazySchema(() =>
      s.object<DeleteUploadApiV1UploadsDeleteRequest>({
        fileUrl: s.string().check(s.minLength(1)),
      }),
    );

  export class DeleteUploadApiV1UploadsDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUploadApiV1UploadsDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UploadFileApiV1UploadsPostRequest = {
    file: FileInput;
    /**
     * Name for the uploaded file. If not provided, will be extracted from Content-Disposition
     * header (multipart) or X-File-Name header (raw binary).
     */
    fileName?: string | null;
    /**
     * Project ID to apply workspace-specific upload limits when uploading to a workspace project.
     */
    projectId?: string | null;
  };

  export class UploadFileApiV1UploadsPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadFileApiV1UploadsPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
