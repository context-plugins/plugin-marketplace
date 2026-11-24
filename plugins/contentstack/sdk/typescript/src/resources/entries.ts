import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createEntryRequestSchema, type CreateEntryRequest } from "../models/create-entry-request.js";
import { entryListSchema, type EntryList } from "../models/entry-list.js";
import { entryModelSchema, type EntryModel } from "../models/entry-model.js";
import { entry2Schema, type Entry2 } from "../models/entry2.js";
import {
  errorContentstackAssetsApiSchema,
  type ErrorContentstackAssetsApi,
} from "../models/error-contentstack-assets-api.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import { publishRequestSchema, type PublishRequest } from "../models/publish-request.js";
import { updateEntryRequestSchema, type UpdateEntryRequest } from "../models/update-entry-request.js";
import type { Servers } from "../servers.js";

/**
 * Entries are instances of content types that hold the actual content data. They can be filtered,
 * sorted, paginated, and localized.
 */
export class Entries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an entry
   *
   * @remarks
   * Creates a new entry for the specified content type. The entry data must conform to the content
   * type schema. Newly created entries are in draft state and must be published separately.
   *
   * @returns The newly created entry.
   *
   * @throws {@link Entries.CreateEntryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEntry(
    request: Entries.CreateEntryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Entry2, Entries.CreateEntryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types/{content_type_uid}/entries"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "content_type_uid", value: request.contentTypeUid, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createEntryRequestSchema },
      },
      {
        success: { kind: "json", schema: entry2Schema },
        errorFactory: Entries.CreateEntryError,
      },
      options,
    );
  }

  /**
   * Delete an entry
   *
   * @remarks
   * Permanently deletes an entry from the stack. Published entries must be unpublished before
   * deletion. This action cannot be undone.
   *
   * @returns Entry deleted successfully.
   *
   * @throws {@link Entries.DeleteEntryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEntry(
    request: Entries.DeleteEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Entries.DeleteEntryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}",
        ),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Entries.DeleteEntryError,
      },
      options,
    );
  }

  /**
   * Get all entries
   *
   * @remarks
   * Fetches a list of all published entries for a particular content type. Supports filtering by
   * query, localization, reference inclusion, pagination, sorting, and field selection.
   *
   * @returns A list of published entries for the specified content type.
   *
   * @throws {@link Entries.GetAllEntriesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllEntries(
    request: Entries.GetAllEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntryList, Entries.GetAllEntriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types/{content_type_uid}/entries"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "content_type_uid", value: request.contentTypeUid, schema: s.string() }],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
          {
            name: "include_content_type",
            value: request.includeContentType,
            schema: s.optional(s.boolean()),
          },
          { name: "include_reference", value: request.includeReference, schema: s.optional(s.boolean()) },
          { name: "only", value: request.only, schema: s.optional(s.string()) },
          { name: "except", value: request.except, schema: s.optional(s.string()) },
          { name: "asc", value: request.asc, schema: s.optional(s.string()) },
          { name: "desc", value: request.desc, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entryListSchema },
        errorFactory: Entries.GetAllEntriesError,
      },
      options,
    );
  }

  /**
   * Get a single entry
   *
   * @remarks
   * Retrieves a specific published entry identified by its UID within a given content type.
   * Supports localization, reference inclusion, and field selection parameters.
   *
   * @returns The requested entry object.
   *
   * @throws {@link Entries.GetSingleEntryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSingleEntry(
    request: Entries.GetSingleEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<EntryModel, Entries.GetSingleEntryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}",
        ),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
        ],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "include_reference", value: request.includeReference, schema: s.optional(s.boolean()) },
          { name: "version", value: request.version, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entryModelSchema },
        errorFactory: Entries.GetSingleEntryError,
      },
      options,
    );
  }

  /**
   * Publish an entry
   *
   * @remarks
   * Publishes an entry to one or more environments and locales. Publishing makes the entry
   * available via the Content Delivery API for the specified environments.
   *
   * @returns Entry published successfully.
   *
   * @throws {@link Entries.PublishEntryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publishEntry(
    request: Entries.PublishEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Entries.PublishEntryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}/publish",
        ),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: publishRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Entries.PublishEntryError,
      },
      options,
    );
  }

  /**
   * Unpublish an entry
   *
   * @remarks
   * Removes an entry from one or more environments, making it unavailable via the Content Delivery
   * API for the specified environments.
   *
   * @returns Entry unpublished successfully.
   *
   * @throws {@link Entries.UnpublishEntryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unpublishEntry(
    request: Entries.UnpublishEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Entries.UnpublishEntryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}/unpublish",
        ),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: publishRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Entries.UnpublishEntryError,
      },
      options,
    );
  }

  /**
   * Update an entry
   *
   * @remarks
   * Updates the field values of an existing entry. Only the fields included in the request body are
   * updated; other fields retain their current values.
   *
   * @returns The updated entry.
   *
   * @throws {@link Entries.UpdateEntryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEntry(
    request: Entries.UpdateEntryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Entry2, Entries.UpdateEntryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}",
        ),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
        ],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateEntryRequestSchema },
      },
      {
        success: { kind: "json", schema: entry2Schema },
        errorFactory: Entries.UpdateEntryError,
      },
      options,
    );
  }
}

export namespace Entries {
  export type CreateEntryRequestParams = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The locale code for localized content operations. */
    locale?: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
    body: CreateEntryRequest;
  };

  export class CreateEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEntryError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type DeleteEntryRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
  };

  export class DeleteEntryError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEntryError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackAssetsApi2",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type GetAllEntriesRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /**
     * The locale code to retrieve localized content. Defaults to the default locale of the stack if
     * not specified.
     */
    locale?: string;
    /** Number of entries to skip for pagination. @default 0 */
    skip?: number;
    /** Maximum number of entries to return. Maximum allowed is 250. @default 100 */
    limit?: number;
    /**
     * A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for
     * field matching and comparison.
     */
    query?: string;
    /** Set to true to include the total count of matching entries. */
    includeCount?: boolean;
    /** Set to true to include the content type schema in the response. */
    includeContentType?: boolean;
    /** Set to true to include referenced entries inline in the response. */
    includeReference?: boolean;
    /** Comma-separated list of fields to include in the response. */
    only?: string;
    /** Comma-separated list of fields to exclude from the response. */
    except?: string;
    /** Field name to sort results in ascending order. */
    asc?: string;
    /** Field name to sort results in descending order. */
    desc?: string;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export const getAllEntriesRequestSchema: Schema<GetAllEntriesRequest> = s.lazySchema(() =>
    s.object<GetAllEntriesRequest>({
      contentTypeUid: s.string(),
      locale: s.optional(s.string()),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(250)), 100),
      query: s.optional(s.string()),
      includeCount: s.optional(s.boolean()),
      includeContentType: s.optional(s.boolean()),
      includeReference: s.optional(s.boolean()),
      only: s.optional(s.string()),
      except: s.optional(s.string()),
      asc: s.optional(s.string()),
      desc: s.optional(s.string()),
      apiKey: s.string(),
      accessToken: s.string(),
    }),
  );

  export class GetAllEntriesError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllEntriesError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackAssetsApi2",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type GetSingleEntryRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /**
     * The locale code to retrieve localized content. Defaults to the default locale of the stack if
     * not specified.
     */
    locale?: string;
    /** Set to true to include referenced entries inline in the response. */
    includeReference?: boolean;
    /** Retrieve a specific published version of the entry. */
    version?: number;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetSingleEntryError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleEntryError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackAssetsApi2",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type PublishEntryRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
    body: PublishRequest;
  };

  export class PublishEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishEntryError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type UnpublishEntryRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
    body: PublishRequest;
  };

  export class UnpublishEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnpublishEntryError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type UpdateEntryRequestParams = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /** The locale code for localized content operations. */
    locale?: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
    body: UpdateEntryRequest;
  };

  export class UpdateEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEntryError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }
}
