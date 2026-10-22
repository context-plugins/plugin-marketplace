import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentRunCreateSchema, type AgentRunCreate } from "../models/agent-run-create.js";
import { agentRunWaitResponseSchema, type AgentRunWaitResponse } from "../models/agent-run-wait-response.js";
import { agentSchemasSchema, type AgentSchemas } from "../models/agent-schemas.js";
import { agentSchema, type Agent } from "../models/agent.js";
import {
  createWorkflowRequestSchema,
  type CreateWorkflowRequest,
} from "../models/create-workflow-request.js";
import { editWorkflowRequestSchema, type EditWorkflowRequest } from "../models/edit-workflow-request.js";
import { importAgentResponseSchema, type ImportAgentResponse } from "../models/import-agent-response.js";
import { importAgentSyncModeSchema, type ImportAgentSyncMode } from "../models/import-agent-sync-mode.js";
import { responseSearchAgentsSchema, type ResponseSearchAgents } from "../models/response-search-agents.js";
import { searchAgentsRequestSchema, type SearchAgentsRequest } from "../models/search-agents-request.js";
import {
  unauthorizedAgentToolsErrorSchema,
  type UnauthorizedAgentToolsError,
} from "../models/unauthorized-agent-tools-error.js";
import { VersionSource, versionSourceSchema } from "../models/version-source.js";
import { workflowResultSchema, type WorkflowResult } from "../models/workflow-result.js";
import type { Servers } from "../servers.js";

