import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  auditEntriesGetResponseSchema,
  type AuditEntriesGetResponse,
} from "../models/audit-entries-get-response.js";
import { idpErrorSchema, type IdpError } from "../models/idp-error.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for retrieving audit logs, hosted on the Authlete IdP server.
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
   * Get Audit Logs
   *
   * @remarks
   * Retrieve audit logs as a cursor-paginated list. Results can be filtered by time range, event
   * type, and organization.
   *
   * @returns A page of audit log entries matching the query.
   *
   * @throws {@link AuditLogs.AuditEntriesGetIdpApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  auditEntriesGetIdpApi(
    request: AuditLogs.AuditEntriesGetIdpApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditEntriesGetResponse, AuditLogs.AuditEntriesGetIdpApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/audit/entries"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "types", value: request.types, schema: s.optional(s.array(s.string())) },
          { name: "organizationId", value: request.organizationId, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditEntriesGetResponseSchema },
        errorFactory: AuditLogs.AuditEntriesGetIdpApiError,
      },
      options,
    );
  }

  /**
   * Get Audit Log Event Types
   *
   * @remarks
   * Returns the list of available audit log event types for this environment.
   *
   * Accessible with a user access token or an organization token that has the `view_audit_log`
   * permission (e.g. a token created with the `admin` or `audit_reader` preset).
   *
   * This endpoint is hosted on the Authlete IdP server (`https://login.authlete.com`), not on the
   * regional API clusters.
   *
   * @returns List of available audit event type strings.
   *
   * @throws {@link AuditLogs.AuditTypesGetIdpApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  auditTypesGetIdpApi(options?: RequestOptions): ApiPromise<string[], AuditLogs.AuditTypesGetIdpApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/audit/types"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: AuditLogs.AuditTypesGetIdpApiError,
      },
      options,
    );
  }
}

export namespace AuditLogs {
  export type AuditEntriesGetIdpApiRequest = {
    /** Return logs after this timestamp (ISO 8601). */
    after?: Date;
    /** Return logs before this timestamp (ISO 8601). */
    before?: Date;
    /**
     * Filter by event type (e.g. `service.create`, `security.login`, `client.create`). Can be
     * specified multiple times. The set of available event types is environment-specific and
     * includes server-side types; retrieve the full list from the `/api/audit/types` endpoint.
     */
    types?: string[];
    /**
     * The organization to retrieve audit logs for. Not required when authenticating with an
     * organization token — the token's own organization is used, and a differing value is rejected.
     * Required for user access tokens, unless the user is an Authlete administrator (administrators
     * may omit it to query across all organizations).
     */
    organizationId?: number;
    /**
     * The maximum number of entries to return per page. Values outside the allowed range are
     * clamped; the effective value is echoed back in the response.
     *
     * @default 100
     */
    limit?: number;
    /**
     * An opaque cursor returned as `nextCursor` by a previous response. When provided, it takes
     * precedence over the `before` parameter.
     */
    cursor?: string;
  };

  export class AuditEntriesGetIdpApiError extends ApiError {
    declare readonly payload:
      | Declared<"idpError", IdpError>
      | Declared<"idpError2", IdpError>
      | Declared<"idpError3", IdpError>
      | Declared<"idpError4", IdpError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuditEntriesGetIdpApiError> = [
      { on: 400, kind: "idpError", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 401, kind: "idpError2", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 403, kind: "idpError3", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 500, kind: "idpError4", decode: { kind: "json", schema: idpErrorSchema } },
    ];
  }

  export class AuditTypesGetIdpApiError extends ApiError {
    declare readonly payload:
      | Declared<"idpError", IdpError>
      | Declared<"idpError2", IdpError>
      | Declared<"idpError3", IdpError>
      | Declared<"idpError4", IdpError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuditTypesGetIdpApiError> = [
      { on: 400, kind: "idpError", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 401, kind: "idpError2", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 403, kind: "idpError3", decode: { kind: "json", schema: idpErrorSchema } },
      { on: 500, kind: "idpError4", decode: { kind: "json", schema: idpErrorSchema } },
    ];
  }
}
