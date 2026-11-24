import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { auditLogListSchema, type AuditLogList } from "../models/audit-log-list.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Audit logs track all administrative actions taken within an automation project, providing a
 * history of configuration changes.
 */
export class AuditLogs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all audit logs
   *
   * @remarks
   * Retrieves all audit log entries for administrative actions taken within the project such as
   * creating, updating, or deleting automations and configuration changes.
   *
   * @returns A list of audit log entries.
   *
   * @throws {@link AuditLogs.GetAllAuditLogsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAuditLogs(
    request: AuditLogs.GetAllAuditLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditLogList, AuditLogs.GetAllAuditLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/audit-logs",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditLogListSchema },
        errorFactory: AuditLogs.GetAllAuditLogsError,
      },
      options,
    );
  }
}

export namespace AuditLogs {
  export type GetAllAuditLogsRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class GetAllAuditLogsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAuditLogsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
