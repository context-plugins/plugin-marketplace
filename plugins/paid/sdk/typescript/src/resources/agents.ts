import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentCreateSchema, type AgentCreate } from "../models/agent-create.js";
import { agentUpdateSchema, type AgentUpdate } from "../models/agent-update.js";
import { agentSchema, type Agent } from "../models/agent.js";
import type { Servers } from "../servers.js";

export class Agents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Agent
   *
   * @remarks
   * DEPRECATED: Use POST /products instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create(request: Agents.CreateRequest, options?: RequestOptions): ApiPromise<Agent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => agentCreateSchema)) },
      },
      {
        success: { kind: "json", schema: agentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete agent
   *
   * @remarks
   * DEPRECATED: Use DELETE /products/{productId} instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete(
    request: Agents.DeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/agents/{agentId}"),
        auth: noneAuth,
        pathParams: [{ name: "agentId", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Delete agent by external ID
   *
   * @remarks
   * DEPRECATED: Use DELETE /products/external/{externalId} instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteByExternalId(
    request: Agents.DeleteByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/agents/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Get agent by ID
   *
   * @remarks
   * DEPRECATED: Use GET /products/{productId} instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get(request: Agents.GetRequest, options?: RequestOptions): ApiPromise<Agent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/{agentId}"),
        auth: noneAuth,
        pathParams: [{ name: "agentId", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get agent by external ID
   *
   * @remarks
   * DEPRECATED: Use GET /products/external/{externalId} instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getByExternalId(
    request: Agents.GetByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Agent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List agents
   *
   * @remarks
   * DEPRECATED: Use /products instead. Agents are now products with type='agent'.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list(request: Agents.ListRequest, options?: RequestOptions): ApiPromise<Agent[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => agentSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Agent
   *
   * @remarks
   * DEPRECATED: Use PUT /products/{productId} instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update(request: Agents.UpdateRequest, options?: RequestOptions): ApiPromise<Agent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/agents/{agentId}"),
        auth: noneAuth,
        pathParams: [{ name: "agentId", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => agentUpdateSchema)) },
      },
      {
        success: { kind: "json", schema: agentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update agent by external ID
   *
   * @remarks
   * DEPRECATED: Use PUT /products/external/{externalId} instead.
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateByExternalId(
    request: Agents.UpdateByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Agent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/agents/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => agentUpdateSchema)) },
      },
      {
        success: { kind: "json", schema: agentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Agents {
  export type CreateRequest = {
    /** Bearer authentication */
    authorization: string;
    body?: AgentCreate;
  };

  export type DeleteRequest = {
    agentId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type DeleteByExternalIdRequest = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetRequest = {
    agentId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetByExternalIdRequest = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type ListRequest = {
    /** Bearer authentication */
    authorization: string;
  };

  export type UpdateRequest = {
    agentId: string;
    /** Bearer authentication */
    authorization: string;
    body?: AgentUpdate;
  };

  export type UpdateByExternalIdRequest = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
    body?: AgentUpdate;
  };
}
