import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  assetRelationsResponseSchema,
  type AssetRelationsResponse,
} from "../models/asset-relations-response.js";
import { ManagedDeliveryType, managedDeliveryTypeSchema } from "../models/managed-delivery-type.js";
import {
  relateAssetsByAssetIdRequestSchema,
  type RelateAssetsByAssetIdRequest,
} from "../models/relate-assets-by-asset-id-request.js";
import {
  relateAssetsByPublicIdRequestSchema,
  type RelateAssetsByPublicIdRequest,
} from "../models/relate-assets-by-public-id-request.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import {
  unrelateAssetsByAssetIdRequestSchema,
  type UnrelateAssetsByAssetIdRequest,
} from "../models/unrelate-assets-by-asset-id-request.js";
import {
  unrelateAssetsByPublicIdRequestSchema,
  type UnrelateAssetsByPublicIdRequest,
} from "../models/unrelate-assets-by-public-id-request.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to manage relationships between assets.
 */
export class AssetRelations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add related assets by asset ID
   *
   * @remarks
   * Relates an asset to other assets by their asset IDs, an immutable identifier, regardless of
   * public ID, display name, asset folder, resource type or delivery type. This is a bidirectional
   * process, meaning that the asset will also be added as a related_asset to all the other assets
   * specified. The relation is also a one to many relationship, where the asset is related to all
   * the assets specified, but those assets aren't also related to each other.
   *
   * @returns Successfully created all asset relations
   *
   * @throws {@link AssetRelations.CreateAssetRelationsByAssetIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createAssetRelationsByAssetId(
    request: AssetRelations.CreateAssetRelationsByAssetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetRelationsResponse, AssetRelations.CreateAssetRelationsByAssetIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/related_assets/{asset_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "asset_id", value: request.assetId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: relateAssetsByAssetIdRequestSchema },
      },
      {
        success: { kind: "json", schema: assetRelationsResponseSchema },
        errorFactory: AssetRelations.CreateAssetRelationsByAssetIdError,
      },
      options,
    );
  }

  /**
   * Create asset relations by public ID
   *
   * @remarks
   * Relates an asset to other assets by public IDs. This allows you to indicate that the asset is
   * logically related to other assets in some way (e.g., similar content, or a peripheral asset
   * like video/transcript, etc). This is a bidirectional process, meaning that the asset is also
   * added as a related_asset to all the other assets specified. The relation is also a one to many
   * relationship, where the asset is related to all the assets specified, but those assets aren't
   * also related to each other.
   *
   * @returns Successfully created all asset relations
   *
   * @throws {@link AssetRelations.CreateAssetRelationsByPublicIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createAssetRelationsByPublicId(
    request: AssetRelations.CreateAssetRelationsByPublicIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetRelationsResponse, AssetRelations.CreateAssetRelationsByPublicIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1_1/{cloud_name}/resources/related_assets/{resource_type}/{type}/{public_id}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          {
            name: "type",
            value: request.type,
            schema: s.defaulted(managedDeliveryTypeSchema, ManagedDeliveryType.Upload),
          },
          { name: "public_id", value: request.publicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: relateAssetsByPublicIdRequestSchema },
      },
      {
        success: { kind: "json", schema: assetRelationsResponseSchema },
        errorFactory: AssetRelations.CreateAssetRelationsByPublicIdError,
      },
      options,
    );
  }

  /**
   * Delete asset relations by asset ID
   *
   * @remarks
   * Unrelates the asset from other assets, specified by their asset IDs, an immutable identifier,
   * regardless of public ID, display name, asset folder, resource type or delivery type. This is a
   * bidirectional process, meaning that the asset will also be removed as a related_asset from all
   * the other assets specified.
   *
   * @returns Successfully deleted all asset relations
   *
   * @throws {@link AssetRelations.DeleteAssetRelationsByAssetIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteAssetRelationsByAssetId(
    request: AssetRelations.DeleteAssetRelationsByAssetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByAssetIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/related_assets/{asset_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "asset_id", value: request.assetId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: unrelateAssetsByAssetIdRequestSchema },
      },
      {
        success: { kind: "json", schema: assetRelationsResponseSchema },
        errorFactory: AssetRelations.DeleteAssetRelationsByAssetIdError,
      },
      options,
    );
  }

  /**
   * Delete asset relations by public ID
   *
   * @remarks
   * Unrelates the asset from other assets, specified by public IDs. This is a bidirectional
   * process, meaning that the asset will also be removed as a related_asset from all the other
   * assets specified.
   *
   * @returns Successfully deleted all asset relations
   *
   * @throws {@link AssetRelations.DeleteAssetRelationsByPublicIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteAssetRelationsByPublicId(
    request: AssetRelations.DeleteAssetRelationsByPublicIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetRelationsResponse, AssetRelations.DeleteAssetRelationsByPublicIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1_1/{cloud_name}/resources/related_assets/{resource_type}/{type}/{public_id}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          {
            name: "type",
            value: request.type,
            schema: s.defaulted(managedDeliveryTypeSchema, ManagedDeliveryType.Upload),
          },
          { name: "public_id", value: request.publicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: unrelateAssetsByPublicIdRequestSchema },
      },
      {
        success: { kind: "json", schema: assetRelationsResponseSchema },
        errorFactory: AssetRelations.DeleteAssetRelationsByPublicIdError,
      },
      options,
    );
  }
}

export namespace AssetRelations {
  export type CreateAssetRelationsByAssetIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The asset IDs to relate. */
    body: RelateAssetsByAssetIdRequest;
  };

  export class CreateAssetRelationsByAssetIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAssetRelationsByAssetIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type CreateAssetRelationsByPublicIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The delivery type of the asset. @default ManagedDeliveryType.Upload */
    type?: ManagedDeliveryType;
    /** The public ID of the asset. */
    publicId: string;
    /** The assets to relate by public ID. */
    body: RelateAssetsByPublicIdRequest;
  };

  export class CreateAssetRelationsByPublicIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAssetRelationsByPublicIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DeleteAssetRelationsByAssetIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The asset IDs to unrelate. */
    body: UnrelateAssetsByAssetIdRequest;
  };

  export class DeleteAssetRelationsByAssetIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAssetRelationsByAssetIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DeleteAssetRelationsByPublicIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The delivery type of the asset. @default ManagedDeliveryType.Upload */
    type?: ManagedDeliveryType;
    /** The public ID of the asset. */
    publicId: string;
    /** The assets to unrelate by public ID. */
    body: UnrelateAssetsByPublicIdRequest;
  };

  export class DeleteAssetRelationsByPublicIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAssetRelationsByPublicIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
