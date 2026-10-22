import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentCreateSchema, type AgentCreate } from "../models/agent-create.js";
import { agentPropertiesSchema, type AgentProperties } from "../models/agent-properties.js";
import { agentResponseSchema, type AgentResponse } from "../models/agent-response.js";
import { agentUpdateSchema, type AgentUpdate } from "../models/agent-update.js";
import { agentVoiceSchema, type AgentVoice } from "../models/agent-voice.js";
import { cardClickRequestSchema, type CardClickRequest } from "../models/card-click-request.js";
import { cardClickResponseSchema, type CardClickResponse } from "../models/card-click-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseAgentResponseSchema,
  type ListResponseAgentResponse,
} from "../models/list-response-agent-response.js";
import { supportedSttProviderSchema, type SupportedSttProvider } from "../models/supported-stt-provider.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fieldsSchema, type Fields } from "../models/unions/fields.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy3Schema, type OrderBy3 } from "../models/unions/order-by3.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { selectedProviderSchema, type SelectedProvider } from "../models/unions/selected-provider.js";
import { selectedVoiceSchema, type SelectedVoice } from "../models/unions/selected-voice.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to agent configuration. When a user interacts with the Syllable system, they
 * do so by communicating with an agent. An agent is linked to a prompt, a custom message, and one
 * or more channel targets to define its behavior and capabilities. For more information, see
 * [Console docs](https://docs.syllable.ai/workspaces/Agents).
 */
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
   * Create Agent
   *
   * @remarks
   * Create a new agent
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentCreate(
    request: Agents.AgentCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentResponse, Agents.AgentCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/agents/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentCreateSchema },
      },
      {
        success: { kind: "json", schema: agentResponseSchema },
        errorFactory: Agents.AgentCreateError,
      },
      options,
    );
  }

  /**
   * Delete Agent
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentDelete(
    request: Agents.AgentDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Agents.AgentDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/agents/{agent_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Agents.AgentDeleteError,
      },
      options,
    );
  }

  /**
   * Get Available Agent Stt Providers
   *
   * @remarks
   * Get the speech-to-text providers available to agents.
   *
   * Each provider's `status` is resolved against the current date. Retired providers are omitted
   * unless they match `selected_provider`, so an agent still saved on a retired provider can render
   * it as a locked field.
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentGetAvailableSttProvidersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentGetAvailableSttProviders(
    request: Agents.AgentGetAvailableSttProvidersRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportedSttProvider[], Agents.AgentGetAvailableSttProvidersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents/stt/available"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          {
            name: "selected_provider",
            value: request.selectedProvider,
            schema: s.optional(s.lazy(() => selectedProviderSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => supportedSttProviderSchema)) },
        errorFactory: Agents.AgentGetAvailableSttProvidersError,
      },
      options,
    );
  }

  /**
   * Get Available Agent Voices
   *
   * @remarks
   * Get available agent voices.
   *
   * Each voice's `status` is resolved against the current date. Retired voices are omitted unless
   * their display name is passed in `selected_voice`, so a saved config still referencing a retired
   * voice can render it as a locked field. A voice group holds one voice per language, so the
   * parameter is repeatable.
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentGetAvailableVoicesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentGetAvailableVoices(
    request: Agents.AgentGetAvailableVoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentVoice[], Agents.AgentGetAvailableVoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents/voices/available"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          {
            name: "selected_voice",
            value: request.selectedVoice,
            schema: s.optional(s.lazy(() => selectedVoiceSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => agentVoiceSchema)) },
        errorFactory: Agents.AgentGetAvailableVoicesError,
      },
      options,
    );
  }

  /**
   * Get Agent By Id
   *
   * @remarks
   * Get an agent by ID.
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentGetByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentGetById(
    request: Agents.AgentGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentResponse, Agents.AgentGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents/{agent_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentResponseSchema },
        errorFactory: Agents.AgentGetByIdError,
      },
      options,
    );
  }

  /**
   * Agent List
   *
   * @remarks
   * List the existing agents
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentList(
    request: Agents.AgentListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseAgentResponse, Agents.AgentListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => agentPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy3Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseAgentResponseSchema },
        errorFactory: Agents.AgentListError,
      },
      options,
    );
  }

  /**
   * List Active Agent Labels
   *
   * @remarks
   * List all distinct labels in use across active agents.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentListActiveLabels(options?: RequestOptions): ApiPromise<string[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents/labels"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Agent
   *
   * @remarks
   * Update an existing agent
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.AgentUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentUpdate(
    request: Agents.AgentUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentResponse, Agents.AgentUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/agents/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentUpdateSchema },
      },
      {
        success: { kind: "json", schema: agentResponseSchema },
        errorFactory: Agents.AgentUpdateError,
      },
      options,
    );
  }

  /**
   * Create Card Click Event
   *
   * @remarks
   * Log an EventLog for a client-side card click interaction.
   *
   * @returns Successful Response
   *
   * @throws {@link Agents.PostCardClickEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCardClickEvent(
    request: Agents.PostCardClickEventRequest,
    options?: RequestOptions,
  ): ApiPromise<CardClickResponse, Agents.PostCardClickEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/agents/test/{test_id}/card-click"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "test_id", value: request.testId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cardClickRequestSchema },
      },
      {
        success: { kind: "json", schema: cardClickResponseSchema },
        errorFactory: Agents.PostCardClickEventError,
      },
      options,
    );
  }
}

export namespace Agents {
  export type AgentCreateRequest = {
    body: AgentCreate;
  };

  export class AgentCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AgentCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AgentDeleteRequest = {
    agentId: number;
    reason: string;
  };

  export class AgentDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AgentDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AgentGetAvailableSttProvidersRequest = {
    selectedProvider?: SelectedProvider;
  };

  export class AgentGetAvailableSttProvidersError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AgentGetAvailableSttProvidersError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AgentGetAvailableVoicesRequest = {
    selectedVoice?: SelectedVoice;
  };

  export class AgentGetAvailableVoicesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AgentGetAvailableVoicesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AgentGetByIdRequest = {
    agentId: number;
  };

  export class AgentGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AgentGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AgentListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: AgentProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy3;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class AgentListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AgentListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type AgentUpdateRequest = {
    body: AgentUpdate;
  };

  export class AgentUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AgentUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PostCardClickEventRequest = {
    testId: string;
    body: CardClickRequest;
  };

  export class PostCardClickEventError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PostCardClickEventError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
