import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { backupResponseSchema, type BackupResponse } from "../models/backup-response.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

/**
 * _Availability of backups functionality is dependent on the current user plan. This value is
 * indicated by the automatic_backups property of the user plan limits object._
 */
export class Backups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Download Backup
   *
   * @remarks
   * Download a backup archive.
   *
   * This endpoint requires the `data:read_write` scope. The `backups:read` scope only grants access
   * to `GET /api/v1/backups`.
   *
   * Validates that the requested backup belongs to the authenticated user and redirects to a signed
   * CloudFront URL that expires after one minute.
   *
   * @returns Successful Response
   *
   * @throws {@link Backups.DownloadBackupApiV1BackupsDownloadGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadBackupApiV1BackupsDownloadGet(
    request: Backups.DownloadBackupApiV1BackupsDownloadGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Backups.DownloadBackupApiV1BackupsDownloadGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/backups/download"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "file", value: request.file, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Backups.DownloadBackupApiV1BackupsDownloadGetError,
      },
      options,
    );
  }

  /**
   * Get Backups
   *
   * @remarks
   * Todoist creates a backup archive of users' data on a daily basis. Backup archives can also be
   * accessed from the web app (Todoist Settings -> Backups).
   *
   * This endpoint accepts the `backups:read` scope, the `data:read_write` scope, or a personal API
   * token. The `backups:read` scope bypasses MFA and only grants access to `GET /api/v1/backups`.
   * When using `data:read_write` or a personal API token for an account with MFA enabled, the MFA
   * token is required.
   *
   * @returns Successful Response
   *
   * @throws {@link Backups.GetBackupsApiV1BackupsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBackupsApiV1BackupsGet(
    request: Backups.GetBackupsApiV1BackupsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BackupResponse[], Backups.GetBackupsApiV1BackupsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/backups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "mfa_token", value: request.mfaToken, schema: s.optionalNullable(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => backupResponseSchema)) },
        errorFactory: Backups.GetBackupsApiV1BackupsGetError,
      },
      options,
    );
  }
}

export namespace Backups {
  export type DownloadBackupApiV1BackupsDownloadGetRequest = {
    file: string;
  };

  export class DownloadBackupApiV1BackupsDownloadGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadBackupApiV1BackupsDownloadGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetBackupsApiV1BackupsGetRequest = {
    mfaToken?: string | null;
  };

  export class GetBackupsApiV1BackupsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBackupsApiV1BackupsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
