import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "../models/asset.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { oDataAssetCollectionSchema, type ODataAssetCollection } from "../models/odata-asset-collection.js";
import type { Servers } from "../servers.js";

/**
 * Manage shared assets such as credentials, text values, integers, and boolean values
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
   * UiPath Create an Asset
   *
   * @remarks
   * Creates a new asset in the current folder. The asset type determines the kind of value stored:
   * Text, Integer, Bool, or Credential. Credential assets store username and password pairs
   * securely.
   *
   * @returns Asset created successfully
   *
   * @throws {@link Assets.CreateAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAsset(
    request: Assets.CreateAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<Asset, Assets.CreateAssetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/odata/Assets"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: assetSchema },
      },
      {
        success: { kind: "json", schema: assetSchema },
        errorFactory: Assets.CreateAssetError,
      },
      options,
    );
  }

  /**
   * UiPath Delete an Asset
   *
   * @remarks
   * Permanently deletes an asset from the current folder by its unique integer identifier. This
   * action cannot be undone. Processes that reference this asset will fail until the asset is
   * recreated.
   *
   * @returns Asset deleted successfully
   *
   * @throws {@link Assets.DeleteAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAsset(
    request: Assets.DeleteAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Assets.DeleteAssetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/odata/Assets({key})"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.int() }],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Assets.DeleteAssetError,
      },
      options,
    );
  }

  /**
   * UiPath Get an Asset by ID
   *
   * @remarks
   * Retrieves a single asset by its unique integer identifier. Returns the full asset definition
   * including type, value, and folder scope.
   *
   * @returns The requested asset
   *
   * @throws {@link Assets.GetAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAsset(
    request: Assets.GetAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<Asset, Assets.GetAssetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Assets({key})"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.int() }],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: assetSchema },
        errorFactory: Assets.GetAssetError,
      },
      options,
    );
  }

  /**
   * UiPath List Assets
   *
   * @remarks
   * Retrieves a list of assets defined in the current folder. Assets store shared values such as
   * credentials, text, integers, and booleans that can be consumed by automation processes.
   * Supports OData filtering and pagination.
   *
   * @returns A list of assets
   *
   * @throws {@link Assets.ListAssetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAssets(
    request: Assets.ListAssetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataAssetCollection, Assets.ListAssetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Assets"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataAssetCollectionSchema },
        errorFactory: Assets.ListAssetsError,
      },
      options,
    );
  }

  /**
   * UiPath Update an Asset
   *
   * @remarks
   * Updates an existing asset by its unique integer identifier. The full asset object must be
   * provided in the request body with the updated values.
   *
   * @returns Asset updated successfully
   *
   * @throws {@link Assets.UpdateAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAsset(
    request: Assets.UpdateAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<Asset, Assets.UpdateAssetError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/odata/Assets({key})"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.int() }],
        query: [],
        headers: [
          {
            name: "X-UIPATH-OrganizationUnitId",
            value: request.xUipathOrganizationUnitId,
            schema: s.optional(s.int()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: assetSchema },
      },
      {
        success: { kind: "json", schema: assetSchema },
        errorFactory: Assets.UpdateAssetError,
      },
      options,
    );
  }
}

export namespace Assets {
  export type CreateAssetRequest = {
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: Asset;
  };

  export class CreateAssetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAssetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteAssetRequest = {
    /** The unique integer identifier of the entity */
    key: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export class DeleteAssetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAssetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAssetRequest = {
    /** The unique integer identifier of the entity */
    key: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export class GetAssetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAssetError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListAssetsRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
  };

  export const listAssetsRequestSchema: Schema<ListAssetsRequest> = s.lazySchema(() =>
    s.object<ListAssetsRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
      xUipathOrganizationUnitId: s.optional(s.int()),
    }),
  );

  export class ListAssetsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListAssetsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAssetRequest = {
    /** The unique integer identifier of the entity */
    key: number;
    /**
     * The numeric ID of the folder context for the request. Required when accessing folder-scoped
     * resources. Retrieve folder IDs using the /odata/Folders endpoint.
     */
    xUipathOrganizationUnitId?: number;
    body: Asset;
  };

  export class UpdateAssetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAssetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
