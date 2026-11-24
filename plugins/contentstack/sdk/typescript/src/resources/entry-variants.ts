import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { entryVariantListSchema, type EntryVariantList } from "../models/entry-variant-list.js";
import { entryVariantSchema, type EntryVariant } from "../models/entry-variant.js";
import {
  errorContentstackAssetsApiSchema,
  type ErrorContentstackAssetsApi,
} from "../models/error-contentstack-assets-api.js";
import type { Servers } from "../servers.js";

/**
 * Entry variants are customized versions of an entry created for personalization or A/B testing
 * purposes.
 */
export class EntryVariants {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all entry variants
   *
   * @remarks
   * Retrieves all personalization variants of a specific entry, including their variant UIDs and
   * customized field values.
   *
   * @returns A list of variants for the specified entry.
   *
   * @throws {@link EntryVariants.GetAllEntryVariantsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllEntryVariants(
    request: EntryVariants.GetAllEntryVariantsRequest,
    options?: RequestOptions,
  ): ApiPromise<EntryVariantList, EntryVariants.GetAllEntryVariantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}/variants",
        ),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entryVariantListSchema },
        errorFactory: EntryVariants.GetAllEntryVariantsError,
      },
      options,
    );
  }

  /**
   * Get a single entry variant
   *
   * @remarks
   * Retrieves a specific variant of an entry identified by the variant UID. Returns the customized
   * field values for that variant.
   *
   * @returns The requested entry variant object.
   *
   * @throws {@link EntryVariants.GetSingleEntryVariantError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSingleEntryVariant(
    request: EntryVariants.GetSingleEntryVariantRequest,
    options?: RequestOptions,
  ): ApiPromise<EntryVariant, EntryVariants.GetSingleEntryVariantError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi(
          "/content_types/{content_type_uid}/entries/{entry_uid}/variants/{variant_uid}",
        ),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [
          { name: "content_type_uid", value: request.contentTypeUid, schema: s.string() },
          { name: "entry_uid", value: request.entryUid, schema: s.string() },
          { name: "variant_uid", value: request.variantUid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entryVariantSchema },
        errorFactory: EntryVariants.GetSingleEntryVariantError,
      },
      options,
    );
  }
}

export namespace EntryVariants {
  export type GetAllEntryVariantsRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetAllEntryVariantsError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllEntryVariantsError> = [
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

  export type GetSingleEntryVariantRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The unique identifier (UID) of the entry. */
    entryUid: string;
    /** The unique identifier (UID) of the entry variant. */
    variantUid: string;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetSingleEntryVariantError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleEntryVariantError> = [
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
}
