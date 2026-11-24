import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  decisionEngineErrorResponseSchema,
  type DecisionEngineErrorResponse,
} from "../models/decision-engine-error-response.js";
import {
  decisionEngineMessageCloneSchema,
  type DecisionEngineMessageClone,
} from "../models/decision-engine-message-clone.js";
import {
  decisionEngineMessageCreateSchema,
  type DecisionEngineMessageCreate,
} from "../models/decision-engine-message-create.js";
import {
  decisionEngineMessageUpdateSchema,
  type DecisionEngineMessageUpdate,
} from "../models/decision-engine-message-update.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import { OrderBy, orderBySchema } from "../models/order-by.js";
import {
  decisionEngineFlowMessagesCloneResponseSchema,
  type DecisionEngineFlowMessagesCloneResponse,
} from "../models/unions/decision-engine-flow-messages-clone-response.js";
import {
  decisionEngineFlowMessagesCloneResponse1Schema,
  type DecisionEngineFlowMessagesCloneResponse1,
} from "../models/unions/decision-engine-flow-messages-clone-response1.js";
import {
  decisionEngineFlowMessagesResponse1Schema,
  type DecisionEngineFlowMessagesResponse1,
} from "../models/unions/decision-engine-flow-messages-response1.js";
import {
  decisionEngineFlowMessagesResponse11Schema,
  type DecisionEngineFlowMessagesResponse11,
} from "../models/unions/decision-engine-flow-messages-response11.js";
import {
  decisionEngineFlowMessagesResponse13Schema,
  type DecisionEngineFlowMessagesResponse13,
} from "../models/unions/decision-engine-flow-messages-response13.js";
import {
  decisionEngineFlowMessagesResponse14Schema,
  type DecisionEngineFlowMessagesResponse14,
} from "../models/unions/decision-engine-flow-messages-response14.js";
import {
  decisionEngineFlowResponseSchema,
  type DecisionEngineFlowResponse,
} from "../models/unions/decision-engine-flow-response.js";
import {
  decisionEngineFlowRunResponseSchema,
  type DecisionEngineFlowRunResponse,
} from "../models/unions/decision-engine-flow-run-response.js";
import {
  decisionEngineFlowsResponse1Schema,
  type DecisionEngineFlowsResponse1,
} from "../models/unions/decision-engine-flows-response1.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class DecisionEngine {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Clone Decision Engine Message
   *
   * @remarks
   * Clone a message within a flow. The copy keeps the source message's config, tags, guardrails,
   * and variables, and is created disabled.
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.CloneMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cloneMessage(
    request: DecisionEngine.CloneMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowMessagesCloneResponse, DecisionEngine.CloneMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/messages/{messageId}/clone"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "flowId", value: request.flowId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => decisionEngineMessageCloneSchema)),
        },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowMessagesCloneResponseSchema },
        errorFactory: DecisionEngine.CloneMessageError,
      },
      options,
    );
  }

  /**
   * Create Decision Engine Message
   *
   * @remarks
   * Create a message in a flow
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.CreateMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMessage(
    request: DecisionEngine.CreateMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowMessagesResponse11, DecisionEngine.CreateMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/messages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: decisionEngineMessageCreateSchema },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowMessagesResponse11Schema },
        errorFactory: DecisionEngine.CreateMessageError,
      },
      options,
    );
  }

  /**
   * Delete Decision Engine Message
   *
   * @remarks
   * Delete a message. The message is soft-deleted and disabled in the flow, so it is no longer
   * returned by the API and is ineligible for future sends.
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.DeleteMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMessage(
    request: DecisionEngine.DeleteMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowMessagesResponse13, DecisionEngine.DeleteMessageError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "flowId", value: request.flowId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowMessagesResponse13Schema },
        errorFactory: DecisionEngine.DeleteMessageError,
      },
      options,
    );
  }

  /**
   * Get Decision Engine Flow
   *
   * @remarks
   * Retrieve a decision engine flow by ID
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.GetFlowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFlow(
    request: DecisionEngine.GetFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowResponse, DecisionEngine.GetFlowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowResponseSchema },
        errorFactory: DecisionEngine.GetFlowError,
      },
      options,
    );
  }

  /**
   * Get Decision Engine Message
   *
   * @remarks
   * Get a single message by flow and message ID
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.GetMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMessage(
    request: DecisionEngine.GetMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowMessagesResponse11, DecisionEngine.GetMessageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "flowId", value: request.flowId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowMessagesResponse11Schema },
        errorFactory: DecisionEngine.GetMessageError,
      },
      options,
    );
  }

  /**
   * List Decision Engine Flows
   *
   * @remarks
   * List decision engine flows in the workspace
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.ListFlowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFlows(
    request: DecisionEngine.ListFlowsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowsResponse1, DecisionEngine.ListFlowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/decision-engine/flows"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "orderBy", value: request.orderBy, schema: s.defaulted(orderBySchema, OrderBy.Id) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowsResponse1Schema },
        errorFactory: DecisionEngine.ListFlowsError,
      },
      options,
    );
  }

  /**
   * List Decision Engine Messages
   *
   * @remarks
   * List messages for a flow
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.ListMessagesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMessages(
    request: DecisionEngine.ListMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowMessagesResponse1, DecisionEngine.ListMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/messages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowMessagesResponse1Schema },
        errorFactory: DecisionEngine.ListMessagesError,
      },
      options,
    );
  }

  /**
   * Trigger Decision Engine Flow Run
   *
   * @remarks
   * Trigger a decision engine run for a specific flow
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.RunFlowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runFlow(
    request: DecisionEngine.RunFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowRunResponse, DecisionEngine.RunFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/run"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowRunResponseSchema },
        errorFactory: DecisionEngine.RunFlowError,
      },
      options,
    );
  }

  /**
   * Update Decision Engine Message
   *
   * @remarks
   * Update a message
   *
   * @returns Ok
   *
   * @throws {@link DecisionEngine.UpdateMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMessage(
    request: DecisionEngine.UpdateMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<DecisionEngineFlowMessagesResponse11, DecisionEngine.UpdateMessageError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/decision-engine/flow/{flowId}/messages/{messageId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "flowId", value: request.flowId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: decisionEngineMessageUpdateSchema },
      },
      {
        success: { kind: "json", schema: decisionEngineFlowMessagesResponse11Schema },
        errorFactory: DecisionEngine.UpdateMessageError,
      },
      options,
    );
  }
}

export namespace DecisionEngine {
  export type CloneMessageRequest = {
    /** The UUID of the flow */
    flowId: string;
    /** The UUID of the message to clone */
    messageId: string;
    body?: DecisionEngineMessageClone;
  };

  export class CloneMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"decisionEngineErrorResponse", DecisionEngineErrorResponse>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"decisionEngineFlowMessagesCloneResponse1", DecisionEngineFlowMessagesCloneResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CloneMessageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "decisionEngineErrorResponse",
        decode: { kind: "json", schema: decisionEngineErrorResponseSchema },
      },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      {
        on: 500,
        kind: "decisionEngineFlowMessagesCloneResponse1",
        decode: { kind: "json", schema: decisionEngineFlowMessagesCloneResponse1Schema },
      },
    ];
  }

  export type CreateMessageRequest = {
    /** The UUID of the flow */
    flowId: string;
    body: DecisionEngineMessageCreate;
  };

  export class CreateMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMessageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type DeleteMessageRequest = {
    /** The UUID of the flow */
    flowId: string;
    /** The UUID of the message */
    messageId: string;
  };

  export class DeleteMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"decisionEngineErrorResponse", DecisionEngineErrorResponse>
      | Declared<"decisionEngineFlowMessagesResponse14", DecisionEngineFlowMessagesResponse14>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMessageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "decisionEngineErrorResponse",
        decode: { kind: "json", schema: decisionEngineErrorResponseSchema },
      },
      {
        on: 500,
        kind: "decisionEngineFlowMessagesResponse14",
        decode: { kind: "json", schema: decisionEngineFlowMessagesResponse14Schema },
      },
    ];
  }

  export type GetFlowRequest = {
    /** The UUID of the flow */
    flowId: string;
  };

  export class GetFlowError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlowError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetMessageRequest = {
    /** The UUID of the flow */
    flowId: string;
    /** The UUID of the message */
    messageId: string;
  };

  export class GetMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMessageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListFlowsRequest = {
    /** optional filter by flow name */
    name?: string;
    /** max results (default 100) @default 100 */
    limit?: number;
    /** pagination offset @default 0 */
    offset?: number;
    /** sort field @default OrderBy.Id */
    orderBy?: OrderBy;
  };

  export class ListFlowsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListFlowsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ListMessagesRequest = {
    /** The UUID of the flow */
    flowId: string;
    /** @default 100 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export class ListMessagesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMessagesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RunFlowRequest = {
    /** The UUID of the flow */
    flowId: string;
  };

  export class RunFlowError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunFlowError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type UpdateMessageRequest = {
    /** The UUID of the flow */
    flowId: string;
    /** The UUID of the message */
    messageId: string;
    body: DecisionEngineMessageUpdate;
  };

  export class UpdateMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMessageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
