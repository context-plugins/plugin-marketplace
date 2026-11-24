import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetListInternalSchema, type AssetList } from "../models/asset-list.js";
import { assetInternalSchema, type Asset } from "../models/asset.js";
import { asset2InternalSchema, type Asset2 } from "../models/asset2.js";
import {
  errorContentstackAssetsApiSchema,
  type ErrorContentstackAssetsApi,
} from "../models/error-contentstack-assets-api.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import type { Servers } from "../servers.js";

/**
 * Assets are media files such as images, videos, and documents stored in the Contentstack asset
 * library.
 */
export class Assets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all assets
   *
   * @remarks
   * Fetches a list of all published assets in the stack including images, videos, and documents.
   * Supports pagination, filtering, and field selection.
   *
   * @returns A list of assets in the stack.
   *
   * @throws {@link Assets.GetAllAssetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAssets(
    request: Assets.GetAllAssetsRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetList, Assets.GetAllAssetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/assets"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [],
        query: [
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) },
        ],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: assetListInternalSchema },
        errorFactory: Assets.GetAllAssetsError,
      },
      options,
    );
  }

  /**
   * Get a single asset
   *
   * @remarks
   * Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions,
   * file size, and content type.
   *
   * @returns The requested asset object.
   *
   * @throws {@link Assets.GetSingleAssetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSingleAsset(
    request: Assets.GetSingleAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<Asset, Assets.GetSingleAssetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/assets/{asset_uid}"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "asset_uid", value: request.assetUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: assetInternalSchema },
        errorFactory: Assets.GetSingleAssetError,
      },
      options,
    );
  }

  /**
   * Upload an asset
   *
   * @remarks
   * Uploads a new asset file to the stack. Supports multipart form data for the file upload along
   * with metadata such as title, description, and tags.
   *
   * @returns The newly uploaded asset.
   *
   * @throws {@link Assets.UploadAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadAsset(
    request: Assets.UploadAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<Asset2, Assets.UploadAssetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/assets"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "asset[upload]", value: request.assetUpload },
            { kind: "text", name: "asset[title]", value: request.assetTitle, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "asset[description]",
              value: request.assetDescription,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: asset2InternalSchema },
        errorFactory: Assets.UploadAssetError,
      },
      options,
    );
  }
}

export namespace Assets {
  export type GetAllAssetsRequest = {
    /** Number of entries to skip for pagination. @default 0 */
    skip?: number;
    /** Maximum number of entries to return. Maximum allowed is 250. @default 100 */
    limit?: number;
    /** Set to true to include the total count of assets in the response. */
    includeCount?: boolean;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export const getAllAssetsRequestSchema: Schema<GetAllAssetsRequest> = s.lazySchema(() =>
    s.object<GetAllAssetsRequest>({
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(250)), 100),
      includeCount: s.optional(s.boolean()),
      apiKey: s.string(),
      accessToken: s.string(),
    }),
  );

  export class GetAllAssetsError extends ApiError {
    declare readonly payload: Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAssetsError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type GetSingleAssetRequest = {
    /** The unique identifier (UID) of the asset. */
    assetUid: string;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetSingleAssetError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleAssetError> = [
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

  export type UploadAssetRequest = {
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
    /** The asset file to upload. */
    assetUpload?: FileInput;
    /** Display title for the asset. */
    assetTitle?: string;
    /** Description of the asset content. */
    assetDescription?: string;
  };

  export class UploadAssetError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadAssetError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }
}
