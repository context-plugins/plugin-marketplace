import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { archiveResourceTypeSchema, type ArchiveResourceType } from "../models/archive-resource-type.js";
import {
  deleteBackupVersionsRequestSchema,
  type DeleteBackupVersionsRequest,
} from "../models/delete-backup-versions-request.js";
import {
  deleteBackupVersionsResponseSchema,
  type DeleteBackupVersionsResponse,
} from "../models/delete-backup-versions-response.js";
import {
  derivedDestroyRequestSchema,
  type DerivedDestroyRequest,
} from "../models/derived-destroy-request.js";
import {
  derivedDestroyResponseSchema,
  type DerivedDestroyResponse,
} from "../models/derived-destroy-response.js";
import {
  destroyByAssetIdRequestSchema,
  type DestroyByAssetIdRequest,
} from "../models/destroy-by-asset-id-request.js";
import {
  destroyByAssetIdResponseSchema,
  type DestroyByAssetIdResponse,
} from "../models/destroy-by-asset-id-response.js";
import { directionEnumSchema, type DirectionEnum } from "../models/direction-enum.js";
import { explicitRequestSchema, type ExplicitRequest } from "../models/explicit-request.js";
import {
  generateArchiveRequestSchema,
  type GenerateArchiveRequest,
} from "../models/generate-archive-request.js";
import { infoSchema, type Info } from "../models/info.js";
import {
  invalidateByUrlsRequestSchema,
  type InvalidateByUrlsRequest,
} from "../models/invalidate-by-urls-request.js";
import {
  invalidateByUrlsResponseSchema,
  type InvalidateByUrlsResponse,
} from "../models/invalidate-by-urls-response.js";
import { listResponseSchema, type ListResponse } from "../models/list-response.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "../models/managed-delivery-type.js";
import { moderationKindSchema, type ModerationKind } from "../models/moderation-kind.js";
import { moderationStatus2Schema, type ModerationStatus2 } from "../models/moderation-status2.js";
import { renameRequestSchema, type RenameRequest } from "../models/rename-request.js";
import {
  resourceGetByBodyRequestSchema,
  type ResourceGetByBodyRequest,
} from "../models/resource-get-by-body-request.js";
import {
  resourceInternalResponseSchema,
  type ResourceInternalResponse,
} from "../models/resource-internal-response.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import {
  resourceTypesResponseSchema,
  type ResourceTypesResponse,
} from "../models/resource-types-response.js";
import {
  resourceUpdateByBodyRequestSchema,
  type ResourceUpdateByBodyRequest,
} from "../models/resource-update-by-body-request.js";
import {
  resourceUpdateRequestSchema,
  type ResourceUpdateRequest,
} from "../models/resource-update-request.js";
import {
  resourcesByContainerIdResponseSchema,
  type ResourcesByContainerIdResponse,
} from "../models/resources-by-container-id-response.js";
import { restoreRequestSchema, type RestoreRequest } from "../models/restore-request.js";
import { tagsListResponseSchema, type TagsListResponse } from "../models/tags-list-response.js";
import {
  deleteResourceByPublicIdsRequest3Schema,
  type DeleteResourceByPublicIdsRequest3,
} from "../models/unions/delete-resource-by-public-ids-request3.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "../models/unions/delivery-type-all1.js";
import { fieldsSchema, type Fields } from "../models/unions/fields.js";
import { restoreResponse1Schema, type RestoreResponse1 } from "../models/unions/restore-response1.js";
import { uploadResponseSchema, type UploadResponse } from "../models/upload-response.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to manage all the resources (assets) stored in your product environment.
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
   * Delete backed up versions
   *
   * @remarks
   * Deletes specific backed up versions of an asset identified by asset ID. This operation is
   * irreversible and deleted versions cannot be recovered.
   *
   * @returns Backup versions successfully deleted
   *
   * @throws {@link Assets.DeleteBackupVersionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteBackupVersions(
    request: Assets.DeleteBackupVersionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteBackupVersionsResponse, Assets.DeleteBackupVersionsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/backup/{asset_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "asset_id", value: request.assetId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteBackupVersionsRequestSchema },
      },
      {
        success: { kind: "json", schema: deleteBackupVersionsResponseSchema },
        errorFactory: Assets.DeleteBackupVersionsError,
      },
      options,
    );
  }

  /**
   * Delete resources by public ID
   *
   * @remarks
   * Deletes assets uploaded to your product environment, identified by their public IDs.
   *
   * @returns Resource successfully deleted
   *
   * @throws {@link Assets.DeleteResourcesByPublicIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteResourcesByPublicId(
    request: Assets.DeleteResourcesByPublicIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Assets.DeleteResourcesByPublicIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/{resource_type}/{type}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "type", value: request.type, schema: deliveryTypeAll1Schema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteResourceByPublicIdsRequest3Schema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Assets.DeleteResourcesByPublicIdError,
      },
      options,
    );
  }

  /**
   * Delete derived resources
   *
   * @remarks
   * Deletes derived resources by derived resource ID
   *
   * @returns Derived resources successfully deleted
   *
   * @throws {@link Assets.DerivedDestroyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  derivedDestroy(
    request: Assets.DerivedDestroyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DerivedDestroyResponse, Assets.DerivedDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/derived_resources"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: derivedDestroyRequestSchema },
      },
      {
        success: { kind: "json", schema: derivedDestroyResponseSchema },
        errorFactory: Assets.DerivedDestroyError,
      },
      options,
    );
  }

  /**
   * Delete asset by asset ID
   *
   * @remarks
   * Deletes an asset using its immutable asset ID.
   *
   * @returns Resource successfully deleted
   *
   * @throws {@link Assets.DestroyByAssetIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  destroyByAssetId(
    request: Assets.DestroyByAssetIdRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DestroyByAssetIdResponse, Assets.DestroyByAssetIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/asset/destroy"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: destroyByAssetIdRequestSchema },
      },
      {
        success: { kind: "json", schema: destroyByAssetIdResponseSchema },
        errorFactory: Assets.DestroyByAssetIdError,
      },
      options,
    );
  }

  /**
   * Generates a download link for a specific asset (image)
   *
   * @returns Asset downloaded successfully
   *
   * @throws {@link Assets.DownloadAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  downloadAsset(
    request: Assets.DownloadAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Assets.DownloadAssetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/download"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [
          { name: "public_id", value: request.publicId, schema: s.string() },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => managedDeliveryTypeSchema)) },
          { name: "expires_at", value: request.expiresAt, schema: s.optional(s.int()) },
          { name: "attachment", value: request.attachment, schema: s.defaulted(s.boolean(), false) },
          { name: "target_filename", value: request.targetFilename, schema: s.optional(s.string()) },
          { name: "transformation", value: request.transformation, schema: s.optional(s.string()) },
          { name: "api_key", value: request.apiKey, schema: s.optional(s.string()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "timestamp", value: request.timestamp, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Assets.DownloadAssetError,
      },
      options,
    );
  }

  /**
   * Download an asset by asset ID
   *
   * @remarks
   * Generates a download link for a specific asset identified by its immutable asset ID, instead of
   * the resource type, delivery type and public ID.
   *
   * @returns Asset downloaded successfully
   *
   * @throws {@link Assets.DownloadAssetByAssetIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  downloadAssetByAssetId(
    request: Assets.DownloadAssetByAssetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Assets.DownloadAssetByAssetIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/asset/download"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "asset_id", value: request.assetId, schema: s.string() },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
          { name: "transformation", value: request.transformation, schema: s.optional(s.string()) },
          { name: "attachment", value: request.attachment, schema: s.defaulted(s.boolean(), false) },
          { name: "target_filename", value: request.targetFilename, schema: s.optional(s.string()) },
          {
            name: "streaming_attachment",
            value: request.streamingAttachment,
            schema: s.optional(s.boolean()),
          },
          { name: "expires_at", value: request.expiresAt, schema: s.optional(s.int()) },
          { name: "api_key", value: request.apiKey, schema: s.optional(s.string()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "timestamp", value: request.timestamp, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Assets.DownloadAssetByAssetIdError,
      },
      options,
    );
  }

  /**
   * Download a backup copy of an asset
   *
   * @returns Asset backup downloaded successfully
   *
   * @throws {@link Assets.DownloadBackupAssetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  downloadBackupAsset(
    request: Assets.DownloadBackupAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Assets.DownloadBackupAssetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/download_backup"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "asset_id", value: request.assetId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.string() },
          { name: "api_key", value: request.apiKey, schema: s.optional(s.string()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "timestamp", value: request.timestamp, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Assets.DownloadBackupAssetError,
      },
      options,
    );
  }

  /**
   * Apply operations on an existing asset
   *
   * @remarks
   * Applies actions such as transformations, tags, or metadata updates to an existing asset without
   * re-uploading it. This is useful for applying new transformations, adding tags, or updating
   * metadata on assets that are already in your cloud.
   *
   * Note: Always prefer delivery URL transformations over this method, unless eager transformations
   * are specifically required.
   *
   * @returns Operations applied successfully
   *
   * @throws {@link Assets.ExplicitAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  explicitAsset(
    request: Assets.ExplicitAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadResponse, Assets.ExplicitAssetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/explicit"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: explicitRequestSchema },
      },
      {
        success: { kind: "json", schema: uploadResponseSchema },
        errorFactory: Assets.ExplicitAssetError,
      },
      options,
    );
  }

  /**
   * Creates an archive (ZIP or TGZ file) that contains a set of assets from your product
   * environment.
   *
   * @remarks
   * Creates a downloadable ZIP or other archive format containing the specified resources.
   *
   * @returns Archive successfully generated or downloaded
   *
   * @throws {@link Assets.GenerateArchiveError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  generateArchive(
    request: Assets.GenerateArchiveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Assets.GenerateArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/generate_archive"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: archiveResourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generateArchiveRequestSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Assets.GenerateArchiveError,
      },
      options,
    );
  }

  /**
   * Get resource by asset ID
   *
   * @remarks
   * Returns the details of a single resource specified by its asset ID.
   *
   * @returns Resource details retrieved
   *
   * @throws {@link Assets.GetResourceByAssetIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getResourceByAssetId(
    request: Assets.GetResourceByAssetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Info, Assets.GetResourceByAssetIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/{asset_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "asset_id", value: request.assetId, schema: s.string() },
        ],
        query: [
          { name: "colors", value: request.colors, schema: s.defaulted(s.boolean(), false) },
          { name: "media_metadata", value: request.mediaMetadata, schema: s.defaulted(s.boolean(), false) },
          { name: "faces", value: request.faces, schema: s.defaulted(s.boolean(), false) },
          {
            name: "quality_analysis",
            value: request.qualityAnalysis,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "accessibility_analysis",
            value: request.accessibilityAnalysis,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "pages", value: request.pages, schema: s.defaulted(s.boolean(), false) },
          { name: "phash", value: request.phash, schema: s.defaulted(s.boolean(), false) },
          { name: "coordinates", value: request.coordinates, schema: s.defaulted(s.boolean(), false) },
          { name: "versions", value: request.versions, schema: s.defaulted(s.boolean(), false) },
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
          { name: "derived_next_cursor", value: request.derivedNextCursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: infoSchema },
        errorFactory: Assets.GetResourceByAssetIdError,
      },
      options,
    );
  }

  /**
   * Get the details of a single asset by body parameters
   *
   * @remarks
   * Returns the details of a single asset identified by its public ID, delivery type, and resource
   * type passed in the request body.
   *
   * @returns The asset details were successfully retrieved.
   *
   * @throws {@link Assets.GetResourceByBodyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getResourceByBody(
    request: Assets.GetResourceByBodyRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceInternalResponse, Assets.GetResourceByBodyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/get_resource"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resourceGetByBodyRequestSchema },
      },
      {
        success: { kind: "json", schema: resourceInternalResponseSchema },
        errorFactory: Assets.GetResourceByBodyError,
      },
      options,
    );
  }

  /**
   * Get resource by public ID
   *
   * @remarks
   * Returns the details of a single resource specified by its public ID.
   *
   * @returns Resource details retrieved
   *
   * @throws {@link Assets.GetResourceByPublicIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getResourceByPublicId(
    request: Assets.GetResourceByPublicIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Info, Assets.GetResourceByPublicIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "type", value: request.type, schema: deliveryTypeAll1Schema },
          { name: "public_id", value: request.publicId, schema: s.string() },
        ],
        query: [
          { name: "colors", value: request.colors, schema: s.defaulted(s.boolean(), false) },
          { name: "media_metadata", value: request.mediaMetadata, schema: s.defaulted(s.boolean(), false) },
          { name: "faces", value: request.faces, schema: s.defaulted(s.boolean(), false) },
          {
            name: "quality_analysis",
            value: request.qualityAnalysis,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "accessibility_analysis",
            value: request.accessibilityAnalysis,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "pages", value: request.pages, schema: s.defaulted(s.boolean(), false) },
          { name: "phash", value: request.phash, schema: s.defaulted(s.boolean(), false) },
          { name: "coordinates", value: request.coordinates, schema: s.defaulted(s.boolean(), false) },
          { name: "versions", value: request.versions, schema: s.defaulted(s.boolean(), false) },
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
          { name: "derived_next_cursor", value: request.derivedNextCursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: infoSchema },
        errorFactory: Assets.GetResourceByPublicIdError,
      },
      options,
    );
  }

  /**
   * Invalidate derived assets by delivery URLs
   *
   * @remarks
   * Deletes and invalidates the cached derived assets that back the specified delivery URLs.
   *
   * @returns The derived assets were successfully invalidated.
   *
   * @throws {@link Assets.InvalidateDerivedByUrlsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  invalidateDerivedByUrls(
    request: Assets.InvalidateDerivedByUrlsRequest,
    options?: RequestOptions,
  ): ApiPromise<InvalidateByUrlsResponse, Assets.InvalidateDerivedByUrlsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/derived_resources/invalidate_by_urls"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: invalidateByUrlsRequestSchema },
      },
      {
        success: { kind: "json", schema: invalidateByUrlsResponseSchema },
        errorFactory: Assets.InvalidateDerivedByUrlsError,
      },
      options,
    );
  }

  /**
   * Get image assets
   *
   * @remarks
   * Retrieves a list of image assets. Results can be filtered by various criteria like tags,
   * prefix, or specific public IDs.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListImagesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listImages(
    request: Assets.ListImagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListImagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/image"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => deliveryTypeAll1Schema)) },
          { name: "prefix", value: request.prefix, schema: s.optional(s.string()) },
          { name: "public_ids", value: request.publicIds, schema: s.optional(s.array(s.string())) },
          { name: "tags", value: request.tags, schema: s.defaulted(s.boolean(), false) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
          { name: "start_at", value: request.startAt, schema: s.optional(s.dateTime()) },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListImagesError,
      },
      options,
    );
  }

  /**
   * Get raw assets
   *
   * @remarks
   * Retrieves a list of raw assets. Results can be filtered by various criteria like tags, prefix,
   * or specific public IDs.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListRawFilesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listRawFiles(
    request: Assets.ListRawFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListRawFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/raw"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => deliveryTypeAll1Schema)) },
          { name: "prefix", value: request.prefix, schema: s.optional(s.string()) },
          { name: "public_ids", value: request.publicIds, schema: s.optional(s.array(s.string())) },
          { name: "tags", value: request.tags, schema: s.defaulted(s.boolean(), false) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
          { name: "start_at", value: request.startAt, schema: s.optional(s.dateTime()) },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListRawFilesError,
      },
      options,
    );
  }

  /**
   * Retrieves a list of tags currently applied to assets in your Cloudinary account
   *
   * @remarks
   * Retrieves a comprehensive list of all tags that exist in your product environment for assets of
   * the specified type.
   *
   * [Cloudinary Admin API documentation](https://cloudinary.com/documentation/admin_api)
   *
   * @returns List of tags retrieved
   *
   * @throws {@link Assets.ListResourceTagsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourceTags(
    request: Assets.ListResourceTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsListResponse, Assets.ListResourceTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/tags/{resource_type}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [
          { name: "prefix", value: request.prefix, schema: s.optional(s.string()) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsListResponseSchema },
        errorFactory: Assets.ListResourceTagsError,
      },
      options,
    );
  }

  /**
   * Get resource types
   *
   * @remarks
   * Returns a list of all resource types that correspond to assets currently in your product
   * environment.
   *
   * @returns The list of resource types.
   *
   * @throws {@link Assets.ListResourceTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourceTypes(
    request: Assets.ListResourceTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceTypesResponse, Assets.ListResourceTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resourceTypesResponseSchema },
        errorFactory: Assets.ListResourceTypesError,
      },
      options,
    );
  }

  /**
   * Get resources by asset folder
   *
   * @remarks
   * Retrieves a list of resources within a specific asset folder. Requires folder decoupling to be
   * enabled.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListResourcesByAssetFolderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByAssetFolder(
    request: Assets.ListResourcesByAssetFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListResourcesByAssetFolderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/by_asset_folder"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "asset_folder", value: request.assetFolder, schema: s.string() },
          {
            name: "resource_type",
            value: request.resourceType,
            schema: s.optional(s.lazy(() => resourceTypeSchema)),
          },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListResourcesByAssetFolderError,
      },
      options,
    );
  }

  /**
   * Get resources by asset IDs
   *
   * @remarks
   * Retrieves details for specific resources using their asset IDs (or external IDs).
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListResourcesByAssetIDsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByAssetIDs(
    request: Assets.ListResourcesByAssetIDsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListResourcesByAssetIDsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/by_asset_ids"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "asset_ids", value: request.assetIds, schema: s.array(s.string()) },
          {
            name: "resource_type",
            value: request.resourceType,
            schema: s.optional(s.lazy(() => resourceTypeSchema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListResourcesByAssetIDsError,
      },
      options,
    );
  }

  /**
   * List the assets in a folder by container ID
   *
   * @remarks
   * Returns the assets contained in the folder identified by the given container ID.
   *
   * @returns The assets in the folder were successfully retrieved.
   *
   * @throws {@link Assets.ListResourcesByContainerIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByContainerId(
    request: Assets.ListResourcesByContainerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourcesByContainerIdResponse, Assets.ListResourcesByContainerIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/by_container_id/{container_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "container_id", value: request.containerId, schema: s.string() },
        ],
        query: [
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "sort_by", value: request.sortBy, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resourcesByContainerIdResponseSchema },
        errorFactory: Assets.ListResourcesByContainerIdError,
      },
      options,
    );
  }

  /**
   * Get resources by context
   *
   * @remarks
   * Retrieves resources matching specific context key/value pairs.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListResourcesByContextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByContext(
    request: Assets.ListResourcesByContextRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListResourcesByContextError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/{resource_type}/context"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "value", value: request.value, schema: s.optional(s.string()) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListResourcesByContextError,
      },
      options,
    );
  }

  /**
   * Get resources by external IDs
   *
   * @remarks
   * Retrieves details for specific resources using their external IDs (or asset IDs).
   *
   * @returns Successfully retrieved resources
   *
   * @throws {@link Assets.ListResourcesByExternalIDsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByExternalIDs(
    request: Assets.ListResourcesByExternalIDsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListResourcesByExternalIDsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/by_external_ids"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "external_ids", value: request.externalIds, schema: s.array(s.string()) },
          {
            name: "resource_type",
            value: request.resourceType,
            schema: s.optional(s.lazy(() => resourceTypeSchema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
          { name: "tags", value: request.tags, schema: s.defaulted(s.boolean(), false) },
          { name: "context", value: request.context, schema: s.defaulted(s.boolean(), false) },
          { name: "metadata", value: request.metadata, schema: s.defaulted(s.boolean(), false) },
          { name: "moderations", value: request.moderations, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListResourcesByExternalIDsError,
      },
      options,
    );
  }

  /**
   * Get resources by moderation kind and status
   *
   * @remarks
   * Retrieves resources matching specific moderation kind and status.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListResourcesByModerationKindAndStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourcesByModerationKindAndStatus(
    request: Assets.ListResourcesByModerationKindAndStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListResourcesByModerationKindAndStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1_1/{cloud_name}/resources/{resource_type}/moderations/{moderation_kind}/{moderation_status}",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "moderation_kind", value: request.moderationKind, schema: moderationKindSchema },
          { name: "moderation_status", value: request.moderationStatus, schema: moderationStatus2Schema },
        ],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListResourcesByModerationKindAndStatusError,
      },
      options,
    );
  }

  /**
   * Get video assets
   *
   * @remarks
   * Retrieves a list of video assets. Results can be filtered by various criteria like tags,
   * prefix, or specific public IDs.
   *
   * @returns List of resources retrieved
   *
   * @throws {@link Assets.ListVideosError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listVideos(
    request: Assets.ListVideosRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponse, Assets.ListVideosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/video"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => deliveryTypeAll1Schema)) },
          { name: "prefix", value: request.prefix, schema: s.optional(s.string()) },
          { name: "public_ids", value: request.publicIds, schema: s.optional(s.array(s.string())) },
          { name: "tags", value: request.tags, schema: s.defaulted(s.boolean(), false) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
          { name: "start_at", value: request.startAt, schema: s.optional(s.dateTime()) },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fieldsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSchema },
        errorFactory: Assets.ListVideosError,
      },
      options,
    );
  }

  /**
   * Updates an existing asset's identifier (public ID) and optionally other metadata in your
   * Cloudinary account
   *
   * @returns Asset renamed successfully
   *
   * @throws {@link Assets.RenameAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  renameAsset(
    request: Assets.RenameAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadResponse, Assets.RenameAssetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/rename"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: renameRequestSchema },
      },
      {
        success: { kind: "json", schema: uploadResponseSchema },
        errorFactory: Assets.RenameAssetError,
      },
      options,
    );
  }

  /**
   * Restore assets by asset ID
   *
   * @remarks
   * Restores one or more resources from backup using their asset IDs. Can optionally specify
   * versions to restore.
   *
   * @returns Resources restored successfully
   *
   * @throws {@link Assets.RestoreResourcesByAssetIDsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  restoreResourcesByAssetIDs(
    request: Assets.RestoreResourcesByAssetIDsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, RestoreResponse1>, Assets.RestoreResourcesByAssetIDsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/restore"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restoreRequestSchema },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => restoreResponse1Schema),
          ),
        },
        errorFactory: Assets.RestoreResourcesByAssetIDsError,
      },
      options,
    );
  }

  /**
   * Updates an existing asset's metadata, tags, and other attributes using its asset ID
   *
   * @remarks
   * Updates one or more attributes of a specified resource (asset) by its asset ID. This enables
   * you to update details of an asset by its unique and immutable identifier, regardless of public
   * ID, display name, asset folder, resource type or delivery type. Note that you can also update
   * attributes of an existing asset using the explicit API endpoint.
   *
   * @returns Resource successfully updated.
   *
   * @throws {@link Assets.UpdateResourceByAssetIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateResourceByAssetId(
    request: Assets.UpdateResourceByAssetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Info, Assets.UpdateResourceByAssetIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/{asset_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "asset_id", value: request.assetId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resourceUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: infoSchema },
        errorFactory: Assets.UpdateResourceByAssetIdError,
      },
      options,
    );
  }

  /**
   * Update the details of a single asset by body parameters
   *
   * @remarks
   * Updates the details of an existing asset (such as tags, contextual metadata, structured
   * metadata, and moderation status) identified by its public ID, delivery type, and resource type
   * passed in the request body.
   *
   * @returns The asset was successfully updated.
   *
   * @throws {@link Assets.UpdateResourceByBodyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateResourceByBody(
    request: Assets.UpdateResourceByBodyRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceInternalResponse, Assets.UpdateResourceByBodyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/update"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resourceUpdateByBodyRequestSchema },
      },
      {
        success: { kind: "json", schema: resourceInternalResponseSchema },
        errorFactory: Assets.UpdateResourceByBodyError,
      },
      options,
    );
  }

  /**
   * Update asset by public ID
   *
   * @remarks
   * Updates one or more attributes of a specified resource (asset) identified by its public ID.
   * Note that you can also update many attributes of an existing asset using the explicit method,
   * which is not rate limited.
   *
   * @returns Asset successfully updated.
   *
   * @throws {@link Assets.UpdateResourceByPublicIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateResourceByPublicId(
    request: Assets.UpdateResourceByPublicIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Info, Assets.UpdateResourceByPublicIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
          { name: "type", value: request.type, schema: deliveryTypeAll1Schema },
          { name: "public_id", value: request.publicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resourceUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: infoSchema },
        errorFactory: Assets.UpdateResourceByPublicIdError,
      },
      options,
    );
  }
}

export namespace Assets {
  export type DeleteBackupVersionsRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The asset IDs and version IDs to delete. */
    body: DeleteBackupVersionsRequest;
  };

  export class DeleteBackupVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBackupVersionsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DeleteResourcesByPublicIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The delivery type of the asset. */
    type: DeliveryTypeAll1;
    /** The public IDs and options for the resources to delete. */
    body: DeleteResourceByPublicIdsRequest3;
  };

  export class DeleteResourcesByPublicIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourcesByPublicIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DerivedDestroyRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The derived resource IDs to delete. */
    body: DerivedDestroyRequest;
  };

  export class DerivedDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DerivedDestroyError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DestroyByAssetIdRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset to delete and related options. */
    body: DestroyByAssetIdRequest;
  };

  export class DestroyByAssetIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DestroyByAssetIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DownloadAssetRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The public ID of the asset. */
    publicId: string;
    /** The format to convert the asset to before downloading. */
    format?: string;
    /** The delivery type of the asset. Default is "upload". */
    type?: ManagedDeliveryType;
    /** Unix timestamp indicating when the download URL should expire. */
    expiresAt?: number;
    /** Whether to force download as an attachment. @default false */
    attachment?: boolean;
    /** The desired filename for the downloaded file. */
    targetFilename?: string;
    /** A transformation to apply to the asset before downloading. */
    transformation?: string;
    /**
     * The API key to use for the request. This is automatically computed by the Cloudinary's SDKs.
     */
    apiKey?: string;
    /**
     * (Required for signed REST API calls) Used to authenticate the request and based on the
     * parameters you use in the request. When using the Cloudinary SDKs for signed requests, the
     * signature is automatically generated and added to the request. If you manually generate your
     * own signed POST request, you need to manually generate the signature parameter and add it to
     * the request together with the api_key and timestamp parameters.
     */
    signature?: string;
    /**
     * The timestamp to use for the request in unix time. This is automatically computed by the
     * Cloudinary's SDKs.
     */
    timestamp?: number;
  };

  export class DownloadAssetError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadAssetError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DownloadAssetByAssetIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The format to convert the asset to before downloading. */
    format?: string;
    /** A transformation to apply to the asset before downloading. */
    transformation?: string;
    /** Whether to force download as an attachment. @default false */
    attachment?: boolean;
    /** The desired filename for the downloaded file. */
    targetFilename?: string;
    /** Whether to stream a video asset as an attachment. */
    streamingAttachment?: boolean;
    /** Unix timestamp indicating when the download URL should expire. */
    expiresAt?: number;
    /**
     * The API key to use for the request. This is automatically computed by the Cloudinary's SDKs.
     */
    apiKey?: string;
    /**
     * (Required for signed REST API calls) Used to authenticate the request and based on the
     * parameters you use in the request. When using the Cloudinary SDKs for signed requests, the
     * signature is automatically generated and added to the request. If you manually generate your
     * own signed POST request, you need to manually generate the signature parameter and add it to
     * the request together with the api_key and timestamp parameters.
     */
    signature?: string;
    /**
     * The timestamp to use for the request in unix time. This is automatically computed by the
     * Cloudinary's SDKs.
     */
    timestamp?: number;
  };

  export class DownloadAssetByAssetIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadAssetByAssetIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DownloadBackupAssetRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The version ID of the backup to download. Must be a 32-character hexadecimal string. */
    versionId: string;
    /**
     * The API key to use for the request. This is automatically computed by the Cloudinary's SDKs.
     */
    apiKey?: string;
    /**
     * (Required for signed REST API calls) Used to authenticate the request and based on the
     * parameters you use in the request. When using the Cloudinary SDKs for signed requests, the
     * signature is automatically generated and added to the request. If you manually generate your
     * own signed POST request, you need to manually generate the signature parameter and add it to
     * the request together with the api_key and timestamp parameters.
     */
    signature?: string;
    /**
     * The timestamp to use for the request in unix time. This is automatically computed by the
     * Cloudinary's SDKs.
     */
    timestamp?: number;
  };

  export class DownloadBackupAssetError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadBackupAssetError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ExplicitAssetRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The asset and operations to apply. */
    body: ExplicitRequest;
  };

  export class ExplicitAssetError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExplicitAssetError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GenerateArchiveRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource for archive generation (image, video, or raw). */
    resourceType: ArchiveResourceType;
    /** The archive generation parameters. */
    body: GenerateArchiveRequest;
  };

  export class GenerateArchiveError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateArchiveError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetResourceByAssetIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /**
     * Whether to include color information (predominant colors and histogram of 32 leading colors).
     * Default: false.
     *
     * @default false
     */
    colors?: boolean;
    /**
     * Whether to include IPTC, XMP, and detailed Exif metadata in the response. Default: false.
     *
     * @default false
     */
    mediaMetadata?: boolean;
    /**
     * Whether to include a list of coordinates of detected faces. Default: false.
     *
     * @default false
     */
    faces?: boolean;
    /** Whether to return quality analysis scores for the image. Default: false. @default false */
    qualityAnalysis?: boolean;
    /**
     * Whether to return accessibility analysis scores for the image. Default: false.
     *
     * @default false
     */
    accessibilityAnalysis?: boolean;
    /**
     * Whether to report the number of pages in multi-page documents (e.g., PDF). Default: false.
     *
     * @default false
     */
    pages?: boolean;
    /**
     * Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity
     * detection. Default: false.
     *
     * @default false
     */
    phash?: boolean;
    /**
     * Whether to include previously specified custom cropping coordinates and faces coordinates.
     * Default: false.
     *
     * @default false
     */
    coordinates?: boolean;
    /**
     * Whether to include details of all the backed up versions of the asset. Default: false.
     *
     * @default false
     */
    versions?: boolean;
    /** Maximum number of derived assets to return. Default: 10. @default 10 */
    maxResults?: number;
    /**
     * The cursor for the next page of derived assets when there are more derived images than
     * max_results.
     */
    derivedNextCursor?: string;
  };

  export class GetResourceByAssetIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourceByAssetIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetResourceByBodyRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The identifying attributes of the asset to retrieve. */
    body: ResourceGetByBodyRequest;
  };

  export class GetResourceByBodyError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourceByBodyError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetResourceByPublicIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The delivery type of the asset. */
    type: DeliveryTypeAll1;
    /** The public ID of the asset. */
    publicId: string;
    /**
     * Whether to include color information (predominant colors and histogram of 32 leading colors).
     * Default: false.
     *
     * @default false
     */
    colors?: boolean;
    /**
     * Whether to include IPTC, XMP, and detailed Exif metadata in the response. Default: false.
     *
     * @default false
     */
    mediaMetadata?: boolean;
    /**
     * Whether to include a list of coordinates of detected faces. Default: false.
     *
     * @default false
     */
    faces?: boolean;
    /** Whether to return quality analysis scores for the image. Default: false. @default false */
    qualityAnalysis?: boolean;
    /**
     * Whether to return accessibility analysis scores for the image. Default: false.
     *
     * @default false
     */
    accessibilityAnalysis?: boolean;
    /**
     * Whether to report the number of pages in multi-page documents (e.g., PDF). Default: false.
     *
     * @default false
     */
    pages?: boolean;
    /**
     * Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity
     * detection. Default: false.
     *
     * @default false
     */
    phash?: boolean;
    /**
     * Whether to include previously specified custom cropping coordinates and faces coordinates.
     * Default: false.
     *
     * @default false
     */
    coordinates?: boolean;
    /**
     * Whether to include details of all the backed up versions of the asset. Default: false.
     *
     * @default false
     */
    versions?: boolean;
    /** Maximum number of derived assets to return. Default: 10. @default 10 */
    maxResults?: number;
    /**
     * The cursor for the next page of derived assets when there are more derived images than
     * max_results.
     */
    derivedNextCursor?: string;
  };

  export class GetResourceByPublicIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourceByPublicIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type InvalidateDerivedByUrlsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The delivery URLs whose derived assets should be invalidated. */
    body: InvalidateByUrlsRequest;
  };

  export class InvalidateDerivedByUrlsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<InvalidateDerivedByUrlsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListImagesRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The delivery type to filter by. When omitted, returns assets of all delivery types. */
    type?: DeliveryTypeAll1;
    /** A public_id prefix. When specified, all assets with that prefix are returned. */
    prefix?: string;
    /** An array of public IDs to return. */
    publicIds?: string[];
    /**
     * Whether to include the list of tag names assigned to each asset. Default is false.
     *
     * @default false
     */
    tags?: boolean;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
    /**
     * An ISO-8601 formatted timestamp. When specified, returns resources created since that
     * timestamp. Supported only if neither `prefix` nor `public_ids` were passed.
     */
    startAt?: Date;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
  };

  export class ListImagesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListImagesError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListRawFilesRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The delivery type to filter by. When omitted, returns assets of all delivery types. */
    type?: DeliveryTypeAll1;
    /** A public_id prefix. When specified, all assets with that prefix are returned. */
    prefix?: string;
    /** An array of public IDs to return. */
    publicIds?: string[];
    /**
     * Whether to include the list of tag names assigned to each asset. Default is false.
     *
     * @default false
     */
    tags?: boolean;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
    /**
     * An ISO-8601 formatted timestamp. When specified, returns resources created since that
     * timestamp. Supported only if neither `prefix` nor `public_ids` were passed.
     */
    startAt?: Date;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
  };

  export class ListRawFilesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRawFilesError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourceTagsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** Limit the returned tags to those that start with the specified prefix. */
    prefix?: string;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
  };

  export class ListResourceTagsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourceTagsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourceTypesRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
  };

  export class ListResourceTypesError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<ListResourceTypesError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourcesByAssetFolderRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The full path of the asset folder. */
    assetFolder: string;
    /** Resource type filter. */
    resourceType?: ResourceType;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
  };

  export class ListResourcesByAssetFolderError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByAssetFolderError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourcesByAssetIDsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** List of asset IDs to retrieve (max 100). */
    assetIds: string[];
    /** Resource type filter. */
    resourceType?: ResourceType;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
  };

  export class ListResourcesByAssetIDsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByAssetIDsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourcesByContainerIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The immutable identifier of the folder container whose assets are listed. */
    containerId: string;
    /** The maximum number of results to return. Default is 10. @default 10 */
    maxResults?: number;
    /**
     * The cursor for pagination. Use the next_cursor value from a previous response to get the next
     * page of results.
     */
    nextCursor?: string;
    /** The field by which the assets are sorted. Default is "uploaded_at". */
    sortBy?: string;
    /** A comma-separated list of asset fields to include in each returned asset. */
    fields?: string;
  };

  export class ListResourcesByContainerIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByContainerIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourcesByContextRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** Context key to filter by. */
    key: string;
    /** Context value to filter by. */
    value?: string;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
  };

  export class ListResourcesByContextError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByContextError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourcesByExternalIDsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * List of external IDs for identifying the assets to retrieve. Either external_ids or asset_ids
     * must be provided.
     */
    externalIds: string[];
    /** Resource type filter. */
    resourceType?: ResourceType;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
    /**
     * Whether to include the list of tag names assigned to each asset. Default is false.
     *
     * @default false
     */
    tags?: boolean;
    /**
     * Whether to include key-value pairs of contextual metadata associated with each asset. Default
     * is false.
     *
     * @default false
     */
    context?: boolean;
    /**
     * Whether to include the structured metadata fields and values assigned to each asset. Default
     * is false.
     *
     * @default false
     */
    metadata?: boolean;
    /**
     * Whether to include image moderation status of each asset. Default is false.
     *
     * @default false
     */
    moderations?: boolean;
  };

  export class ListResourcesByExternalIDsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByExternalIDsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListResourcesByModerationKindAndStatusRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The type of moderation to filter by. */
    moderationKind: ModerationKind;
    /** The moderation status to filter by. */
    moderationStatus: ModerationStatus2;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
  };

  export class ListResourcesByModerationKindAndStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourcesByModerationKindAndStatusError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListVideosRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The delivery type to filter by. When omitted, returns assets of all delivery types. */
    type?: DeliveryTypeAll1;
    /** A public_id prefix. When specified, all assets with that prefix are returned. */
    prefix?: string;
    /** An array of public IDs to return. */
    publicIds?: string[];
    /**
     * Whether to include the list of tag names assigned to each asset. Default is false.
     *
     * @default false
     */
    tags?: boolean;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
    /**
     * An ISO-8601 formatted timestamp. When specified, returns resources created since that
     * timestamp. Supported only if neither `prefix` nor `public_ids` were passed.
     */
    startAt?: Date;
    /**
     * Additional fields to include in the response. The fields public_id and asset_id are always
     * included.
     */
    fields?: Fields;
  };

  export class ListVideosError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVideosError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type RenameAssetRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The rename request parameters. */
    body: RenameRequest;
  };

  export class RenameAssetError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameAssetError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type RestoreResourcesByAssetIDsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset IDs to restore and optional version parameters. */
    body: RestoreRequest;
  };

  export class RestoreResourcesByAssetIDsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreResourcesByAssetIDsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdateResourceByAssetIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset ID of the resource. Must be a 32-character hexadecimal string. */
    assetId: string;
    /** The asset attributes to update. */
    body: ResourceUpdateRequest;
  };

  export class UpdateResourceByAssetIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResourceByAssetIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdateResourceByBodyRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The asset identifiers plus the attributes to update. */
    body: ResourceUpdateByBodyRequest;
  };

  export class UpdateResourceByBodyError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResourceByBodyError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdateResourceByPublicIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The delivery type of the asset. */
    type: DeliveryTypeAll1;
    /** The public ID of the asset. */
    publicId: string;
    /** The asset attributes to update. */
    body: ResourceUpdateRequest;
  };

  export class UpdateResourceByPublicIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResourceByPublicIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
