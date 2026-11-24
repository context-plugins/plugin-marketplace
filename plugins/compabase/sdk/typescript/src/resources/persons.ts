import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  personConnectionsResponseSchema,
  type PersonConnectionsResponse,
} from "../models/person-connections-response.js";
import {
  personsSearchResponseSchema,
  type PersonsSearchResponse,
} from "../models/persons-search-response.js";
import type { Servers } from "../servers.js";

export class Persons {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Company connections for a person
   *
   * @remarks
   * Returns all companies linked to the given person together with the relationship type and role
   * label for each link.
   *
   * Use `GET /persons/search` to resolve a name to a `person_id` first.
   *
   * @returns Person connections payload.
   *
   * @throws {@link Persons.GetPersonsByPersonIdConnectionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPersonsByPersonIdConnections(
    request: Persons.GetPersonsByPersonIdConnectionsRequest,
    options?: RequestOptions,
  ): ApiPromise<PersonConnectionsResponse, Persons.GetPersonsByPersonIdConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/persons/{personId}/connections"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "personId", value: request.personId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: personConnectionsResponseSchema },
        errorFactory: Persons.GetPersonsByPersonIdConnectionsError,
      },
      options,
    );
  }

  /**
   * Search persons by name
   *
   * @remarks
   * Searches for natural persons by name (first name, last name, or both). Returns a deduplicated
   * list of matching persons with their `person_id` key and the number of companies they are linked
   * to.
   *
   * Use the returned `person_id` with `GET /persons/{personId}/connections` to fetch full
   * connection details.
   *
   * Identification is restricted to name-based queries (first name, last name, or both). Protected
   * data, including PESEL and exact birth dates, is never exposed. To assist with identification,
   * every result includes a `birth_year` (integer).
   *
   * **Result capping:** internally the search scans up to 2 000 matching link rows before
   * aggregation. For very common names the response may include a `note` field indicating the
   * result set was truncated; use a more specific query to narrow results.
   *
   * @returns List of matching persons.
   *
   * @throws {@link Persons.GetPersonsSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPersonsSearch(
    request: Persons.GetPersonsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PersonsSearchResponse, Persons.GetPersonsSearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/persons/search"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: personsSearchResponseSchema },
        errorFactory: Persons.GetPersonsSearchError,
      },
      options,
    );
  }
}

export namespace Persons {
  export type GetPersonsByPersonIdConnectionsRequest = {
    /** UUID of the person; obtained from `GET /persons/search`. */
    personId: string;
  };

  export class GetPersonsByPersonIdConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPersonsByPersonIdConnectionsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPersonsSearchRequest = {
    /**
     * Name substring to search for (case-insensitive). Must be at least **2 characters**. Matched
     * against the stored display name using `ILIKE %q%`.
     */
    q: string;
    /** Maximum number of persons to return. Capped at **50**. @default 20 */
    limit?: number;
  };

  export const getPersonsSearchRequestSchema: Schema<GetPersonsSearchRequest> = s.lazySchema(() =>
    s.object<GetPersonsSearchRequest>({
      q: s.string().check(s.minLength(2)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
    }),
  );

  export class GetPersonsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPersonsSearchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
