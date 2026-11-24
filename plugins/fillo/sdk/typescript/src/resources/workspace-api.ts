import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageProjectCodeSyncRequestSchema,
  type ApiV1ManageProjectCodeSyncRequest,
} from "../models/api-v1-manage-project-code-sync-request.js";
import {
  apiV1ManageProjectCodeSyncResponseSchema,
  type ApiV1ManageProjectCodeSyncResponse,
} from "../models/api-v1-manage-project-code-sync-response.js";
import {
  apiV1ManageProjectIdentityResponseSchema,
  type ApiV1ManageProjectIdentityResponse,
} from "../models/api-v1-manage-project-identity-response.js";
import {
  apiV1ManageProjectIdentityResponse1Schema,
  type ApiV1ManageProjectIdentityResponse1,
} from "../models/api-v1-manage-project-identity-response1.js";
import {
  apiV1ManageProjectIdentityResponse2Schema,
  type ApiV1ManageProjectIdentityResponse2,
} from "../models/api-v1-manage-project-identity-response2.js";
import {
  apiV1ManageProjectOriginsRequestSchema,
  type ApiV1ManageProjectOriginsRequest,
} from "../models/api-v1-manage-project-origins-request.js";
import {
  apiV1ManageProjectOriginsResponseSchema,
  type ApiV1ManageProjectOriginsResponse,
} from "../models/api-v1-manage-project-origins-response.js";
import {
  apiV1ManageProjectRequestSchema,
  type ApiV1ManageProjectRequest,
} from "../models/api-v1-manage-project-request.js";
import {
  apiV1ManageProjectResponseSchema,
  type ApiV1ManageProjectResponse,
} from "../models/api-v1-manage-project-response.js";
import {
  apiV1ManageWorkspaceRequestInternalSchema,
  type ApiV1ManageWorkspaceRequest,
} from "../models/api-v1-manage-workspace-request.js";
import {
  apiV1ManageWorkspaceResponseSchema,
  type ApiV1ManageWorkspaceResponse,
} from "../models/api-v1-manage-workspace-response.js";
import { confirmTargetSchema, type ConfirmTarget } from "../models/confirm-target.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class WorkspaceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Disable identity verification
   *
   * @remarks
   * Delete the project identity secret. Forms that hold unverified submissions stop protecting
   * themselves and the secret cannot be recovered, so this is destructive (Tier C): `confirm` must
   * equal the project's slug (a value fetched from the project read, never a word the caller
   * already knows). Forms that still require verified respondents block the change with a 409.
   * Scope: workspace:manage; the key acts as the human who minted it.
   *
   * @returns Identity verification is off.
   *
   * @throws {@link WorkspaceApi.DisableIdentityVerificationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableIdentityVerification(
    request: WorkspaceApi.DisableIdentityVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectIdentityResponse2, WorkspaceApi.DisableIdentityVerificationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/project/identity"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectIdentityResponse2Schema },
        errorFactory: WorkspaceApi.DisableIdentityVerificationError,
      },
      options,
    );
  }

  /**
   * Enable identity verification
   *
   * @remarks
   * Mint the project identity secret so forms can require signed identify() calls and hold
   * unverified submissions. Outward-facing (Tier B). The plaintext is returned EXACTLY ONCE and is
   * never retrievable again. Minting into an occupied slot is refused: verification that was
   * already on answers `minted: false` with no `secret`, so enabling twice can never read an
   * existing secret back. Scope: workspace:manage; the key acts as the human who minted it (403
   * once they are no longer an owner or admin).
   *
   * @returns Identity verification is on.
   *
   * @throws {@link WorkspaceApi.EnableIdentityVerificationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableIdentityVerification(
    request: WorkspaceApi.EnableIdentityVerificationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectIdentityResponse1, WorkspaceApi.EnableIdentityVerificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/project/identity"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectIdentityResponse1Schema },
        errorFactory: WorkspaceApi.EnableIdentityVerificationError,
      },
      options,
    );
  }

  /**
   * Get the code-sync policy
   *
   * @remarks
   * Report the code-sync policy in force for the key's project: `publishable_key` (the browser key
   * may stage from an allowed origin) or `trusted_only` (an authenticated sync token is required).
   * Tier A. Scope: workspace:manage.
   *
   * @returns The policy in force.
   *
   * @throws {@link WorkspaceApi.GetCodeSyncPolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCodeSyncPolicy(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectCodeSyncResponse, WorkspaceApi.GetCodeSyncPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/project/code-sync"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectCodeSyncResponseSchema },
        errorFactory: WorkspaceApi.GetCodeSyncPolicyError,
      },
      options,
    );
  }

  /**
   * Get identity-verification status
   *
   * @remarks
   * Whether the project verifies respondent identities, and how many forms depend on it. Never
   * returns the secret. Scope: workspace:manage.
   *
   * @returns The project's identity-verification state.
   *
   * @throws {@link WorkspaceApi.GetIdentityVerificationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIdentityVerification(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectIdentityResponse, WorkspaceApi.GetIdentityVerificationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/project/identity"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectIdentityResponseSchema },
        errorFactory: WorkspaceApi.GetIdentityVerificationError,
      },
      options,
    );
  }

  /**
   * List allowed sync origins
   *
   * @remarks
   * The origins the project's publishable key may stage code-defined drafts from. An empty list
   * means any origin. Scope: workspace:manage.
   *
   * @returns The current allow-list.
   *
   * @throws {@link WorkspaceApi.ListAllowedOriginsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllowedOrigins(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectOriginsResponse, WorkspaceApi.ListAllowedOriginsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/project/origins"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectOriginsResponseSchema },
        errorFactory: WorkspaceApi.ListAllowedOriginsError,
      },
      options,
    );
  }

  /**
   * Rename the project
   *
   * @remarks
   * Rename the key's project. The optional `project` selector exists for body-shape parity with the
   * CLI and may only name the key's own project by id, slug, or name — anything else 404s,
   * including a sibling project in the same workspace. Tier A. Scope: workspace:manage.
   *
   * @returns The renamed project.
   *
   * @throws {@link WorkspaceApi.RenameProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  renameProject(
    request: WorkspaceApi.RenameProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectResponse, WorkspaceApi.RenameProjectError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/project"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageProjectRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectResponseSchema },
        errorFactory: WorkspaceApi.RenameProjectError,
      },
      options,
    );
  }

  /**
   * Rename the workspace
   *
   * @remarks
   * Rename the billing workspace. Ids, keys, member access, and every live form URL stay exactly as
   * they are, which keeps this routine (Tier A). Scope: workspace:manage.
   *
   * @returns The renamed workspace.
   *
   * @throws {@link WorkspaceApi.RenameWorkspaceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  renameWorkspace(
    request: WorkspaceApi.RenameWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageWorkspaceResponse, WorkspaceApi.RenameWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/workspace"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageWorkspaceRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageWorkspaceResponseSchema },
        errorFactory: WorkspaceApi.RenameWorkspaceError,
      },
      options,
    );
  }

  /**
   * Replace the allowed sync origins
   *
   * @remarks
   * Replace the whole allow-list. An empty array means any origin may stage with the publishable
   * key, which widens who can act — outward-facing (Tier B). Every entry must be a bare http(s)
   * origin, so a path, query, or credential in the value is a 400. Scope: workspace:manage.
   *
   * @returns The stored allow-list.
   *
   * @throws {@link WorkspaceApi.SetAllowedOriginsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setAllowedOrigins(
    request: WorkspaceApi.SetAllowedOriginsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectOriginsResponse, WorkspaceApi.SetAllowedOriginsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/manage/project/origins"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageProjectOriginsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectOriginsResponseSchema },
        errorFactory: WorkspaceApi.SetAllowedOriginsError,
      },
      options,
    );
  }

  /**
   * Set the code-sync policy
   *
   * @remarks
   * Choose who may stage code-defined schemas for this project: `publishable_key` lets the browser
   * key stage from an allowed origin, `trusted_only` requires an authenticated sync token. This
   * changes who can act, so it is outward-facing (Tier B). The write takes the project's code-sync
   * lock, so it is serialized against in-flight syncs. Scope: workspace:manage.
   *
   * @returns The policy now in force.
   *
   * @throws {@link WorkspaceApi.SetCodeSyncPolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setCodeSyncPolicy(
    request: WorkspaceApi.SetCodeSyncPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageProjectCodeSyncResponse, WorkspaceApi.SetCodeSyncPolicyError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/project/code-sync"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageProjectCodeSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageProjectCodeSyncResponseSchema },
        errorFactory: WorkspaceApi.SetCodeSyncPolicyError,
      },
      options,
    );
  }
}

export namespace WorkspaceApi {
  export type DisableIdentityVerificationRequest = {
    body: ConfirmTarget;
  };

  export class DisableIdentityVerificationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableIdentityVerificationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type EnableIdentityVerificationRequest = {
    /** No input. Any key is a 400. */
    body?: Record<string, unknown>;
  };

  export class EnableIdentityVerificationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableIdentityVerificationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetCodeSyncPolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCodeSyncPolicyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetIdentityVerificationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIdentityVerificationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListAllowedOriginsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllowedOriginsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RenameProjectRequest = {
    body: ApiV1ManageProjectRequest;
  };

  export class RenameProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RenameWorkspaceRequest = {
    body: ApiV1ManageWorkspaceRequest;
  };

  export class RenameWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameWorkspaceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetAllowedOriginsRequest = {
    body: ApiV1ManageProjectOriginsRequest;
  };

  export class SetAllowedOriginsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetAllowedOriginsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetCodeSyncPolicyRequest = {
    body: ApiV1ManageProjectCodeSyncRequest;
  };

  export class SetCodeSyncPolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetCodeSyncPolicyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
