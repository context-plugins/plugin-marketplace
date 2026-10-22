import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentStatusResponseSchema, type AgentStatusResponse } from "../models/agent-status-response.js";
import { claudeRequestSchema, type ClaudeRequest } from "../models/claude-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { standardResponseSchema, type StandardResponse } from "../models/standard-response.js";
import type { Servers } from "../servers.js";

export class Agent {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Respond To Agent
   *
   * @remarks
   * Send a human response to a waiting agent and resume its execution.
   *
   * Requires API key authentication.
   *
   * @returns Human response sent to agent
   *
   * @throws {@link Agent.AnswerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  answer(
    request: Agent.AnswerRequest,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Agent.AnswerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agent/answer/{agent_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Agent.AnswerError,
      },
      options,
    );
  }

  /**
   * Run Agent
   *
   * @remarks
   * Run a loop with Anthropic's computer use agent to perform tasks on the VM.
   *
   * Requires API key authentication.
   *
   * @returns Agent task started
   *
   * @throws {@link Agent.RunError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  run(request: Agent.RunRequest, options?: RequestOptions): ApiPromise<StandardResponse, Agent.RunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agent/run/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: claudeRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Agent.RunError,
      },
      options,
    );
  }

  /**
   * Get Agent State
   *
   * @remarks
   * Get the current status of an agent for a specific instance.
   *
   * Requires API key authentication.
   *
   * @returns Agent status retrieved
   *
   * @throws {@link Agent.StatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  status(
    request: Agent.StatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentStatusResponse, Agent.StatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agent/status/{agent_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentStatusResponseSchema },
        errorFactory: Agent.StatusError,
      },
      options,
    );
  }

  /**
   * Stop Agent
   *
   * @remarks
   * Stop a running agent for a specific instance.
   *
   * Requires API key authentication.
   *
   * @returns Agent stopped successfully
   *
   * @throws {@link Agent.StopError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stop(request: Agent.StopRequest, options?: RequestOptions): ApiPromise<StandardResponse, Agent.StopError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agent/stop/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Agent.StopError,
      },
      options,
    );
  }
}

export namespace Agent {
  export type AnswerRequest = {
    agentId: string;
    body: Record<string, unknown>;
  };

  export class AnswerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnswerError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RunRequest = {
    instanceId: string;
    body: ClaudeRequest;
  };

  export class RunError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type StatusRequest = {
    agentId: string;
  };

  export class StatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<StatusError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type StopRequest = {
    instanceId: string;
  };

  export class StopError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
