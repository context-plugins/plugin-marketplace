import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponsePromptResponseSchema,
  type ListResponsePromptResponse,
} from "../models/list-response-prompt-response.js";
import { promptCreateRequestSchema, type PromptCreateRequest } from "../models/prompt-create-request.js";
import {
  promptHistoryResponseSchema,
  type PromptHistoryResponse,
} from "../models/prompt-history-response.js";
import { promptPropertiesSchema, type PromptProperties } from "../models/prompt-properties.js";
import { promptResponseSchema, type PromptResponse } from "../models/prompt-response.js";
import { promptUpdateRequestSchema, type PromptUpdateRequest } from "../models/prompt-update-request.js";
import { supportedLlmSchema, type SupportedLlm } from "../models/supported-llm.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields15Schema, type Fields15 } from "../models/unions/fields15.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy33Schema, type OrderBy33 } from "../models/unions/order-by33.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { selectedModelSchema, type SelectedModel } from "../models/unions/selected-model.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to prompts. A prompt defines the behavior of an agent by delivering
 * instructions to the LLM about how the agent should behave. A prompt can be linked to one or more
 * agents. A prompt can also be linked to tools to allow an agent using the prompt to use them. For
 * more information, see [Console docs](https://docs.syllable.ai/Resources/Prompts).
 */
export class Prompts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Supported Llm Configs
   *
   * @remarks
   * Get supported LLM configs.
   *
   * Each config's `status` is resolved against the current date. Retired models are omitted unless
   * they match `selected_model`, so a saved config still referencing a retired model can render it
   * as a locked field.
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptGetSupportedLlmsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptGetSupportedLlms(
    request: Prompts.PromptGetSupportedLlmsRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportedLlm[], Prompts.PromptGetSupportedLlmsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/prompts/llms/supported"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          {
            name: "selected_model",
            value: request.selectedModel,
            schema: s.optional(s.lazy(() => selectedModelSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => supportedLlmSchema)) },
        errorFactory: Prompts.PromptGetSupportedLlmsError,
      },
      options,
    );
  }

  /**
   * Create Prompt
   *
   * @remarks
   * Create a new prompt
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptsCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptsCreate(
    request: Prompts.PromptsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<PromptResponse, Prompts.PromptsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/prompts/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: promptCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: promptResponseSchema },
        errorFactory: Prompts.PromptsCreateError,
      },
      options,
    );
  }

  /**
   * Delete Prompt
   *
   * @remarks
   * Delete a prompt
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptsDeleteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptsDelete(
    request: Prompts.PromptsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Prompts.PromptsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/prompts/{prompt_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "prompt_id", value: request.promptId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Prompts.PromptsDeleteError,
      },
      options,
    );
  }

  /**
   * Get Prompt By Id
   *
   * @remarks
   * Get a prompt by ID
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptsGetByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptsGetById(
    request: Prompts.PromptsGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PromptResponse, Prompts.PromptsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/prompts/{prompt_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "prompt_id", value: request.promptId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: promptResponseSchema },
        errorFactory: Prompts.PromptsGetByIdError,
      },
      options,
    );
  }

  /**
   * Get Prompt History
   *
   * @remarks
   * Get a list of historical versions of a prompt by its ID
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptsHistoryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptsHistory(
    request: Prompts.PromptsHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<PromptHistoryResponse[], Prompts.PromptsHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/prompts/{prompt_id}/history"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "prompt_id", value: request.promptId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => promptHistoryResponseSchema)) },
        errorFactory: Prompts.PromptsHistoryError,
      },
      options,
    );
  }

  /**
   * Prompt List
   *
   * @remarks
   * List the existing prompts
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptsListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptsList(
    request: Prompts.PromptsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponsePromptResponse, Prompts.PromptsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/prompts/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => promptPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy33Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields15Schema)) },
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
        success: { kind: "json", schema: listResponsePromptResponseSchema },
        errorFactory: Prompts.PromptsListError,
      },
      options,
    );
  }

  /**
   * Update Prompt
   *
   * @remarks
   * Update an existing prompt
   *
   * @returns Successful Response
   *
   * @throws {@link Prompts.PromptsUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptsUpdate(
    request: Prompts.PromptsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<PromptResponse, Prompts.PromptsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/prompts/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: promptUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: promptResponseSchema },
        errorFactory: Prompts.PromptsUpdateError,
      },
      options,
    );
  }
}

export namespace Prompts {
  export type PromptGetSupportedLlmsRequest = {
    selectedModel?: SelectedModel;
  };

  export class PromptGetSupportedLlmsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptGetSupportedLlmsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PromptsCreateRequest = {
    body: PromptCreateRequest;
  };

  export class PromptsCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptsCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PromptsDeleteRequest = {
    promptId: number;
    reason: string;
  };

  export class PromptsDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptsDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PromptsGetByIdRequest = {
    promptId: number;
  };

  export class PromptsGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptsGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PromptsHistoryRequest = {
    promptId: number;
  };

  export class PromptsHistoryError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptsHistoryError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PromptsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: PromptProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy33;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields15;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class PromptsListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptsListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PromptsUpdateRequest = {
    body: PromptUpdateRequest;
  };

  export class PromptsUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PromptsUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
