import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1ManageRespondentsRequestInternalSchema,
  type ApiV1ManageRespondentsRequest,
} from "../models/api-v1-manage-respondents-request.js";
import {
  apiV1ManageRespondentsResponseSchema,
  type ApiV1ManageRespondentsResponse,
} from "../models/api-v1-manage-respondents-response.js";
import {
  apiV1ManageRespondentsResponse1Schema,
  type ApiV1ManageRespondentsResponse1,
} from "../models/api-v1-manage-respondents-response1.js";
import { errorSchema, type Error } from "../models/error.js";
import { responsePageSchema, type ResponsePage } from "../models/response-page.js";
import type { Servers } from "../servers.js";

export class Respondents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Look up respondents
   *
   * @remarks
   * Find living respondent profiles by externalId (exact, project-unique) or email. At least one is
   * required. Scope: respondents:read.
   *
   * @returns A page of respondents.
   *
   * @throws {@link Respondents.FindRespondentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findRespondents(
    request: Respondents.FindRespondentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageRespondentsResponse, Respondents.FindRespondentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/respondents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageRespondentsResponseSchema },
        errorFactory: Respondents.FindRespondentsError,
      },
      options,
    );
  }

  /**
   * Forget a respondent
   *
   * @remarks
   * Erase a person inside the key's project (GDPR erasure), optionally with every response they
   * submitted. The path accepts the profile id or the external id; a person named only by
   * submit-time snapshots still resolves. Destructive (Tier C): `confirm` must equal the
   * respondent's EXTERNAL id. Scope: respondents:delete — a danger-tier scope that is never part of
   * a preset and must be named explicitly at mint.
   *
   * @returns The person was forgotten.
   *
   * @throws {@link Respondents.ForgetRespondentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forgetRespondent(
    request: Respondents.ForgetRespondentRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageRespondentsResponse1, Respondents.ForgetRespondentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/respondents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageRespondentsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageRespondentsResponse1Schema },
        errorFactory: Respondents.ForgetRespondentError,
      },
      options,
    );
  }

  /**
   * List a respondent's responses
   *
   * @remarks
   * One person's response history across every form and version, newest first. Scopes:
   * respondents:read AND responses:read.
   *
   * @returns A page of responses.
   *
   * @throws {@link Respondents.ListRespondentResponsesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRespondentResponses(
    request: Respondents.ListRespondentResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponsePage, Respondents.ListRespondentResponsesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/respondents/{id}/responses"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responsePageSchema },
        errorFactory: Respondents.ListRespondentResponsesError,
      },
      options,
    );
  }
}

export namespace Respondents {
  export type FindRespondentsRequest = {
    /** The host app's stable user id. */
    externalId?: string;
    /** The respondent's email. */
    email?: string;
    /** The id from a previous page's nextCursor. Omit for the first page. */
    cursor?: string;
    /** Page size, 1–100. Default 50. @default 50 */
    limit?: number;
  };

  export const findRespondentsRequestSchema: Schema<FindRespondentsRequest> = s.lazySchema(() =>
    s.object<FindRespondentsRequest>({
      externalId: s.optional(s.string()),
      email: s.optional(s.string()),
      cursor: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
    }),
  );

  export class FindRespondentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FindRespondentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ForgetRespondentRequest = {
    /** A respondent profile id or external id. */
    id: string;
    body: ApiV1ManageRespondentsRequest;
  };

  export class ForgetRespondentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ForgetRespondentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListRespondentResponsesRequest = {
    /** The Fillo respondent id. */
    id: string;
    /** The id from a previous page's nextCursor. Omit for the first page. */
    cursor?: string;
    /** Page size, 1–100. Default 50. @default 50 */
    limit?: number;
  };

  export const listRespondentResponsesRequestSchema: Schema<ListRespondentResponsesRequest> = s.lazySchema(
    () =>
      s.object<ListRespondentResponsesRequest>({
        id: s.string(),
        cursor: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
      }),
  );

  export class ListRespondentResponsesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRespondentResponsesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
