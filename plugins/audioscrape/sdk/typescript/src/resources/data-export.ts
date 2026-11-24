import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import {
  createExportJobResponseSchema,
  type CreateExportJobResponse,
} from "../models/create-export-job-response.js";
import { exportJobStatusSchema, type ExportJobStatus } from "../models/export-job-status.js";
import type { Servers } from "../servers.js";

/**
 * Customer-initiated bulk export of workspace data (audio, transcripts, items, metadata) into a
 * downloadable archive
 */
export class DataExport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Request an export of all workspace data
   *
   * @remarks
   * Creates an asynchronous job to package the workspace's audio files, transcripts, items, and
   * metadata into a single downloadable archive. Only workspace `owner` or `admin` members may call
   * this endpoint.
   *
   * At most one job per workspace can be in `queued` or `running` status at any time; further
   * requests return `429` until the active job finishes. Poll `GET
   * /api/workspaces/{workspace}/export/{job_id}` for status.
   *
   * @returns Export job created and queued for processing
   *
   * @throws {@link DataExport.CreateWorkspaceExportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWorkspaceExport(
    request: DataExport.CreateWorkspaceExportRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateExportJobResponse, DataExport.CreateWorkspaceExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/workspaces/{workspace}/export"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace", value: request.workspace, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createExportJobResponseSchema },
        errorFactory: DataExport.CreateWorkspaceExportError,
      },
      options,
    );
  }

  /**
   * Poll the status of a workspace export job
   *
   * @remarks
   * Returns the current lifecycle state of an export job. When `status` is `completed`,
   * `download_url` is a signed URL valid for 15 minutes (until `download_expires_at`); each call
   * signs a fresh one. A finished export stays downloadable for 7 days, after which `status` reads
   * `expired`.
   *
   * Caller must be a member of the workspace (any role).
   *
   * @returns Current status of the export job
   *
   * @throws {@link DataExport.GetWorkspaceExportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceExport(
    request: DataExport.GetWorkspaceExportRequest,
    options?: RequestOptions,
  ): ApiPromise<ExportJobStatus, DataExport.GetWorkspaceExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/workspaces/{workspace}/export/{job_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "workspace", value: request.workspace, schema: s.int() },
          { name: "job_id", value: request.jobId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exportJobStatusSchema },
        errorFactory: DataExport.GetWorkspaceExportError,
      },
      options,
    );
  }
}

export namespace DataExport {
  export type CreateWorkspaceExportRequest = {
    /** Workspace ID */
    workspace: number;
  };

  export class CreateWorkspaceExportError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWorkspaceExportError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type GetWorkspaceExportRequest = {
    /** Workspace ID */
    workspace: number;
    /** Export job ID returned by POST /api/workspaces/{workspace}/export */
    jobId: number;
  };

  export class GetWorkspaceExportError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceExportError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
