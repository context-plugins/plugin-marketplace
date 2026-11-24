import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { atomInputSchema, type AtomInput } from "../models/atom-input.js";
import { atomQueryResultSchema, type AtomQueryResult } from "../models/atom-query-result.js";
import { atomSchema, type Atom } from "../models/atom.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { queryRequestSchema, type QueryRequest } from "../models/query-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage Boomi Atoms — the lightweight runtime engines that execute integration processes.
 */
export class Atoms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Delete an Atom
   *
   * @remarks
   * Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.
   *
   * @returns Deletion successful.
   *
   * @throws {@link Atoms.DeleteAtomError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAtom(
    request: Atoms.DeleteAtomRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Atoms.DeleteAtomError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/Atom/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Atoms.DeleteAtomError,
      },
      options,
    );
  }

  /**
   * Boomi Get an Atom
   *
   * @remarks
   * Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.
   *
   * @returns The Atom object.
   *
   * @throws {@link Atoms.GetAtomError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAtom(request: Atoms.GetAtomRequest, options?: RequestOptions): ApiPromise<Atom, Atoms.GetAtomError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Atom/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: atomSchema },
        errorFactory: Atoms.GetAtomError,
      },
      options,
    );
  }

  /**
   * Boomi Query Atoms
   *
   * @remarks
   * Returns a list of Atoms matching the specified filter criteria, including online/offline status
   * and environment associations.
   *
   * @returns Query results containing matching Atom objects.
   *
   * @throws {@link Atoms.QueryAtomsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryAtoms(
    request: Atoms.QueryAtomsRequest,
    options?: RequestOptions,
  ): ApiPromise<AtomQueryResult, Atoms.QueryAtomsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Atom/query"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryRequestSchema },
      },
      {
        success: { kind: "json", schema: atomQueryResultSchema },
        errorFactory: Atoms.QueryAtomsError,
      },
      options,
    );
  }

  /**
   * Boomi Update an Atom
   *
   * @remarks
   * Updates the name or purge schedule of an existing Boomi Atom.
   *
   * @returns The updated Atom object.
   *
   * @throws {@link Atoms.UpdateAtomError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAtom(
    request: Atoms.UpdateAtomRequest,
    options?: RequestOptions,
  ): ApiPromise<Atom, Atoms.UpdateAtomError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Atom/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: atomInputSchema },
      },
      {
        success: { kind: "json", schema: atomSchema },
        errorFactory: Atoms.UpdateAtomError,
      },
      options,
    );
  }
}

export namespace Atoms {
  export type DeleteAtomRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class DeleteAtomError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAtomError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAtomRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class GetAtomError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAtomError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type QueryAtomsRequest = {
    body: QueryRequest;
  };

  export class QueryAtomsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryAtomsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAtomRequest = {
    /** Unique identifier of the platform object. */
    id: string;
    body: AtomInput;
  };

  export class UpdateAtomError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAtomError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
