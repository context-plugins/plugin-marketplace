import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ApprovalsAnswersRequestInternalSchema,
  type ApiV1ApprovalsAnswersRequest,
} from "../models/api-v1-approvals-answers-request.js";
import {
  apiV1ApprovalsAnswersResponseSchema,
  type ApiV1ApprovalsAnswersResponse,
} from "../models/api-v1-approvals-answers-response.js";
import {
  apiV1ApprovalsCancelResponseSchema,
  type ApiV1ApprovalsCancelResponse,
} from "../models/api-v1-approvals-cancel-response.js";
import {
  apiV1ApprovalsRequestInternalSchema,
  type ApiV1ApprovalsRequest,
} from "../models/api-v1-approvals-request.js";
import {
  apiV1ApprovalsResponseSchema,
  type ApiV1ApprovalsResponse,
} from "../models/api-v1-approvals-response.js";
import {
  apiV1ApprovalsResponse1Schema,
  type ApiV1ApprovalsResponse1,
} from "../models/api-v1-approvals-response1.js";
import {
  apiV1ApprovalsSessionsRequestInternalSchema,
  type ApiV1ApprovalsSessionsRequest,
} from "../models/api-v1-approvals-sessions-request.js";
import {
  apiV1ApprovalsSessionsResponseSchema,
  type ApiV1ApprovalsSessionsResponse,
} from "../models/api-v1-approvals-sessions-response.js";
import { status1Schema, type Status1 } from "../models/status1.js";
import type { Servers } from "../servers.js";

export class Approvals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List approval requests
   *
   * @returns Newest first
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Approvals(
    request: Approvals.GetApiV1ApprovalsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ApprovalsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/approvals"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status1Schema)) },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
          { name: "approver", value: request.approver, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ApprovalsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * The request, its decision, and any questions the approver asked
   *
   * @returns The request
   *
   * @throws {@link Approvals.GetApiV1ApprovalsByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ApprovalsById(
    request: Approvals.GetApiV1ApprovalsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ApprovalsResponse, Approvals.GetApiV1ApprovalsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/approvals/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ApprovalsResponseSchema },
        errorFactory: Approvals.GetApiV1ApprovalsByIdError,
      },
      options,
    );
  }

  /**
   * Ask people to approve an action before it happens
   *
   * @remarks
   * Creates a request and returns its page. The decision is a person's: read it by polling GET
   * /api/v1/approvals/{id}, by the organisation's webhooks (approval.approved, approval.rejected,
   * approval.expired), or by the MCP tool get_approval. Approvers are members named by email or id;
   * the organisation's admins when omitted. The requester cannot be an approver of their own
   * request.
   *
   * @returns The request, pending
   *
   * @throws {@link Approvals.PostApiV1ApprovalsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Approvals(
    request: Approvals.PostApiV1ApprovalsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ApprovalsResponse, Approvals.PostApiV1ApprovalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/approvals"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ApprovalsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ApprovalsResponseSchema },
        errorFactory: Approvals.PostApiV1ApprovalsError,
      },
      options,
    );
  }

  /**
   * Answer a question the approver asked
   *
   * @remarks
   * Only the requester may answer. The answer is shown on the page and the asker is told.
   *
   * @returns The request
   *
   * @throws {@link Approvals.PostApiV1ApprovalsByIdAnswersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ApprovalsByIdAnswers(
    request: Approvals.PostApiV1ApprovalsByIdAnswersRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ApprovalsAnswersResponse, Approvals.PostApiV1ApprovalsByIdAnswersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/approvals/{id}/answers"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ApprovalsAnswersRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ApprovalsAnswersResponseSchema },
        errorFactory: Approvals.PostApiV1ApprovalsByIdAnswersError,
      },
      options,
    );
  }

  /**
   * Withdraw a pending request
   *
   * @returns The request, cancelled
   *
   * @throws {@link Approvals.PostApiV1ApprovalsByIdCancelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ApprovalsByIdCancel(
    request: Approvals.PostApiV1ApprovalsByIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ApprovalsCancelResponse, Approvals.PostApiV1ApprovalsByIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/approvals/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ApprovalsCancelResponseSchema },
        errorFactory: Approvals.PostApiV1ApprovalsByIdCancelError,
      },
      options,
    );
  }

  /**
   * A page on which one approver decides this request, inside your product
   *
   * @remarks
   * Decision sessions are how an approval is decided in your own app. `mode: "hosted"` returns a
   * `url` to send the approver to, with an optional `returnUrl` for afterwards (`deliverd_session`
   * and `deliverd_decision` are added to it). `mode: "embedded"` returns a `clientSecret` to mount
   * with https://deliverd.dev/elements/v1.js, framed only by `origin`, which must be on the
   * organisation's embedding allow-list (Organisation → Security → Embedding) or http://localhost
   * while you develop. The `url` and `clientSecret` are returned once. Neither decides anything:
   * the approver signs in, or confirms a code sent to their own address, before the decision bar
   * appears — an API key is still never a person. Needs approvals:write.
   *
   * @returns The session, with its url and clientSecret
   *
   * @throws {@link Approvals.PostApiV1ApprovalsByIdSessionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ApprovalsByIdSessions(
    request: Approvals.PostApiV1ApprovalsByIdSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ApprovalsSessionsResponse, Approvals.PostApiV1ApprovalsByIdSessionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/approvals/{id}/sessions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ApprovalsSessionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ApprovalsSessionsResponseSchema },
        errorFactory: Approvals.PostApiV1ApprovalsByIdSessionsError,
      },
      options,
    );
  }
}

export namespace Approvals {
  export type GetApiV1ApprovalsRequest = {
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
    status?: Status1;
    externalId?: string;
    /**
     * The requests naming one person: a member's id or email, or an admitted guest's email. An
     * approver's inbox, for your own UI.
     */
    approver?: string;
  };

  export type GetApiV1ApprovalsByIdRequest = {
    id: string;
  };

  export class GetApiV1ApprovalsByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ApprovalsByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ApprovalsRequest = {
    body?: ApiV1ApprovalsRequest;
  };

  export class PostApiV1ApprovalsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ApprovalsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ApprovalsByIdAnswersRequest = {
    id: string;
    body?: ApiV1ApprovalsAnswersRequest;
  };

  export class PostApiV1ApprovalsByIdAnswersError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ApprovalsByIdAnswersError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ApprovalsByIdCancelRequest = {
    id: string;
  };

  export class PostApiV1ApprovalsByIdCancelError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ApprovalsByIdCancelError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ApprovalsByIdSessionsRequest = {
    id: string;
    body?: ApiV1ApprovalsSessionsRequest;
  };

  export class PostApiV1ApprovalsByIdSessionsError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ApprovalsByIdSessionsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
