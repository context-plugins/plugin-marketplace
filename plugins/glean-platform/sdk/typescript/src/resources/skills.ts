import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiSkillsSourcesPreviewRequestSchema,
  type ApiSkillsSourcesPreviewRequest,
} from "../models/api-skills-sources-preview-request.js";
import {
  apiSkillsSourcesPreviewStreamRequestSchema,
  type ApiSkillsSourcesPreviewStreamRequest,
} from "../models/api-skills-sources-preview-stream-request.js";
import {
  platformSkillCreateResponseSchema,
  type PlatformSkillCreateResponse,
} from "../models/platform-skill-create-response.js";
import {
  platformSkillGetResponseSchema,
  type PlatformSkillGetResponse,
} from "../models/platform-skill-get-response.js";
import {
  platformSkillImportRequestSchema,
  type PlatformSkillImportRequest,
} from "../models/platform-skill-import-request.js";
import {
  platformSkillImportResponseSchema,
  type PlatformSkillImportResponse,
} from "../models/platform-skill-import-response.js";
import {
  platformSkillSourcePreviewResponseSchema,
  type PlatformSkillSourcePreviewResponse,
} from "../models/platform-skill-source-preview-response.js";
import {
  platformSkillSyncResponseSchema,
  type PlatformSkillSyncResponse,
} from "../models/platform-skill-sync-response.js";
import {
  platformSkillUpdateRequestSchema,
  type PlatformSkillUpdateRequest,
} from "../models/platform-skill-update-request.js";
import {
  platformSkillUpdateResponseSchema,
  type PlatformSkillUpdateResponse,
} from "../models/platform-skill-update-response.js";
import {
  platformSkillValidationResponseSchema,
  type PlatformSkillValidationResponse,
} from "../models/platform-skill-validation-response.js";
import {
  platformSkillVersionCreateResponseSchema,
  type PlatformSkillVersionCreateResponse,
} from "../models/platform-skill-version-create-response.js";
import {
  platformSkillVersionGetResponseSchema,
  type PlatformSkillVersionGetResponse,
} from "../models/platform-skill-version-get-response.js";
import {
  platformSkillVersionsListResponseSchema,
  type PlatformSkillVersionsListResponse,
} from "../models/platform-skill-versions-list-response.js";
import {
  platformSkillsListResponseSchema,
  type PlatformSkillsListResponse,
} from "../models/platform-skills-list-response.js";
import {
  platformSkillSourcePreviewStreamEventServerSentEventSchema,
  type PlatformSkillSourcePreviewStreamEventServerSentEvent,
} from "../models/unions/platform-skill-source-preview-stream-event-server-sent-event.js";
import type { Servers } from "../servers.js";

