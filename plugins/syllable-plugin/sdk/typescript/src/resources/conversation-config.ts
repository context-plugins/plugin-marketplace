import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bridgePhrasesConfigSchema, type BridgePhrasesConfig } from "../models/bridge-phrases-config.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { agentId3Schema, type AgentId3 } from "../models/unions/agent-id3.js";
import { agentId4Schema, type AgentId4 } from "../models/unions/agent-id4.js";
import { toolName1Schema, type ToolName1 } from "../models/unions/tool-name1.js";
import { toolName2Schema, type ToolName2 } from "../models/unions/tool-name2.js";
import type { Servers } from "../servers.js";

export class ConversationConfig {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Bridge Phrases Config
   *
   * @remarks
   * Get the bridge phrases configuration.
   *
   * @returns Successful Response
   *
   * @throws {@link ConversationConfig.GetBridgePhrasesConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBridgePhrasesConfig(
    request: ConversationConfig.GetBridgePhrasesConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<BridgePhrasesConfig, ConversationConfig.GetBridgePhrasesConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/conversation-config/bridges"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "agent_id", value: request.agentId, schema: s.optional(s.lazy(() => agentId3Schema)) },
          { name: "tool_name", value: request.toolName, schema: s.optional(s.lazy(() => toolName1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bridgePhrasesConfigSchema },
        errorFactory: ConversationConfig.GetBridgePhrasesConfigError,
      },
      options,
    );
  }

  /**
   * Update Bridge Phrases Config
   *
   * @remarks
   * Update the bridge phrases configuration.
   *
   * @returns Successful Response
   *
   * @throws {@link ConversationConfig.UpdateBridgePhrasesConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBridgePhrasesConfig(
    request: ConversationConfig.UpdateBridgePhrasesConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<BridgePhrasesConfig, ConversationConfig.UpdateBridgePhrasesConfigError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/conversation-config/bridges"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "agent_id", value: request.agentId, schema: s.optional(s.lazy(() => agentId4Schema)) },
          { name: "tool_name", value: request.toolName, schema: s.optional(s.lazy(() => toolName2Schema)) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bridgePhrasesConfigSchema },
      },
      {
        success: { kind: "json", schema: bridgePhrasesConfigSchema },
        errorFactory: ConversationConfig.UpdateBridgePhrasesConfigError,
      },
      options,
    );
  }
}

export namespace ConversationConfig {
  export type GetBridgePhrasesConfigRequest = {
    /** Agent ID to fetch config for */
    agentId?: AgentId3;
    /** Tool name to fetch config for */
    toolName?: ToolName1;
  };

  export class GetBridgePhrasesConfigError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetBridgePhrasesConfigError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateBridgePhrasesConfigRequest = {
    /** Agent ID to update config for */
    agentId?: AgentId4;
    /** Tool name to update config for */
    toolName?: ToolName2;
    body: BridgePhrasesConfig;
  };

  export class UpdateBridgePhrasesConfigError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBridgePhrasesConfigError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
