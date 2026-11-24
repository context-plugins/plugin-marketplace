import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  agentCardWalletListResponseSchema,
  type AgentCardWalletListResponse,
} from "../models/agent-card-wallet-list-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  stripeLinkStatusResponseSchema,
  type StripeLinkStatusResponse,
} from "../models/stripe-link-status-response.js";
import type { Servers } from "../servers.js";

export class Wallets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Stripe Link Status
   *
   * @remarks
   * The project's active Stripe Link wallet connection, if any.
   *
   * Read-only: connecting happens in the cloud UI. A run opts into paying with it by passing
   * `connection_id` as RunCreateRequest.stripe_link_connection_id, which is validated again there
   * against this same project.
   *
   * @returns Successful Response
   *
   * @throws {@link Wallets.GetStripeLinkStatusStripeLinkGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStripeLinkStatusStripeLinkGet(
    options?: RequestOptions,
  ): ApiPromise<StripeLinkStatusResponse, Wallets.GetStripeLinkStatusStripeLinkGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/stripe-link"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stripeLinkStatusResponseSchema },
        errorFactory: Wallets.GetStripeLinkStatusStripeLinkGetError,
      },
      options,
    );
  }

  /**
   * List Agentcard Wallets
   *
   * @remarks
   * The project's active AgentCard wallets, newest first.
   *
   * Read-only: funding is admin-only during the beta. The UI uses this to offer a wallet on the
   * composer, which is how a run opts into spending — the id then rides
   * RunCreateRequest.agentcard_wallet_id and is validated again there against this same project.
   *
   * @returns Successful Response
   *
   * @throws {@link Wallets.ListAgentcardWalletsAgentcardWalletsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgentcardWalletsAgentcardWalletsGet(
    options?: RequestOptions,
  ): ApiPromise<AgentCardWalletListResponse, Wallets.ListAgentcardWalletsAgentcardWalletsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agentcard/wallets"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentCardWalletListResponseSchema },
        errorFactory: Wallets.ListAgentcardWalletsAgentcardWalletsGetError,
      },
      options,
    );
  }
}

export namespace Wallets {
  export class GetStripeLinkStatusStripeLinkGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetStripeLinkStatusStripeLinkGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export class ListAgentcardWalletsAgentcardWalletsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentcardWalletsAgentcardWalletsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
