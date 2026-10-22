import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listEntitiesRequestSchema, type ListEntitiesRequest } from "../models/list-entities-request.js";
import { listEntitiesResponseSchema, type ListEntitiesResponse } from "../models/list-entities-response.js";
import { peopleRequestSchema, type PeopleRequest } from "../models/people-request.js";
import { peopleResponseSchema, type PeopleResponse } from "../models/people-response.js";
import type { Servers } from "../servers.js";

export class Entities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get person photo
   *
   * @remarks
   * Returns the profile photo bytes for a person whose photo is stored in Glean (crawled from an
   * identity source or user-uploaded via admin console). Photos hosted externally (e.g. Slack CDN)
   * are not served by this endpoint; callers should follow the photoUrl from /people or
   * /listentities directly. Responses include a Cache-Control header (max-age=3600) to reduce
   * redundant fetches.
   *
   * @returns Photo bytes returned successfully.
   *
   * @throws {@link Entities.GetPersonPhotoError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPersonPhoto(
    request: Entities.GetPersonPhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Entities.GetPersonPhotoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/people/{person_id}/photo"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "person_id", value: request.personId, schema: s.string() }],
        query: [{ name: "ds", value: request.ds, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Entities.GetPersonPhotoError,
      },
      options,
    );
  }

  /**
   * List entities
   *
   * @remarks
   * List some set of details for all entities that fit the given criteria and return in the
   * requested order. Does not support negation in filters, assumes relation type EQUALS. There is a
   * limit of 10000 entities that can be retrieved via this endpoint, except when using
   * FULL_DIRECTORY request type for people entities.
   *
   * @returns OK
   *
   * @throws {@link Entities.ListentitiesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listentities(
    request: Entities.ListentitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEntitiesResponse, Entities.ListentitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/listentities"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: listEntitiesRequestSchema },
      },
      {
        success: { kind: "json", schema: listEntitiesResponseSchema },
        errorFactory: Entities.ListentitiesError,
      },
      options,
    );
  }

  /**
   * Read people
   *
   * @remarks
   * Read people details for the given IDs.
   *
   * @returns OK
   *
   * @throws {@link Entities.PeopleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  people(
    request: Entities.PeopleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PeopleResponse, Entities.PeopleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/people"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: peopleRequestSchema },
      },
      {
        success: { kind: "json", schema: peopleResponseSchema },
        errorFactory: Entities.PeopleError,
      },
      options,
    );
  }
}

export namespace Entities {
  export type GetPersonPhotoRequest = {
    /** The obfuscated ID of the person whose photo to retrieve. */
    personId: string;
    /**
     * Optional datasource override for crawled photos (e.g. AZURE, GDRIVE, OKTA). When omitted, the
     * datasource is derived from the person's stored photo URL or the deployment's primary person
     * datasource.
     */
    ds?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class GetPersonPhotoError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPersonPhotoError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListentitiesRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** List people request */
    body: ListEntitiesRequest;
  };

  export class ListentitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListentitiesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type PeopleRequestParams = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** People request */
    body: PeopleRequest;
  };

  export class PeopleError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PeopleError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
