import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1KnowledgeImportRequestInternalSchema,
  type ApiV1KnowledgeImportRequest,
} from "../models/api-v1-knowledge-import-request.js";
import {
  apiV1KnowledgeRequestInternalSchema,
  type ApiV1KnowledgeRequest,
} from "../models/api-v1-knowledge-request.js";
import {
  apiV1KnowledgeRequest1InternalSchema,
  type ApiV1KnowledgeRequest1,
} from "../models/api-v1-knowledge-request1.js";
import {
  formatDeliverdDevKnowledgeApiSchema,
  type FormatDeliverdDevKnowledgeApi,
} from "../models/format-deliverd-dev-knowledge-api.js";
import {
  kindDeliverdDevKnowledgeApiSchema,
  type KindDeliverdDevKnowledgeApi,
} from "../models/kind-deliverd-dev-knowledge-api.js";
import {
  statusDeliverdDevKnowledgeApiSchema,
  type StatusDeliverdDevKnowledgeApi,
} from "../models/status-deliverd-dev-knowledge-api.js";
import type { Servers } from "../servers.js";

export class Knowledge {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search the knowledge
   *
   * @remarks
   * Ranked by relevance to `q`, or newest first without it. Confirmed entries unless `status` says
   * otherwise: only those are to be relied on. `more` is true when the list was cut at `limit`.
   *
   * @returns `{ entries, more }`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Knowledge(
    request: Knowledge.GetApiV1KnowledgeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/knowledge"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          {
            name: "kind",
            value: request.kind,
            schema: s.optional(s.lazy(() => kindDeliverdDevKnowledgeApiSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevKnowledgeApiSchema)),
          },
          { name: "workspaceId", value: request.workspaceId, schema: s.optional(s.string()) },
          { name: "flowId", value: request.flowId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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
   * An AGENTS.md of the confirmed knowledge and the playbooks in force
   *
   * @remarks
   * For a tool that reads files rather than calling tools. A snapshot that says where the live
   * version is.
   *
   * @returns AGENTS.md
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1KnowledgeAgentsMd(
    request: Knowledge.GetApiV1KnowledgeAgentsMdRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/knowledge/agents-md"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "workspaceId", value: request.workspaceId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A knowledge entry, with the versions before and after it
   *
   * @returns The entry, its `history` and any `pendingRevision`
   *
   * @throws {@link Knowledge.GetApiV1KnowledgeByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1KnowledgeById(
    request: Knowledge.GetApiV1KnowledgeByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Knowledge.GetApiV1KnowledgeByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/knowledge/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Knowledge.GetApiV1KnowledgeByIdError,
      },
      options,
    );
  }

  /**
   * Export the knowledge
   *
   * @remarks
   * Everything the caller may see, as Markdown that imports back (the default) or JSON. Audited.
   *
   * @returns The file
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1KnowledgeExport(
    request: Knowledge.GetApiV1KnowledgeExportRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/knowledge/export"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "format",
            value: request.format,
            schema: s.optional(s.lazy(() => formatDeliverdDevKnowledgeApiSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevKnowledgeApiSchema)),
          },
          { name: "workspaceId", value: request.workspaceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change a proposal
   *
   * @remarks
   * Only while it is proposed, and only by a person or the agent that proposed it. A confirmed
   * entry's words never change: propose a revision.
   *
   * @returns The entry
   *
   * @throws {@link Knowledge.PatchApiV1KnowledgeByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1KnowledgeById(
    request: Knowledge.PatchApiV1KnowledgeByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Knowledge.PatchApiV1KnowledgeByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/knowledge/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1KnowledgeRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Knowledge.PatchApiV1KnowledgeByIdError,
      },
      options,
    );
  }

  /**
   * Propose a knowledge entry
   *
   * @remarks
   * A proposal until a person confirms it in Deliverd; no key confirms anything. A secret is
   * refused; personal data is said back as `screening`. With `supersedesId` it is a revision that
   * replaces the confirmed entry once confirmed. With `externalId`, an open entry under the same
   * one is returned instead (`resumed: true`, status 200).
   *
   * @returns An open entry under this externalId
   *
   * @throws {@link Knowledge.PostApiV1KnowledgeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Knowledge(
    request: Knowledge.PostApiV1KnowledgeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Knowledge.PostApiV1KnowledgeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/knowledge"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1KnowledgeRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Knowledge.PostApiV1KnowledgeError,
      },
      options,
    );
  }

  /**
   * Import Markdown as proposed entries
   *
   * @remarks
   * A Deliverd export, or a notes file an agent tool keeps (AGENTS.md, CLAUDE.md): each heading
   * becomes one proposed entry. Entries already there by title or id are skipped and said so.
   *
   * @returns `{ created, skipped }`
   *
   * @throws {@link Knowledge.PostApiV1KnowledgeImportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1KnowledgeImport(
    request: Knowledge.PostApiV1KnowledgeImportRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Knowledge.PostApiV1KnowledgeImportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/knowledge/import"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1KnowledgeImportRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Knowledge.PostApiV1KnowledgeImportError,
      },
      options,
    );
  }
}

export namespace Knowledge {
  export type GetApiV1KnowledgeRequest = {
    q?: string;
    kind?: KindDeliverdDevKnowledgeApi;
    status?: StatusDeliverdDevKnowledgeApi;
    workspaceId?: string;
    flowId?: string;
    limit?: number;
  };

  export type GetApiV1KnowledgeAgentsMdRequest = {
    workspaceId?: string;
  };

  export type GetApiV1KnowledgeByIdRequest = {
    id: string;
  };

  export class GetApiV1KnowledgeByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1KnowledgeByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1KnowledgeExportRequest = {
    format?: FormatDeliverdDevKnowledgeApi;
    status?: StatusDeliverdDevKnowledgeApi;
    workspaceId?: string;
  };

  export type PatchApiV1KnowledgeByIdRequest = {
    id: string;
    body?: ApiV1KnowledgeRequest1;
  };

  export class PatchApiV1KnowledgeByIdError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1KnowledgeByIdError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1KnowledgeRequest = {
    body?: ApiV1KnowledgeRequest;
  };

  export class PostApiV1KnowledgeError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1KnowledgeError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1KnowledgeImportRequest = {
    body?: ApiV1KnowledgeImportRequest;
  };

  export class PostApiV1KnowledgeImportError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1KnowledgeImportError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
