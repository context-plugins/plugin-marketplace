import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { memoryClearRequestInternalSchema, type MemoryClearRequest } from "../models/memory-clear-request.js";
import { memoryEvictRequestInternalSchema, type MemoryEvictRequest } from "../models/memory-evict-request.js";
import {
  memoryRetrieveRequestInternalSchema,
  type MemoryRetrieveRequest,
} from "../models/memory-retrieve-request.js";
import {
  memoryRetrieveResponseSchema,
  type MemoryRetrieveResponse,
} from "../models/memory-retrieve-response.js";
import type { Servers } from "../servers.js";

/**
 * The Memory API retrieves and manages memories created by Tasks, Monitors, and FindAll runs.
 * Memories can be personal or isolated with a `memory_scope_key`.
 */
export class Memory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Clear Memory
   *
   * @remarks
   * Clears all entries from the selected memory without deleting the underlying tasks, monitors, or
   * FindAll runs.
   *
   * @returns Memory cleared.
   *
   * @throws {@link Memory.ClearMemoryV1BetaMemoryClearPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  clearMemoryV1BetaMemoryClearPost(
    request: Memory.ClearMemoryV1BetaMemoryClearPostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Memory.ClearMemoryV1BetaMemoryClearPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/memory/clear"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memoryClearRequestInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Memory.ClearMemoryV1BetaMemoryClearPostError,
      },
      options,
    );
  }

  /**
   * Evict from Memory
   *
   * @remarks
   * Removes a task run, monitor, or FindAll run from the selected memory without deleting the
   * original resource.
   *
   * @returns Source removed from memory.
   *
   * @throws {@link Memory.EvictMemorySourceV1BetaMemoryEvictPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  evictMemorySourceV1BetaMemoryEvictPost(
    request: Memory.EvictMemorySourceV1BetaMemoryEvictPostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Memory.EvictMemorySourceV1BetaMemoryEvictPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/memory/evict"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memoryEvictRequestInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Memory.EvictMemorySourceV1BetaMemoryEvictPostError,
      },
      options,
    );
  }

  /**
   * Retrieve Memory
   *
   * @remarks
   * Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by
   * relevance; leave it empty to return the most recent runs.
   *
   * @returns Successful Response
   *
   * @throws {@link Memory.RetrieveMemoryV1BetaMemoryRetrievePostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveMemoryV1BetaMemoryRetrievePost(
    request: Memory.RetrieveMemoryV1BetaMemoryRetrievePostRequest,
    options?: RequestOptions,
  ): ApiPromise<MemoryRetrieveResponse, Memory.RetrieveMemoryV1BetaMemoryRetrievePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/memory/retrieve"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memoryRetrieveRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: memoryRetrieveResponseSchema },
        errorFactory: Memory.RetrieveMemoryV1BetaMemoryRetrievePostError,
      },
      options,
    );
  }
}

export namespace Memory {
  export type ClearMemoryV1BetaMemoryClearPostRequest = {
    body: MemoryClearRequest;
  };

  export class ClearMemoryV1BetaMemoryClearPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ClearMemoryV1BetaMemoryClearPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type EvictMemorySourceV1BetaMemoryEvictPostRequest = {
    body: MemoryEvictRequest;
  };

  export class EvictMemorySourceV1BetaMemoryEvictPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<EvictMemorySourceV1BetaMemoryEvictPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type RetrieveMemoryV1BetaMemoryRetrievePostRequest = {
    body: MemoryRetrieveRequest;
  };

  export class RetrieveMemoryV1BetaMemoryRetrievePostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveMemoryV1BetaMemoryRetrievePostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