export class Skills {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create skill
   *
   * @remarks
   * Create a skill from an uploaded SKILL.md, .zip, or .skill bundle. If the authenticated user
   * already has a skill with the same name, the existing skill is superseded with a new version,
   * unless it is source-managed: a same-name create over a GitHub-imported skill returns 409, and
   * the caller syncs the existing skill instead. Two concurrent same-name creates can still produce
   * two skills.
   *
   * @returns Skill created.
   *
   * @throws {@link Skills.PlatformSkillsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsCreate(
    request: Skills.PlatformSkillsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillCreateResponse, Skills.PlatformSkillsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: platformSkillCreateResponseSchema },
        errorFactory: Skills.PlatformSkillsCreateError,
      },
      options,
    );
  }

  /**
   * Create skill version
   *
   * @remarks
   * Create a new immutable version for an existing caller-managed skill from an uploaded SKILL.md,
   * .zip, or .skill bundle. A create-version over a GitHub-imported skill returns 409, and the
   * caller syncs the existing skill instead.
   *
   * @returns Skill version created.
   *
   * @throws {@link Skills.PlatformSkillsCreateVersionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsCreateVersion(
    request: Skills.PlatformSkillsCreateVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillVersionCreateResponse, Skills.PlatformSkillsCreateVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}/versions"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: platformSkillVersionCreateResponseSchema },
        errorFactory: Skills.PlatformSkillsCreateVersionError,
      },
      options,
    );
  }

  /**
   * Delete skill
   *
   * @remarks
   * Delete a skill the authenticated caller is allowed to manage. This operation permanently
   * removes all versions of the skill.
   *
   * @returns Skill deleted. No content.
   *
   * @throws {@link Skills.PlatformSkillsDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsDelete(
    request: Skills.PlatformSkillsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Skills.PlatformSkillsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Skills.PlatformSkillsDeleteError,
      },
      options,
    );
  }

  /**
   * Retrieve skill
   *
   * @remarks
   * Retrieve metadata for a skill available to the authenticated user.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsGet(
    request: Skills.PlatformSkillsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillGetResponse, Skills.PlatformSkillsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformSkillGetResponseSchema },
        errorFactory: Skills.PlatformSkillsGetError,
      },
      options,
    );
  }

  /**
   * Download skill content
   *
   * @remarks
   * Download the latest installable bundle for a skill available to the authenticated user.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsGetContentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsGetContent(
    request: Skills.PlatformSkillsGetContentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Skills.PlatformSkillsGetContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}/content"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Skills.PlatformSkillsGetContentError,
      },
      options,
    );
  }

  /**
   * Retrieve skill version
   *
   * @remarks
   * Retrieve metadata for a skill version available to the authenticated user.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsGetVersionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsGetVersion(
    request: Skills.PlatformSkillsGetVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillVersionGetResponse, Skills.PlatformSkillsGetVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}/versions/{version}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "skill_id", value: request.skillId, schema: s.string() },
          { name: "version", value: request.version, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformSkillVersionGetResponseSchema },
        errorFactory: Skills.PlatformSkillsGetVersionError,
      },
      options,
    );
  }

  /**
   * Download skill version content
   *
   * @remarks
   * Download the installable bundle for a skill version available to the authenticated user.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsGetVersionContentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsGetVersionContent(
    request: Skills.PlatformSkillsGetVersionContentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Skills.PlatformSkillsGetVersionContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}/versions/{version}/content"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "skill_id", value: request.skillId, schema: s.string() },
          { name: "version", value: request.version, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Skills.PlatformSkillsGetVersionContentError,
      },
      options,
    );
  }

  /**
   * Import skills from GitHub
   *
   * @remarks
   * Import one or more skills selected from a GitHub source preview. Each source URL is fetched and
   * persisted as an independent skill with source provenance. This operation does not create a
   * durable source resource. The import is atomic: if any source cannot be fetched, validated, or
   * persisted, no skills are created.
   *
   * @returns Skills imported successfully.
   *
   * @throws {@link Skills.PlatformSkillsImportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsImport(
    request: Skills.PlatformSkillsImportRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillImportResponse, Skills.PlatformSkillsImportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills/import"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformSkillImportRequestSchema },
      },
      {
        success: { kind: "json", schema: platformSkillImportResponseSchema },
        errorFactory: Skills.PlatformSkillsImportError,
      },
      options,
    );
  }

  /**
   * List skills
   *
   * @remarks
   * List every custom skill the authenticated caller can access. Built-in skills are excluded: they
   * have no versions, content download, update, or delete, so their identifiers would fail most
   * skill operations. Chat-authored skills shared with the caller without a listed grant are
   * omitted: they stay retrievable by identifier when it is known, but this list does not discover
   * them.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsList(
    request: Skills.PlatformSkillsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillsListResponse, Skills.PlatformSkillsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/skills"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformSkillsListResponseSchema },
        errorFactory: Skills.PlatformSkillsListError,
      },
      options,
    );
  }

  /**
   * List skill versions
   *
   * @remarks
   * List versions for a skill available to the authenticated user.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsListVersionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsListVersions(
    request: Skills.PlatformSkillsListVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillVersionsListResponse, Skills.PlatformSkillsListVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}/versions"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformSkillVersionsListResponseSchema },
        errorFactory: Skills.PlatformSkillsListVersionsError,
      },
      options,
    );
  }

  /**
   * Preview a GitHub skill source
   *
   * @remarks
   * Inspect a GitHub URL without persisting a source or any discovered skills. Set stream to true
   * to receive repository scan progress as server-sent events; otherwise the response contains the
   * completed preview.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsPreviewSourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsPreviewSource(
    request: Skills.PlatformSkillsPreviewSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillSourcePreviewResponse, Skills.PlatformSkillsPreviewSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills/sources/preview"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiSkillsSourcesPreviewRequestSchema },
      },
      {
        success: { kind: "json", schema: platformSkillSourcePreviewResponseSchema },
        errorFactory: Skills.PlatformSkillsPreviewSourceError,
      },
      options,
    );
  }

  /**
   * Preview a GitHub skill source as events
   *
   * @remarks
   * SDK-only logical operation. HTTP clients must call the base path; the URL fragment is not sent.
   * Inspect a GitHub URL as server-sent events. HTTP clients request this mode by setting `stream`
   * to true in the JSON body.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsPreviewSourceStreamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsPreviewSourceStream(
    request: Skills.PlatformSkillsPreviewSourceStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<PlatformSkillSourcePreviewStreamEventServerSentEvent>,
    Skills.PlatformSkillsPreviewSourceStreamError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills/sources/preview#stream"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiSkillsSourcesPreviewStreamRequestSchema },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: platformSkillSourcePreviewStreamEventServerSentEventSchema,
        },
        errorFactory: Skills.PlatformSkillsPreviewSourceStreamError,
      },
      options,
    );
  }

  /**
   * Sync a GitHub-imported skill
   *
   * @remarks
   * Refresh one GitHub-imported skill from its stored source URL. If the skill content has changed,
   * this operation creates a new skill version. If the skill is no longer present upstream, the
   * stored skill is left unchanged and must be deleted explicitly.
   *
   * @returns Skill sync completed successfully.
   *
   * @throws {@link Skills.PlatformSkillsSyncError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsSync(
    request: Skills.PlatformSkillsSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillSyncResponse, Skills.PlatformSkillsSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}/sync"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformSkillSyncResponseSchema },
        errorFactory: Skills.PlatformSkillsSyncError,
      },
      options,
    );
  }

  /**
   * Update skill
   *
   * @remarks
   * Enable or disable the skill for the authenticated caller without changing its content. The
   * owner's update sets the skill's stored status. Any other caller's update applies only to that
   * caller.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsUpdate(
    request: Skills.PlatformSkillsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillUpdateResponse, Skills.PlatformSkillsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/skills/{skill_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "skill_id", value: request.skillId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformSkillUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: platformSkillUpdateResponseSchema },
        errorFactory: Skills.PlatformSkillsUpdateError,
      },
      options,
    );
  }

  /**
   * Validate skill bundle
   *
   * @remarks
   * Validate a skill bundle without persisting it. Accepts a SKILL.md, .zip, or .skill upload and
   * returns parsed metadata plus the normalized file layout.
   *
   * @returns Successful response.
   *
   * @throws {@link Skills.PlatformSkillsValidateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformSkillsValidate(
    request: Skills.PlatformSkillsValidateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformSkillValidationResponse, Skills.PlatformSkillsValidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/skills/validation"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: platformSkillValidationResponseSchema },
        errorFactory: Skills.PlatformSkillsValidateError,
      },
      options,
    );
  }
}

export namespace Skills {
  export type PlatformSkillsCreateRequest = {
    /** SKILL.md, .zip, or .skill bundle to create. */
    file: FileInput;
  };

  export class PlatformSkillsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsCreateVersionRequest = {
    /** Glean skill ID. */
    skillId: string;
    /** SKILL.md, .zip, or .skill bundle to store as a new version. */
    file: FileInput;
  };

  export class PlatformSkillsCreateVersionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsCreateVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsDeleteRequest = {
    /** Glean skill ID. */
    skillId: string;
  };

  export class PlatformSkillsDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsGetRequest = {
    /** Glean skill ID. */
    skillId: string;
  };

  export class PlatformSkillsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsGetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsGetContentRequest = {
    /** Glean skill ID. */
    skillId: string;
  };

  export class PlatformSkillsGetContentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsGetContentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsGetVersionRequest = {
    /** Glean skill ID. */
    skillId: string;
    /** Major version number. */
    version: number;
  };

  export class PlatformSkillsGetVersionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsGetVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsGetVersionContentRequest = {
    /** Glean skill ID. */
    skillId: string;
    /** Major version number. */
    version: number;
  };

  export class PlatformSkillsGetVersionContentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsGetVersionContentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsImportRequest = {
    body: PlatformSkillImportRequest;
  };

  export class PlatformSkillsImportError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsImportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsListRequest = {
    /** Maximum number of skills to return. Defaults to 20. Maximum is 100. @default 20 */
    pageSize?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
  };

  export class PlatformSkillsListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsListVersionsRequest = {
    /** Glean skill ID. */
    skillId: string;
    /** Maximum number of versions to return. Defaults to 20. Maximum is 100. @default 20 */
    pageSize?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
  };

  export class PlatformSkillsListVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsListVersionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsPreviewSourceRequest = {
    body: ApiSkillsSourcesPreviewRequest;
  };

  export class PlatformSkillsPreviewSourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsPreviewSourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsPreviewSourceStreamRequest = {
    body: ApiSkillsSourcesPreviewStreamRequest;
  };

  export class PlatformSkillsPreviewSourceStreamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsPreviewSourceStreamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsSyncRequest = {
    /** ID of the GitHub-imported skill to sync. */
    skillId: string;
  };

  export class PlatformSkillsSyncError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsSyncError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsUpdateRequest = {
    /** Glean skill ID. */
    skillId: string;
    body: PlatformSkillUpdateRequest;
  };

  export class PlatformSkillsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformSkillsValidateRequest = {
    /** SKILL.md, .zip, or .skill bundle to validate. */
    file: FileInput;
  };

  export class PlatformSkillsValidateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformSkillsValidateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
