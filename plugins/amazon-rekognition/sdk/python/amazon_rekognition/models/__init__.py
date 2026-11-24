from . import enums
from .access_denied_exception import AccessDeniedException, AccessDeniedExceptionDict
from .access_denied_exception_error import AccessDeniedExceptionError, AccessDeniedExceptionErrorDict
from .age_range import AgeRange, AgeRangeDict
from .asset import Asset, AssetDict
from .associate_faces_request import AssociateFacesRequest, AssociateFacesRequestDict
from .associate_faces_response import AssociateFacesResponse, AssociateFacesResponseDict
from .associated_face import AssociatedFace, AssociatedFaceDict
from .audio_metadata import AudioMetadata, AudioMetadataDict
from .audit_image import AuditImage, AuditImageDict
from .beard import Beard, BeardDict
from .black_frame import BlackFrame, BlackFrameDict
from .bounding_box import BoundingBox, BoundingBoxDict
from .celebrity import Celebrity, CelebrityDict
from .celebrity_detail import CelebrityDetail, CelebrityDetailDict
from .celebrity_recognition import CelebrityRecognition, CelebrityRecognitionDict
from .challenge import Challenge, ChallengeDict
from .challenge_preference import ChallengePreference, ChallengePreferenceDict
from .compare_faces_match import CompareFacesMatch, CompareFacesMatchDict
from .compare_faces_request import CompareFacesRequest, CompareFacesRequestDict
from .compare_faces_response import CompareFacesResponse, CompareFacesResponseDict
from .compared_face import ComparedFace, ComparedFaceDict
from .compared_source_image_face import ComparedSourceImageFace, ComparedSourceImageFaceDict
from .connected_home_settings import ConnectedHomeSettings, ConnectedHomeSettingsDict
from .connected_home_settings_for_update import ConnectedHomeSettingsForUpdate, ConnectedHomeSettingsForUpdateDict
from .content_moderation_detection import ContentModerationDetection, ContentModerationDetectionDict
from .content_type import ContentType, ContentTypeDict
from .copy_project_version_request import CopyProjectVersionRequest, CopyProjectVersionRequestDict
from .copy_project_version_response import CopyProjectVersionResponse, CopyProjectVersionResponseDict
from .covers_body_part import CoversBodyPart, CoversBodyPartDict
from .create_collection_request import CreateCollectionRequest, CreateCollectionRequestDict
from .create_collection_response import CreateCollectionResponse, CreateCollectionResponseDict
from .create_dataset_request import CreateDatasetRequest, CreateDatasetRequestDict
from .create_dataset_response import CreateDatasetResponse, CreateDatasetResponseDict
from .create_face_liveness_session_request import CreateFaceLivenessSessionRequest, CreateFaceLivenessSessionRequestDict
from .create_face_liveness_session_request_settings import (
    CreateFaceLivenessSessionRequestSettings,
    CreateFaceLivenessSessionRequestSettingsDict,
)
from .create_face_liveness_session_response import (
    CreateFaceLivenessSessionResponse,
    CreateFaceLivenessSessionResponseDict,
)
from .create_project_request import CreateProjectRequest, CreateProjectRequestDict
from .create_project_response import CreateProjectResponse, CreateProjectResponseDict
from .create_project_version_request import CreateProjectVersionRequest, CreateProjectVersionRequestDict
from .create_project_version_response import CreateProjectVersionResponse, CreateProjectVersionResponseDict
from .create_stream_processor_request import CreateStreamProcessorRequest, CreateStreamProcessorRequestDict
from .create_stream_processor_response import CreateStreamProcessorResponse, CreateStreamProcessorResponseDict
from .create_user_request import CreateUserRequest, CreateUserRequestDict
from .custom_label import CustomLabel, CustomLabelDict
from .customization_feature_config import CustomizationFeatureConfig, CustomizationFeatureConfigDict
from .customization_feature_content_moderation_config import (
    CustomizationFeatureContentModerationConfig,
    CustomizationFeatureContentModerationConfigDict,
)
from .dataset_changes import DatasetChanges, DatasetChangesDict
from .dataset_description import DatasetDescription, DatasetDescriptionDict
from .dataset_label_description import DatasetLabelDescription, DatasetLabelDescriptionDict
from .dataset_label_stats import DatasetLabelStats, DatasetLabelStatsDict
from .dataset_metadata import DatasetMetadata, DatasetMetadataDict
from .dataset_source import DatasetSource, DatasetSourceDict
from .dataset_stats import DatasetStats, DatasetStatsDict
from .delete_collection_request import DeleteCollectionRequest, DeleteCollectionRequestDict
from .delete_collection_response import DeleteCollectionResponse, DeleteCollectionResponseDict
from .delete_dataset_request import DeleteDatasetRequest, DeleteDatasetRequestDict
from .delete_faces_request import DeleteFacesRequest, DeleteFacesRequestDict
from .delete_faces_response import DeleteFacesResponse, DeleteFacesResponseDict
from .delete_project_policy_request import DeleteProjectPolicyRequest, DeleteProjectPolicyRequestDict
from .delete_project_request import DeleteProjectRequest, DeleteProjectRequestDict
from .delete_project_response import DeleteProjectResponse, DeleteProjectResponseDict
from .delete_project_version_request import DeleteProjectVersionRequest, DeleteProjectVersionRequestDict
from .delete_project_version_response import DeleteProjectVersionResponse, DeleteProjectVersionResponseDict
from .delete_stream_processor_request import DeleteStreamProcessorRequest, DeleteStreamProcessorRequestDict
from .delete_user_request import DeleteUserRequest, DeleteUserRequestDict
from .describe_collection_request import DescribeCollectionRequest, DescribeCollectionRequestDict
from .describe_collection_response import DescribeCollectionResponse, DescribeCollectionResponseDict
from .describe_dataset_request import DescribeDatasetRequest, DescribeDatasetRequestDict
from .describe_dataset_response import DescribeDatasetResponse, DescribeDatasetResponseDict
from .describe_project_versions_request import DescribeProjectVersionsRequest, DescribeProjectVersionsRequestDict
from .describe_project_versions_response import DescribeProjectVersionsResponse, DescribeProjectVersionsResponseDict
from .describe_projects_request import DescribeProjectsRequest, DescribeProjectsRequestDict
from .describe_projects_response import DescribeProjectsResponse, DescribeProjectsResponseDict
from .describe_stream_processor_request import DescribeStreamProcessorRequest, DescribeStreamProcessorRequestDict
from .describe_stream_processor_response import DescribeStreamProcessorResponse, DescribeStreamProcessorResponseDict
from .detect_custom_labels_request import DetectCustomLabelsRequest, DetectCustomLabelsRequestDict
from .detect_custom_labels_response import DetectCustomLabelsResponse, DetectCustomLabelsResponseDict
from .detect_faces_request import DetectFacesRequest, DetectFacesRequestDict
from .detect_faces_response import DetectFacesResponse, DetectFacesResponseDict
from .detect_labels_image_background import DetectLabelsImageBackground, DetectLabelsImageBackgroundDict
from .detect_labels_image_foreground import DetectLabelsImageForeground, DetectLabelsImageForegroundDict
from .detect_labels_image_properties import DetectLabelsImageProperties, DetectLabelsImagePropertiesDict
from .detect_labels_image_properties_settings import (
    DetectLabelsImagePropertiesSettings,
    DetectLabelsImagePropertiesSettingsDict,
)
from .detect_labels_image_quality import DetectLabelsImageQuality, DetectLabelsImageQualityDict
from .detect_labels_request import DetectLabelsRequest, DetectLabelsRequestDict
from .detect_labels_response import DetectLabelsResponse, DetectLabelsResponseDict
from .detect_labels_settings import DetectLabelsSettings, DetectLabelsSettingsDict
from .detect_moderation_labels_request import DetectModerationLabelsRequest, DetectModerationLabelsRequestDict
from .detect_moderation_labels_response import DetectModerationLabelsResponse, DetectModerationLabelsResponseDict
from .detect_protective_equipment_request import DetectProtectiveEquipmentRequest, DetectProtectiveEquipmentRequestDict
from .detect_protective_equipment_response import (
    DetectProtectiveEquipmentResponse,
    DetectProtectiveEquipmentResponseDict,
)
from .detect_text_filters import DetectTextFilters, DetectTextFiltersDict
from .detect_text_request import DetectTextRequest, DetectTextRequestDict
from .detect_text_response import DetectTextResponse, DetectTextResponseDict
from .detection_filter import DetectionFilter, DetectionFilterDict
from .disassociate_faces_request import DisassociateFacesRequest, DisassociateFacesRequestDict
from .disassociate_faces_response import DisassociateFacesResponse, DisassociateFacesResponseDict
from .disassociated_face import DisassociatedFace, DisassociatedFaceDict
from .distribute_dataset import DistributeDataset, DistributeDatasetDict
from .distribute_dataset_entries_request import DistributeDatasetEntriesRequest, DistributeDatasetEntriesRequestDict
from .dominant_color import DominantColor, DominantColorDict
from .emotion import Emotion, EmotionDict
from .emotion_amazon_rekognition_face_collections_api import (
    EmotionAmazonRekognitionFaceCollectionsApi,
    EmotionAmazonRekognitionFaceCollectionsApiDict,
)
from .equipment_detection import EquipmentDetection, EquipmentDetectionDict
from .evaluation_result import EvaluationResult, EvaluationResultDict
from .eye_direction import EyeDirection, EyeDirectionDict
from .eye_open import EyeOpen, EyeOpenDict
from .eyeglasses import Eyeglasses, EyeglassesDict
from .face import Face, FaceDict
from .face_detail import FaceDetail, FaceDetailDict
from .face_detection import FaceDetection, FaceDetectionDict
from .face_match import FaceMatch, FaceMatchDict
from .face_occluded import FaceOccluded, FaceOccludedDict
from .face_record import FaceRecord, FaceRecordDict
from .face_search_settings import FaceSearchSettings, FaceSearchSettingsDict
from .feedback_item import FeedbackItem, FeedbackItemDict
from .gender import Gender, GenderDict
from .general_labels_settings import GeneralLabelsSettings, GeneralLabelsSettingsDict
from .geometry import Geometry, GeometryDict
from .get_celebrity_info_request import GetCelebrityInfoRequest, GetCelebrityInfoRequestDict
from .get_celebrity_info_response import GetCelebrityInfoResponse, GetCelebrityInfoResponseDict
from .get_celebrity_recognition_request import GetCelebrityRecognitionRequest, GetCelebrityRecognitionRequestDict
from .get_celebrity_recognition_response import GetCelebrityRecognitionResponse, GetCelebrityRecognitionResponseDict
from .get_content_moderation_request import GetContentModerationRequest, GetContentModerationRequestDict
from .get_content_moderation_request_metadata import (
    GetContentModerationRequestMetadata,
    GetContentModerationRequestMetadataDict,
)
from .get_content_moderation_response import GetContentModerationResponse, GetContentModerationResponseDict
from .get_face_detection_request import GetFaceDetectionRequest, GetFaceDetectionRequestDict
from .get_face_detection_response import GetFaceDetectionResponse, GetFaceDetectionResponseDict
from .get_face_liveness_session_results_request import (
    GetFaceLivenessSessionResultsRequest,
    GetFaceLivenessSessionResultsRequestDict,
)
from .get_face_liveness_session_results_response import (
    GetFaceLivenessSessionResultsResponse,
    GetFaceLivenessSessionResultsResponseDict,
)
from .get_face_search_request import GetFaceSearchRequest, GetFaceSearchRequestDict
from .get_face_search_response import GetFaceSearchResponse, GetFaceSearchResponseDict
from .get_label_detection_request import GetLabelDetectionRequest, GetLabelDetectionRequestDict
from .get_label_detection_request_metadata import GetLabelDetectionRequestMetadata, GetLabelDetectionRequestMetadataDict
from .get_label_detection_response import GetLabelDetectionResponse, GetLabelDetectionResponseDict
from .get_media_analysis_job_request import GetMediaAnalysisJobRequest, GetMediaAnalysisJobRequestDict
from .get_media_analysis_job_response import GetMediaAnalysisJobResponse, GetMediaAnalysisJobResponseDict
from .get_person_tracking_request import GetPersonTrackingRequest, GetPersonTrackingRequestDict
from .get_person_tracking_response import GetPersonTrackingResponse, GetPersonTrackingResponseDict
from .get_segment_detection_request import GetSegmentDetectionRequest, GetSegmentDetectionRequestDict
from .get_segment_detection_response import GetSegmentDetectionResponse, GetSegmentDetectionResponseDict
from .get_text_detection_request import GetTextDetectionRequest, GetTextDetectionRequestDict
from .get_text_detection_response import GetTextDetectionResponse, GetTextDetectionResponseDict
from .ground_truth_manifest import GroundTruthManifest, GroundTruthManifestDict
from .human_loop_activation_output import HumanLoopActivationOutput, HumanLoopActivationOutputDict
from .human_loop_config import HumanLoopConfig, HumanLoopConfigDict
from .human_loop_data_attributes import HumanLoopDataAttributes, HumanLoopDataAttributesDict
from .human_loop_quota_exceeded_exception import HumanLoopQuotaExceededException, HumanLoopQuotaExceededExceptionDict
from .human_loop_quota_exceeded_exception_error import (
    HumanLoopQuotaExceededExceptionError,
    HumanLoopQuotaExceededExceptionErrorDict,
)
from .image import Image, ImageDict
from .image_quality import ImageQuality, ImageQualityDict
from .index_faces_request import IndexFacesRequest, IndexFacesRequestDict
from .index_faces_request_amazon_rekognition_operations_api import (
    IndexFacesRequestAmazonRekognitionOperationsApi,
    IndexFacesRequestAmazonRekognitionOperationsApiDict,
)
from .index_faces_response import IndexFacesResponse, IndexFacesResponseDict
from .index_faces_response_amazon_rekognition_operations_api import (
    IndexFacesResponseAmazonRekognitionOperationsApi,
    IndexFacesResponseAmazonRekognitionOperationsApiDict,
)
from .instance import Instance, InstanceDict
from .internal_server_error import InternalServerError, InternalServerErrorDict
from .internal_server_error_error import InternalServerErrorError, InternalServerErrorErrorDict
from .kinesis_data_stream import KinesisDataStream, KinesisDataStreamDict
from .kinesis_video_stream import KinesisVideoStream, KinesisVideoStreamDict
from .kinesis_video_stream_start_selector import KinesisVideoStreamStartSelector, KinesisVideoStreamStartSelectorDict
from .known_gender import KnownGender, KnownGenderDict
from .label import Label, LabelDict
from .label_alias import LabelAlias, LabelAliasDict
from .label_category import LabelCategory, LabelCategoryDict
from .label_detection import LabelDetection, LabelDetectionDict
from .label_detection_settings import LabelDetectionSettings, LabelDetectionSettingsDict
from .landmark import Landmark, LandmarkDict
from .landmark_amazon_rekognition_face_collections_api import (
    LandmarkAmazonRekognitionFaceCollectionsApi,
    LandmarkAmazonRekognitionFaceCollectionsApiDict,
)
from .list_collections_request import ListCollectionsRequest, ListCollectionsRequestDict
from .list_collections_response import ListCollectionsResponse, ListCollectionsResponseDict
from .list_dataset_entries_request import ListDatasetEntriesRequest, ListDatasetEntriesRequestDict
from .list_dataset_entries_response import ListDatasetEntriesResponse, ListDatasetEntriesResponseDict
from .list_dataset_labels_request import ListDatasetLabelsRequest, ListDatasetLabelsRequestDict
from .list_dataset_labels_response import ListDatasetLabelsResponse, ListDatasetLabelsResponseDict
from .list_faces_request import ListFacesRequest, ListFacesRequestDict
from .list_faces_response import ListFacesResponse, ListFacesResponseDict
from .list_media_analysis_jobs_request import ListMediaAnalysisJobsRequest, ListMediaAnalysisJobsRequestDict
from .list_media_analysis_jobs_response import ListMediaAnalysisJobsResponse, ListMediaAnalysisJobsResponseDict
from .list_project_policies_request import ListProjectPoliciesRequest, ListProjectPoliciesRequestDict
from .list_project_policies_response import ListProjectPoliciesResponse, ListProjectPoliciesResponseDict
from .list_stream_processors_request import ListStreamProcessorsRequest, ListStreamProcessorsRequestDict
from .list_stream_processors_response import ListStreamProcessorsResponse, ListStreamProcessorsResponseDict
from .list_tags_for_resource_request import ListTagsForResourceRequest, ListTagsForResourceRequestDict
from .list_tags_for_resource_response import ListTagsForResourceResponse, ListTagsForResourceResponseDict
from .list_users_request import ListUsersRequest, ListUsersRequestDict
from .list_users_response import ListUsersResponse, ListUsersResponseDict
from .liveness_output_config import LivenessOutputConfig, LivenessOutputConfigDict
from .matched_user import MatchedUser, MatchedUserDict
from .media_analysis_detect_moderation_labels_config import (
    MediaAnalysisDetectModerationLabelsConfig,
    MediaAnalysisDetectModerationLabelsConfigDict,
)
from .media_analysis_input import MediaAnalysisInput, MediaAnalysisInputDict
from .media_analysis_job_description import MediaAnalysisJobDescription, MediaAnalysisJobDescriptionDict
from .media_analysis_job_failure_details import MediaAnalysisJobFailureDetails, MediaAnalysisJobFailureDetailsDict
from .media_analysis_manifest_summary import MediaAnalysisManifestSummary, MediaAnalysisManifestSummaryDict
from .media_analysis_model_versions import MediaAnalysisModelVersions, MediaAnalysisModelVersionsDict
from .media_analysis_operations_config import MediaAnalysisOperationsConfig, MediaAnalysisOperationsConfigDict
from .media_analysis_output_config import MediaAnalysisOutputConfig, MediaAnalysisOutputConfigDict
from .media_analysis_results import MediaAnalysisResults, MediaAnalysisResultsDict
from .moderation_label import ModerationLabel, ModerationLabelDict
from .mouth_open import MouthOpen, MouthOpenDict
from .mustache import Mustache, MustacheDict
from .notification_channel import NotificationChannel, NotificationChannelDict
from .output_config import OutputConfig, OutputConfigDict
from .parent import Parent, ParentDict
from .person_detail import PersonDetail, PersonDetailDict
from .person_detection import PersonDetection, PersonDetectionDict
from .person_match import PersonMatch, PersonMatchDict
from .point import Point, PointDict
from .pose import Pose, PoseDict
from .project_description import ProjectDescription, ProjectDescriptionDict
from .project_policy import ProjectPolicy, ProjectPolicyDict
from .project_version_description import ProjectVersionDescription, ProjectVersionDescriptionDict
from .protective_equipment_body_part import ProtectiveEquipmentBodyPart, ProtectiveEquipmentBodyPartDict
from .protective_equipment_person import ProtectiveEquipmentPerson, ProtectiveEquipmentPersonDict
from .protective_equipment_summarization_attributes import (
    ProtectiveEquipmentSummarizationAttributes,
    ProtectiveEquipmentSummarizationAttributesDict,
)
from .protective_equipment_summary import ProtectiveEquipmentSummary, ProtectiveEquipmentSummaryDict
from .put_project_policy_request import PutProjectPolicyRequest, PutProjectPolicyRequestDict
from .put_project_policy_response import PutProjectPolicyResponse, PutProjectPolicyResponseDict
from .recognize_celebrities_request import RecognizeCelebritiesRequest, RecognizeCelebritiesRequestDict
from .recognize_celebrities_response import RecognizeCelebritiesResponse, RecognizeCelebritiesResponseDict
from .region_of_interest import RegionOfInterest, RegionOfInterestDict
from .s3_destination import S3Destination, S3DestinationDict
from .s3_object import S3Object, S3ObjectDict
from .search_faces_by_image_request import SearchFacesByImageRequest, SearchFacesByImageRequestDict
from .search_faces_by_image_response import SearchFacesByImageResponse, SearchFacesByImageResponseDict
from .search_faces_request import SearchFacesRequest, SearchFacesRequestDict
from .search_faces_response import SearchFacesResponse, SearchFacesResponseDict
from .search_users_by_image_request import SearchUsersByImageRequest, SearchUsersByImageRequestDict
from .search_users_by_image_response import SearchUsersByImageResponse, SearchUsersByImageResponseDict
from .search_users_request import SearchUsersRequest, SearchUsersRequestDict
from .search_users_response import SearchUsersResponse, SearchUsersResponseDict
from .searched_face import SearchedFace, SearchedFaceDict
from .searched_face_details import SearchedFaceDetails, SearchedFaceDetailsDict
from .searched_user import SearchedUser, SearchedUserDict
from .segment_detection import SegmentDetection, SegmentDetectionDict
from .segment_type_info import SegmentTypeInfo, SegmentTypeInfoDict
from .session_metadata import SessionMetadata, SessionMetadataDict
from .shot_segment import ShotSegment, ShotSegmentDict
from .smile import Smile, SmileDict
from .start_celebrity_recognition_request import StartCelebrityRecognitionRequest, StartCelebrityRecognitionRequestDict
from .start_celebrity_recognition_response import (
    StartCelebrityRecognitionResponse,
    StartCelebrityRecognitionResponseDict,
)
from .start_content_moderation_request import StartContentModerationRequest, StartContentModerationRequestDict
from .start_content_moderation_response import StartContentModerationResponse, StartContentModerationResponseDict
from .start_face_detection_request import StartFaceDetectionRequest, StartFaceDetectionRequestDict
from .start_face_detection_response import StartFaceDetectionResponse, StartFaceDetectionResponseDict
from .start_face_search_request import StartFaceSearchRequest, StartFaceSearchRequestDict
from .start_face_search_response import StartFaceSearchResponse, StartFaceSearchResponseDict
from .start_label_detection_request import StartLabelDetectionRequest, StartLabelDetectionRequestDict
from .start_label_detection_response import StartLabelDetectionResponse, StartLabelDetectionResponseDict
from .start_media_analysis_job_request import StartMediaAnalysisJobRequest, StartMediaAnalysisJobRequestDict
from .start_media_analysis_job_response import StartMediaAnalysisJobResponse, StartMediaAnalysisJobResponseDict
from .start_person_tracking_request import StartPersonTrackingRequest, StartPersonTrackingRequestDict
from .start_person_tracking_response import StartPersonTrackingResponse, StartPersonTrackingResponseDict
from .start_project_version_request import StartProjectVersionRequest, StartProjectVersionRequestDict
from .start_project_version_response import StartProjectVersionResponse, StartProjectVersionResponseDict
from .start_segment_detection_filters import StartSegmentDetectionFilters, StartSegmentDetectionFiltersDict
from .start_segment_detection_request import StartSegmentDetectionRequest, StartSegmentDetectionRequestDict
from .start_segment_detection_response import StartSegmentDetectionResponse, StartSegmentDetectionResponseDict
from .start_shot_detection_filter import StartShotDetectionFilter, StartShotDetectionFilterDict
from .start_stream_processor_request import StartStreamProcessorRequest, StartStreamProcessorRequestDict
from .start_stream_processor_response import StartStreamProcessorResponse, StartStreamProcessorResponseDict
from .start_technical_cue_detection_filter import StartTechnicalCueDetectionFilter, StartTechnicalCueDetectionFilterDict
from .start_text_detection_filters import StartTextDetectionFilters, StartTextDetectionFiltersDict
from .start_text_detection_request import StartTextDetectionRequest, StartTextDetectionRequestDict
from .start_text_detection_response import StartTextDetectionResponse, StartTextDetectionResponseDict
from .stop_project_version_request import StopProjectVersionRequest, StopProjectVersionRequestDict
from .stop_project_version_response import StopProjectVersionResponse, StopProjectVersionResponseDict
from .stop_stream_processor_request import StopStreamProcessorRequest, StopStreamProcessorRequestDict
from .stream_processing_start_selector import StreamProcessingStartSelector, StreamProcessingStartSelectorDict
from .stream_processing_stop_selector import StreamProcessingStopSelector, StreamProcessingStopSelectorDict
from .stream_processor import StreamProcessor, StreamProcessorDict
from .stream_processor_data_sharing_preference import (
    StreamProcessorDataSharingPreference,
    StreamProcessorDataSharingPreferenceDict,
)
from .stream_processor_input import StreamProcessorInput, StreamProcessorInputDict
from .stream_processor_notification_channel import (
    StreamProcessorNotificationChannel,
    StreamProcessorNotificationChannelDict,
)
from .stream_processor_output import StreamProcessorOutput, StreamProcessorOutputDict
from .stream_processor_settings import StreamProcessorSettings, StreamProcessorSettingsDict
from .stream_processor_settings_for_update import StreamProcessorSettingsForUpdate, StreamProcessorSettingsForUpdateDict
from .summary import Summary, SummaryDict
from .sunglasses import Sunglasses, SunglassesDict
from .tag_resource_request import TagResourceRequest, TagResourceRequestDict
from .technical_cue_segment import TechnicalCueSegment, TechnicalCueSegmentDict
from .testing_data import TestingData, TestingDataDict
from .testing_data_result import TestingDataResult, TestingDataResultDict
from .text_detection import TextDetection, TextDetectionDict
from .text_detection_amazon_rekognition_text_detection_api import (
    TextDetectionAmazonRekognitionTextDetectionApi,
    TextDetectionAmazonRekognitionTextDetectionApiDict,
)
from .text_detection_result import TextDetectionResult, TextDetectionResultDict
from .training_data import TrainingData, TrainingDataDict
from .training_data_result import TrainingDataResult, TrainingDataResultDict
from .unindexed_face import UnindexedFace, UnindexedFaceDict
from .unsearched_face import UnsearchedFace, UnsearchedFaceDict
from .unsuccessful_face_association import UnsuccessfulFaceAssociation, UnsuccessfulFaceAssociationDict
from .unsuccessful_face_deletion import UnsuccessfulFaceDeletion, UnsuccessfulFaceDeletionDict
from .unsuccessful_face_disassociation import UnsuccessfulFaceDisassociation, UnsuccessfulFaceDisassociationDict
from .untag_resource_request import UntagResourceRequest, UntagResourceRequestDict
from .update_dataset_entries_request import UpdateDatasetEntriesRequest, UpdateDatasetEntriesRequestDict
from .update_stream_processor_request import UpdateStreamProcessorRequest, UpdateStreamProcessorRequestDict
from .user import User, UserDict
from .user_match import UserMatch, UserMatchDict
from .validation_data import ValidationData, ValidationDataDict
from .versions import Versions, VersionsDict
from .video import Video, VideoDict
from .video_metadata import VideoMetadata, VideoMetadataDict

