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
import { contextUpdateRequestSchema, type ContextUpdateRequest } from "../models/context-update-request.js";
import {
  metadataUpdateRequestSchema,
  type MetadataUpdateRequest,
} from "../models/metadata-update-request.js";
import { publicIdsResponseSchema, type PublicIdsResponse } from "../models/public-ids-response.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import { tagsUpdateRequestSchema, type TagsUpdateRequest } from "../models/tags-update-request.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to manage the tags, contextual metadata, and structured metadata values stored on
 * specific assets.
 */
export class AssetMetadata {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Adds or clears contextual metadata on multiple assets
   *
   * @remarks
   * Applies a contextual-metadata command to the given assets, addressing them by public ID.
   *
   * @returns Context command applied
   *
   * @throws {@link AssetMetadata.UpdateAssetsContextError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateAssetsContext(
    request: AssetMetadata.UpdateAssetsContextRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicIdsResponse, AssetMetadata.UpdateAssetsContextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/context"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contextUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: publicIdsResponseSchema },
        errorFactory: AssetMetadata.UpdateAssetsContextError,
      },
      options,
    );
  }

  /**
   * Sets structured metadata values on multiple assets
   *
   * @remarks
   * Assigns structured metadata field values to the given assets, addressing them by public ID.
   *
   * Values are merged into each asset's existing structured metadata: fields not mentioned keep
   * their current values, and an empty value clears the field. Every referenced field must already
   * exist in the product environment. Conditional metadata rules are evaluated as part of the
   * update.
   *
   * @returns Structured metadata applied
   *
   * @throws {@link AssetMetadata.UpdateAssetsMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateAssetsMetadata(
    request: AssetMetadata.UpdateAssetsMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicIdsResponse, AssetMetadata.UpdateAssetsMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/metadata"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metadataUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: publicIdsResponseSchema },
        errorFactory: AssetMetadata.UpdateAssetsMetadataError,
      },
      options,
    );
  }

  /**
   * Adds, removes, or replaces tags on multiple assets
   *
   * @remarks
   * Applies a tag command to the given assets, addressing them by public ID.
   *
   * The number of tags multiplied by the number of public IDs must not exceed 10,000.
   *
   * @returns Tag command applied
   *
   * @throws {@link AssetMetadata.UpdateAssetsTagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateAssetsTags(
    request: AssetMetadata.UpdateAssetsTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicIdsResponse, AssetMetadata.UpdateAssetsTagsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/tags"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tagsUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: publicIdsResponseSchema },
        errorFactory: AssetMetadata.UpdateAssetsTagsError,
      },
      options,
    );
  }
}

export namespace AssetMetadata {
  export type UpdateAssetsContextRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The context command, the metadata to apply, and the assets to apply it to. */
    body: ContextUpdateRequest;
  };

  export class UpdateAssetsContextError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAssetsContextError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdateAssetsMetadataRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The structured metadata values to assign and the assets to assign them to. */
    body: MetadataUpdateRequest;
  };

  export class UpdateAssetsMetadataError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAssetsMetadataError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdateAssetsTagsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The tag command, the tags to apply, and the assets to apply them to. */
    body: TagsUpdateRequest;
  };

  export class UpdateAssetsTagsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAssetsTagsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
