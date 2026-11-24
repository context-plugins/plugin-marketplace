import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageAgentsResponseSchema,
  type ApiV1ManageAgentsResponse,
} from "../models/api-v1-manage-agents-response.js";
import {
  apiV1ManageAgentsResponse1Schema,
  type ApiV1ManageAgentsResponse1,
} from "../models/api-v1-manage-agents-response1.js";
import { confirmTargetSchema, type ConfirmTarget } from "../models/confirm-target.js";
import { errorSchema, type Error } from "../models/error.js";
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
   * List connected MCP clients
   *
   * @remarks
   * The MCP clients currently authorized against the key's project, with the same ids Settings →
   * Agents shows and each grant's approval policy. Never returns key material. Tier A. Scope:
   * workspace:manage.
   *
   * @returns The project's MCP grants.
   *
   * @throws {@link Agents.ListAgentGrantsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgentGrants(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageAgentsResponse, Agents.ListAgentGrantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/agents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageAgentsResponseSchema },
        errorFactory: Agents.ListAgentGrantsError,
      },
      options,
    );
  }

  /**
   * Disconnect an MCP client
   *
   * @remarks
   * Disconnect one MCP client. Its bearer stops working immediately and the human has to authorize
   * it again from their agent, so this is destructive (Tier C): `confirm` must equal the grant id.
   * An id outside the key's project 404s. Scope: workspace:manage.
   *
   * @returns The client was disconnected.
   *
   * @throws {@link Agents.RevokeAgentGrantError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeAgentGrant(
    request: Agents.RevokeAgentGrantRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageAgentsResponse1, Agents.RevokeAgentGrantError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/agents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageAgentsResponse1Schema },
        errorFactory: Agents.RevokeAgentGrantError,
      },
      options,
    );
  }
}

export namespace Agents {
  export class ListAgentGrantsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentGrantsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RevokeAgentGrantRequest = {
    /** A grant id from the MCP client listing. */
    id: string;
    body: ConfirmTarget;
  };

  export class RevokeAgentGrantError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeAgentGrantError> = [
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
