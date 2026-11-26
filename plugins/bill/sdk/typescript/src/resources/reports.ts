import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auditTrailEntrySchema, type AuditTrailEntry } from "../models/audit-trail-entry.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import type { Servers } from "../servers.js";

export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get audit trail details for a vendor
   *
   * @remarks
   * Get audit trail details about changes made to a vendor object. The audit trail lists records
   * for each create and edit operation.
   *
   * See Get audit trail details in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Get audit trail details response
   *
   * @throws {@link Reports.GetVendorAuditTrailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVendorAuditTrail(
    request: Reports.GetVendorAuditTrailRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditTrailEntry[], Reports.GetVendorAuditTrailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/reports/audit-trail/vendor/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [
          {
            name: "includeArchived",
            value: request.includeArchived,
            schema: s.optionalNullable(s.boolean()),
          },
          { name: "start", value: request.start, schema: s.optionalNullable(s.int()) },
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => auditTrailEntrySchema)) },
        errorFactory: Reports.GetVendorAuditTrailError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type GetVendorAuditTrailRequest = {
    vendorId: string;
    includeArchived?: boolean | null;
    start?: number | null;
    max?: number | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getVendorAuditTrailRequestSchema: Schema<GetVendorAuditTrailRequest> = s.lazySchema(() =>
    s.object<GetVendorAuditTrailRequest>({
      vendorId: s.string().check(s.minLength(1)),
      includeArchived: s.optionalNullable(s.boolean()),
      start: s.optionalNullable(s.int()),
      max: s.optionalNullable(s.int()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetVendorAuditTrailError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVendorAuditTrailError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
