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
  apiV1ManageFormsDiscardResponseSchema,
  type ApiV1ManageFormsDiscardResponse,
} from "../models/api-v1-manage-forms-discard-response.js";
import {
  apiV1ManageFormsDuplicateRequestInternalSchema,
  type ApiV1ManageFormsDuplicateRequest,
} from "../models/api-v1-manage-forms-duplicate-request.js";
import {
  apiV1ManageFormsDuplicateResponseInternalSchema,
  type ApiV1ManageFormsDuplicateResponse,
} from "../models/api-v1-manage-forms-duplicate-response.js";
import {
  apiV1ManageFormsRequestInternalSchema,
  type ApiV1ManageFormsRequest,
} from "../models/api-v1-manage-forms-request.js";
import {
  apiV1ManageFormsResponseSchema,
  type ApiV1ManageFormsResponse,
} from "../models/api-v1-manage-forms-response.js";
import {
  apiV1ManageFormsResponse1Schema,
  type ApiV1ManageFormsResponse1,
} from "../models/api-v1-manage-forms-response1.js";
import {
  apiV1ManageFormsUnpublishResponseSchema,
  type ApiV1ManageFormsUnpublishResponse,
} from "../models/api-v1-manage-forms-unpublish-response.js";
import {
  apiV1ManageFormsVersionsResponseSchema,
  type ApiV1ManageFormsVersionsResponse,
} from "../models/api-v1-manage-forms-versions-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { formDetailSchema, type FormDetail } from "../models/form-detail.js";
import { includeSchema, type Include } from "../models/include.js";
import type { Servers } from "../servers.js";

export class Forms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Discard staged changes
   *
   * @remarks
   * Drop a published form's staged changes and return the editor to what is live. The live form is
   * untouched, so this is routine (Tier A). `changed: false` means nothing was staged. Scope:
   * forms:write.
   *
   * @returns The live schema that remains.
   *
   * @throws {@link Forms.DiscardFormDraftError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  discardFormDraft(
    request: Forms.DiscardFormDraftRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsDiscardResponse, Forms.DiscardFormDraftError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/discard"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsDiscardResponseSchema },
        errorFactory: Forms.DiscardFormDraftError,
      },
      options,
    );
  }

  /**
   * Duplicate a form
   *
   * @remarks
   * Copy a form into the same project as a fresh draft. The copy collects nothing until it is
   * published, which keeps this routine (Tier A). A form whose deletion has already started is 410
   * here and on the CLI twin — one check, inside the shared core. Scope: forms:write.
   *
   * @returns The new draft.
   *
   * @throws {@link Forms.DuplicateFormError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  duplicateForm(
    request: Forms.DuplicateFormRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsDuplicateResponse, Forms.DuplicateFormError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/duplicate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ManageFormsDuplicateRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsDuplicateResponseInternalSchema },
        errorFactory: Forms.DuplicateFormError,
      },
      options,
    );
  }

  /**
   * Get a form
   *
   * @remarks
   * The published contract for one form (id or slug): its published schema and settings, plus a
   * hasDraft flag. `?include=draft` adds the staged revision (`draftSchema`, `draftTheme`) and the
   * push handle, storage destination, and purpose — everything `fillo pull` needs — and
   * additionally requires forms:write. Without it the draft schema is never exposed. Scope:
   * forms:read.
   *
   * @returns The form's published contract.
   *
   * @throws {@link Forms.GetFormError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getForm(
    request: Forms.GetFormRequest,
    options?: RequestOptions,
  ): ApiPromise<FormDetail, Forms.GetFormError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [{ name: "include", value: request.include, schema: s.optional(s.lazy(() => includeSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formDetailSchema },
        errorFactory: Forms.GetFormError,
      },
      options,
    );
  }

  /**
   * List a form's schema versions
   *
   * @remarks
   * The form's stored schema versions, newest first. Scope: forms:read.
   *
   * @returns The form's versions.
   *
   * @throws {@link Forms.ListFormVersionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFormVersions(
    request: Forms.ListFormVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsVersionsResponse, Forms.ListFormVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/versions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsVersionsResponseSchema },
        errorFactory: Forms.ListFormVersionsError,
      },
      options,
    );
  }

  /**
   * List forms
   *
   * @remarks
   * Keyset list of the project's forms, newest first. Scope: forms:read.
   *
   * @returns A page of forms.
   *
   * @throws {@link Forms.ListFormsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listForms(
    request: Forms.ListFormsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsResponse, Forms.ListFormsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsResponseSchema },
        errorFactory: Forms.ListFormsError,
      },
      options,
    );
  }

  /**
   * Rename a form
   *
   * @remarks
   * Rename a form and re-derive its slug. Old links keep working and no id changes, which is why
   * this is routine (Tier A). Scope: forms:write.
   *
   * @returns The renamed form.
   *
   * @throws {@link Forms.RenameFormError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  renameForm(
    request: Forms.RenameFormRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsResponse1, Forms.RenameFormError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageFormsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsResponse1Schema },
        errorFactory: Forms.RenameFormError,
      },
      options,
    );
  }

  /**
   * Unpublish a form
   *
   * @remarks
   * Take a live form offline: the hosted page and every embed stop accepting responses immediately.
   * Existing responses and files are kept, and publishing again brings the form back.
   * Outward-facing (Tier B) — the key holder chose forms:write at mint. Idempotent: an
   * already-offline form answers `changed: false`. Scope: forms:write.
   *
   * @returns The form, now offline.
   *
   * @throws {@link Forms.UnpublishFormError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unpublishForm(
    request: Forms.UnpublishFormRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsUnpublishResponse, Forms.UnpublishFormError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/unpublish"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsUnpublishResponseSchema },
        errorFactory: Forms.UnpublishFormError,
      },
      options,
    );
  }
}

export namespace Forms {
  export type DiscardFormDraftRequest = {
    /** A form id or slug. */
    form: string;
    /** No input. Any key is a 400. */
    body?: Record<string, unknown>;
  };

  export class DiscardFormDraftError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DiscardFormDraftError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DuplicateFormRequest = {
    /** A form id or slug. */
    form: string;
    body?: ApiV1ManageFormsDuplicateRequest;
  };

  export class DuplicateFormError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DuplicateFormError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFormRequest = {
    /** A form id or slug. */
    form: string;
    /** Only "draft". Adds the staged revision and requires forms:write as well. */
    include?: Include;
  };

  export class GetFormError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFormError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFormVersionsRequest = {
    /** A form id or slug. */
    form: string;
  };

  export class ListFormVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFormVersionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFormsRequest = {
    /** The id from a previous page's nextCursor. Omit for the first page. */
    cursor?: string;
    /** Page size, 1–100. Default 50. @default 50 */
    limit?: number;
  };

  export const listFormsRequestSchema: Schema<ListFormsRequest> = s.lazySchema(() =>
    s.object<ListFormsRequest>({
      cursor: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
    }),
  );

  export class ListFormsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFormsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RenameFormRequest = {
    /** A form id or slug. */
    form: string;
    body: ApiV1ManageFormsRequest;
  };

  export class RenameFormError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameFormError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UnpublishFormRequest = {
    /** A form id or slug. */
    form: string;
    /** No input. Any key is a 400. */
    body?: Record<string, unknown>;
  };

  export class UnpublishFormError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnpublishFormError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