__all__ = [
    "enums",
    "AccessDeniedException",
    "AccessDeniedExceptionDict",
    "AccessDeniedExceptionError",
    "AccessDeniedExceptionErrorDict",
    "AgeRange",
    "AgeRangeDict",
    "Asset",
    "AssetDict",
    "AssociateFacesRequest",
    "AssociateFacesRequestDict",
    "AssociateFacesResponse",
    "AssociateFacesResponseDict",
    "AssociatedFace",
    "AssociatedFaceDict",
    "AudioMetadata",
    "AudioMetadataDict",
    "AuditImage",
    "AuditImageDict",
    "Beard",
    "BeardDict",
    "BlackFrame",
    "BlackFrameDict",
    "BoundingBox",
    "BoundingBoxDict",
    "Celebrity",
    "CelebrityDetail",
    "CelebrityDetailDict",
    "CelebrityDict",
    "CelebrityRecognition",
    "CelebrityRecognitionDict",
    "Challenge",
    "ChallengeDict",
    "ChallengePreference",
    "ChallengePreferenceDict",
    "CompareFacesMatch",
    "CompareFacesMatchDict",
    "CompareFacesRequest",
    "CompareFacesRequestDict",
    "CompareFacesResponse",
    "CompareFacesResponseDict",
    "ComparedFace",
    "ComparedFaceDict",
    "ComparedSourceImageFace",
    "ComparedSourceImageFaceDict",
    "ConnectedHomeSettings",
    "ConnectedHomeSettingsDict",
    "ConnectedHomeSettingsForUpdate",
    "ConnectedHomeSettingsForUpdateDict",
    "ContentModerationDetection",
    "ContentModerationDetectionDict",
    "ContentType",
    "ContentTypeDict",
    "CopyProjectVersionRequest",
    "CopyProjectVersionRequestDict",
    "CopyProjectVersionResponse",
    "CopyProjectVersionResponseDict",
    "CoversBodyPart",
    "CoversBodyPartDict",
    "CreateCollectionRequest",
    "CreateCollectionRequestDict",
    "CreateCollectionResponse",
    "CreateCollectionResponseDict",
    "CreateDatasetRequest",
    "CreateDatasetRequestDict",
    "CreateDatasetResponse",
    "CreateDatasetResponseDict",
    "CreateFaceLivenessSessionRequest",
    "CreateFaceLivenessSessionRequestDict",
    "CreateFaceLivenessSessionRequestSettings",
    "CreateFaceLivenessSessionRequestSettingsDict",
    "CreateFaceLivenessSessionResponse",
    "CreateFaceLivenessSessionResponseDict",
    "CreateProjectRequest",
    "CreateProjectRequestDict",
    "CreateProjectResponse",
    "CreateProjectResponseDict",
    "CreateProjectVersionRequest",
    "CreateProjectVersionRequestDict",
    "CreateProjectVersionResponse",
    "CreateProjectVersionResponseDict",
    "CreateStreamProcessorRequest",
    "CreateStreamProcessorRequestDict",
    "CreateStreamProcessorResponse",
    "CreateStreamProcessorResponseDict",
    "CreateUserRequest",
    "CreateUserRequestDict",
    "CustomLabel",
    "CustomLabelDict",
    "CustomizationFeatureConfig",
    "CustomizationFeatureConfigDict",
    "CustomizationFeatureContentModerationConfig",
    "CustomizationFeatureContentModerationConfigDict",
    "DatasetChanges",
    "DatasetChangesDict",
    "DatasetDescription",
    "DatasetDescriptionDict",
    "DatasetLabelDescription",
    "DatasetLabelDescriptionDict",
    "DatasetLabelStats",
    "DatasetLabelStatsDict",
    "DatasetMetadata",
    "DatasetMetadataDict",
    "DatasetSource",
    "DatasetSourceDict",
    "DatasetStats",
    "DatasetStatsDict",
    "DeleteCollectionRequest",
    "DeleteCollectionRequestDict",
    "DeleteCollectionResponse",
    "DeleteCollectionResponseDict",
    "DeleteDatasetRequest",
    "DeleteDatasetRequestDict",
    "DeleteFacesRequest",
    "DeleteFacesRequestDict",
    "DeleteFacesResponse",
    "DeleteFacesResponseDict",
    "DeleteProjectPolicyRequest",
    "DeleteProjectPolicyRequestDict",
    "DeleteProjectRequest",
    "DeleteProjectRequestDict",
    "DeleteProjectResponse",
    "DeleteProjectResponseDict",
    "DeleteProjectVersionRequest",
    "DeleteProjectVersionRequestDict",
    "DeleteProjectVersionResponse",
    "DeleteProjectVersionResponseDict",
    "DeleteStreamProcessorRequest",
    "DeleteStreamProcessorRequestDict",
    "DeleteUserRequest",
    "DeleteUserRequestDict",
    "DescribeCollectionRequest",
    "DescribeCollectionRequestDict",
    "DescribeCollectionResponse",
    "DescribeCollectionResponseDict",
    "DescribeDatasetRequest",
    "DescribeDatasetRequestDict",
    "DescribeDatasetResponse",
    "DescribeDatasetResponseDict",
    "DescribeProjectVersionsRequest",
    "DescribeProjectVersionsRequestDict",
    "DescribeProjectVersionsResponse",
    "DescribeProjectVersionsResponseDict",
    "DescribeProjectsRequest",
    "DescribeProjectsRequestDict",
    "DescribeProjectsResponse",
    "DescribeProjectsResponseDict",
    "DescribeStreamProcessorRequest",
    "DescribeStreamProcessorRequestDict",
    "DescribeStreamProcessorResponse",
    "DescribeStreamProcessorResponseDict",
    "DetectCustomLabelsRequest",
    "DetectCustomLabelsRequestDict",
    "DetectCustomLabelsResponse",
    "DetectCustomLabelsResponseDict",
    "DetectFacesRequest",
    "DetectFacesRequestDict",
    "DetectFacesResponse",
    "DetectFacesResponseDict",
    "DetectLabelsImageBackground",
    "DetectLabelsImageBackgroundDict",
    "DetectLabelsImageForeground",
    "DetectLabelsImageForegroundDict",
    "DetectLabelsImageProperties",
    "DetectLabelsImagePropertiesDict",
    "DetectLabelsImagePropertiesSettings",
    "DetectLabelsImagePropertiesSettingsDict",
    "DetectLabelsImageQuality",
    "DetectLabelsImageQualityDict",
    "DetectLabelsRequest",
    "DetectLabelsRequestDict",
    "DetectLabelsResponse",
    "DetectLabelsResponseDict",
    "DetectLabelsSettings",
    "DetectLabelsSettingsDict",
    "DetectModerationLabelsRequest",
    "DetectModerationLabelsRequestDict",
    "DetectModerationLabelsResponse",
    "DetectModerationLabelsResponseDict",
    "DetectProtectiveEquipmentRequest",
    "DetectProtectiveEquipmentRequestDict",
    "DetectProtectiveEquipmentResponse",
    "DetectProtectiveEquipmentResponseDict",
    "DetectTextFilters",
    "DetectTextFiltersDict",
    "DetectTextRequest",
    "DetectTextRequestDict",
    "DetectTextResponse",
    "DetectTextResponseDict",
    "DetectionFilter",
    "DetectionFilterDict",
    "DisassociateFacesRequest",
    "DisassociateFacesRequestDict",
    "DisassociateFacesResponse",
    "DisassociateFacesResponseDict",
    "DisassociatedFace",
    "DisassociatedFaceDict",
    "DistributeDataset",
    "DistributeDatasetDict",
    "DistributeDatasetEntriesRequest",
    "DistributeDatasetEntriesRequestDict",
    "DominantColor",
    "DominantColorDict",
    "Emotion",
    "EmotionAmazonRekognitionFaceCollectionsApi",
    "EmotionAmazonRekognitionFaceCollectionsApiDict",
    "EmotionDict",
    "EquipmentDetection",
    "EquipmentDetectionDict",
    "EvaluationResult",
    "EvaluationResultDict",
    "EyeDirection",
    "EyeDirectionDict",
    "EyeOpen",
    "EyeOpenDict",
    "Eyeglasses",
    "EyeglassesDict",
    "Face",
    "FaceDetail",
    "FaceDetailDict",
    "FaceDetection",
    "FaceDetectionDict",
    "FaceDict",
    "FaceMatch",
    "FaceMatchDict",
    "FaceOccluded",
    "FaceOccludedDict",
    "FaceRecord",
    "FaceRecordDict",
    "FaceSearchSettings",
    "FaceSearchSettingsDict",
    "FeedbackItem",
    "FeedbackItemDict",
    "Gender",
    "GenderDict",
    "GeneralLabelsSettings",
    "GeneralLabelsSettingsDict",
    "Geometry",
    "GeometryDict",
    "GetCelebrityInfoRequest",
    "GetCelebrityInfoRequestDict",
    "GetCelebrityInfoResponse",
    "GetCelebrityInfoResponseDict",
    "GetCelebrityRecognitionRequest",
    "GetCelebrityRecognitionRequestDict",
    "GetCelebrityRecognitionResponse",
    "GetCelebrityRecognitionResponseDict",
    "GetContentModerationRequest",
    "GetContentModerationRequestDict",
    "GetContentModerationRequestMetadata",
    "GetContentModerationRequestMetadataDict",
    "GetContentModerationResponse",
    "GetContentModerationResponseDict",
    "GetFaceDetectionRequest",
    "GetFaceDetectionRequestDict",
    "GetFaceDetectionResponse",
    "GetFaceDetectionResponseDict",
    "GetFaceLivenessSessionResultsRequest",
    "GetFaceLivenessSessionResultsRequestDict",
    "GetFaceLivenessSessionResultsResponse",
    "GetFaceLivenessSessionResultsResponseDict",
    "GetFaceSearchRequest",
    "GetFaceSearchRequestDict",
    "GetFaceSearchResponse",
    "GetFaceSearchResponseDict",
    "GetLabelDetectionRequest",
    "GetLabelDetectionRequestDict",
    "GetLabelDetectionRequestMetadata",
    "GetLabelDetectionRequestMetadataDict",
    "GetLabelDetectionResponse",
    "GetLabelDetectionResponseDict",
    "GetMediaAnalysisJobRequest",
    "GetMediaAnalysisJobRequestDict",
    "GetMediaAnalysisJobResponse",
    "GetMediaAnalysisJobResponseDict",
    "GetPersonTrackingRequest",
    "GetPersonTrackingRequestDict",
    "GetPersonTrackingResponse",
    "GetPersonTrackingResponseDict",
    "GetSegmentDetectionRequest",
    "GetSegmentDetectionRequestDict",
    "GetSegmentDetectionResponse",
    "GetSegmentDetectionResponseDict",
    "GetTextDetectionRequest",
    "GetTextDetectionRequestDict",
    "GetTextDetectionResponse",
    "GetTextDetectionResponseDict",
    "GroundTruthManifest",
    "GroundTruthManifestDict",
    "HumanLoopActivationOutput",
    "HumanLoopActivationOutputDict",
    "HumanLoopConfig",
    "HumanLoopConfigDict",
    "HumanLoopDataAttributes",
    "HumanLoopDataAttributesDict",
    "HumanLoopQuotaExceededException",
    "HumanLoopQuotaExceededExceptionDict",
    "HumanLoopQuotaExceededExceptionError",
    "HumanLoopQuotaExceededExceptionErrorDict",
    "Image",
    "ImageDict",
    "ImageQuality",
    "ImageQualityDict",
    "IndexFacesRequest",
    "IndexFacesRequestAmazonRekognitionOperationsApi",
    "IndexFacesRequestAmazonRekognitionOperationsApiDict",
    "IndexFacesRequestDict",
    "IndexFacesResponse",
    "IndexFacesResponseAmazonRekognitionOperationsApi",
    "IndexFacesResponseAmazonRekognitionOperationsApiDict",
    "IndexFacesResponseDict",
    "Instance",
    "InstanceDict",
    "InternalServerError",
    "InternalServerErrorDict",
    "InternalServerErrorError",
    "InternalServerErrorErrorDict",
    "KinesisDataStream",
    "KinesisDataStreamDict",
    "KinesisVideoStream",
    "KinesisVideoStreamDict",
    "KinesisVideoStreamStartSelector",
    "KinesisVideoStreamStartSelectorDict",
    "KnownGender",
    "KnownGenderDict",
    "Label",
    "LabelAlias",
    "LabelAliasDict",
    "LabelCategory",
    "LabelCategoryDict",
    "LabelDetection",
    "LabelDetectionDict",
    "LabelDetectionSettings",
    "LabelDetectionSettingsDict",
    "LabelDict",
    "Landmark",
    "LandmarkAmazonRekognitionFaceCollectionsApi",
    "LandmarkAmazonRekognitionFaceCollectionsApiDict",
    "LandmarkDict",
    "ListCollectionsRequest",
    "ListCollectionsRequestDict",
    "ListCollectionsResponse",
    "ListCollectionsResponseDict",
    "ListDatasetEntriesRequest",
    "ListDatasetEntriesRequestDict",
    "ListDatasetEntriesResponse",
    "ListDatasetEntriesResponseDict",
    "ListDatasetLabelsRequest",
    "ListDatasetLabelsRequestDict",
    "ListDatasetLabelsResponse",
    "ListDatasetLabelsResponseDict",
    "ListFacesRequest",
    "ListFacesRequestDict",
    "ListFacesResponse",
    "ListFacesResponseDict",
    "ListMediaAnalysisJobsRequest",
    "ListMediaAnalysisJobsRequestDict",
    "ListMediaAnalysisJobsResponse",
    "ListMediaAnalysisJobsResponseDict",
    "ListProjectPoliciesRequest",
    "ListProjectPoliciesRequestDict",
    "ListProjectPoliciesResponse",
    "ListProjectPoliciesResponseDict",
    "ListStreamProcessorsRequest",
    "ListStreamProcessorsRequestDict",
    "ListStreamProcessorsResponse",
    "ListStreamProcessorsResponseDict",
    "ListTagsForResourceRequest",
    "ListTagsForResourceRequestDict",
    "ListTagsForResourceResponse",
    "ListTagsForResourceResponseDict",
    "ListUsersRequest",
    "ListUsersRequestDict",
    "ListUsersResponse",
    "ListUsersResponseDict",
    "LivenessOutputConfig",
    "LivenessOutputConfigDict",
    "MatchedUser",
    "MatchedUserDict",
    "MediaAnalysisDetectModerationLabelsConfig",
    "MediaAnalysisDetectModerationLabelsConfigDict",
    "MediaAnalysisInput",
    "MediaAnalysisInputDict",
    "MediaAnalysisJobDescription",
    "MediaAnalysisJobDescriptionDict",
    "MediaAnalysisJobFailureDetails",
    "MediaAnalysisJobFailureDetailsDict",
    "MediaAnalysisManifestSummary",
    "MediaAnalysisManifestSummaryDict",
    "MediaAnalysisModelVersions",
    "MediaAnalysisModelVersionsDict",
    "MediaAnalysisOperationsConfig",
    "MediaAnalysisOperationsConfigDict",
    "MediaAnalysisOutputConfig",
    "MediaAnalysisOutputConfigDict",
    "MediaAnalysisResults",
    "MediaAnalysisResultsDict",
    "ModerationLabel",
    "ModerationLabelDict",
    "MouthOpen",
    "MouthOpenDict",
    "Mustache",
    "MustacheDict",
    "NotificationChannel",
    "NotificationChannelDict",
    "OutputConfig",
    "OutputConfigDict",
    "Parent",
    "ParentDict",
    "PersonDetail",
    "PersonDetailDict",
    "PersonDetection",
    "PersonDetectionDict",
    "PersonMatch",
    "PersonMatchDict",
    "Point",
    "PointDict",
    "Pose",
    "PoseDict",
    "ProjectDescription",
    "ProjectDescriptionDict",
    "ProjectPolicy",
    "ProjectPolicyDict",
    "ProjectVersionDescription",
    "ProjectVersionDescriptionDict",
    "ProtectiveEquipmentBodyPart",
    "ProtectiveEquipmentBodyPartDict",
    "ProtectiveEquipmentPerson",
    "ProtectiveEquipmentPersonDict",
    "ProtectiveEquipmentSummarizationAttributes",
    "ProtectiveEquipmentSummarizationAttributesDict",
    "ProtectiveEquipmentSummary",
    "ProtectiveEquipmentSummaryDict",
    "PutProjectPolicyRequest",
    "PutProjectPolicyRequestDict",
    "PutProjectPolicyResponse",
    "PutProjectPolicyResponseDict",
    "RecognizeCelebritiesRequest",
    "RecognizeCelebritiesRequestDict",
    "RecognizeCelebritiesResponse",
    "RecognizeCelebritiesResponseDict",
    "RegionOfInterest",
    "RegionOfInterestDict",
    "S3Destination",
    "S3DestinationDict",
    "S3Object",
    "S3ObjectDict",
    "SearchFacesByImageRequest",
    "SearchFacesByImageRequestDict",
    "SearchFacesByImageResponse",
    "SearchFacesByImageResponseDict",
    "SearchFacesRequest",
    "SearchFacesRequestDict",
    "SearchFacesResponse",
    "SearchFacesResponseDict",
    "SearchUsersByImageRequest",
    "SearchUsersByImageRequestDict",
    "SearchUsersByImageResponse",
    "SearchUsersByImageResponseDict",
    "SearchUsersRequest",
    "SearchUsersRequestDict",
    "SearchUsersResponse",
    "SearchUsersResponseDict",
    "SearchedFace",
    "SearchedFaceDetails",
    "SearchedFaceDetailsDict",
    "SearchedFaceDict",
    "SearchedUser",
    "SearchedUserDict",
    "SegmentDetection",
    "SegmentDetectionDict",
    "SegmentTypeInfo",
    "SegmentTypeInfoDict",
    "SessionMetadata",
    "SessionMetadataDict",
    "ShotSegment",
    "ShotSegmentDict",
    "Smile",
    "SmileDict",
    "StartCelebrityRecognitionRequest",
    "StartCelebrityRecognitionRequestDict",
    "StartCelebrityRecognitionResponse",
    "StartCelebrityRecognitionResponseDict",
    "StartContentModerationRequest",
    "StartContentModerationRequestDict",
    "StartContentModerationResponse",
    "StartContentModerationResponseDict",
    "StartFaceDetectionRequest",
    "StartFaceDetectionRequestDict",
    "StartFaceDetectionResponse",
    "StartFaceDetectionResponseDict",
    "StartFaceSearchRequest",
    "StartFaceSearchRequestDict",
    "StartFaceSearchResponse",
    "StartFaceSearchResponseDict",
    "StartLabelDetectionRequest",
    "StartLabelDetectionRequestDict",
    "StartLabelDetectionResponse",
    "StartLabelDetectionResponseDict",
    "StartMediaAnalysisJobRequest",
    "StartMediaAnalysisJobRequestDict",
    "StartMediaAnalysisJobResponse",
    "StartMediaAnalysisJobResponseDict",
    "StartPersonTrackingRequest",
    "StartPersonTrackingRequestDict",
    "StartPersonTrackingResponse",
    "StartPersonTrackingResponseDict",
    "StartProjectVersionRequest",
    "StartProjectVersionRequestDict",
    "StartProjectVersionResponse",
    "StartProjectVersionResponseDict",
    "StartSegmentDetectionFilters",
    "StartSegmentDetectionFiltersDict",
    "StartSegmentDetectionRequest",
    "StartSegmentDetectionRequestDict",
    "StartSegmentDetectionResponse",
    "StartSegmentDetectionResponseDict",
    "StartShotDetectionFilter",
    "StartShotDetectionFilterDict",
    "StartStreamProcessorRequest",
    "StartStreamProcessorRequestDict",
    "StartStreamProcessorResponse",
    "StartStreamProcessorResponseDict",
    "StartTechnicalCueDetectionFilter",
    "StartTechnicalCueDetectionFilterDict",
    "StartTextDetectionFilters",
    "StartTextDetectionFiltersDict",
    "StartTextDetectionRequest",
    "StartTextDetectionRequestDict",
    "StartTextDetectionResponse",
    "StartTextDetectionResponseDict",
    "StopProjectVersionRequest",
    "StopProjectVersionRequestDict",
    "StopProjectVersionResponse",
    "StopProjectVersionResponseDict",
    "StopStreamProcessorRequest",
    "StopStreamProcessorRequestDict",
    "StreamProcessingStartSelector",
    "StreamProcessingStartSelectorDict",
    "StreamProcessingStopSelector",
    "StreamProcessingStopSelectorDict",
    "StreamProcessor",
    "StreamProcessorDataSharingPreference",
    "StreamProcessorDataSharingPreferenceDict",
    "StreamProcessorDict",
    "StreamProcessorInput",
    "StreamProcessorInputDict",
    "StreamProcessorNotificationChannel",
    "StreamProcessorNotificationChannelDict",
    "StreamProcessorOutput",
    "StreamProcessorOutputDict",
    "StreamProcessorSettings",
    "StreamProcessorSettingsDict",
    "StreamProcessorSettingsForUpdate",
    "StreamProcessorSettingsForUpdateDict",
    "Summary",
    "SummaryDict",
    "Sunglasses",
    "SunglassesDict",
    "TagResourceRequest",
    "TagResourceRequestDict",
    "TechnicalCueSegment",
    "TechnicalCueSegmentDict",
    "TestingData",
    "TestingDataDict",
    "TestingDataResult",
    "TestingDataResultDict",
    "TextDetection",
    "TextDetectionAmazonRekognitionTextDetectionApi",
    "TextDetectionAmazonRekognitionTextDetectionApiDict",
    "TextDetectionDict",
    "TextDetectionResult",
    "TextDetectionResultDict",
    "TrainingData",
    "TrainingDataDict",
    "TrainingDataResult",
    "TrainingDataResultDict",
    "UnindexedFace",
    "UnindexedFaceDict",
    "UnsearchedFace",
    "UnsearchedFaceDict",
    "UnsuccessfulFaceAssociation",
    "UnsuccessfulFaceAssociationDict",
    "UnsuccessfulFaceDeletion",
    "UnsuccessfulFaceDeletionDict",
    "UnsuccessfulFaceDisassociation",
    "UnsuccessfulFaceDisassociationDict",
    "UntagResourceRequest",
    "UntagResourceRequestDict",
    "UpdateDatasetEntriesRequest",
    "UpdateDatasetEntriesRequestDict",
    "UpdateStreamProcessorRequest",
    "UpdateStreamProcessorRequestDict",
    "User",
    "UserDict",
    "UserMatch",
    "UserMatchDict",
    "ValidationData",
    "ValidationDataDict",
    "Versions",
    "VersionsDict",
    "Video",
    "VideoDict",
    "VideoMetadata",
    "VideoMetadataDict",
]
