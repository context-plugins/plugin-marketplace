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
  initialBackupCreateRequestSchema,
  type InitialBackupCreateRequest,
} from "../models/initial-backup-create-request.js";
import {
  initialBackupCreateResponseSchema,
  type InitialBackupCreateResponse,
} from "../models/initial-backup-create-response.js";
import {
  initialBackupListResponseSchema,
  type InitialBackupListResponse,
} from "../models/initial-backup-list-response.js";
import {
  initialBackupProgressResponseSchema,
  type InitialBackupProgressResponse,
} from "../models/initial-backup-progress-response.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to initiate and track an initial backup of existing assets in your product
 * environment.
 */
export class InitialBackup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create initial backup
   *
   * @remarks
   * Initiates an initial backup of existing assets for the active product environment. Backup for
   * new uploads must be enabled on the product environment, and the requester must be permitted to
   * initiate a backup.
   *
   * @returns Initial backup queued successfully.
   *
   * @throws {@link InitialBackup.CreateInitialBackupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createInitialBackup(
    request: InitialBackup.CreateInitialBackupRequest,
    options?: RequestOptions,
  ): ApiPromise<InitialBackupCreateResponse, InitialBackup.CreateInitialBackupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/operations/initial_backup"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => initialBackupCreateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: initialBackupCreateResponseSchema },
        errorFactory: InitialBackup.CreateInitialBackupError,
      },
      options,
    );
  }

  /**
   * Get initial backup
   *
   * @remarks
   * Retrieves the progress and status of a single initial backup operation by its ID.
   *
   * @returns Initial backup retrieved.
   *
   * @throws {@link InitialBackup.GetInitialBackupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getInitialBackup(
    request: InitialBackup.GetInitialBackupRequest,
    options?: RequestOptions,
  ): ApiPromise<InitialBackupProgressResponse, InitialBackup.GetInitialBackupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/operations/initial_backup/{id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: initialBackupProgressResponseSchema },
        errorFactory: InitialBackup.GetInitialBackupError,
      },
      options,
    );
  }

  /**
   * List initial backups
   *
   * @remarks
   * Lists initial backup operations for the active product environment, ordered from most recent to
   * oldest.
   *
   * @returns Initial backup operations retrieved.
   *
   * @throws {@link InitialBackup.ListInitialBackupsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listInitialBackups(
    request: InitialBackup.ListInitialBackupsRequest,
    options?: RequestOptions,
  ): ApiPromise<InitialBackupListResponse, InitialBackup.ListInitialBackupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/operations/initial_backup"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: initialBackupListResponseSchema },
        errorFactory: InitialBackup.ListInitialBackupsError,
      },
      options,
    );
  }
}

export namespace InitialBackup {
  export type CreateInitialBackupRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The initial backup configuration. */
    body?: InitialBackupCreateRequest;
  };

  export class CreateInitialBackupError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInitialBackupError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetInitialBackupRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The unique identifier of the initial backup operation. */
    id: string;
  };

  export class GetInitialBackupError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInitialBackupError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListInitialBackupsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The maximum number of results to return. Default is 10. @default 10 */
    maxResults?: number;
    /**
     * The cursor for pagination. Use the next_cursor value from a previous response to get the next
     * page of results.
     */
    nextCursor?: string;
  };

  export class ListInitialBackupsError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<ListInitialBackupsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
