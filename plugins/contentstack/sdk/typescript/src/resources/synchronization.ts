import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorContentstackAssetsApiSchema,
  type ErrorContentstackAssetsApi,
} from "../models/error-contentstack-assets-api.js";
import { syncResponseSchema, type SyncResponse } from "../models/sync-response.js";
import {
  type1ContentstackContentDeliverySynchronizationApiSchema,
  type Type1ContentstackContentDeliverySynchronizationApi,
} from "../models/type1-contentstack-content-delivery-synchronization-api.js";
import type { Servers } from "../servers.js";

/**
 * The synchronization endpoints allow developers to sync published content incrementally, enabling
 * efficient local caching and offline-first patterns.
 */
export class Synchronization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Sync content
   *
   * @remarks
   * Initiates an initial sync or continues a paginated sync of all published entries and assets in
   * the stack. Use init=true for the first sync to receive a sync token. Use the sync_token from
   * subsequent responses to fetch only the changes since the last sync.
   *
   * @returns Sync results with a sync_token or pagination_token for continuation.
   *
   * @throws {@link Synchronization.SyncContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  syncContent(
    request: Synchronization.SyncContentRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncResponse, Synchronization.SyncContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/stacks/sync"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [],
        query: [
          { name: "init", value: request.init, schema: s.optional(s.boolean()) },
          { name: "sync_token", value: request.syncToken, schema: s.optional(s.string()) },
          { name: "pagination_token", value: request.paginationToken, schema: s.optional(s.string()) },
          {
            name: "type",
            value: request.type,
            schema: s.optional(s.lazy(() => type1ContentstackContentDeliverySynchronizationApiSchema)),
          },
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.optional(s.string()) },
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: syncResponseSchema },
        errorFactory: Synchronization.SyncContentError,
      },
      options,
    );
  }
}

export namespace Synchronization {
  export type SyncContentRequest = {
    /** Set to true to initiate the first sync and receive a sync token. */
    init?: boolean;
    /**
     * The token received from a previous sync response. Use to fetch only changes since the last
     * sync.
     */
    syncToken?: string;
    /** Token to retrieve the next page of results in a large sync response. */
    paginationToken?: string;
    /**
     * Filter sync results by content type. Options: entry_published, entry_unpublished,
     * entry_deleted, asset_published, asset_unpublished, asset_deleted, content_type_deleted.
     */
    type?: Type1ContentstackContentDeliverySynchronizationApi;
    /** Filter sync results to a specific content type UID. */
    contentTypeUid?: string;
    /**
     * The locale code to retrieve localized content. Defaults to the default locale of the stack if
     * not specified.
     */
    locale?: string;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class SyncContentError extends ApiError {
    declare readonly payload: Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi> | Undeclared;

    static readonly errors: ErrorDecoders<SyncContentError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }
}
