export { CloudinaryAssetManagementApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type BasicAuthCredentials,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { ServerEnvironment } from "./servers.js";

export { Upload } from "./resources/upload.js";
export { Assets } from "./resources/assets.js";
export { Moderations } from "./resources/moderations.js";
export { Tags } from "./resources/tags.js";
export { Backups } from "./resources/backups.js";
export { AssetRelations } from "./resources/asset-relations.js";
export { AssetMetadata } from "./resources/asset-metadata.js";
export { VideoAnalytics } from "./resources/video-analytics.js";
export { Explode } from "./resources/explode.js";
export { InitialBackup } from "./resources/initial-backup.js";
export { Folders } from "./resources/folders.js";
export { Usage } from "./resources/usage.js";
export { Search } from "./resources/search.js";
export { People } from "./resources/people.js";
export { Generation } from "./resources/generation.js";
export { Tasks } from "./resources/tasks.js";

export { accessControlSchema, type AccessControl } from "./models/unions/access-control.js";
export { accessControl1Schema, type AccessControl1 } from "./models/unions/access-control1.js";
export { AccessMode, accessModeSchema } from "./models/access-mode.js";
export { AccessMode1, accessMode1Schema } from "./models/access-mode1.js";
export { AccessType, accessTypeSchema } from "./models/access-type.js";
export { addonQuotaSchema, type AddonQuota } from "./models/addon-quota.js";
export { Aggregate, aggregateSchema } from "./models/aggregate.js";
export { aggregate1Schema, type Aggregate1 } from "./models/aggregate1.js";
export { aggregate2Schema, type Aggregate2 } from "./models/unions/aggregate2.js";
export { aggregationsSchema, type Aggregations } from "./models/aggregations.js";
export { AspectRatio, aspectRatioSchema } from "./models/aspect-ratio.js";
export { assetFoldersSchema, type AssetFolders } from "./models/unions/asset-folders.js";
export { autoTranscriptionSchema, type AutoTranscription } from "./models/auto-transcription.js";
export { autoTranscription1Schema, type AutoTranscription1 } from "./models/unions/auto-transcription1.js";
export { bandwidthSchema, type Bandwidth } from "./models/bandwidth.js";
export { Code, codeSchema } from "./models/code.js";
export { Command, commandSchema } from "./models/command.js";
export { Command1, command1Schema } from "./models/command1.js";
export { createdBySchema, type CreatedBy } from "./models/created-by.js";
export { declarativeImageSizeSchema, type DeclarativeImageSize } from "./models/declarative-image-size.js";
export {
  deleteResourceByPublicIdsRequestSchema,
  type DeleteResourceByPublicIdsRequest,
} from "./models/delete-resource-by-public-ids-request.js";
export {
  deleteResourceByPublicIdsRequest1Schema,
  type DeleteResourceByPublicIdsRequest1,
} from "./models/delete-resource-by-public-ids-request1.js";
export {
  deleteResourceByPublicIdsRequest2Schema,
  type DeleteResourceByPublicIdsRequest2,
} from "./models/delete-resource-by-public-ids-request2.js";
export {
  deleteResourceByPublicIdsRequest3Schema,
  type DeleteResourceByPublicIdsRequest3,
} from "./models/unions/delete-resource-by-public-ids-request3.js";
export { Deleted, deletedSchema } from "./models/deleted.js";
export { derivativeSchema, type Derivative } from "./models/derivative.js";
export { derivedSchema, type Derived } from "./models/derived.js";
export { derivedDestroyRequestSchema, type DerivedDestroyRequest } from "./models/derived-destroy-request.js";
export {
  derivedDestroyResponseSchema,
  type DerivedDestroyResponse,
} from "./models/derived-destroy-response.js";
export { dimensionsImageSizeSchema, type DimensionsImageSize } from "./models/dimensions-image-size.js";
export { eagerSchema, type Eager } from "./models/eager.js";
export { endSchema, type End } from "./models/unions/end.js";
export { errorSchema, type Error } from "./models/error.js";
export { Error1, error1Schema } from "./models/error1.js";
export { error3Schema, type Error3 } from "./models/error3.js";
export { ErrorCategory, errorCategorySchema } from "./models/error-category.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export { Family, familySchema } from "./models/family.js";
export { Feature, featureSchema } from "./models/feature.js";
export { FontStyle, fontStyleSchema } from "./models/font-style.js";
export { FontWeight, fontWeightSchema } from "./models/font-weight.js";
export { Format, formatSchema } from "./models/format.js";
export { generateImageRequestSchema, type GenerateImageRequest } from "./models/generate-image-request.js";
export { generateImageResultSchema, type GenerateImageResult } from "./models/generate-image-result.js";
export { generatedAssetSchema, type GeneratedAsset } from "./models/generated-asset.js";
export { generatedAssetsSchema, type GeneratedAssets } from "./models/generated-assets.js";
export { Id, idSchema } from "./models/id.js";
export { ImageFormat, imageFormatSchema } from "./models/image-format.js";
export { imageSizeSchema, type ImageSize } from "./models/unions/image-size.js";
export { imageToImageRequestSchema, type ImageToImageRequest } from "./models/image-to-image-request.js";
export { impressionsSchema, type Impressions } from "./models/impressions.js";
export { invalidationSchema, type Invalidation } from "./models/invalidation.js";
export { lastUpdatedSchema, type LastUpdated } from "./models/last-updated.js";
export { limitsSchema, type Limits } from "./models/limits.js";
export { managedAssetReferenceSchema, type ManagedAssetReference } from "./models/managed-asset-reference.js";
export { managedAssetStorageSchema, type ManagedAssetStorage } from "./models/managed-asset-storage.js";
export { managedAssetTargetSchema, type ManagedAssetTarget } from "./models/managed-asset-target.js";
export { mediaLimitsSchema, type MediaLimits } from "./models/media-limits.js";
export { Mode, modeSchema } from "./models/mode.js";
export { modelSchema, type Model } from "./models/model.js";
export { modelAutoSchema, type ModelAuto } from "./models/model-auto.js";
export { modelByFamilySchema, type ModelByFamily } from "./models/model-by-family.js";
export { modelByIdSchema, type ModelById } from "./models/model-by-id.js";
export { modelSelectionSchema, type ModelSelection } from "./models/unions/model-selection.js";
export { moderationSchema, type Moderation } from "./models/moderation.js";
export { ModerationStatus, moderationStatusSchema } from "./models/moderation-status.js";
export { ModerationStatus1, moderationStatus1Schema } from "./models/moderation-status1.js";
export { noticeSchema, type Notice } from "./models/notice.js";
export { objectsSchema, type Objects } from "./models/objects.js";
export { Operation, operationSchema } from "./models/operation.js";
export { Preference, preferenceSchema } from "./models/preference.js";
export { principalSchema, type Principal } from "./models/principal.js";
export { qualityOverrideSchema, type QualityOverride } from "./models/unions/quality-override.js";
export { rangeSchema, type Range } from "./models/range.js";
export { range1Schema, type Range1 } from "./models/range1.js";
export { rateLimitedResponseSchema, type RateLimitedResponse } from "./models/rate-limited-response.js";
export { rateLimitedResponse1Schema, type RateLimitedResponse1 } from "./models/rate-limited-response1.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { referenceImageSchema, type ReferenceImage } from "./models/unions/reference-image.js";
export { regionsSchema, type Regions } from "./models/unions/regions.js";
export { Resolution, resolutionSchema } from "./models/resolution.js";
export { resourceSchema, type Resource } from "./models/resource.js";
export { ResourceType2, resourceType2Schema } from "./models/resource-type2.js";
export { ResourceType3, resourceType3Schema } from "./models/resource-type3.js";
export { ResourceType8, resourceType8Schema } from "./models/resource-type8.js";
export { resourceUpdateRequestSchema, type ResourceUpdateRequest } from "./models/resource-update-request.js";
export {
  responsiveBreakpointsSchema,
  type ResponsiveBreakpoints,
} from "./models/unions/responsive-breakpoints.js";
export { Result, resultSchema } from "./models/result.js";
export { Result1, result1Schema } from "./models/result1.js";
export { secondsDeliveredSchema, type SecondsDelivered } from "./models/seconds-delivered.js";
export { Severity, severitySchema } from "./models/severity.js";
export { startSchema, type Start } from "./models/unions/start.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { storageSchema, type Storage } from "./models/storage.js";
export { storage1Schema, type Storage1 } from "./models/unions/storage1.js";
export { storage2Schema, type Storage2 } from "./models/unions/storage2.js";
export { targetSchema, type Target } from "./models/unions/target.js";
export { TargetFormat, targetFormatSchema } from "./models/target-format.js";
export { taskSchema, type Task } from "./models/task.js";
export { taskResponseSchema, type TaskResponse } from "./models/task-response.js";
export { TaskStatus, taskStatusSchema } from "./models/task-status.js";
export { temporaryStorageSchema, type TemporaryStorage } from "./models/temporary-storage.js";
export { temporaryTargetSchema, type TemporaryTarget } from "./models/temporary-target.js";
export { TextAlign, textAlignSchema } from "./models/text-align.js";
export { TextDecoration, textDecorationSchema } from "./models/text-decoration.js";
export { Tier, tierSchema } from "./models/tier.js";
export { transformationsSchema, type Transformations } from "./models/transformations.js";
export { Type, typeSchema } from "./models/type.js";
export { uploadedBySchema, type UploadedBy } from "./models/uploaded-by.js";
export { urlReferenceSchema, type UrlReference } from "./models/url-reference.js";
export {
  v11UploadChunkedResponseSchema,
  type V11UploadChunkedResponse,
} from "./models/unions/v11-upload-chunked-response.js";
export { v11UploadResponseSchema, type V11UploadResponse } from "./models/unions/v11-upload-response.js";
export { valueSchema, type Value } from "./models/value.js";
export { versionSchema, type Version } from "./models/version.js";
export { WithField, withFieldSchema } from "./models/with-field.js";
export { accessControlItemSchema, type AccessControlItem } from "./models/access-control-item.js";
export { adminContextOperationSchema, type AdminContextOperation } from "./models/admin-context-operation.js";
export { apiErrorModelSchema, type ApiErrorModel } from "./models/api-error-model.js";
export { apiErrorErrorSchema, type ApiErrorError } from "./models/api-error-error.js";
export { ArchiveResourceType, archiveResourceTypeSchema } from "./models/archive-resource-type.js";
export { AssetDeliveryType, assetDeliveryTypeSchema } from "./models/asset-delivery-type.js";
export {
  assetMetadataCommonParametersSchema,
  type AssetMetadataCommonParameters,
} from "./models/asset-metadata-common-parameters.js";
export { assetRelationInfoSchema, type AssetRelationInfo } from "./models/asset-relation-info.js";
export {
  assetRelationsResponseSchema,
  type AssetRelationsResponse,
} from "./models/asset-relations-response.js";
export {
  assignFolderRolesRequestSchema,
  type AssignFolderRolesRequest,
} from "./models/assign-folder-roles-request.js";
export { asyncUploadResponseSchema, type AsyncUploadResponse } from "./models/async-upload-response.js";
export { backupVersionFailureSchema, type BackupVersionFailure } from "./models/backup-version-failure.js";
export { binaryUploadRequestSchema, type BinaryUploadRequest } from "./models/binary-upload-request.js";
export { concatRequestSchema, type ConcatRequest } from "./models/concat-request.js";
export { concatResponseSchema, type ConcatResponse } from "./models/concat-response.js";
export { contextFullResponseSchema, type ContextFullResponse } from "./models/context-full-response.js";
export { contextUpdateRequestSchema, type ContextUpdateRequest } from "./models/context-update-request.js";
export { coordinatesResponseSchema, type CoordinatesResponse } from "./models/coordinates-response.js";
export { createFolderResponseSchema, type CreateFolderResponse } from "./models/create-folder-response.js";
export {
  deleteBackupVersionsPartialResponseSchema,
  type DeleteBackupVersionsPartialResponse,
} from "./models/delete-backup-versions-partial-response.js";
export {
  deleteBackupVersionsRequestSchema,
  type DeleteBackupVersionsRequest,
} from "./models/delete-backup-versions-request.js";
export {
  deleteBackupVersionsResponseSchema,
  type DeleteBackupVersionsResponse,
} from "./models/delete-backup-versions-response.js";
export { deleteFolderResponseSchema, type DeleteFolderResponse } from "./models/delete-folder-response.js";
export { DeliveryTypeAll, deliveryTypeAllSchema } from "./models/delivery-type-all.js";
export { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./models/unions/delivery-type-all1.js";
export {
  destroyByAssetIdRequestSchema,
  type DestroyByAssetIdRequest,
} from "./models/destroy-by-asset-id-request.js";
export {
  destroyByAssetIdResponseSchema,
  type DestroyByAssetIdResponse,
} from "./models/destroy-by-asset-id-response.js";
export { destroyRequestSchema, type DestroyRequest } from "./models/destroy-request.js";
export { destroyResponseSchema, type DestroyResponse } from "./models/destroy-response.js";
export { DirectionEnum, directionEnumSchema } from "./models/direction-enum.js";
export { evalRequestSchema, type EvalRequest } from "./models/eval-request.js";
export {
  explicitDeliveryTypeSchema,
  type ExplicitDeliveryType,
} from "./models/unions/explicit-delivery-type.js";
export { explicitRequestSchema, type ExplicitRequest } from "./models/explicit-request.js";
export { explodeRequestSchema, type ExplodeRequest } from "./models/explode-request.js";
export { explodeResponseSchema, type ExplodeResponse } from "./models/explode-response.js";
export { FetchDeliveryType, fetchDeliveryTypeSchema } from "./models/fetch-delivery-type.js";
export { fieldsSchema, type Fields } from "./models/unions/fields.js";
export { folderSchema, type Folder } from "./models/folder.js";
export { folderByIdRequestSchema, type FolderByIdRequest } from "./models/folder-by-id-request.js";
export { folderByPathRequestSchema, type FolderByPathRequest } from "./models/folder-by-path-request.js";
export {
  folderDescendantsRequestSchema,
  type FolderDescendantsRequest,
} from "./models/folder-descendants-request.js";
export {
  folderDescendantsResponseSchema,
  type FolderDescendantsResponse,
} from "./models/folder-descendants-response.js";
export { folderDetailResponseSchema, type FolderDetailResponse } from "./models/folder-detail-response.js";
export { folderNamePathSchema, type FolderNamePath } from "./models/folder-name-path.js";
export { folderRenameRequestSchema, type FolderRenameRequest } from "./models/folder-rename-request.js";
export { folderRenameResponseSchema, type FolderRenameResponse } from "./models/folder-rename-response.js";
export { folderRoleSchema, type FolderRole } from "./models/folder-role.js";
export { folderRoleAssignmentSchema, type FolderRoleAssignment } from "./models/folder-role-assignment.js";
export { folderRolesResponseSchema, type FolderRolesResponse } from "./models/folder-roles-response.js";
export { folderSearchRequestSchema, type FolderSearchRequest } from "./models/folder-search-request.js";
export { foldersListResponseSchema, type FoldersListResponse } from "./models/folders-list-response.js";
export { foldersSearchResponseSchema, type FoldersSearchResponse } from "./models/folders-search-response.js";
export {
  generateArchiveRequestSchema,
  type GenerateArchiveRequest,
} from "./models/generate-archive-request.js";
export {
  generateArchiveResponseSchema,
  type GenerateArchiveResponse,
} from "./models/generate-archive-response.js";
export { GeneratedDeliveryType, generatedDeliveryTypeSchema } from "./models/generated-delivery-type.js";
export { infoSchema, type Info } from "./models/info.js";
export {
  initialBackupCreateRequestSchema,
  type InitialBackupCreateRequest,
} from "./models/initial-backup-create-request.js";
export {
  initialBackupCreateResponseSchema,
  type InitialBackupCreateResponse,
} from "./models/initial-backup-create-response.js";
export {
  initialBackupListResponseSchema,
  type InitialBackupListResponse,
} from "./models/initial-backup-list-response.js";
export {
  initialBackupProgressResponseSchema,
  type InitialBackupProgressResponse,
} from "./models/initial-backup-progress-response.js";
export {
  InitialBackupStatusEnum,
  initialBackupStatusEnumSchema,
} from "./models/initial-backup-status-enum.js";
export { initialBackupSummarySchema, type InitialBackupSummary } from "./models/initial-backup-summary.js";
export {
  invalidateByUrlsRequestSchema,
  type InvalidateByUrlsRequest,
} from "./models/invalidate-by-urls-request.js";
export {
  invalidateByUrlsResponseSchema,
  type InvalidateByUrlsResponse,
} from "./models/invalidate-by-urls-response.js";
export { listResponseSchema, type ListResponse } from "./models/list-response.js";
export { ManagedDeliveryType, managedDeliveryTypeSchema } from "./models/managed-delivery-type.js";
export { ManagedDeliveryType1, managedDeliveryType1Schema } from "./models/managed-delivery-type1.js";
export { metadataUpdateRequestSchema, type MetadataUpdateRequest } from "./models/metadata-update-request.js";
export { ModerationKind, moderationKindSchema } from "./models/moderation-kind.js";
export { ModerationStatus2, moderationStatus2Schema } from "./models/moderation-status2.js";
export { moveFolderRequestSchema, type MoveFolderRequest } from "./models/move-folder-request.js";
export { moveFolderResponseSchema, type MoveFolderResponse } from "./models/move-folder-response.js";
export { NameStatus, nameStatusSchema } from "./models/name-status.js";
export {
  nonFinalChunkUploadResponseSchema,
  type NonFinalChunkUploadResponse,
} from "./models/non-final-chunk-upload-response.js";
export { peopleInspectRequestSchema, type PeopleInspectRequest } from "./models/people-inspect-request.js";
export { peopleInspectResponseSchema, type PeopleInspectResponse } from "./models/people-inspect-response.js";
export { peopleInspectionGroupSchema, type PeopleInspectionGroup } from "./models/people-inspection-group.js";
export {
  peopleInspectionTargetsSchema,
  type PeopleInspectionTargets,
} from "./models/people-inspection-targets.js";
export { peopleListResponseSchema, type PeopleListResponse } from "./models/people-list-response.js";
export { permittedRoleSchema, type PermittedRole } from "./models/permitted-role.js";
export { personDetailsSchema, type PersonDetails } from "./models/person-details.js";
export { personResponseSchema, type PersonResponse } from "./models/person-response.js";
export { PersonStatus, personStatusSchema } from "./models/person-status.js";
export { PrincipalType, principalTypeSchema } from "./models/principal-type.js";
export { publicIdsResponseSchema, type PublicIdsResponse } from "./models/public-ids-response.js";
export { Region, regionSchema } from "./models/region.js";
export {
  relateAssetsByAssetIdRequestSchema,
  type RelateAssetsByAssetIdRequest,
} from "./models/relate-assets-by-asset-id-request.js";
export {
  relateAssetsByPublicIdRequestSchema,
  type RelateAssetsByPublicIdRequest,
} from "./models/relate-assets-by-public-id-request.js";
export { renameRequestSchema, type RenameRequest } from "./models/rename-request.js";
export { ResourceFieldsEnum, resourceFieldsEnumSchema } from "./models/resource-fields-enum.js";
export {
  resourceGetByBodyRequestSchema,
  type ResourceGetByBodyRequest,
} from "./models/resource-get-by-body-request.js";
export {
  resourceInternalResponseSchema,
  type ResourceInternalResponse,
} from "./models/resource-internal-response.js";
export { ResourceType, resourceTypeSchema } from "./models/resource-type.js";
export { ResourceType1, resourceType1Schema } from "./models/resource-type1.js";
export { ResourceType9, resourceType9Schema } from "./models/resource-type9.js";
export { resourceTypesResponseSchema, type ResourceTypesResponse } from "./models/resource-types-response.js";
export {
  resourceUpdateByBodyRequestSchema,
  type ResourceUpdateByBodyRequest,
} from "./models/resource-update-by-body-request.js";
export {
  resourcesByContainerIdResponseSchema,
  type ResourcesByContainerIdResponse,
} from "./models/resources-by-container-id-response.js";
export { responsiveBreakpointSchema, type ResponsiveBreakpoint } from "./models/responsive-breakpoint.js";
export { restoreRequestSchema, type RestoreRequest } from "./models/restore-request.js";
export { restoreResponseSchema, type RestoreResponse } from "./models/restore-response.js";
export { restoreResponse1Schema, type RestoreResponse1 } from "./models/unions/restore-response1.js";
export { searchParametersSchema, type SearchParameters } from "./models/search-parameters.js";
export { searchResponseSchema, type SearchResponse } from "./models/search-response.js";
export { signatureParametersSchema, type SignatureParameters } from "./models/signature-parameters.js";
export { SocialDeliveryType, socialDeliveryTypeSchema } from "./models/social-delivery-type.js";
export { SortBy, sortBySchema } from "./models/sort-by.js";
export { SortBy1, sortBy1Schema } from "./models/sort-by1.js";
export {
  structuredMetadataParamSchema,
  type StructuredMetadataParam,
} from "./models/unions/structured-metadata-param.js";
export {
  structuredMetadataValueSchema,
  type StructuredMetadataValue,
} from "./models/unions/structured-metadata-value.js";
export { successResponseSchema, type SuccessResponse } from "./models/success-response.js";
export { tagsListResponseSchema, type TagsListResponse } from "./models/tags-list-response.js";
export { tagsParamSchema, type TagsParam } from "./models/unions/tags-param.js";
export { tagsUpdateRequestSchema, type TagsUpdateRequest } from "./models/tags-update-request.js";
export { textRequestSchema, type TextRequest } from "./models/text-request.js";
export { textResponseSchema, type TextResponse } from "./models/text-response.js";
export { thumbnailSchema, type Thumbnail } from "./models/thumbnail.js";
export {
  unrelateAssetsByAssetIdRequestSchema,
  type UnrelateAssetsByAssetIdRequest,
} from "./models/unrelate-assets-by-asset-id-request.js";
export {
  unrelateAssetsByPublicIdRequestSchema,
  type UnrelateAssetsByPublicIdRequest,
} from "./models/unrelate-assets-by-public-id-request.js";
export { updatePersonRequestSchema, type UpdatePersonRequest } from "./models/update-person-request.js";
export { updatePersonResponseSchema, type UpdatePersonResponse } from "./models/update-person-response.js";
export { uploadBaseParametersSchema, type UploadBaseParameters } from "./models/upload-base-parameters.js";
export {
  uploadCommonParametersSchema,
  type UploadCommonParameters,
} from "./models/upload-common-parameters.js";
export { uploadDeliveryTypeSchema, type UploadDeliveryType } from "./models/unions/upload-delivery-type.js";
export {
  uploadDeliveryType1Schema,
  type UploadDeliveryType1,
} from "./models/unions/upload-delivery-type1.js";
export { uploadParametersSchema, type UploadParameters } from "./models/upload-parameters.js";
export { uploadRequestSchema, type UploadRequest } from "./models/upload-request.js";
export {
  uploadRequestParametersSchema,
  type UploadRequestParameters,
} from "./models/upload-request-parameters.js";
export { UploadResourceType, uploadResourceTypeSchema } from "./models/upload-resource-type.js";
export { uploadResponseSchema, type UploadResponse } from "./models/upload-response.js";
export {
  uploadSerializableInputSchema,
  type UploadSerializableInput,
} from "./models/upload-serializable-input.js";
export { uploadTypeParameterSchema, type UploadTypeParameter } from "./models/upload-type-parameter.js";
export { usageResponseSchema, type UsageResponse } from "./models/usage-response.js";
export { videoViewSchema, type VideoView } from "./models/video-view.js";
export { videoViewsResponseSchema, type VideoViewsResponse } from "./models/video-views-response.js";
export {
  visualSearchParametersSchema,
  type VisualSearchParameters,
} from "./models/visual-search-parameters.js";
export {
  visualSearchParameters1Schema,
  type VisualSearchParameters1,
} from "./models/visual-search-parameters1.js";
export {
  visualSearchParameters2Schema,
  type VisualSearchParameters2,
} from "./models/visual-search-parameters2.js";
export {
  visualSearchParameters3Schema,
  type VisualSearchParameters3,
} from "./models/unions/visual-search-parameters3.js";

export {
  CoreError as CloudinaryAssetManagementApiError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded } from "./core/validation/schema.js";
