import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { personDeleteRequestSchema, type PersonDeleteRequest } from "../models/person-delete-request.js";
import {
  personGetByIdsRequestSchema,
  type PersonGetByIdsRequest,
} from "../models/person-get-by-ids-request.js";
import { personGetRequestSchema, type PersonGetRequest } from "../models/person-get-request.js";
import { personGetResponseSchema, type PersonGetResponse } from "../models/person-get-response.js";
import { personMergeRequestInternalSchema, type PersonMergeRequest } from "../models/person-merge-request.js";
import { personMergeResponseSchema, type PersonMergeResponse } from "../models/person-merge-response.js";
import type { Servers } from "../servers.js";

/**
 * Create, update, retrieve, and manage people (contacts).
 */
export class People {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete one or more people
   *
   * @returns People deleted.
   *
   * @throws {@link People.DeletePeopleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePeople(
    request: People.DeletePeopleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, People.DeletePeopleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/person/delete"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: personDeleteRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: People.DeletePeopleError,
      },
      options,
    );
  }

  /**
   * Retrieve one or more people (get)
   *
   * @remarks
   * Retrieves people matching a filter, with the requested fields, sort order, limit, and offset
   * for pagination.
   *
   * @returns Matching people.
   *
   * @throws {@link People.GetPeopleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPeople(
    request: People.GetPeopleRequest,
    options?: RequestOptions,
  ): ApiPromise<PersonGetResponse, People.GetPeopleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/person/get"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: personGetRequestSchema },
      },
      {
        success: { kind: "json", schema: personGetResponseSchema },
        errorFactory: People.GetPeopleError,
      },
      options,
    );
  }

  /**
   * Retrieve people by their Ortto IDs
   *
   * @returns Matching people.
   *
   * @throws {@link People.GetPeopleByIdsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPeopleByIds(
    request: People.GetPeopleByIdsRequest,
    options?: RequestOptions,
  ): ApiPromise<PersonGetResponse, People.GetPeopleByIdsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/person/get-by-ids"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: personGetByIdsRequestSchema },
      },
      {
        success: { kind: "json", schema: personGetResponseSchema },
        errorFactory: People.GetPeopleByIdsError,
      },
      options,
    );
  }

  /**
   * Create or update one or more people (merge)
   *
   * @remarks
   * Creates or updates up to 100 people in a single request. Matching of existing records is
   * controlled with merge_by, merge_strategy, and find_strategy.
   *
   * @returns People created or updated.
   *
   * @throws {@link People.MergePeopleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mergePeople(
    request: People.MergePeopleRequest,
    options?: RequestOptions,
  ): ApiPromise<PersonMergeResponse, People.MergePeopleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/person/merge"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: personMergeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: personMergeResponseSchema },
        errorFactory: People.MergePeopleError,
      },
      options,
    );
  }
}

export namespace People {
  export type DeletePeopleRequest = {
    body: PersonDeleteRequest;
  };

  export class DeletePeopleError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeletePeopleError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPeopleRequest = {
    body: PersonGetRequest;
  };

  export class GetPeopleError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPeopleError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPeopleByIdsRequest = {
    body: PersonGetByIdsRequest;
  };

  export class GetPeopleByIdsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPeopleByIdsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type MergePeopleRequest = {
    body: PersonMergeRequest;
  };

  export class MergePeopleError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<MergePeopleError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
