import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  listOperationsResponseSchema,
  type ListOperationsResponse,
} from "../models/list-operations-response.js";
import { operationSchema, type Operation } from "../models/operation.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get operations
   *
   * @remarks
   * Gets the latest state of a long-running operation. Clients can use this method to poll the
   * operation result at intervals as recommended by the API service.
   *
   * @returns Successful response
   *
   * @throws {@link Operations.SpeechOperationsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechOperationsGet(
    request: Operations.SpeechOperationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, Operations.SpeechOperationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/operations/{operationsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "operationsId", value: request.operationsId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: Operations.SpeechOperationsGetError,
      },
      options,
    );
  }

  /**
   * List operations
   *
   * @remarks
   * Lists operations that match the specified filter in the request. If the server doesn't support
   * this method, it returns `UNIMPLEMENTED`.
   *
   * @returns Successful response
   *
   * @throws {@link Operations.SpeechOperationsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechOperationsList(
    request: Operations.SpeechOperationsListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListOperationsResponse, Operations.SpeechOperationsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/operations"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "returnPartialSuccess",
            value: request.returnPartialSuccess,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOperationsResponseSchema },
        errorFactory: Operations.SpeechOperationsListError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type SpeechOperationsGetRequest = {
    /** Resource name segment (operationsId). */
    operationsId: string;
  };

  export class SpeechOperationsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechOperationsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechOperationsListRequest = {
    /** The standard list filter. */
    filter?: string;
    /** The name of the operation's parent resource. */
    name?: string;
    /** The standard list page size. */
    pageSize?: number;
    /** The standard list page token. */
    pageToken?: string;
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are
     * unreachable are returned in the ListOperationsResponse.unreachable field. This can only be
     * `true` when reading across collections. For example, when `parent` is set to
     * `"projects/example/locations/-"`. This field is not supported by default and will result in
     * an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product
     * specific documentation.
     */
    returnPartialSuccess?: boolean;
  };

  export class SpeechOperationsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechOperationsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