export class Agents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an agent
   *
   * @remarks
   * Create an agent.
   *
   * @returns Success
   *
   * @throws {@link Agents.CreateAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAgent(
    request: Agents.CreateAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkflowResult, Agents.CreateAgentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/agents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createWorkflowRequestSchema },
      },
      {
        success: { kind: "json", schema: workflowResultSchema },
        errorFactory: Agents.CreateAgentError,
      },
      options,
    );
  }

  /**
   * Create an agent run and stream the response
   *
   * @remarks
   * Executes an [agent](https://developers.glean.com/agents/agents-api) run and returns the result
   * as a stream of server-sent events (SSE). **Note**: If the agent uses an input form trigger, all
   * form fields (including optional fields) must be included in the `input` object.
   *
   * @returns Success
   *
   * @throws {@link Agents.CreateAndStreamRunError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createAndStreamRun(
    request: Agents.CreateAndStreamRunRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<string>, Agents.CreateAndStreamRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/runs/stream"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentRunCreateSchema },
      },
      {
        success: { kind: "eventStreamText", dataSchema: s.string() },
        errorFactory: Agents.CreateAndStreamRunError,
      },
      options,
    );
  }

  /**
   * Create an agent run and wait for the response
   *
   * @remarks
   * Executes an [agent](https://developers.glean.com/agents/agents-api) run and returns the final
   * response. **Note**: If the agent uses an input form trigger, all form fields (including
   * optional fields) must be included in the `input` object.
   *
   * @returns Success
   *
   * @throws {@link Agents.CreateAndWaitRunError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createAndWaitRun(
    request: Agents.CreateAndWaitRunRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentRunWaitResponse, Agents.CreateAndWaitRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/runs/wait"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentRunCreateSchema },
      },
      {
        success: { kind: "json", schema: agentRunWaitResponseSchema },
        errorFactory: Agents.CreateAndWaitRunError,
      },
      options,
    );
  }

  /**
   * Edit an agent
   *
   * @remarks
   * Creates a draft or publishes an [agent](https://developers.glean.com/agents/agents-api). Use
   * `isDraft=true` to save a draft, or `isDraft=false` (or omit) to publish immediately. Only draft
   * and publish modes are supported.
   *
   * @returns Success
   *
   * @throws {@link Agents.EditAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editAgent(
    request: Agents.EditAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Agents.EditAgentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/{agent_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: editWorkflowRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Agents.EditAgentError,
      },
      options,
    );
  }

  /**
   * Retrieve an agent
   *
   * @remarks
   * Returns details of an [agent](https://developers.glean.com/agents/agents-api) created in the
   * Agent Builder.
   *
   * @returns Success
   *
   * @throws {@link Agents.GetAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getAgent(
    request: Agents.GetAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<Agent, Agents.GetAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/{agent_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentSchema },
        errorFactory: Agents.GetAgentError,
      },
      options,
    );
  }

  /**
   * List an agent's schemas
   *
   * @remarks
   * Return [agent](https://developers.glean.com/agents/agents-api)'s input and output schemas. You
   * can use these schemas to detect changes to an agent's input or output structure.
   *
   * @returns Success
   *
   * @throws {@link Agents.GetAgentSchemasError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getAgentSchemas(
    request: Agents.GetAgentSchemasRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentSchemas, Agents.GetAgentSchemasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/{agent_id}/schemas"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentSchemasSchema },
        errorFactory: Agents.GetAgentSchemasError,
      },
      options,
    );
  }

  /**
   * Import an agent
   *
   * @remarks
   * Imports an [agent](https://developers.glean.com/agents/agents-api) from its on-disk folder
   * representation (spec.yaml, instructions.md, skills/, subagents/) packaged as a zip, and creates
   * or updates the agent. Inverse of the export flow: the folder-to-schema conversion runs
   * server-side. The bundle must contain only regular files; symlinks are resolved by the caller at
   * packaging time.
   *
   * @returns Success
   *
   * @throws {@link Agents.ImportAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importAgent(
    request: Agents.ImportAgentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ImportAgentResponse, Agents.ImportAgentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/{agent_id}/import"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "bundle", value: request.bundle },
            {
              kind: "text",
              name: "gitCommitSha",
              value: request.gitCommitSha,
              schema: s.optional(s.string()),
            },
            { kind: "text", name: "gitAuthorId", value: request.gitAuthorId, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "commitMessage",
              value: request.commitMessage,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "syncMode",
              value: request.syncMode,
              schema: s.optional(s.lazy(() => importAgentSyncModeSchema)),
            },
            {
              kind: "text",
              name: "versionSource",
              value: request.versionSource,
              schema: s.defaulted(versionSourceSchema, VersionSource.User),
            },
            {
              kind: "text",
              name: "publishedBaselineHash",
              value: request.publishedBaselineHash,
              schema: s.optional(s.string()),
            },
            { kind: "text", name: "isDraft", value: request.isDraft, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: importAgentResponseSchema },
        errorFactory: Agents.ImportAgentError,
      },
      options,
    );
  }

  /**
   * Search agents
   *
   * @remarks
   * Search for [agents](https://developers.glean.com/agents/agents-api) by agent name.
   *
   * @returns Success
   *
   * @throws {@link Agents.SearchAgentsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  searchAgents(
    request: Agents.SearchAgentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ResponseSearchAgents, Agents.SearchAgentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/agents/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchAgentsRequestSchema },
      },
      {
        success: { kind: "json", schema: responseSearchAgentsSchema },
        errorFactory: Agents.SearchAgentsError,
      },
      options,
    );
  }
}

export namespace Agents {
  export type CreateAgentRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: CreateWorkflowRequest;
  };

  export class CreateAgentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAgentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateAndStreamRunRequest = {
    body: AgentRunCreate;
  };

  export class CreateAndStreamRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", string>
      | Declared<"error409", string>
      | Declared<"unauthorizedAgentToolsError", UnauthorizedAgentToolsError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAndStreamRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: s.string() } },
      {
        on: 422,
        kind: "unauthorizedAgentToolsError",
        decode: { kind: "json", schema: unauthorizedAgentToolsErrorSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateAndWaitRunRequest = {
    body: AgentRunCreate;
  };

  export class CreateAndWaitRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"unauthorizedAgentToolsError", UnauthorizedAgentToolsError>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAndWaitRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      {
        on: 422,
        kind: "unauthorizedAgentToolsError",
        decode: { kind: "json", schema: unauthorizedAgentToolsErrorSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EditAgentRequest = {
    /** The ID of the agent. */
    agentId: string;
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: EditWorkflowRequest;
  };

  export class EditAgentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", string>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EditAgentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetAgentRequest = {
    /** The ID of the agent. */
    agentId: string;
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class GetAgentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", string>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetAgentSchemasRequest = {
    /** The ID of the agent. */
    agentId: string;
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class GetAgentSchemasError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", string>
      | Declared<"error422", string>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentSchemasError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 422, kind: "error422", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ImportAgentRequestParams = {
    /** The ID of the agent to create or update. */
    agentId: string;
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /**
     * Zip of the agent folder (spec.yaml, instructions.md, skills/, subagents/) with symlinks
     * dereferenced.
     */
    bundle: FileInput;
    /** Optional Git commit SHA to associate with this import. */
    gitCommitSha?: string;
    /** Optional VCS commit author ID to associate with this import. */
    gitAuthorId?: string;
    /** Optional commit message for the imported version. */
    commitMessage?: string;
    /**
     * Whether the imported version is staged (saved without updating the live version) or published
     * directly to the live version.
     */
    syncMode?: ImportAgentSyncMode;
    /**
     * Provenance recorded on the staged commit or published version this import produces. Doesn't
     * change the agent's management mode (workflowSource). GIT: synced from a Git repository. USER:
     * uploaded by a user. Defaults to USER when omitted. Ignored for transient imports.
     *
     * @default VersionSource.User
     */
    versionSource?: VersionSource;
    /**
     * Optional baseline hash of the currently published agent definition. When publish hash
     * validation is enabled, an import updating an existing agent with syncMode PUBLISHED is
     * rejected with HTTP 409 if the current published definition hash is nonempty and does not
     * match this baseline. Leading and trailing whitespace is trimmed; omitted or blank values skip
     * validation. Ignored for STAGED imports, new agents, and transient previews.
     */
    publishedBaselineHash?: string;
    /**
     * Deprecated. Draft mutation semantics are not supported for transient previews. Use transient
     * and parentWorkflowId instead.
     */
    isDraft?: boolean;
  };

  export class ImportAgentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", string>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportAgentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SearchAgentsRequestParams = {
    body: SearchAgentsRequest;
  };

  export class SearchAgentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", string>
      | Declared<"error422", string>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchAgentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 422, kind: "error422", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
