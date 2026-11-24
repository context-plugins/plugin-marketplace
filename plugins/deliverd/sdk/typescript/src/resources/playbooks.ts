import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1PlaybooksApprovalRequestInternalSchema,
  type ApiV1PlaybooksApprovalRequest,
} from "../models/api-v1-playbooks-approval-request.js";
import {
  apiV1PlaybooksRequestInternalSchema,
  type ApiV1PlaybooksRequest,
} from "../models/api-v1-playbooks-request.js";
import {
  apiV1PlaybooksStartRequestInternalSchema,
  type ApiV1PlaybooksStartRequest,
} from "../models/api-v1-playbooks-start-request.js";
import {
  apiV1PlaybooksUseRequestInternalSchema,
  type ApiV1PlaybooksUseRequest,
} from "../models/api-v1-playbooks-use-request.js";
import {
  apiV1PlaybooksVersionsRequestInternalSchema,
  type ApiV1PlaybooksVersionsRequest,
} from "../models/api-v1-playbooks-versions-request.js";
import {
  kindDeliverdDevPlaybooksApiSchema,
  type KindDeliverdDevPlaybooksApi,
} from "../models/kind-deliverd-dev-playbooks-api.js";
import type { Servers } from "../servers.js";

export class Playbooks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List playbooks
   *
   * @remarks
   * One row per playbook: its newest version, and `inForce`, the version that runs. Approved
   * prompts are playbooks of `kind` prompt; `?kind=` keeps one or the other.
   *
   * @returns `{ playbooks }`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Playbooks(
    request: Playbooks.GetApiV1PlaybooksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/playbooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "kind",
            value: request.kind,
            schema: s.optional(s.lazy(() => kindDeliverdDevPlaybooksApiSchema)),
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
   * A playbook version, its family and the knowledge it relies on
   *
   * @returns The version, `versions`, `inForceId` and `knowledge`
   *
   * @throws {@link Playbooks.GetApiV1PlaybooksByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1PlaybooksById(
    request: Playbooks.GetApiV1PlaybooksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.GetApiV1PlaybooksByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/playbooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.GetApiV1PlaybooksByIdError,
      },
      options,
    );
  }

  /**
   * Change a draft
   *
   * @remarks
   * Only before it has been put to anybody. After that, draft the next version.
   *
   * @returns The draft
   *
   * @throws {@link Playbooks.PatchApiV1PlaybooksByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1PlaybooksById(
    request: Playbooks.PatchApiV1PlaybooksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.PatchApiV1PlaybooksByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/playbooks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PlaybooksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.PatchApiV1PlaybooksByIdError,
      },
      options,
    );
  }

  /**
   * Draft a playbook or an approved prompt
   *
   * @remarks
   * Steps, each with the rule that applies before it acts: `none`, `gate` (with the `action` to
   * check), `approval` or `review`. Or `prompt` instead of steps, for an approved prompt: its words
   * with `{input}` placeholders, an owner and a review date. Nobody runs a draft: a governing
   * person publishes it in the app, or an approval of it is approved.
   *
   * @returns The draft
   *
   * @throws {@link Playbooks.PostApiV1PlaybooksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Playbooks(
    request: Playbooks.PostApiV1PlaybooksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/playbooks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PlaybooksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.PostApiV1PlaybooksError,
      },
      options,
    );
  }

  /**
   * Put a draft to approvers
   *
   * @remarks
   * A Deliverd approval of the playbook; approved, it goes in force. Needs `approvals:write` and
   * `tasks:write`. Its content is fixed from here.
   *
   * @returns The version, awaiting approval
   *
   * @throws {@link Playbooks.PostApiV1PlaybooksByIdApprovalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PlaybooksByIdApproval(
    request: Playbooks.PostApiV1PlaybooksByIdApprovalRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdApprovalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/playbooks/{id}/approval"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PlaybooksApprovalRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.PostApiV1PlaybooksByIdApprovalError,
      },
      options,
    );
  }

  /**
   * Run a playbook
   *
   * @remarks
   * Starts the version in force as an objective, with a side task per step holding its instruction
   * and the call its rule needs. Naming an older version runs the one in force (`ranOlderVersion`).
   * Missing required inputs are refused with `details.missingInputs`. With `externalId`, an open
   * run is returned instead (status 200).
   *
   * @returns An open run under this externalId
   *
   * @throws {@link Playbooks.PostApiV1PlaybooksByIdStartError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PlaybooksByIdStart(
    request: Playbooks.PostApiV1PlaybooksByIdStartRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdStartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/playbooks/{id}/start"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PlaybooksStartRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.PostApiV1PlaybooksByIdStartError,
      },
      options,
    );
  }

  /**
   * Use an approved prompt
   *
   * @remarks
   * The version in force of the prompt, with the inputs put in, and its limitations. Each use is
   * recorded against the version. Naming an older version hands out the one in force
   * (`ranOlderVersion`). Required inputs not given are listed in `missingInputs` and their
   * placeholders left in the words. Needs `tasks:read`.
   *
   * @returns `{ prompt, text, missingInputs, limitations, ranOlderVersion }`
   *
   * @throws {@link Playbooks.PostApiV1PlaybooksByIdUseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PlaybooksByIdUse(
    request: Playbooks.PostApiV1PlaybooksByIdUseRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdUseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/playbooks/{id}/use"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PlaybooksUseRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.PostApiV1PlaybooksByIdUseError,
      },
      options,
    );
  }

  /**
   * Draft the next version
   *
   * @remarks
   * The version in force keeps running until this one is put in force.
   *
   * @returns The new draft
   *
   * @throws {@link Playbooks.PostApiV1PlaybooksByIdVersionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1PlaybooksByIdVersions(
    request: Playbooks.PostApiV1PlaybooksByIdVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Playbooks.PostApiV1PlaybooksByIdVersionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/playbooks/{id}/versions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PlaybooksVersionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Playbooks.PostApiV1PlaybooksByIdVersionsError,
      },
      options,
    );
  }
}

export namespace Playbooks {
  export type GetApiV1PlaybooksRequest = {
    /** procedure for playbooks of steps, prompt for approved prompts; both when omitted */
    kind?: KindDeliverdDevPlaybooksApi;
  };

  export type GetApiV1PlaybooksByIdRequest = {
    id: string;
  };

  export class GetApiV1PlaybooksByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1PlaybooksByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PatchApiV1PlaybooksByIdRequest = {
    id: string;
    body?: ApiV1PlaybooksRequest;
  };

  export class PatchApiV1PlaybooksByIdError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1PlaybooksByIdError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1PlaybooksRequest = {
    body?: ApiV1PlaybooksRequest;
  };

  export class PostApiV1PlaybooksError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PlaybooksError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1PlaybooksByIdApprovalRequest = {
    id: string;
    body?: ApiV1PlaybooksApprovalRequest;
  };

  export class PostApiV1PlaybooksByIdApprovalError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PlaybooksByIdApprovalError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1PlaybooksByIdStartRequest = {
    id: string;
    body?: ApiV1PlaybooksStartRequest;
  };

  export class PostApiV1PlaybooksByIdStartError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PlaybooksByIdStartError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1PlaybooksByIdUseRequest = {
    id: string;
    body?: ApiV1PlaybooksUseRequest;
  };

  export class PostApiV1PlaybooksByIdUseError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PlaybooksByIdUseError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1PlaybooksByIdVersionsRequest = {
    id: string;
    body?: ApiV1PlaybooksVersionsRequest;
  };

  export class PostApiV1PlaybooksByIdVersionsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1PlaybooksByIdVersionsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
