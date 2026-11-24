export { AmazonRekognitionClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { CelebrityRecognitionApi } from "./resources/celebrity-recognition-api.js";
export { ContentModeration } from "./resources/content-moderation.js";
export { CustomLabels } from "./resources/custom-labels.js";
export { Dataset } from "./resources/dataset.js";
export { FaceApi } from "./resources/face-api.js";
export { FaceCollections } from "./resources/face-collections.js";
export { FaceLiveness } from "./resources/face-liveness.js";
export { FaceSearch } from "./resources/face-search.js";
export { FacialAnalysis } from "./resources/facial-analysis.js";
export { ImageAnalysis } from "./resources/image-analysis.js";
export { MediaAnalysisJob } from "./resources/media-analysis-job.js";
export { Operations } from "./resources/operations.js";
export { Project } from "./resources/project.js";
export { ProjectPolicyApi } from "./resources/project-policy-api.js";
export { ProjectVersion } from "./resources/project-version.js";
export { StoredVideoAnalysis } from "./resources/stored-video-analysis.js";
export { StreamProcessorApi } from "./resources/stream-processor-api.js";
export { TextDetectionApi } from "./resources/text-detection-api.js";
export { UserApi } from "./resources/user-api.js";

export { accessDeniedExceptionSchema, type AccessDeniedException } from "./models/access-denied-exception.js";
export {
  accessDeniedExceptionErrorSchema,
  type AccessDeniedExceptionError,
} from "./models/access-denied-exception-error.js";
export { ageRangeSchema, type AgeRange } from "./models/age-range.js";
export { AggregateBy, aggregateBySchema } from "./models/aggregate-by.js";
export { AggregateBy1, aggregateBy1Schema } from "./models/aggregate-by1.js";
export {
  AggregateBy1AmazonRekognitionStoredVideoAnalysisApi,
  aggregateBy1AmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/aggregate-by1-amazon-rekognition-stored-video-analysis-api.js";
export {
  AggregateByAmazonRekognitionStoredVideoAnalysisApi,
  aggregateByAmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/aggregate-by-amazon-rekognition-stored-video-analysis-api.js";
export { assetSchema, type Asset } from "./models/asset.js";
export { associateFacesRequestSchema, type AssociateFacesRequest } from "./models/associate-faces-request.js";
export {
  associateFacesResponseSchema,
  type AssociateFacesResponse,
} from "./models/associate-faces-response.js";
export { associatedFaceSchema, type AssociatedFace } from "./models/associated-face.js";
export { Attribute, attributeSchema } from "./models/attribute.js";
export { audioMetadataSchema, type AudioMetadata } from "./models/audio-metadata.js";
export { auditImageSchema, type AuditImage } from "./models/audit-image.js";
export { AutoUpdate, autoUpdateSchema } from "./models/auto-update.js";
export { AutoUpdate1, autoUpdate1Schema } from "./models/auto-update1.js";
export { beardSchema, type Beard } from "./models/beard.js";
export { blackFrameSchema, type BlackFrame } from "./models/black-frame.js";
export { boundingBoxSchema, type BoundingBox } from "./models/bounding-box.js";
export { celebritySchema, type Celebrity } from "./models/celebrity.js";
export { celebrityDetailSchema, type CelebrityDetail } from "./models/celebrity-detail.js";
export { celebrityRecognitionSchema, type CelebrityRecognition } from "./models/celebrity-recognition.js";
export { challengeSchema, type Challenge } from "./models/challenge.js";
export { challengePreferenceSchema, type ChallengePreference } from "./models/challenge-preference.js";
export { Code, codeSchema } from "./models/code.js";
export {
  CodeAmazonRekognitionMediaAnalysisJobApi,
  codeAmazonRekognitionMediaAnalysisJobApiSchema,
} from "./models/code-amazon-rekognition-media-analysis-job-api.js";
export { ColorRange, colorRangeSchema } from "./models/color-range.js";
export { compareFacesMatchSchema, type CompareFacesMatch } from "./models/compare-faces-match.js";
export { compareFacesRequestSchema, type CompareFacesRequest } from "./models/compare-faces-request.js";
export { compareFacesResponseSchema, type CompareFacesResponse } from "./models/compare-faces-response.js";
export { comparedFaceSchema, type ComparedFace } from "./models/compared-face.js";
export {
  comparedSourceImageFaceSchema,
  type ComparedSourceImageFace,
} from "./models/compared-source-image-face.js";
export { connectedHomeSettingsSchema, type ConnectedHomeSettings } from "./models/connected-home-settings.js";
export {
  connectedHomeSettingsForUpdateSchema,
  type ConnectedHomeSettingsForUpdate,
} from "./models/connected-home-settings-for-update.js";
export { ContentClassifier, contentClassifierSchema } from "./models/content-classifier.js";
export {
  contentModerationDetectionSchema,
  type ContentModerationDetection,
} from "./models/content-moderation-detection.js";
export { contentTypeSchema, type ContentType } from "./models/content-type.js";
export {
  copyProjectVersionRequestSchema,
  type CopyProjectVersionRequest,
} from "./models/copy-project-version-request.js";
export {
  copyProjectVersionResponseSchema,
  type CopyProjectVersionResponse,
} from "./models/copy-project-version-response.js";
export { coversBodyPartSchema, type CoversBodyPart } from "./models/covers-body-part.js";
export {
  createCollectionRequestSchema,
  type CreateCollectionRequest,
} from "./models/create-collection-request.js";
export {
  createCollectionResponseSchema,
  type CreateCollectionResponse,
} from "./models/create-collection-response.js";
export { createDatasetRequestSchema, type CreateDatasetRequest } from "./models/create-dataset-request.js";
export { createDatasetResponseSchema, type CreateDatasetResponse } from "./models/create-dataset-response.js";
export {
  createFaceLivenessSessionRequestSchema,
  type CreateFaceLivenessSessionRequest,
} from "./models/create-face-liveness-session-request.js";
export {
  createFaceLivenessSessionRequestSettingsSchema,
  type CreateFaceLivenessSessionRequestSettings,
} from "./models/create-face-liveness-session-request-settings.js";
export {
  createFaceLivenessSessionResponseSchema,
  type CreateFaceLivenessSessionResponse,
} from "./models/create-face-liveness-session-response.js";
export { createProjectRequestSchema, type CreateProjectRequest } from "./models/create-project-request.js";
export { createProjectResponseSchema, type CreateProjectResponse } from "./models/create-project-response.js";
export {
  createProjectVersionRequestSchema,
  type CreateProjectVersionRequest,
} from "./models/create-project-version-request.js";
export {
  createProjectVersionResponseSchema,
  type CreateProjectVersionResponse,
} from "./models/create-project-version-response.js";
export {
  createStreamProcessorRequestSchema,
  type CreateStreamProcessorRequest,
} from "./models/create-stream-processor-request.js";
export {
  createStreamProcessorResponseSchema,
  type CreateStreamProcessorResponse,
} from "./models/create-stream-processor-response.js";
export { createUserRequestSchema, type CreateUserRequest } from "./models/create-user-request.js";
export { customLabelSchema, type CustomLabel } from "./models/custom-label.js";
export {
  customizationFeatureConfigSchema,
  type CustomizationFeatureConfig,
} from "./models/customization-feature-config.js";
export {
  customizationFeatureContentModerationConfigSchema,
  type CustomizationFeatureContentModerationConfig,
} from "./models/customization-feature-content-moderation-config.js";
export { datasetChangesSchema, type DatasetChanges } from "./models/dataset-changes.js";
export { datasetDescriptionSchema, type DatasetDescription } from "./models/dataset-description.js";
export {
  datasetLabelDescriptionSchema,
  type DatasetLabelDescription,
} from "./models/dataset-label-description.js";
export { datasetLabelStatsSchema, type DatasetLabelStats } from "./models/dataset-label-stats.js";
export { datasetMetadataSchema, type DatasetMetadata } from "./models/dataset-metadata.js";
export { datasetSourceSchema, type DatasetSource } from "./models/dataset-source.js";
export { datasetStatsSchema, type DatasetStats } from "./models/dataset-stats.js";
export { DatasetType, datasetTypeSchema } from "./models/dataset-type.js";
export {
  DatasetTypeAmazonRekognitionProjectApi,
  datasetTypeAmazonRekognitionProjectApiSchema,
} from "./models/dataset-type-amazon-rekognition-project-api.js";
export {
  deleteCollectionRequestSchema,
  type DeleteCollectionRequest,
} from "./models/delete-collection-request.js";
export {
  deleteCollectionResponseSchema,
  type DeleteCollectionResponse,
} from "./models/delete-collection-response.js";
export { deleteDatasetRequestSchema, type DeleteDatasetRequest } from "./models/delete-dataset-request.js";
export { deleteFacesRequestSchema, type DeleteFacesRequest } from "./models/delete-faces-request.js";
export { deleteFacesResponseSchema, type DeleteFacesResponse } from "./models/delete-faces-response.js";
export {
  deleteProjectPolicyRequestSchema,
  type DeleteProjectPolicyRequest,
} from "./models/delete-project-policy-request.js";
export { deleteProjectRequestSchema, type DeleteProjectRequest } from "./models/delete-project-request.js";
export { deleteProjectResponseSchema, type DeleteProjectResponse } from "./models/delete-project-response.js";
export {
  deleteProjectVersionRequestSchema,
  type DeleteProjectVersionRequest,
} from "./models/delete-project-version-request.js";
export {
  deleteProjectVersionResponseSchema,
  type DeleteProjectVersionResponse,
} from "./models/delete-project-version-response.js";
export {
  deleteStreamProcessorRequestSchema,
  type DeleteStreamProcessorRequest,
} from "./models/delete-stream-processor-request.js";
export { deleteUserRequestSchema, type DeleteUserRequest } from "./models/delete-user-request.js";
export {
  describeCollectionRequestSchema,
  type DescribeCollectionRequest,
} from "./models/describe-collection-request.js";
export {
  describeCollectionResponseSchema,
  type DescribeCollectionResponse,
} from "./models/describe-collection-response.js";
export {
  describeDatasetRequestSchema,
  type DescribeDatasetRequest,
} from "./models/describe-dataset-request.js";
export {
  describeDatasetResponseSchema,
  type DescribeDatasetResponse,
} from "./models/describe-dataset-response.js";
export {
  describeProjectVersionsRequestSchema,
  type DescribeProjectVersionsRequest,
} from "./models/describe-project-versions-request.js";
export {
  describeProjectVersionsResponseSchema,
  type DescribeProjectVersionsResponse,
} from "./models/describe-project-versions-response.js";
export {
  describeProjectsRequestSchema,
  type DescribeProjectsRequest,
} from "./models/describe-projects-request.js";
export {
  describeProjectsResponseSchema,
  type DescribeProjectsResponse,
} from "./models/describe-projects-response.js";
export {
  describeStreamProcessorRequestSchema,
  type DescribeStreamProcessorRequest,
} from "./models/describe-stream-processor-request.js";
export {
  describeStreamProcessorResponseSchema,
  type DescribeStreamProcessorResponse,
} from "./models/describe-stream-processor-response.js";
export {
  detectCustomLabelsRequestSchema,
  type DetectCustomLabelsRequest,
} from "./models/detect-custom-labels-request.js";
export {
  detectCustomLabelsResponseSchema,
  type DetectCustomLabelsResponse,
} from "./models/detect-custom-labels-response.js";
export { detectFacesRequestSchema, type DetectFacesRequest } from "./models/detect-faces-request.js";
export { detectFacesResponseSchema, type DetectFacesResponse } from "./models/detect-faces-response.js";
export {
  detectLabelsImageBackgroundSchema,
  type DetectLabelsImageBackground,
} from "./models/detect-labels-image-background.js";
export {
  detectLabelsImageForegroundSchema,
  type DetectLabelsImageForeground,
} from "./models/detect-labels-image-foreground.js";
export {
  detectLabelsImagePropertiesSchema,
  type DetectLabelsImageProperties,
} from "./models/detect-labels-image-properties.js";
export {
  detectLabelsImagePropertiesSettingsSchema,
  type DetectLabelsImagePropertiesSettings,
} from "./models/detect-labels-image-properties-settings.js";
export {
  detectLabelsImageQualitySchema,
  type DetectLabelsImageQuality,
} from "./models/detect-labels-image-quality.js";
export { detectLabelsRequestSchema, type DetectLabelsRequest } from "./models/detect-labels-request.js";
export { detectLabelsResponseSchema, type DetectLabelsResponse } from "./models/detect-labels-response.js";
export { detectLabelsSettingsSchema, type DetectLabelsSettings } from "./models/detect-labels-settings.js";
export {
  detectModerationLabelsRequestSchema,
  type DetectModerationLabelsRequest,
} from "./models/detect-moderation-labels-request.js";
export {
  detectModerationLabelsResponseSchema,
  type DetectModerationLabelsResponse,
} from "./models/detect-moderation-labels-response.js";
export {
  detectProtectiveEquipmentRequestSchema,
  type DetectProtectiveEquipmentRequest,
} from "./models/detect-protective-equipment-request.js";
export {
  detectProtectiveEquipmentResponseSchema,
  type DetectProtectiveEquipmentResponse,
} from "./models/detect-protective-equipment-response.js";
export { detectTextFiltersSchema, type DetectTextFilters } from "./models/detect-text-filters.js";
export { detectTextRequestSchema, type DetectTextRequest } from "./models/detect-text-request.js";
export { detectTextResponseSchema, type DetectTextResponse } from "./models/detect-text-response.js";
export { DetectionAttribute, detectionAttributeSchema } from "./models/detection-attribute.js";
export { detectionFilterSchema, type DetectionFilter } from "./models/detection-filter.js";
export {
  disassociateFacesRequestSchema,
  type DisassociateFacesRequest,
} from "./models/disassociate-faces-request.js";
export {
  disassociateFacesResponseSchema,
  type DisassociateFacesResponse,
} from "./models/disassociate-faces-response.js";
export { disassociatedFaceSchema, type DisassociatedFace } from "./models/disassociated-face.js";
export { distributeDatasetSchema, type DistributeDataset } from "./models/distribute-dataset.js";
export {
  distributeDatasetEntriesRequestSchema,
  type DistributeDatasetEntriesRequest,
} from "./models/distribute-dataset-entries-request.js";
export { dominantColorSchema, type DominantColor } from "./models/dominant-color.js";
export { emotionSchema, type Emotion } from "./models/emotion.js";
export {
  emotionAmazonRekognitionFaceCollectionsApiSchema,
  type EmotionAmazonRekognitionFaceCollectionsApi,
} from "./models/emotion-amazon-rekognition-face-collections-api.js";
export { equipmentDetectionSchema, type EquipmentDetection } from "./models/equipment-detection.js";
export { evaluationResultSchema, type EvaluationResult } from "./models/evaluation-result.js";
export { eyeDirectionSchema, type EyeDirection } from "./models/eye-direction.js";
export { eyeOpenSchema, type EyeOpen } from "./models/eye-open.js";
export { eyeglassesSchema, type Eyeglasses } from "./models/eyeglasses.js";
export { faceSchema, type Face } from "./models/face.js";
export { FaceAttributes, faceAttributesSchema } from "./models/face-attributes.js";
export { faceDetailSchema, type FaceDetail } from "./models/face-detail.js";
export { faceDetectionSchema, type FaceDetection } from "./models/face-detection.js";
export { faceMatchSchema, type FaceMatch } from "./models/face-match.js";
export { faceOccludedSchema, type FaceOccluded } from "./models/face-occluded.js";
export { faceRecordSchema, type FaceRecord } from "./models/face-record.js";
export { faceSearchSettingsSchema, type FaceSearchSettings } from "./models/face-search-settings.js";
export { Feature, featureSchema } from "./models/feature.js";
export { Feature1, feature1Schema } from "./models/feature1.js";
export { Feature2, feature2Schema } from "./models/feature2.js";
export {
  FeatureAmazonRekognitionProjectApi,
  featureAmazonRekognitionProjectApiSchema,
} from "./models/feature-amazon-rekognition-project-api.js";
export {
  FeatureAmazonRekognitionProjectVersionApi,
  featureAmazonRekognitionProjectVersionApiSchema,
} from "./models/feature-amazon-rekognition-project-version-api.js";
export {
  FeatureAmazonRekognitionStoredVideoAnalysisApi,
  featureAmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/feature-amazon-rekognition-stored-video-analysis-api.js";
export { feedbackItemSchema, type FeedbackItem } from "./models/feedback-item.js";
export { genderSchema, type Gender } from "./models/gender.js";
export { generalLabelsSettingsSchema, type GeneralLabelsSettings } from "./models/general-labels-settings.js";
export { geometrySchema, type Geometry } from "./models/geometry.js";
export {
  getCelebrityInfoRequestSchema,
  type GetCelebrityInfoRequest,
} from "./models/get-celebrity-info-request.js";
export {
  getCelebrityInfoResponseSchema,
  type GetCelebrityInfoResponse,
} from "./models/get-celebrity-info-response.js";
export {
  getCelebrityRecognitionRequestSchema,
  type GetCelebrityRecognitionRequest,
} from "./models/get-celebrity-recognition-request.js";
export {
  getCelebrityRecognitionResponseSchema,
  type GetCelebrityRecognitionResponse,
} from "./models/get-celebrity-recognition-response.js";
export {
  getContentModerationRequestSchema,
  type GetContentModerationRequest,
} from "./models/get-content-moderation-request.js";
export {
  getContentModerationRequestMetadataSchema,
  type GetContentModerationRequestMetadata,
} from "./models/get-content-moderation-request-metadata.js";
export {
  getContentModerationResponseSchema,
  type GetContentModerationResponse,
} from "./models/get-content-moderation-response.js";
export {
  getFaceDetectionRequestSchema,
  type GetFaceDetectionRequest,
} from "./models/get-face-detection-request.js";
export {
  getFaceDetectionResponseSchema,
  type GetFaceDetectionResponse,
} from "./models/get-face-detection-response.js";
export {
  getFaceLivenessSessionResultsRequestSchema,
  type GetFaceLivenessSessionResultsRequest,
} from "./models/get-face-liveness-session-results-request.js";
export {
  getFaceLivenessSessionResultsResponseSchema,
  type GetFaceLivenessSessionResultsResponse,
} from "./models/get-face-liveness-session-results-response.js";
export { getFaceSearchRequestSchema, type GetFaceSearchRequest } from "./models/get-face-search-request.js";
export {
  getFaceSearchResponseSchema,
  type GetFaceSearchResponse,
} from "./models/get-face-search-response.js";
export {
  getLabelDetectionRequestSchema,
  type GetLabelDetectionRequest,
} from "./models/get-label-detection-request.js";
export {
  getLabelDetectionRequestMetadataSchema,
  type GetLabelDetectionRequestMetadata,
} from "./models/get-label-detection-request-metadata.js";
export {
  getLabelDetectionResponseSchema,
  type GetLabelDetectionResponse,
} from "./models/get-label-detection-response.js";
export {
  getMediaAnalysisJobRequestSchema,
  type GetMediaAnalysisJobRequest,
} from "./models/get-media-analysis-job-request.js";
export {
  getMediaAnalysisJobResponseSchema,
  type GetMediaAnalysisJobResponse,
} from "./models/get-media-analysis-job-response.js";
export {
  getPersonTrackingRequestSchema,
  type GetPersonTrackingRequest,
} from "./models/get-person-tracking-request.js";
export {
  getPersonTrackingResponseSchema,
  type GetPersonTrackingResponse,
} from "./models/get-person-tracking-response.js";
export {
  getSegmentDetectionRequestSchema,
  type GetSegmentDetectionRequest,
} from "./models/get-segment-detection-request.js";
export {
  getSegmentDetectionResponseSchema,
  type GetSegmentDetectionResponse,
} from "./models/get-segment-detection-response.js";
export {
  getTextDetectionRequestSchema,
  type GetTextDetectionRequest,
} from "./models/get-text-detection-request.js";
export {
  getTextDetectionResponseSchema,
  type GetTextDetectionResponse,
} from "./models/get-text-detection-response.js";
export { groundTruthManifestSchema, type GroundTruthManifest } from "./models/ground-truth-manifest.js";
export {
  humanLoopActivationOutputSchema,
  type HumanLoopActivationOutput,
} from "./models/human-loop-activation-output.js";
export { humanLoopConfigSchema, type HumanLoopConfig } from "./models/human-loop-config.js";
export {
  humanLoopDataAttributesSchema,
  type HumanLoopDataAttributes,
} from "./models/human-loop-data-attributes.js";
export {
  humanLoopQuotaExceededExceptionSchema,
  type HumanLoopQuotaExceededException,
} from "./models/human-loop-quota-exceeded-exception.js";
export {
  humanLoopQuotaExceededExceptionErrorSchema,
  type HumanLoopQuotaExceededExceptionError,
} from "./models/human-loop-quota-exceeded-exception-error.js";
export { imageSchema, type Image } from "./models/image.js";
export { imageQualitySchema, type ImageQuality } from "./models/image-quality.js";
export { indexFacesRequestSchema, type IndexFacesRequest } from "./models/index-faces-request.js";
export {
  indexFacesRequestAmazonRekognitionOperationsApiSchema,
  type IndexFacesRequestAmazonRekognitionOperationsApi,
} from "./models/index-faces-request-amazon-rekognition-operations-api.js";
export { indexFacesResponseSchema, type IndexFacesResponse } from "./models/index-faces-response.js";
export {
  indexFacesResponseAmazonRekognitionOperationsApiSchema,
  type IndexFacesResponseAmazonRekognitionOperationsApi,
} from "./models/index-faces-response-amazon-rekognition-operations-api.js";
export { instanceSchema, type Instance } from "./models/instance.js";
export { internalServerErrorSchema, type InternalServerError } from "./models/internal-server-error.js";
export {
  internalServerErrorErrorSchema,
  type InternalServerErrorError,
} from "./models/internal-server-error-error.js";
export { JobStatus, jobStatusSchema } from "./models/job-status.js";
export { JobStatus1, jobStatus1Schema } from "./models/job-status1.js";
export { JobStatus2, jobStatus2Schema } from "./models/job-status2.js";
export {
  JobStatusAmazonRekognitionContentModerationApi,
  jobStatusAmazonRekognitionContentModerationApiSchema,
} from "./models/job-status-amazon-rekognition-content-moderation-api.js";
export {
  JobStatusAmazonRekognitionFaceSearchApi,
  jobStatusAmazonRekognitionFaceSearchApiSchema,
} from "./models/job-status-amazon-rekognition-face-search-api.js";
export {
  JobStatusAmazonRekognitionOperationsApi,
  jobStatusAmazonRekognitionOperationsApiSchema,
} from "./models/job-status-amazon-rekognition-operations-api.js";
export {
  JobStatusAmazonRekognitionStoredVideoAnalysisApi,
  jobStatusAmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/job-status-amazon-rekognition-stored-video-analysis-api.js";
export {
  JobStatusAmazonRekognitionTextDetectionApi,
  jobStatusAmazonRekognitionTextDetectionApiSchema,
} from "./models/job-status-amazon-rekognition-text-detection-api.js";
export { kinesisDataStreamSchema, type KinesisDataStream } from "./models/kinesis-data-stream.js";
export { kinesisVideoStreamSchema, type KinesisVideoStream } from "./models/kinesis-video-stream.js";
export {
  kinesisVideoStreamStartSelectorSchema,
  type KinesisVideoStreamStartSelector,
} from "./models/kinesis-video-stream-start-selector.js";
export { knownGenderSchema, type KnownGender } from "./models/known-gender.js";
export { labelSchema, type Label } from "./models/label.js";
export { labelAliasSchema, type LabelAlias } from "./models/label-alias.js";
export { labelCategorySchema, type LabelCategory } from "./models/label-category.js";
export { labelDetectionSchema, type LabelDetection } from "./models/label-detection.js";
export {
  labelDetectionSettingsSchema,
  type LabelDetectionSettings,
} from "./models/label-detection-settings.js";
export { landmarkSchema, type Landmark } from "./models/landmark.js";
export {
  landmarkAmazonRekognitionFaceCollectionsApiSchema,
  type LandmarkAmazonRekognitionFaceCollectionsApi,
} from "./models/landmark-amazon-rekognition-face-collections-api.js";
export {
  listCollectionsRequestSchema,
  type ListCollectionsRequest,
} from "./models/list-collections-request.js";
export {
  listCollectionsResponseSchema,
  type ListCollectionsResponse,
} from "./models/list-collections-response.js";
export {
  listDatasetEntriesRequestSchema,
  type ListDatasetEntriesRequest,
} from "./models/list-dataset-entries-request.js";
export {
  listDatasetEntriesResponseSchema,
  type ListDatasetEntriesResponse,
} from "./models/list-dataset-entries-response.js";
export {
  listDatasetLabelsRequestSchema,
  type ListDatasetLabelsRequest,
} from "./models/list-dataset-labels-request.js";
export {
  listDatasetLabelsResponseSchema,
  type ListDatasetLabelsResponse,
} from "./models/list-dataset-labels-response.js";
export { listFacesRequestSchema, type ListFacesRequest } from "./models/list-faces-request.js";
export { listFacesResponseSchema, type ListFacesResponse } from "./models/list-faces-response.js";
export {
  listMediaAnalysisJobsRequestSchema,
  type ListMediaAnalysisJobsRequest,
} from "./models/list-media-analysis-jobs-request.js";
export {
  listMediaAnalysisJobsResponseSchema,
  type ListMediaAnalysisJobsResponse,
} from "./models/list-media-analysis-jobs-response.js";
export {
  listProjectPoliciesRequestSchema,
  type ListProjectPoliciesRequest,
} from "./models/list-project-policies-request.js";
export {
  listProjectPoliciesResponseSchema,
  type ListProjectPoliciesResponse,
} from "./models/list-project-policies-response.js";
export {
  listStreamProcessorsRequestSchema,
  type ListStreamProcessorsRequest,
} from "./models/list-stream-processors-request.js";
export {
  listStreamProcessorsResponseSchema,
  type ListStreamProcessorsResponse,
} from "./models/list-stream-processors-response.js";
export {
  listTagsForResourceRequestSchema,
  type ListTagsForResourceRequest,
} from "./models/list-tags-for-resource-request.js";
export {
  listTagsForResourceResponseSchema,
  type ListTagsForResourceResponse,
} from "./models/list-tags-for-resource-response.js";
export { listUsersRequestSchema, type ListUsersRequest } from "./models/list-users-request.js";
export { listUsersResponseSchema, type ListUsersResponse } from "./models/list-users-response.js";
export { livenessOutputConfigSchema, type LivenessOutputConfig } from "./models/liveness-output-config.js";
export { matchedUserSchema, type MatchedUser } from "./models/matched-user.js";
export {
  mediaAnalysisDetectModerationLabelsConfigSchema,
  type MediaAnalysisDetectModerationLabelsConfig,
} from "./models/media-analysis-detect-moderation-labels-config.js";
export { mediaAnalysisInputSchema, type MediaAnalysisInput } from "./models/media-analysis-input.js";
export {
  mediaAnalysisJobDescriptionSchema,
  type MediaAnalysisJobDescription,
} from "./models/media-analysis-job-description.js";
export {
  mediaAnalysisJobFailureDetailsSchema,
  type MediaAnalysisJobFailureDetails,
} from "./models/media-analysis-job-failure-details.js";
export {
  mediaAnalysisManifestSummarySchema,
  type MediaAnalysisManifestSummary,
} from "./models/media-analysis-manifest-summary.js";
export {
  mediaAnalysisModelVersionsSchema,
  type MediaAnalysisModelVersions,
} from "./models/media-analysis-model-versions.js";
export {
  mediaAnalysisOperationsConfigSchema,
  type MediaAnalysisOperationsConfig,
} from "./models/media-analysis-operations-config.js";
export {
  mediaAnalysisOutputConfigSchema,
  type MediaAnalysisOutputConfig,
} from "./models/media-analysis-output-config.js";
export { mediaAnalysisResultsSchema, type MediaAnalysisResults } from "./models/media-analysis-results.js";
export { moderationLabelSchema, type ModerationLabel } from "./models/moderation-label.js";
export { mouthOpenSchema, type MouthOpen } from "./models/mouth-open.js";
export { mustacheSchema, type Mustache } from "./models/mustache.js";
export { Name, nameSchema } from "./models/name.js";
export { notificationChannelSchema, type NotificationChannel } from "./models/notification-channel.js";
export { OrientationCorrection, orientationCorrectionSchema } from "./models/orientation-correction.js";
export { OrientationCorrection2, orientationCorrection2Schema } from "./models/orientation-correction2.js";
export {
  OrientationCorrectionAmazonRekognitionFaceCollectionsApi,
  orientationCorrectionAmazonRekognitionFaceCollectionsApiSchema,
} from "./models/orientation-correction-amazon-rekognition-face-collections-api.js";
export {
  OrientationCorrectionAmazonRekognitionFacialAnalysisApi,
  orientationCorrectionAmazonRekognitionFacialAnalysisApiSchema,
} from "./models/orientation-correction-amazon-rekognition-facial-analysis-api.js";
export { outputConfigSchema, type OutputConfig } from "./models/output-config.js";
export { ParametersToDelete, parametersToDeleteSchema } from "./models/parameters-to-delete.js";
export { parentSchema, type Parent } from "./models/parent.js";
export { personDetailSchema, type PersonDetail } from "./models/person-detail.js";
export { personDetectionSchema, type PersonDetection } from "./models/person-detection.js";
export { personMatchSchema, type PersonMatch } from "./models/person-match.js";
export { pointSchema, type Point } from "./models/point.js";
export { poseSchema, type Pose } from "./models/pose.js";
export { projectDescriptionSchema, type ProjectDescription } from "./models/project-description.js";
export { projectPolicySchema, type ProjectPolicy } from "./models/project-policy.js";
export {
  projectVersionDescriptionSchema,
  type ProjectVersionDescription,
} from "./models/project-version-description.js";
export {
  protectiveEquipmentBodyPartSchema,
  type ProtectiveEquipmentBodyPart,
} from "./models/protective-equipment-body-part.js";
export {
  protectiveEquipmentPersonSchema,
  type ProtectiveEquipmentPerson,
} from "./models/protective-equipment-person.js";
export {
  protectiveEquipmentSummarizationAttributesSchema,
  type ProtectiveEquipmentSummarizationAttributes,
} from "./models/protective-equipment-summarization-attributes.js";
export {
  protectiveEquipmentSummarySchema,
  type ProtectiveEquipmentSummary,
} from "./models/protective-equipment-summary.js";
export {
  putProjectPolicyRequestSchema,
  type PutProjectPolicyRequest,
} from "./models/put-project-policy-request.js";
export {
  putProjectPolicyResponseSchema,
  type PutProjectPolicyResponse,
} from "./models/put-project-policy-response.js";
export { QualityFilter, qualityFilterSchema } from "./models/quality-filter.js";
export { QualityFilter1, qualityFilter1Schema } from "./models/quality-filter1.js";
export {
  QualityFilterAmazonRekognitionFaceCollectionsApi,
  qualityFilterAmazonRekognitionFaceCollectionsApiSchema,
} from "./models/quality-filter-amazon-rekognition-face-collections-api.js";
export {
  QualityFilterAmazonRekognitionFacialAnalysisApi,
  qualityFilterAmazonRekognitionFacialAnalysisApiSchema,
} from "./models/quality-filter-amazon-rekognition-facial-analysis-api.js";
export {
  QualityFilterAmazonRekognitionUserApi,
  qualityFilterAmazonRekognitionUserApiSchema,
} from "./models/quality-filter-amazon-rekognition-user-api.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { Reason1, reason1Schema } from "./models/reason1.js";
export { Reason2, reason2Schema } from "./models/reason2.js";
export {
  ReasonAmazonRekognitionFaceCollectionsApi,
  reasonAmazonRekognitionFaceCollectionsApiSchema,
} from "./models/reason-amazon-rekognition-face-collections-api.js";
export {
  ReasonAmazonRekognitionUserApi,
  reasonAmazonRekognitionUserApiSchema,
} from "./models/reason-amazon-rekognition-user-api.js";
export {
  recognizeCelebritiesRequestSchema,
  type RecognizeCelebritiesRequest,
} from "./models/recognize-celebrities-request.js";
export {
  recognizeCelebritiesResponseSchema,
  type RecognizeCelebritiesResponse,
} from "./models/recognize-celebrities-response.js";
export { regionOfInterestSchema, type RegionOfInterest } from "./models/region-of-interest.js";
export { RequiredEquipmentType, requiredEquipmentTypeSchema } from "./models/required-equipment-type.js";
export { s3DestinationSchema, type S3Destination } from "./models/s3-destination.js";
export { s3ObjectSchema, type S3Object } from "./models/s3-object.js";
export {
  searchFacesByImageRequestSchema,
  type SearchFacesByImageRequest,
} from "./models/search-faces-by-image-request.js";
export {
  searchFacesByImageResponseSchema,
  type SearchFacesByImageResponse,
} from "./models/search-faces-by-image-response.js";
export { searchFacesRequestSchema, type SearchFacesRequest } from "./models/search-faces-request.js";
export { searchFacesResponseSchema, type SearchFacesResponse } from "./models/search-faces-response.js";
export {
  searchUsersByImageRequestSchema,
  type SearchUsersByImageRequest,
} from "./models/search-users-by-image-request.js";
export {
  searchUsersByImageResponseSchema,
  type SearchUsersByImageResponse,
} from "./models/search-users-by-image-response.js";
export { searchUsersRequestSchema, type SearchUsersRequest } from "./models/search-users-request.js";
export { searchUsersResponseSchema, type SearchUsersResponse } from "./models/search-users-response.js";
export { searchedFaceSchema, type SearchedFace } from "./models/searched-face.js";
export { searchedFaceDetailsSchema, type SearchedFaceDetails } from "./models/searched-face-details.js";
export { searchedUserSchema, type SearchedUser } from "./models/searched-user.js";
export { segmentDetectionSchema, type SegmentDetection } from "./models/segment-detection.js";
export { SegmentType, segmentTypeSchema } from "./models/segment-type.js";
export { segmentTypeInfoSchema, type SegmentTypeInfo } from "./models/segment-type-info.js";
export { sessionMetadataSchema, type SessionMetadata } from "./models/session-metadata.js";
export { shotSegmentSchema, type ShotSegment } from "./models/shot-segment.js";
export { smileSchema, type Smile } from "./models/smile.js";
export { SortBy, sortBySchema } from "./models/sort-by.js";
export { SortBy1, sortBy1Schema } from "./models/sort-by1.js";
export {
  SortBy1AmazonRekognitionStoredVideoAnalysisApi,
  sortBy1AmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/sort-by1-amazon-rekognition-stored-video-analysis-api.js";
export {
  SortByAmazonRekognitionContentModerationApi,
  sortByAmazonRekognitionContentModerationApiSchema,
} from "./models/sort-by-amazon-rekognition-content-moderation-api.js";
export {
  SortByAmazonRekognitionFaceSearchApi,
  sortByAmazonRekognitionFaceSearchApiSchema,
} from "./models/sort-by-amazon-rekognition-face-search-api.js";
export {
  SortByAmazonRekognitionOperationsApi,
  sortByAmazonRekognitionOperationsApiSchema,
} from "./models/sort-by-amazon-rekognition-operations-api.js";
export {
  SortByAmazonRekognitionStoredVideoAnalysisApi,
  sortByAmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/sort-by-amazon-rekognition-stored-video-analysis-api.js";
export {
  SourceImageOrientationCorrection,
  sourceImageOrientationCorrectionSchema,
} from "./models/source-image-orientation-correction.js";
export {
  startCelebrityRecognitionRequestSchema,
  type StartCelebrityRecognitionRequest,
} from "./models/start-celebrity-recognition-request.js";
export {
  startCelebrityRecognitionResponseSchema,
  type StartCelebrityRecognitionResponse,
} from "./models/start-celebrity-recognition-response.js";
export {
  startContentModerationRequestSchema,
  type StartContentModerationRequest,
} from "./models/start-content-moderation-request.js";
export {
  startContentModerationResponseSchema,
  type StartContentModerationResponse,
} from "./models/start-content-moderation-response.js";
export {
  startFaceDetectionRequestSchema,
  type StartFaceDetectionRequest,
} from "./models/start-face-detection-request.js";
export {
  startFaceDetectionResponseSchema,
  type StartFaceDetectionResponse,
} from "./models/start-face-detection-response.js";
export {
  startFaceSearchRequestSchema,
  type StartFaceSearchRequest,
} from "./models/start-face-search-request.js";
export {
  startFaceSearchResponseSchema,
  type StartFaceSearchResponse,
} from "./models/start-face-search-response.js";
export {
  startLabelDetectionRequestSchema,
  type StartLabelDetectionRequest,
} from "./models/start-label-detection-request.js";
export {
  startLabelDetectionResponseSchema,
  type StartLabelDetectionResponse,
} from "./models/start-label-detection-response.js";
export {
  startMediaAnalysisJobRequestSchema,
  type StartMediaAnalysisJobRequest,
} from "./models/start-media-analysis-job-request.js";
export {
  startMediaAnalysisJobResponseSchema,
  type StartMediaAnalysisJobResponse,
} from "./models/start-media-analysis-job-response.js";
export {
  startPersonTrackingRequestSchema,
  type StartPersonTrackingRequest,
} from "./models/start-person-tracking-request.js";
export {
  startPersonTrackingResponseSchema,
  type StartPersonTrackingResponse,
} from "./models/start-person-tracking-response.js";
export {
  startProjectVersionRequestSchema,
  type StartProjectVersionRequest,
} from "./models/start-project-version-request.js";
export {
  startProjectVersionResponseSchema,
  type StartProjectVersionResponse,
} from "./models/start-project-version-response.js";
export {
  startSegmentDetectionFiltersSchema,
  type StartSegmentDetectionFilters,
} from "./models/start-segment-detection-filters.js";
export {
  startSegmentDetectionRequestSchema,
  type StartSegmentDetectionRequest,
} from "./models/start-segment-detection-request.js";
export {
  startSegmentDetectionResponseSchema,
  type StartSegmentDetectionResponse,
} from "./models/start-segment-detection-response.js";
export {
  startShotDetectionFilterSchema,
  type StartShotDetectionFilter,
} from "./models/start-shot-detection-filter.js";
export {
  startStreamProcessorRequestSchema,
  type StartStreamProcessorRequest,
} from "./models/start-stream-processor-request.js";
export {
  startStreamProcessorResponseSchema,
  type StartStreamProcessorResponse,
} from "./models/start-stream-processor-response.js";
export {
  startTechnicalCueDetectionFilterSchema,
  type StartTechnicalCueDetectionFilter,
} from "./models/start-technical-cue-detection-filter.js";
export {
  startTextDetectionFiltersSchema,
  type StartTextDetectionFilters,
} from "./models/start-text-detection-filters.js";
export {
  startTextDetectionRequestSchema,
  type StartTextDetectionRequest,
} from "./models/start-text-detection-request.js";
export {
  startTextDetectionResponseSchema,
  type StartTextDetectionResponse,
} from "./models/start-text-detection-response.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  Status1AmazonRekognitionProjectApi,
  status1AmazonRekognitionProjectApiSchema,
} from "./models/status1-amazon-rekognition-project-api.js";
export {
  Status1AmazonRekognitionProjectVersionApi,
  status1AmazonRekognitionProjectVersionApiSchema,
} from "./models/status1-amazon-rekognition-project-version-api.js";
export {
  Status1AmazonRekognitionStreamProcessorApi,
  status1AmazonRekognitionStreamProcessorApiSchema,
} from "./models/status1-amazon-rekognition-stream-processor-api.js";
export { Status2, status2Schema } from "./models/status2.js";
export {
  Status2AmazonRekognitionProjectVersionApi,
  status2AmazonRekognitionProjectVersionApiSchema,
} from "./models/status2-amazon-rekognition-project-version-api.js";
export { Status3, status3Schema } from "./models/status3.js";
export { StatusMessageCode, statusMessageCodeSchema } from "./models/status-message-code.js";
export {
  StatusAmazonRekognitionFaceLivenessApi,
  statusAmazonRekognitionFaceLivenessApiSchema,
} from "./models/status-amazon-rekognition-face-liveness-api.js";
export {
  StatusAmazonRekognitionMediaAnalysisJobApi,
  statusAmazonRekognitionMediaAnalysisJobApiSchema,
} from "./models/status-amazon-rekognition-media-analysis-job-api.js";
export {
  StatusAmazonRekognitionProjectApi,
  statusAmazonRekognitionProjectApiSchema,
} from "./models/status-amazon-rekognition-project-api.js";
export {
  StatusAmazonRekognitionProjectVersionApi,
  statusAmazonRekognitionProjectVersionApiSchema,
} from "./models/status-amazon-rekognition-project-version-api.js";
export {
  StatusAmazonRekognitionStreamProcessorApi,
  statusAmazonRekognitionStreamProcessorApiSchema,
} from "./models/status-amazon-rekognition-stream-processor-api.js";
export {
  stopProjectVersionRequestSchema,
  type StopProjectVersionRequest,
} from "./models/stop-project-version-request.js";
export {
  stopProjectVersionResponseSchema,
  type StopProjectVersionResponse,
} from "./models/stop-project-version-response.js";
export {
  stopStreamProcessorRequestSchema,
  type StopStreamProcessorRequest,
} from "./models/stop-stream-processor-request.js";
export {
  streamProcessingStartSelectorSchema,
  type StreamProcessingStartSelector,
} from "./models/stream-processing-start-selector.js";
export {
  streamProcessingStopSelectorSchema,
  type StreamProcessingStopSelector,
} from "./models/stream-processing-stop-selector.js";
export { streamProcessorSchema, type StreamProcessor } from "./models/stream-processor.js";
export {
  streamProcessorDataSharingPreferenceSchema,
  type StreamProcessorDataSharingPreference,
} from "./models/stream-processor-data-sharing-preference.js";
export { streamProcessorInputSchema, type StreamProcessorInput } from "./models/stream-processor-input.js";
export {
  streamProcessorNotificationChannelSchema,
  type StreamProcessorNotificationChannel,
} from "./models/stream-processor-notification-channel.js";
export { streamProcessorOutputSchema, type StreamProcessorOutput } from "./models/stream-processor-output.js";
export {
  streamProcessorSettingsSchema,
  type StreamProcessorSettings,
} from "./models/stream-processor-settings.js";
export {
  streamProcessorSettingsForUpdateSchema,
  type StreamProcessorSettingsForUpdate,
} from "./models/stream-processor-settings-for-update.js";
export { summarySchema, type Summary } from "./models/summary.js";
export { sunglassesSchema, type Sunglasses } from "./models/sunglasses.js";
export { tagResourceRequestSchema, type TagResourceRequest } from "./models/tag-resource-request.js";
export {
  TargetImageOrientationCorrection,
  targetImageOrientationCorrectionSchema,
} from "./models/target-image-orientation-correction.js";
export { technicalCueSegmentSchema, type TechnicalCueSegment } from "./models/technical-cue-segment.js";
export { testingDataSchema, type TestingData } from "./models/testing-data.js";
export { testingDataResultSchema, type TestingDataResult } from "./models/testing-data-result.js";
export { textDetectionSchema, type TextDetection } from "./models/text-detection.js";
export { textDetectionResultSchema, type TextDetectionResult } from "./models/text-detection-result.js";
export {
  textDetectionAmazonRekognitionTextDetectionApiSchema,
  type TextDetectionAmazonRekognitionTextDetectionApi,
} from "./models/text-detection-amazon-rekognition-text-detection-api.js";
export { trainingDataSchema, type TrainingData } from "./models/training-data.js";
export { trainingDataResultSchema, type TrainingDataResult } from "./models/training-data-result.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  Type1AmazonRekognitionFaceCollectionsApi,
  type1AmazonRekognitionFaceCollectionsApiSchema,
} from "./models/type1-amazon-rekognition-face-collections-api.js";
export {
  Type1AmazonRekognitionFaceLivenessApi,
  type1AmazonRekognitionFaceLivenessApiSchema,
} from "./models/type1-amazon-rekognition-face-liveness-api.js";
export { Type2, type2Schema } from "./models/type2.js";
export { Type3, type3Schema } from "./models/type3.js";
export { Type4, type4Schema } from "./models/type4.js";
export { Type5, type5Schema } from "./models/type5.js";
export { Type6, type6Schema } from "./models/type6.js";
export { Type7, type7Schema } from "./models/type7.js";
export {
  TypeAmazonRekognitionFaceCollectionsApi,
  typeAmazonRekognitionFaceCollectionsApiSchema,
} from "./models/type-amazon-rekognition-face-collections-api.js";
export {
  TypeAmazonRekognitionFaceLivenessApi,
  typeAmazonRekognitionFaceLivenessApiSchema,
} from "./models/type-amazon-rekognition-face-liveness-api.js";
export {
  TypeAmazonRekognitionTextDetectionApi,
  typeAmazonRekognitionTextDetectionApiSchema,
} from "./models/type-amazon-rekognition-text-detection-api.js";
export { unindexedFaceSchema, type UnindexedFace } from "./models/unindexed-face.js";
export { unsearchedFaceSchema, type UnsearchedFace } from "./models/unsearched-face.js";
export {
  unsuccessfulFaceAssociationSchema,
  type UnsuccessfulFaceAssociation,
} from "./models/unsuccessful-face-association.js";
export {
  unsuccessfulFaceDeletionSchema,
  type UnsuccessfulFaceDeletion,
} from "./models/unsuccessful-face-deletion.js";
export {
  unsuccessfulFaceDisassociationSchema,
  type UnsuccessfulFaceDisassociation,
} from "./models/unsuccessful-face-disassociation.js";
export { untagResourceRequestSchema, type UntagResourceRequest } from "./models/untag-resource-request.js";
export {
  updateDatasetEntriesRequestSchema,
  type UpdateDatasetEntriesRequest,
} from "./models/update-dataset-entries-request.js";
export {
  updateStreamProcessorRequestSchema,
  type UpdateStreamProcessorRequest,
} from "./models/update-stream-processor-request.js";
export { userSchema, type User } from "./models/user.js";
export { userMatchSchema, type UserMatch } from "./models/user-match.js";
export { UserStatus, userStatusSchema } from "./models/user-status.js";
export { UserStatus1, userStatus1Schema } from "./models/user-status1.js";
export {
  UserStatus1AmazonRekognitionUserApi,
  userStatus1AmazonRekognitionUserApiSchema,
} from "./models/user-status1-amazon-rekognition-user-api.js";
export {
  UserStatusAmazonRekognitionUserApi,
  userStatusAmazonRekognitionUserApiSchema,
} from "./models/user-status-amazon-rekognition-user-api.js";
export { validationDataSchema, type ValidationData } from "./models/validation-data.js";
export { Value, valueSchema } from "./models/value.js";
export { versionsSchema, type Versions } from "./models/versions.js";
export { videoSchema, type Video } from "./models/video.js";
export { videoMetadataSchema, type VideoMetadata } from "./models/video-metadata.js";
export { XAmzTarget, xAmzTargetSchema } from "./models/xamz-target.js";
export { XAmzTarget1, xAmzTarget1Schema } from "./models/xamz-target1.js";
export { XAmzTarget11, xAmzTarget11Schema } from "./models/xamz-target11.js";
export { XAmzTarget12, xAmzTarget12Schema } from "./models/xamz-target12.js";
export { XAmzTarget13, xAmzTarget13Schema } from "./models/xamz-target13.js";
export { XAmzTarget14, xAmzTarget14Schema } from "./models/xamz-target14.js";
export { XAmzTarget15, xAmzTarget15Schema } from "./models/xamz-target15.js";
export { XAmzTarget16, xAmzTarget16Schema } from "./models/xamz-target16.js";
export { XAmzTarget17, xAmzTarget17Schema } from "./models/xamz-target17.js";
export { XAmzTarget18, xAmzTarget18Schema } from "./models/xamz-target18.js";
export { XAmzTarget19, xAmzTarget19Schema } from "./models/xamz-target19.js";
export {
  XAmzTarget1AmazonRekognitionContentModerationApi,
  xAmzTarget1AmazonRekognitionContentModerationApiSchema,
} from "./models/xamz-target1-amazon-rekognition-content-moderation-api.js";
export {
  XAmzTarget1AmazonRekognitionDatasetApi,
  xAmzTarget1AmazonRekognitionDatasetApiSchema,
} from "./models/xamz-target1-amazon-rekognition-dataset-api.js";
export {
  XAmzTarget1AmazonRekognitionFaceApi,
  xAmzTarget1AmazonRekognitionFaceApiSchema,
} from "./models/xamz-target1-amazon-rekognition-face-api.js";
export {
  XAmzTarget1AmazonRekognitionFaceCollectionsApi,
  xAmzTarget1AmazonRekognitionFaceCollectionsApiSchema,
} from "./models/xamz-target1-amazon-rekognition-face-collections-api.js";
export {
  XAmzTarget1AmazonRekognitionFaceLivenessApi,
  xAmzTarget1AmazonRekognitionFaceLivenessApiSchema,
} from "./models/xamz-target1-amazon-rekognition-face-liveness-api.js";
export {
  XAmzTarget1AmazonRekognitionFaceSearchApi,
  xAmzTarget1AmazonRekognitionFaceSearchApiSchema,
} from "./models/xamz-target1-amazon-rekognition-face-search-api.js";
export {
  XAmzTarget1AmazonRekognitionFacialAnalysisApi,
  xAmzTarget1AmazonRekognitionFacialAnalysisApiSchema,
} from "./models/xamz-target1-amazon-rekognition-facial-analysis-api.js";
export {
  XAmzTarget1AmazonRekognitionMediaAnalysisJobApi,
  xAmzTarget1AmazonRekognitionMediaAnalysisJobApiSchema,
} from "./models/xamz-target1-amazon-rekognition-media-analysis-job-api.js";
export {
  XAmzTarget1AmazonRekognitionOperationsApi,
  xAmzTarget1AmazonRekognitionOperationsApiSchema,
} from "./models/xamz-target1-amazon-rekognition-operations-api.js";
export {
  XAmzTarget1AmazonRekognitionProjectApi,
  xAmzTarget1AmazonRekognitionProjectApiSchema,
} from "./models/xamz-target1-amazon-rekognition-project-api.js";
export {
  XAmzTarget1AmazonRekognitionProjectPolicyApi,
  xAmzTarget1AmazonRekognitionProjectPolicyApiSchema,
} from "./models/xamz-target1-amazon-rekognition-project-policy-api.js";
export {
  XAmzTarget1AmazonRekognitionProjectVersionApi,
  xAmzTarget1AmazonRekognitionProjectVersionApiSchema,
} from "./models/xamz-target1-amazon-rekognition-project-version-api.js";
export {
  XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi,
  xAmzTarget1AmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/xamz-target1-amazon-rekognition-stored-video-analysis-api.js";
export {
  XAmzTarget1AmazonRekognitionStreamProcessorApi,
  xAmzTarget1AmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target1-amazon-rekognition-stream-processor-api.js";
export {
  XAmzTarget1AmazonRekognitionTextDetectionApi,
  xAmzTarget1AmazonRekognitionTextDetectionApiSchema,
} from "./models/xamz-target1-amazon-rekognition-text-detection-api.js";
export {
  XAmzTarget1AmazonRekognitionUserApi,
  xAmzTarget1AmazonRekognitionUserApiSchema,
} from "./models/xamz-target1-amazon-rekognition-user-api.js";
export { XAmzTarget2, xAmzTarget2Schema } from "./models/xamz-target2.js";
export { XAmzTarget20, xAmzTarget20Schema } from "./models/xamz-target20.js";
export { XAmzTarget21, xAmzTarget21Schema } from "./models/xamz-target21.js";
export { XAmzTarget22, xAmzTarget22Schema } from "./models/xamz-target22.js";
export { XAmzTarget23, xAmzTarget23Schema } from "./models/xamz-target23.js";
export { XAmzTarget24, xAmzTarget24Schema } from "./models/xamz-target24.js";
export { XAmzTarget25, xAmzTarget25Schema } from "./models/xamz-target25.js";
export {
  XAmzTarget2AmazonRekognitionContentModerationApi,
  xAmzTarget2AmazonRekognitionContentModerationApiSchema,
} from "./models/xamz-target2-amazon-rekognition-content-moderation-api.js";
export {
  XAmzTarget2AmazonRekognitionDatasetApi,
  xAmzTarget2AmazonRekognitionDatasetApiSchema,
} from "./models/xamz-target2-amazon-rekognition-dataset-api.js";
export {
  XAmzTarget2AmazonRekognitionFaceApi,
  xAmzTarget2AmazonRekognitionFaceApiSchema,
} from "./models/xamz-target2-amazon-rekognition-face-api.js";
export {
  XAmzTarget2AmazonRekognitionFaceCollectionsApi,
  xAmzTarget2AmazonRekognitionFaceCollectionsApiSchema,
} from "./models/xamz-target2-amazon-rekognition-face-collections-api.js";
export {
  XAmzTarget2AmazonRekognitionFaceSearchApi,
  xAmzTarget2AmazonRekognitionFaceSearchApiSchema,
} from "./models/xamz-target2-amazon-rekognition-face-search-api.js";
export {
  XAmzTarget2AmazonRekognitionMediaAnalysisJobApi,
  xAmzTarget2AmazonRekognitionMediaAnalysisJobApiSchema,
} from "./models/xamz-target2-amazon-rekognition-media-analysis-job-api.js";
export {
  XAmzTarget2AmazonRekognitionOperationsApi,
  xAmzTarget2AmazonRekognitionOperationsApiSchema,
} from "./models/xamz-target2-amazon-rekognition-operations-api.js";
export {
  XAmzTarget2AmazonRekognitionProjectApi,
  xAmzTarget2AmazonRekognitionProjectApiSchema,
} from "./models/xamz-target2-amazon-rekognition-project-api.js";
export {
  XAmzTarget2AmazonRekognitionProjectPolicyApi,
  xAmzTarget2AmazonRekognitionProjectPolicyApiSchema,
} from "./models/xamz-target2-amazon-rekognition-project-policy-api.js";
export {
  XAmzTarget2AmazonRekognitionProjectVersionApi,
  xAmzTarget2AmazonRekognitionProjectVersionApiSchema,
} from "./models/xamz-target2-amazon-rekognition-project-version-api.js";
export {
  XAmzTarget2AmazonRekognitionStreamProcessorApi,
  xAmzTarget2AmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target2-amazon-rekognition-stream-processor-api.js";
export {
  XAmzTarget2AmazonRekognitionTextDetectionApi,
  xAmzTarget2AmazonRekognitionTextDetectionApiSchema,
} from "./models/xamz-target2-amazon-rekognition-text-detection-api.js";
export {
  XAmzTarget2AmazonRekognitionUserApi,
  xAmzTarget2AmazonRekognitionUserApiSchema,
} from "./models/xamz-target2-amazon-rekognition-user-api.js";
export { XAmzTarget3, xAmzTarget3Schema } from "./models/xamz-target3.js";
export {
  XAmzTarget3AmazonRekognitionOperationsApi,
  xAmzTarget3AmazonRekognitionOperationsApiSchema,
} from "./models/xamz-target3-amazon-rekognition-operations-api.js";
export {
  XAmzTarget3AmazonRekognitionProjectVersionApi,
  xAmzTarget3AmazonRekognitionProjectVersionApiSchema,
} from "./models/xamz-target3-amazon-rekognition-project-version-api.js";
export {
  XAmzTarget3AmazonRekognitionStreamProcessorApi,
  xAmzTarget3AmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target3-amazon-rekognition-stream-processor-api.js";
export {
  XAmzTarget3AmazonRekognitionUserApi,
  xAmzTarget3AmazonRekognitionUserApiSchema,
} from "./models/xamz-target3-amazon-rekognition-user-api.js";
export { XAmzTarget4, xAmzTarget4Schema } from "./models/xamz-target4.js";
export {
  XAmzTarget4AmazonRekognitionOperationsApi,
  xAmzTarget4AmazonRekognitionOperationsApiSchema,
} from "./models/xamz-target4-amazon-rekognition-operations-api.js";
export {
  XAmzTarget4AmazonRekognitionProjectVersionApi,
  xAmzTarget4AmazonRekognitionProjectVersionApiSchema,
} from "./models/xamz-target4-amazon-rekognition-project-version-api.js";
export {
  XAmzTarget4AmazonRekognitionStreamProcessorApi,
  xAmzTarget4AmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target4-amazon-rekognition-stream-processor-api.js";
export {
  XAmzTarget4AmazonRekognitionUserApi,
  xAmzTarget4AmazonRekognitionUserApiSchema,
} from "./models/xamz-target4-amazon-rekognition-user-api.js";
export { XAmzTarget5, xAmzTarget5Schema } from "./models/xamz-target5.js";
export {
  XAmzTarget5AmazonRekognitionOperationsApi,
  xAmzTarget5AmazonRekognitionOperationsApiSchema,
} from "./models/xamz-target5-amazon-rekognition-operations-api.js";
export {
  XAmzTarget5AmazonRekognitionStreamProcessorApi,
  xAmzTarget5AmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target5-amazon-rekognition-stream-processor-api.js";
export { XAmzTarget6, xAmzTarget6Schema } from "./models/xamz-target6.js";
export {
  XAmzTarget6AmazonRekognitionStreamProcessorApi,
  xAmzTarget6AmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target6-amazon-rekognition-stream-processor-api.js";
export { XAmzTarget7, xAmzTarget7Schema } from "./models/xamz-target7.js";
export { XAmzTarget8, xAmzTarget8Schema } from "./models/xamz-target8.js";
export { XAmzTarget9, xAmzTarget9Schema } from "./models/xamz-target9.js";
export {
  XAmzTargetAmazonRekognitionContentModerationApi,
  xAmzTargetAmazonRekognitionContentModerationApiSchema,
} from "./models/xamz-target-amazon-rekognition-content-moderation-api.js";
export {
  XAmzTargetAmazonRekognitionCustomLabelsApi,
  xAmzTargetAmazonRekognitionCustomLabelsApiSchema,
} from "./models/xamz-target-amazon-rekognition-custom-labels-api.js";
export {
  XAmzTargetAmazonRekognitionDatasetApi,
  xAmzTargetAmazonRekognitionDatasetApiSchema,
} from "./models/xamz-target-amazon-rekognition-dataset-api.js";
export {
  XAmzTargetAmazonRekognitionFaceApi,
  xAmzTargetAmazonRekognitionFaceApiSchema,
} from "./models/xamz-target-amazon-rekognition-face-api.js";
export {
  XAmzTargetAmazonRekognitionFaceCollectionsApi,
  xAmzTargetAmazonRekognitionFaceCollectionsApiSchema,
} from "./models/xamz-target-amazon-rekognition-face-collections-api.js";
export {
  XAmzTargetAmazonRekognitionFaceLivenessApi,
  xAmzTargetAmazonRekognitionFaceLivenessApiSchema,
} from "./models/xamz-target-amazon-rekognition-face-liveness-api.js";
export {
  XAmzTargetAmazonRekognitionFaceSearchApi,
  xAmzTargetAmazonRekognitionFaceSearchApiSchema,
} from "./models/xamz-target-amazon-rekognition-face-search-api.js";
export {
  XAmzTargetAmazonRekognitionFacialAnalysisApi,
  xAmzTargetAmazonRekognitionFacialAnalysisApiSchema,
} from "./models/xamz-target-amazon-rekognition-facial-analysis-api.js";
export {
  XAmzTargetAmazonRekognitionImageAnalysisApi,
  xAmzTargetAmazonRekognitionImageAnalysisApiSchema,
} from "./models/xamz-target-amazon-rekognition-image-analysis-api.js";
export {
  XAmzTargetAmazonRekognitionMediaAnalysisJobApi,
  xAmzTargetAmazonRekognitionMediaAnalysisJobApiSchema,
} from "./models/xamz-target-amazon-rekognition-media-analysis-job-api.js";
export {
  XAmzTargetAmazonRekognitionProjectApi,
  xAmzTargetAmazonRekognitionProjectApiSchema,
} from "./models/xamz-target-amazon-rekognition-project-api.js";
export {
  XAmzTargetAmazonRekognitionProjectPolicyApi,
  xAmzTargetAmazonRekognitionProjectPolicyApiSchema,
} from "./models/xamz-target-amazon-rekognition-project-policy-api.js";
export {
  XAmzTargetAmazonRekognitionProjectVersionApi,
  xAmzTargetAmazonRekognitionProjectVersionApiSchema,
} from "./models/xamz-target-amazon-rekognition-project-version-api.js";
export {
  XAmzTargetAmazonRekognitionStoredVideoAnalysisApi,
  xAmzTargetAmazonRekognitionStoredVideoAnalysisApiSchema,
} from "./models/xamz-target-amazon-rekognition-stored-video-analysis-api.js";
export {
  XAmzTargetAmazonRekognitionStreamProcessorApi,
  xAmzTargetAmazonRekognitionStreamProcessorApiSchema,
} from "./models/xamz-target-amazon-rekognition-stream-processor-api.js";
export {
  XAmzTargetAmazonRekognitionTextDetectionApi,
  xAmzTargetAmazonRekognitionTextDetectionApiSchema,
} from "./models/xamz-target-amazon-rekognition-text-detection-api.js";
export {
  XAmzTargetAmazonRekognitionUserApi,
  xAmzTargetAmazonRekognitionUserApiSchema,
} from "./models/xamz-target-amazon-rekognition-user-api.js";

export {
  CoreError as AmazonRekognitionError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
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
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
