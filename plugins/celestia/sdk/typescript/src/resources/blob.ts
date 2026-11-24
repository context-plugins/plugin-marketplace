import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { jsonRpcRequestSchema, type JsonRpcRequest } from "../models/json-rpc-request.js";
import { jsonRpcResponseSchema, type JsonRpcResponse } from "../models/json-rpc-response.js";
import type { Servers } from "../servers.js";

/**
 * Submit, retrieve, and prove blobs against Celestia namespaces.
 */
export class Blob {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Invoke Blob JSON-RPC Method
   *
   * @remarks
   * Single JSON-RPC entrypoint exposing the `blob.*` namespace including `blob.Submit`, `blob.Get`,
   * `blob.GetAll`, `blob.GetProof`, `blob.Included`, and `blob.Subscribe`. Authenticate with a
   * bearer token generated via `celestia auth `.
   *
   * @returns JSON-RPC response.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CelestiaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRoot(request: Blob.PostRootRequest, options?: RequestOptions): ApiPromise<JsonRpcResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: jsonRpcRequestSchema },
      },
      {
        success: { kind: "json", schema: jsonRpcResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Blob {
  export type PostRootRequest = {
    body: JsonRpcRequest;
  };
}
