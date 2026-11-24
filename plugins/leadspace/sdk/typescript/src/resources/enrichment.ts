import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkAcceptedSchema, type BulkAccepted } from "../models/bulk-accepted.js";
import {
  bulkEnrichmentRequestInternalSchema,
  type BulkEnrichmentRequest,
} from "../models/bulk-enrichment-request.js";
import { enrichmentResultSchema, type EnrichmentResult } from "../models/enrichment-result.js";
import {
  errorLeadspaceApiV4EnrichmentApiSchema,
  type ErrorLeadspaceApiV4EnrichmentApi,
} from "../models/error-leadspace-api-v4-enrichment-api.js";
import {
  singleEnrichmentRequestSchema,
  type SingleEnrichmentRequest,
} from "../models/single-enrichment-request.js";
import type { Servers } from "../servers.js";

/**
 * Single and bulk person and company enrichment
 */
export class Enrichment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit a bulk enrichment job
   *
   * @remarks
   * Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl
   * receives a notification when processing completes.
   *
   * @returns The bulk job was successfully accepted
   *
   * @throws {@link Enrichment.EnrichBulkRecordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichBulkRecords(
    request: Enrichment.EnrichBulkRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkAccepted, Enrichment.EnrichBulkRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/enrichment/enrich/bulk"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkEnrichmentRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkAcceptedSchema },
        errorFactory: Enrichment.EnrichBulkRecordsError,
      },
      options,
    );
  }

  /**
   * Enrich a single person and/or company record
   *
   * @remarks
   * Synchronously enriches one record. Account enrichment requires a company name. Person
   * enrichment requires first name, last name, and one of company name, email address, or website.
   *
   * @returns The enrichment request was successfully processed
   *
   * @throws {@link Enrichment.EnrichSingleRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichSingleRecord(
    request: Enrichment.EnrichSingleRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<EnrichmentResult, Enrichment.EnrichSingleRecordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/enrichment/enrich/single"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: singleEnrichmentRequestSchema },
      },
      {
        success: { kind: "json", schema: enrichmentResultSchema },
        errorFactory: Enrichment.EnrichSingleRecordError,
      },
      options,
    );
  }
}

export namespace Enrichment {
  export type EnrichBulkRecordsRequest = {
    body: BulkEnrichmentRequest;
  };

  export class EnrichBulkRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"errorLeadspaceApiV4EnrichmentApi", ErrorLeadspaceApiV4EnrichmentApi>
      | Declared<"error401", undefined>
      | Declared<"errorLeadspaceApiV4EnrichmentApi2", ErrorLeadspaceApiV4EnrichmentApi>
      | Declared<"errorLeadspaceApiV4EnrichmentApi3", ErrorLeadspaceApiV4EnrichmentApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichBulkRecordsError> = [
      {
        on: 400,
        kind: "errorLeadspaceApiV4EnrichmentApi",
        decode: { kind: "json", schema: errorLeadspaceApiV4EnrichmentApiSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 427,
        kind: "errorLeadspaceApiV4EnrichmentApi2",
        decode: { kind: "json", schema: errorLeadspaceApiV4EnrichmentApiSchema },
      },
      {
        on: 500,
        kind: "errorLeadspaceApiV4EnrichmentApi3",
        decode: { kind: "json", schema: errorLeadspaceApiV4EnrichmentApiSchema },
      },
    ];
  }

  export type EnrichSingleRecordRequest = {
    body: SingleEnrichmentRequest;
  };

  export class EnrichSingleRecordError extends ApiError {
    declare readonly payload:
      | Declared<"errorLeadspaceApiV4EnrichmentApi", ErrorLeadspaceApiV4EnrichmentApi>
      | Declared<"error401", undefined>
      | Declared<"error405", undefined>
      | Declared<"error415", undefined>
      | Declared<"errorLeadspaceApiV4EnrichmentApi2", ErrorLeadspaceApiV4EnrichmentApi>
      | Declared<"error429", undefined>
      | Declared<"errorLeadspaceApiV4EnrichmentApi3", ErrorLeadspaceApiV4EnrichmentApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichSingleRecordError> = [
      {
        on: 400,
        kind: "errorLeadspaceApiV4EnrichmentApi",
        decode: { kind: "json", schema: errorLeadspaceApiV4EnrichmentApiSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 415, kind: "error415", decode: { kind: "empty" } },
      {
        on: 427,
        kind: "errorLeadspaceApiV4EnrichmentApi2",
        decode: { kind: "json", schema: errorLeadspaceApiV4EnrichmentApiSchema },
      },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      {
        on: 500,
        kind: "errorLeadspaceApiV4EnrichmentApi3",
        decode: { kind: "json", schema: errorLeadspaceApiV4EnrichmentApiSchema },
      },
    ];
  }
}
