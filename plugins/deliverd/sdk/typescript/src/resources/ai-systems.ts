import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1AiSystemsModelChangeRequestInternalSchema,
  type ApiV1AiSystemsModelChangeRequest,
} from "../models/api-v1-ai-systems-model-change-request.js";
import {
  apiV1AiSystemsRequestInternalSchema,
  type ApiV1AiSystemsRequest,
} from "../models/api-v1-ai-systems-request.js";
import {
  apiV1AiSystemsRequest1InternalSchema,
  type ApiV1AiSystemsRequest1,
} from "../models/api-v1-ai-systems-request1.js";
import {
  apiV1AiSystemsTransitionsRequestInternalSchema,
  type ApiV1AiSystemsTransitionsRequest,
} from "../models/api-v1-ai-systems-transitions-request.js";
import {
  statusDeliverdDevAiSystemsApiSchema,
  type StatusDeliverdDevAiSystemsApi,
} from "../models/status-deliverd-dev-ai-systems-api.js";
import type { Servers } from "../servers.js";

export class AiSystems {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The organisation's register of AI systems
   *
   * @returns { aiSystems }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1AiSystems(
    request: AiSystems.GetApiV1AiSystemsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/ai-systems"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevAiSystemsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * One AI register record: the system, its lifecycle, its roles, and the governed…
   *
   * @remarks
   * `system` is the record; `status` and `steps` say where it stands in its lifecycle and which
   * steps out of it the caller may take (with every reason when not); `roles` are the members who
   * answer for it; `history` is every move; `versions` are snapshots of what it said;
   * `governedTaskIds` are the governed tasks naming it.
   *
   * @returns { system, template, status, steps, roles, endedRoles, history, versions, aiAct,
   * governedTaskIds }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1AiSystemsById(
    request: AiSystems.GetApiV1AiSystemsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/ai-systems/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Where a register record stands in its lifecycle, the steps out of it, and every…
   *
   * @returns { template, status, steps, history }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1AiSystemsByIdTransitions(
    request: AiSystems.GetApiV1AiSystemsByIdTransitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/ai-systems/{id}/transitions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change an AI register record's fields
   *
   * @remarks
   * An agent cannot lower its risk. Its status is not a field: the lifecycle moves it (`POST
   * /api/v1/ai-systems/{id}/transitions`). Each change is a new version; values a key or an agent
   * writes are labelled in `provenance` as imported or suggested until a person saves them. 409
   * when the record changed since it was read.
   *
   * @returns The system
   *
   * @throws {@link AiSystems.PatchApiV1AiSystemsByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1AiSystemsById(
    request: AiSystems.PatchApiV1AiSystemsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AiSystems.PatchApiV1AiSystemsByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/ai-systems/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AiSystemsRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: AiSystems.PatchApiV1AiSystemsByIdError,
      },
      options,
    );
  }

  /**
   * Register an AI system
   *
   * @returns The system
   *
   * @throws {@link AiSystems.PostApiV1AiSystemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1AiSystems(
    request: AiSystems.PostApiV1AiSystemsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AiSystems.PostApiV1AiSystemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ai-systems"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AiSystemsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: AiSystems.PostApiV1AiSystemsError,
      },
      options,
    );
  }

  /**
   * Record a new release: provider, model, model version, prompt or guardrails
   *
   * @remarks
   * Enterprise. `promptHash` and `guardrailsHash` are digests (`sha256:…`, a commit, a version
   * tag), never the text. Every governed task using the system gets a reassessment, which closes
   * its gate until a person completes it, and the evaluation, resilience testing, change record and
   * compliance approval of the old release stop counting — and, under a model-risk pack, its
   * independent validation and model documentation. Recording a first fingerprint changes nothing;
   * changing or removing one does. `changed` names the parts that differ from what was recorded:
   * the same release again changes nothing and records nothing, so a build step may send it on
   * every build.
   *
   * @returns { system, reassessments, changed }
   *
   * @throws {@link AiSystems.PostApiV1AiSystemsByIdModelChangeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1AiSystemsByIdModelChange(
    request: AiSystems.PostApiV1AiSystemsByIdModelChangeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AiSystems.PostApiV1AiSystemsByIdModelChangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ai-systems/{id}/model-change"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AiSystemsModelChangeRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: AiSystems.PostApiV1AiSystemsByIdModelChangeError,
      },
      options,
    );
  }

  /**
   * Take a step in a register record's lifecycle
   *
   * @remarks
   * A key or an agent may put a proposal forward (`submit`) or take it back (`withdraw`).
   * Approving, rejecting, returning, suspending, reinstating and retiring are a person's, in the
   * app. A step is refused, with every reason, when the record lacks what it needs, when the caller
   * may not take it, or when it is a decision and the caller holds a role on the record or moved it
   * to its current status. 409 when the record changed since it was read.
   *
   * @returns The record, as GET /api/v1/ai-systems/{id}
   *
   * @throws {@link AiSystems.PostApiV1AiSystemsByIdTransitionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1AiSystemsByIdTransitions(
    request: AiSystems.PostApiV1AiSystemsByIdTransitionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AiSystems.PostApiV1AiSystemsByIdTransitionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ai-systems/{id}/transitions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AiSystemsTransitionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: AiSystems.PostApiV1AiSystemsByIdTransitionsError,
      },
      options,
    );
  }
}

export namespace AiSystems {
  export type GetApiV1AiSystemsRequest = {
    status?: StatusDeliverdDevAiSystemsApi;
  };

  export type GetApiV1AiSystemsByIdRequest = {
    id: string;
  };

  export type GetApiV1AiSystemsByIdTransitionsRequest = {
    id: string;
  };

  export type PatchApiV1AiSystemsByIdRequest = {
    id: string;
    body?: ApiV1AiSystemsRequest1;
  };

  export class PatchApiV1AiSystemsByIdError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1AiSystemsByIdError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1AiSystemsRequest = {
    body?: ApiV1AiSystemsRequest;
  };

  export class PostApiV1AiSystemsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1AiSystemsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1AiSystemsByIdModelChangeRequest = {
    id: string;
    body?: ApiV1AiSystemsModelChangeRequest;
  };

  export class PostApiV1AiSystemsByIdModelChangeError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1AiSystemsByIdModelChangeError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1AiSystemsByIdTransitionsRequest = {
    id: string;
    body?: ApiV1AiSystemsTransitionsRequest;
  };

  export class PostApiV1AiSystemsByIdTransitionsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1AiSystemsByIdTransitionsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
