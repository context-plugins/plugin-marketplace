import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companiesApiJournalsApiJournalLinesResponseInternalSchema,
  type CompaniesApiJournalsApiJournalLinesResponse,
} from "../models/companies-api-journals-api-journal-lines-response.js";
import {
  companiesApiJournalsResponseInternalSchema,
  type CompaniesApiJournalsResponse,
} from "../models/companies-api-journals-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { journalCreateInternalSchema, type JournalCreate } from "../models/journal-create.js";
import { journalInternalSchema, type Journal } from "../models/journal.js";
import type { Servers } from "../servers.js";

/**
 * Manage general journals and journal lines
 */
export class Journals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Journal
   *
   * @remarks
   * Creates a new journal in the specified company.
   *
   * @returns Journal created successfully
   *
   * @throws {@link Journals.CreateJournalError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createJournal(
    request: Journals.CreateJournalRequest,
    options?: RequestOptions,
  ): ApiPromise<Journal, Journals.CreateJournalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/journals"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: journalCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: journalInternalSchema },
        errorFactory: Journals.CreateJournalError,
      },
      options,
    );
  }

  /**
   * List Journal Lines
   *
   * @remarks
   * Returns a list of journal line objects for a specific journal.
   *
   * @returns Successfully retrieved journal lines
   *
   * @throws {@link Journals.ListJournalLinesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listJournalLines(
    request: Journals.ListJournalLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiJournalsApiJournalLinesResponse, Journals.ListJournalLinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/journals({journal_id})/journalLines"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "journal_id", value: request.journalId, schema: s.string() },
        ],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiJournalsApiJournalLinesResponseInternalSchema },
        errorFactory: Journals.ListJournalLinesError,
      },
      options,
    );
  }

  /**
   * List Journals
   *
   * @remarks
   * Returns a list of journal objects.
   *
   * @returns Successfully retrieved journals
   *
   * @throws {@link Journals.ListJournalsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listJournals(
    request: Journals.ListJournalsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiJournalsResponse, Journals.ListJournalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/journals"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiJournalsResponseInternalSchema },
        errorFactory: Journals.ListJournalsError,
      },
      options,
    );
  }
}

export namespace Journals {
  export type CreateJournalRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: JournalCreate;
  };

  export class CreateJournalError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateJournalError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListJournalLinesRequest = {
    /** The unique identifier of the company */
    companyId: string;
    journalId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listJournalLinesRequestSchema: Schema<ListJournalLinesRequest> = s.lazySchema(() =>
    s.object<ListJournalLinesRequest>({
      companyId: s.string(),
      journalId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListJournalLinesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListJournalLinesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListJournalsRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listJournalsRequestSchema: Schema<ListJournalsRequest> = s.lazySchema(() =>
    s.object<ListJournalsRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListJournalsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListJournalsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
