import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createIterationInternalSchema, type CreateIteration } from "../models/create-iteration.js";
import { iterationSlimInternalSchema, type IterationSlim } from "../models/iteration-slim.js";
import { iterationInternalSchema, type Iteration } from "../models/iteration.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import { updateIterationInternalSchema, type UpdateIteration } from "../models/update-iteration.js";
import type { Servers } from "../servers.js";

export class Iterations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Iteration
   *
   * @returns Resource
   *
   * @throws {@link Iterations.CreateIterationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIteration(
    request: Iterations.CreateIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<Iteration, Iterations.CreateIterationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/iterations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createIterationInternalSchema },
      },
      {
        success: { kind: "json", schema: iterationInternalSchema },
        errorFactory: Iterations.CreateIterationError,
      },
      options,
    );
  }

  /**
   * Delete Iteration
   *
   * @returns No Content
   *
   * @throws {@link Iterations.DeleteIterationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIteration(
    request: Iterations.DeleteIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Iterations.DeleteIterationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Iterations.DeleteIterationError,
      },
      options,
    );
  }

  /**
   * Disable Iterations
   *
   * @remarks
   * Disables Iterations for the current workspace
   *
   * @returns No Content
   *
   * @throws {@link Iterations.DisableIterationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableIterations(options?: RequestOptions): ApiPromise<undefined, Iterations.DisableIterationsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/iterations/disable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Iterations.DisableIterationsError,
      },
      options,
    );
  }

  /**
   * Enable Iterations
   *
   * @remarks
   * Enables Iterations for the current workspace
   *
   * @returns No Content
   *
   * @throws {@link Iterations.EnableIterationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableIterations(options?: RequestOptions): ApiPromise<undefined, Iterations.EnableIterationsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/iterations/enable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Iterations.EnableIterationsError,
      },
      options,
    );
  }

  /**
   * Get Iteration
   *
   * @returns Resource
   *
   * @throws {@link Iterations.GetIterationError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIteration(
    request: Iterations.GetIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<Iteration, Iterations.GetIterationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: iterationInternalSchema },
        errorFactory: Iterations.GetIterationError,
      },
      options,
    );
  }

  /**
   * List Iteration Stories
   *
   * @remarks
   * Get a list of all Stories in an Iteration.
   *
   * @returns Resource
   *
   * @throws {@link Iterations.ListIterationStoriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIterationStories(
    request: Iterations.ListIterationStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Iterations.ListIterationStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: Iterations.ListIterationStoriesError,
      },
      options,
    );
  }

  /**
   * List Iterations
   *
   * @returns Resource
   *
   * @throws {@link Iterations.ListIterationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIterations(options?: RequestOptions): ApiPromise<IterationSlim[], Iterations.ListIterationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/iterations"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => iterationSlimInternalSchema)) },
        errorFactory: Iterations.ListIterationsError,
      },
      options,
    );
  }

  /**
   * Update Iteration
   *
   * @returns Resource
   *
   * @throws {@link Iterations.UpdateIterationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateIteration(
    request: Iterations.UpdateIterationRequest,
    options?: RequestOptions,
  ): ApiPromise<Iteration, Iterations.UpdateIterationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/iterations/{iteration-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "iteration-public-id", value: request.iterationPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateIterationInternalSchema },
      },
      {
        success: { kind: "json", schema: iterationInternalSchema },
        errorFactory: Iterations.UpdateIterationError,
      },
      options,
    );
  }
}

export namespace Iterations {
  export type CreateIterationRequest = {
    body: CreateIteration;
  };

  export class CreateIterationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateIterationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteIterationRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
  };

  export class DeleteIterationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteIterationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class DisableIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableIterationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class EnableIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableIterationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetIterationRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
  };

  export class GetIterationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIterationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListIterationStoriesRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListIterationStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIterationStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListIterationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIterationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateIterationRequest = {
    /** The unique ID of the Iteration. */
    iterationPublicId: number;
    body: UpdateIteration;
  };

  export class UpdateIterationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateIterationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
