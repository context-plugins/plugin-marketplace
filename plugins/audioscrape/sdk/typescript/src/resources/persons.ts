import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { personDetailSchema, type PersonDetail } from "../models/person-detail.js";
import { personListSchema, type PersonList } from "../models/person-list.js";
import type { Servers } from "../servers.js";

/**
 * Look up speakers and their appearances
 */
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
   * Get person detail with appearances
   *
   * @remarks
   * Returns a person + up to 20 recent episode appearances where this person is attributed as a
   * speaker.
   *
   * @returns Person + recent appearances
   *
   * @throws {@link Persons.GetPersonV1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPersonV1(
    request: Persons.GetPersonV1Request,
    options?: RequestOptions,
  ): ApiPromise<PersonDetail, Persons.GetPersonV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/persons/{person_slug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "person_slug", value: request.personSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: personDetailSchema },
        errorFactory: Persons.GetPersonV1Error,
      },
      options,
    );
  }

  /**
   * Search persons (speakers)
   *
   * @remarks
   * Searches the persons index by name. Persons are speakers identified across podcast transcripts
   * — every speaker who's been attributed to at least one segment.
   *
   * @returns Matching persons
   *
   * @throws {@link Persons.SearchPersonsV1Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPersonsV1(
    request: Persons.SearchPersonsV1Request = {},
    options?: RequestOptions,
  ): ApiPromise<PersonList, Persons.SearchPersonsV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/persons"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: personListSchema },
        errorFactory: Persons.SearchPersonsV1Error,
      },
      options,
    );
  }
}

export namespace Persons {
  export type GetPersonV1Request = {
    /** URL slug from a person search result */
    personSlug: string;
  };

  export class GetPersonV1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPersonV1Error> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type SearchPersonsV1Request = {
    /** Name substring (case-insensitive) */
    q?: string;
    /** Max results (default 20, max 100) */
    limit?: number;
  };

  export class SearchPersonsV1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPersonsV1Error> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
