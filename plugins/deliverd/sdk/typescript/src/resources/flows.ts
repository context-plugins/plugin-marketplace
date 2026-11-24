import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1FlowsCancelResponseSchema,
  type ApiV1FlowsCancelResponse,
} from "../models/api-v1-flows-cancel-response.js";
import {
  apiV1FlowsCompleteResponseSchema,
  type ApiV1FlowsCompleteResponse,
} from "../models/api-v1-flows-complete-response.js";
import { apiV1FlowsRequestInternalSchema, type ApiV1FlowsRequest } from "../models/api-v1-flows-request.js";
import { apiV1FlowsResponseSchema, type ApiV1FlowsResponse } from "../models/api-v1-flows-response.js";
import { apiV1FlowsResponse1Schema, type ApiV1FlowsResponse1 } from "../models/api-v1-flows-response1.js";
import { formatSchema, type Format } from "../models/format.js";
import {
  statusDeliverdDevFlowsApiSchema,
  type StatusDeliverdDevFlowsApi,
} from "../models/status-deliverd-dev-flows-api.js";
import type { Servers } from "../servers.js";

export class Flows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List flows
   *
   * @returns Newest first. Members are counted but not listed; read one for those.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Flows(
    request: Flows.GetApiV1FlowsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1FlowsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/flows"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevFlowsApiSchema)),
          },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1FlowsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * The flow, its members and its timeline
   *
   * @remarks
   * The timeline is every audited step across the flow and everything in it, in the order it
   * happened. allSettled says nothing is outstanding right now; it is not a claim that the work is
   * finished, because a flow is extended as it goes.
   *
   * @returns The flow
   *
   * @throws {@link Flows.GetApiV1FlowsByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1FlowsById(
    request: Flows.GetApiV1FlowsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1FlowsResponse, Flows.GetApiV1FlowsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/flows/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1FlowsResponseSchema },
        errorFactory: Flows.GetApiV1FlowsByIdError,
      },
      options,
    );
  }

  /**
   * The flow as an evidence pack
   *
   * @remarks
   * The whole record of one piece of work: every approval, review and request for information with
   * who was asked and what they said, the report's version history, and the timeline across all of
   * it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack
   * contains everything, so it takes every scope that reads any of it. ?format=csv returns the
   * timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as
   * evidence.exported, with the pack's digest, so the trail records which copy was taken.
   *
   * @returns The pack (JSON), or the timeline (CSV)
   *
   * @throws {@link Flows.GetApiV1FlowsByIdEvidenceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1FlowsByIdEvidence(
    request: Flows.GetApiV1FlowsByIdEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Flows.GetApiV1FlowsByIdEvidenceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/flows/{id}/evidence"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Flows.GetApiV1FlowsByIdEvidenceError,
      },
      options,
    );
  }

  /**
   * Start a flow: the thread tying one piece of work together
   *
   * @remarks
   * A flow groups the approvals, reviews, collections and reports that belong to one job, so the
   * history reads as one sequence rather than four unrelated tables. Nothing is attached here — a
   * member joins by naming flowId when it is created. It is a grouping and not a scheduler: nothing
   * waits on a flow and nothing is blocked by one.
   *
   * @returns The flow, open and empty
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Flows(
    request: Flows.PostApiV1FlowsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1FlowsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/flows"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1FlowsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1FlowsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Call the work off
   *
   * @remarks
   * The flow and its members stay as evidence of what was started and dropped. Cancelling a flow
   * cancels nothing inside it.
   *
   * @returns The flow, cancelled
   *
   * @throws {@link Flows.PostApiV1FlowsByIdCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1FlowsByIdCancel(
    request: Flows.PostApiV1FlowsByIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1FlowsCancelResponse, Flows.PostApiV1FlowsByIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/flows/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1FlowsCancelResponseSchema },
        errorFactory: Flows.PostApiV1FlowsByIdCancelError,
      },
      options,
    );
  }

  /**
   * Say the work is done
   *
   * @remarks
   * Only whoever started the flow may, and it stops taking new members. Allowed with members still
   * outstanding; how many is recorded and sent with the flow.completed event.
   *
   * @returns The flow, complete
   *
   * @throws {@link Flows.PostApiV1FlowsByIdCompleteError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1FlowsByIdComplete(
    request: Flows.PostApiV1FlowsByIdCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1FlowsCompleteResponse, Flows.PostApiV1FlowsByIdCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/flows/{id}/complete"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1FlowsCompleteResponseSchema },
        errorFactory: Flows.PostApiV1FlowsByIdCompleteError,
      },
      options,
    );
  }
}

export namespace Flows {
  export type GetApiV1FlowsRequest = {
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
    status?: StatusDeliverdDevFlowsApi;
    externalId?: string;
  };

  export type GetApiV1FlowsByIdRequest = {
    id: string;
  };

  export class GetApiV1FlowsByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1FlowsByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1FlowsByIdEvidenceRequest = {
    id: string;
    format?: Format;
  };

  export class GetApiV1FlowsByIdEvidenceError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1FlowsByIdEvidenceError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1FlowsRequest = {
    body?: ApiV1FlowsRequest;
  };

  export type PostApiV1FlowsByIdCancelRequest = {
    id: string;
  };

  export class PostApiV1FlowsByIdCancelError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1FlowsByIdCancelError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1FlowsByIdCompleteRequest = {
    id: string;
  };

  export class PostApiV1FlowsByIdCompleteError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1FlowsByIdCompleteError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
