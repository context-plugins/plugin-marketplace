import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  deleteBackupVersionsRequestSchema,
  type DeleteBackupVersionsRequest,
} from "../models/delete-backup-versions-request.js";
import {
  deleteBackupVersionsResponseSchema,
  type DeleteBackupVersionsResponse,
} from "../models/delete-backup-versions-response.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to manage backup versions.
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
   * Delete backed up versions
   *
   * @remarks
   * Deletes specific backed up versions of an asset identified by asset ID. This operation is
   * irreversible and deleted versions cannot be recovered.
   *
   * @returns Backup versions successfully deleted
   *
   * @throws {@link Backups.DeleteBackupVersionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteBackupVersions(
    request: Backups.DeleteBackupVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteBackupVersionsResponse, Backups.DeleteBackupVersionsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/backup/{asset_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "asset_id", value: request.assetId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteBackupVersionsRequestSchema },
      },
      {
        success: { kind: "json", schema: deleteBackupVersionsResponseSchema },
        errorFactory: Backups.DeleteBackupVersionsError,
      },
      options,
    );
  }
}

export namespace Backups {
  export type DeleteBackupVersionsRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The asset IDs and version IDs to delete. */
    body: DeleteBackupVersionsRequest;
  };

  export class DeleteBackupVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBackupVersionsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
