import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  enrichmentJobAcceptedInternalSchema,
  type EnrichmentJobAccepted,
} from "../models/enrichment-job-accepted.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  peopleEnrichmentRequestInternalSchema,
  type PeopleEnrichmentRequest,
} from "../models/people-enrichment-request.js";
import {
  peopleEnrichmentResultInternalSchema,
  type PeopleEnrichmentResult,
} from "../models/people-enrichment-result.js";
import {
  peopleFindByEmailRequestInternalSchema,
  type PeopleFindByEmailRequest,
} from "../models/people-find-by-email-request.js";
import {
  peopleFindByEmailResponseInternalSchema,
  type PeopleFindByEmailResponse,
} from "../models/people-find-by-email-response.js";
import {
  peopleSearchRequestInternalSchema,
  type PeopleSearchRequest,
} from "../models/people-search-request.js";
import { peopleSearchResponseSchema, type PeopleSearchResponse } from "../models/people-search-response.js";
import type { Servers } from "../servers.js";

/**
 * Search and enrich individual contacts.
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
   * Find people by email
   *
   * @remarks
   * Enrich people directly from a list of email addresses, returning the matched person profile and
   * firmographics where available.
   *
   * @returns Matched people.
   *
   * @throws {@link People.FindPeopleByEmailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findPeopleByEmail(
    request: People.FindPeopleByEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<PeopleFindByEmailResponse, People.FindPeopleByEmailError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/people/find-by-email"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: peopleFindByEmailRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: peopleFindByEmailResponseInternalSchema },
        errorFactory: People.FindPeopleByEmailError,
      },
      options,
    );
  }

  /**
   * Enrich people (get)
   *
   * @remarks
   * Retrieve the status and results of a people enrichment job by ID. Poll until status is
   * COMPLETED, or use a webhook to be notified.
   *
   * @returns Enrichment job status and enriched people.
   *
   * @throws {@link People.GetPeopleEnrichmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPeopleEnrichment(
    request: People.GetPeopleEnrichmentRequest,
    options?: RequestOptions,
  ): ApiPromise<PeopleEnrichmentResult, People.GetPeopleEnrichmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/people/enrich/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: peopleEnrichmentResultInternalSchema },
        errorFactory: People.GetPeopleEnrichmentError,
      },
      options,
    );
  }

  /**
   * Search people
   *
   * @remarks
   * Search for people by persona filters (job titles, seniorities, departments) and company filters
   * (industry, headcount, location). Job titles are expanded automatically with acronym and
   * semantic matching. Results are paged with nextPageToken.
   *
   * @returns Matching people.
   *
   * @throws {@link People.SearchPeopleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPeople(
    request: People.SearchPeopleRequest,
    options?: RequestOptions,
  ): ApiPromise<PeopleSearchResponse, People.SearchPeopleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/people/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: peopleSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: peopleSearchResponseSchema },
        errorFactory: People.SearchPeopleError,
      },
      options,
    );
  }

  /**
   * Enrich people (start)
   *
   * @remarks
   * Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by
   * a LinkedIn URL, or by first name + last name + company name or domain. Returns an enrichment ID
   * for polling or a webhook callback.
   *
   * @returns Enrichment job accepted.
   *
   * @throws {@link People.StartPeopleEnrichmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startPeopleEnrichment(
    request: People.StartPeopleEnrichmentRequest,
    options?: RequestOptions,
  ): ApiPromise<EnrichmentJobAccepted, People.StartPeopleEnrichmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/people/enrich"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: peopleEnrichmentRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: enrichmentJobAcceptedInternalSchema },
        errorFactory: People.StartPeopleEnrichmentError,
      },
      options,
    );
  }
}

export namespace People {
  export type FindPeopleByEmailRequest = {
    body: PeopleFindByEmailRequest;
  };

  export class FindPeopleByEmailError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FindPeopleByEmailError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPeopleEnrichmentRequest = {
    /** The enrichment job ID returned by the start operation. */
    id: string;
  };

  export class GetPeopleEnrichmentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPeopleEnrichmentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SearchPeopleRequest = {
    body: PeopleSearchRequest;
  };

  export class SearchPeopleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPeopleError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartPeopleEnrichmentRequest = {
    body: PeopleEnrichmentRequest;
  };

  export class StartPeopleEnrichmentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartPeopleEnrichmentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
