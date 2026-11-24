from . import enums, unions
from .all_filter import AllFilter, AllFilterDict
from .allowed_value import AllowedValue, AllowedValueDict
from .apply_feature_change_request_dto import ApplyFeatureChangeRequestDto, ApplyFeatureChangeRequestDtoDict
from .audience import Audience, AudienceDict
from .audience_feature import AudienceFeature, AudienceFeatureDict
from .audience_match_filter import AudienceMatchFilter, AudienceMatchFilterDict
from .audience_operator import AudienceOperator, AudienceOperatorDict
from .audience_operator_with_audience_match_filter import (
    AudienceOperatorWithAudienceMatchFilter,
    AudienceOperatorWithAudienceMatchFilterDict,
)
from .audience_patch_action import AudiencePatchAction, AudiencePatchActionDict
from .audience_patch_dto import AudiencePatchDto, AudiencePatchDtoDict
from .audience_patch_instructions_dto import AudiencePatchInstructionsDto, AudiencePatchInstructionsDtoDict
from .audience_usage import AudienceUsage, AudienceUsageDict
from .audit_log_entity import AuditLogEntity, AuditLogEntityDict
from .bad_request_error_response import BadRequestErrorResponse, BadRequestErrorResponseDict
from .bad_request_error_response_error import BadRequestErrorResponseError, BadRequestErrorResponseErrorDict
from .cannot_delete_last_item_error_response import (
    CannotDeleteLastItemErrorResponse,
    CannotDeleteLastItemErrorResponseDict,
)
from .cannot_delete_last_item_error_response_error import (
    CannotDeleteLastItemErrorResponseError,
    CannotDeleteLastItemErrorResponseErrorDict,
)
from .color_settings import ColorSettings, ColorSettingsDict
from .color_settings_dto import ColorSettingsDto, ColorSettingsDtoDict
from .colors import Colors, ColorsDict
from .conflict_error_response import ConflictErrorResponse, ConflictErrorResponseDict
from .conflict_error_response_error import ConflictErrorResponseError, ConflictErrorResponseErrorDict
from .create_audience_dto import CreateAudienceDto, CreateAudienceDtoDict
from .create_custom_property_dto import CreateCustomPropertyDto, CreateCustomPropertyDtoDict
from .create_dynatrace_integration_dto import CreateDynatraceIntegrationDto, CreateDynatraceIntegrationDtoDict
from .create_environment_dto import CreateEnvironmentDto, CreateEnvironmentDtoDict
from .create_feature_change_request_dto import CreateFeatureChangeRequestDto, CreateFeatureChangeRequestDtoDict
from .create_feature_dto import CreateFeatureDto, CreateFeatureDtoDict
from .create_metric_association_dto import CreateMetricAssociationDto, CreateMetricAssociationDtoDict
from .create_metric_dto import CreateMetricDto, CreateMetricDtoDict
from .create_project_dto import CreateProjectDto, CreateProjectDtoDict
from .create_variable_dto import CreateVariableDto, CreateVariableDtoDict
from .create_variable_dto_dev_cycle_management_variables_api import (
    CreateVariableDtoDevCycleManagementVariablesApi,
    CreateVariableDtoDevCycleManagementVariablesApiDict,
)
from .create_variation_dto import CreateVariationDto, CreateVariationDtoDict
from .create_webhook_dto import CreateWebhookDto, CreateWebhookDtoDict
from .custom_property import CustomProperty, CustomPropertyDict
from .data_point import DataPoint, DataPointDict
from .dynatrace_environment import DynatraceEnvironment, DynatraceEnvironmentDict
from .dynatrace_integration import DynatraceIntegration, DynatraceIntegrationDict
from .dynatrace_project_settings import DynatraceProjectSettings, DynatraceProjectSettingsDict
from .dynatrace_project_settings_dto import DynatraceProjectSettingsDto, DynatraceProjectSettingsDtoDict
from .edge_db_api_response import EdgeDbApiResponse, EdgeDbApiResponseDict
from .edge_db_settings import EdgeDbSettings, EdgeDbSettingsDict
from .edge_db_settings_dto import EdgeDbSettingsDto, EdgeDbSettingsDtoDict
from .email_settings_dto import EmailSettingsDto, EmailSettingsDtoDict
from .enum_schema import EnumSchema, EnumSchemaDict
from .environment_model import EnvironmentModel, EnvironmentModelDict
from .environment_settings import EnvironmentSettings, EnvironmentSettingsDict
from .error_response import ErrorResponse, ErrorResponseDict
from .error_response_error import ErrorResponseError, ErrorResponseErrorDict
from .eval_reason import EvalReason, EvalReasonDict
from .event import Event, EventDict
from .feature import Feature, FeatureDict
from .feature_approval_workflow_dto import FeatureApprovalWorkflowDto, FeatureApprovalWorkflowDtoDict
from .feature_approval_workflow_settings import FeatureApprovalWorkflowSettings, FeatureApprovalWorkflowSettingsDict
from .feature_change_request import FeatureChangeRequest, FeatureChangeRequestDict
from .feature_change_request_summary import FeatureChangeRequestSummary, FeatureChangeRequestSummaryDict
from .feature_config import FeatureConfig, FeatureConfigDict
from .feature_custom_status import FeatureCustomStatus, FeatureCustomStatusDict
from .feature_data_point import FeatureDataPoint, FeatureDataPointDict
from .feature_details import FeatureDetails, FeatureDetailsDict
from .feature_dev_cycle_bucketing_feature_opt_in_api import (
    FeatureDevCycleBucketingFeatureOptInApi,
    FeatureDevCycleBucketingFeatureOptInApiDict,
)
from .feature_dev_cycle_management_deprecated_features_v1_api import (
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
    FeatureDevCycleManagementDeprecatedFeaturesV1ApiDict,
)
from .feature_dev_cycle_management_metric_associations_api import (
    FeatureDevCycleManagementMetricAssociationsApi,
    FeatureDevCycleManagementMetricAssociationsApiDict,
)
from .feature_override import FeatureOverride, FeatureOverrideDict
from .feature_overrides import FeatureOverrides, FeatureOverridesDict
from .feature_sdk_visibility import FeatureSdkVisibility, FeatureSdkVisibilityDict
from .feature_sdk_visibility_dto import FeatureSdkVisibilityDto, FeatureSdkVisibilityDtoDict
from .feature_settings import FeatureSettings, FeatureSettingsDict
from .feature_settings_dto import FeatureSettingsDto, FeatureSettingsDtoDict
from .feature_staleness_entity import FeatureStalenessEntity, FeatureStalenessEntityDict
from .feature_summary import FeatureSummary, FeatureSummaryDict
from .feature_variation_dto import FeatureVariationDto, FeatureVariationDtoDict
from .generate_sdk_tokens_dto import GenerateSdkTokensDto, GenerateSdkTokensDtoDict
from .jira_issue_link import JiraIssueLink, JiraIssueLinkDict
from .life_cycle_settings import LifeCycleSettings, LifeCycleSettingsDict
from .life_cycle_settings_dto import LifeCycleSettingsDto, LifeCycleSettingsDtoDict
from .link import Link, LinkDict
from .link_jira_issue_dto import LinkJiraIssueDto, LinkJiraIssueDtoDict
from .metric import Metric, MetricDict
from .metric_association import MetricAssociation, MetricAssociationDict
from .metric_dev_cycle_management_metrics_api import (
    MetricDevCycleManagementMetricsApi,
    MetricDevCycleManagementMetricsApiDict,
)
from .metric_result import MetricResult, MetricResultDict
from .not_found_error_response import NotFoundErrorResponse, NotFoundErrorResponseDict
from .not_found_error_response_error import NotFoundErrorResponseError, NotFoundErrorResponseErrorDict
from .obfuscation_settings import ObfuscationSettings, ObfuscationSettingsDict
from .obfuscation_settings_dto import ObfuscationSettingsDto, ObfuscationSettingsDtoDict
from .ofrep_boolean_flag import OfrepBooleanFlag, OfrepBooleanFlagDict
from .ofrep_bulk_evaluation_failure import OfrepBulkEvaluationFailure, OfrepBulkEvaluationFailureDict
from .ofrep_bulk_evaluation_failure_error import OfrepBulkEvaluationFailureError, OfrepBulkEvaluationFailureErrorDict
from .ofrep_bulk_evaluation_request import OfrepBulkEvaluationRequest, OfrepBulkEvaluationRequestDict
from .ofrep_bulk_evaluation_success import OfrepBulkEvaluationSuccess, OfrepBulkEvaluationSuccessDict
from .ofrep_evaluation_failure import OfrepEvaluationFailure, OfrepEvaluationFailureDict
from .ofrep_evaluation_failure_error import OfrepEvaluationFailureError, OfrepEvaluationFailureErrorDict
from .ofrep_evaluation_request import OfrepEvaluationRequest, OfrepEvaluationRequestDict
from .ofrep_evaluation_success import OfrepEvaluationSuccess, OfrepEvaluationSuccessDict
from .ofrep_flag_not_found import OfrepFlagNotFound, OfrepFlagNotFoundDict
from .ofrep_flag_not_found_error import OfrepFlagNotFoundError, OfrepFlagNotFoundErrorDict
from .ofrep_float_flag import OfrepFloatFlag, OfrepFloatFlagDict
from .ofrep_general_error_response import OfrepGeneralErrorResponse, OfrepGeneralErrorResponseDict
from .ofrep_general_error_response_error import OfrepGeneralErrorResponseError, OfrepGeneralErrorResponseErrorDict
from .ofrep_integer_flag import OfrepIntegerFlag, OfrepIntegerFlagDict
from .ofrep_object_flag import OfrepObjectFlag, OfrepObjectFlagDict
from .ofrep_string_flag import OfrepStringFlag, OfrepStringFlagDict
from .opt_in_config_response import OptInConfigResponse, OptInConfigResponseDict
from .opt_in_settings import OptInSettings, OptInSettingsDict
from .opt_in_settings_dto import OptInSettingsDto, OptInSettingsDtoDict
from .override import Override, OverrideDict
from .override_response import OverrideResponse, OverrideResponseDict
from .precondition_failed_error_response import PreconditionFailedErrorResponse, PreconditionFailedErrorResponseDict
from .precondition_failed_error_response_error import (
    PreconditionFailedErrorResponseError,
    PreconditionFailedErrorResponseErrorDict,
)
from .project import Project, ProjectDict
from .project_data_point import ProjectDataPoint, ProjectDataPointDict
from .project_settings import ProjectSettings, ProjectSettingsDict
from .project_settings_dto import ProjectSettingsDto, ProjectSettingsDtoDict
from .project_user_profile import ProjectUserProfile, ProjectUserProfileDict
from .property_schema import PropertySchema, PropertySchemaDict
from .protected_project_settings_dto import ProtectedProjectSettingsDto, ProtectedProjectSettingsDtoDict
from .released_staleness_dto import ReleasedStalenessDto, ReleasedStalenessDtoDict
from .released_staleness_settings import ReleasedStalenessSettings, ReleasedStalenessSettingsDict
from .result import Result, ResultDict
from .result_evaluations_by_hour_dto import ResultEvaluationsByHourDto, ResultEvaluationsByHourDtoDict
from .result_project_evaluations_by_hour_dto import (
    ResultProjectEvaluationsByHourDto,
    ResultProjectEvaluationsByHourDtoDict,
)
from .result_with_feature_data import ResultWithFeatureData, ResultWithFeatureDataDict
from .results_with_project_data import ResultsWithProjectData, ResultsWithProjectDataDict
from .review_feature_change_request_dto import ReviewFeatureChangeRequestDto, ReviewFeatureChangeRequestDtoDict
from .rollout import Rollout, RolloutDict
from .rollout_stage import RolloutStage, RolloutStageDict
from .sdk_keys import SdkKeys, SdkKeysDict
from .sdk_type_visibility_settings import SdkTypeVisibilitySettings, SdkTypeVisibilitySettingsDict
from .sdk_type_visibility_settings_dto import SdkTypeVisibilitySettingsDto, SdkTypeVisibilitySettingsDtoDict
from .settings import Settings, SettingsDict
from .staleness_email_settings import StalenessEmailSettings, StalenessEmailSettingsDict
from .staleness_settings import StalenessSettings, StalenessSettingsDict
from .staleness_settings_dto import StalenessSettingsDto, StalenessSettingsDtoDict
from .static_configuration import StaticConfiguration, StaticConfigurationDict
from .submit_feature_change_request_dto import SubmitFeatureChangeRequestDto, SubmitFeatureChangeRequestDtoDict
from .target import Target, TargetDict
from .target_audience import TargetAudience, TargetAudienceDict
from .target_distribution import TargetDistribution, TargetDistributionDict
from .unions import (
    Filter,
    FilterDevCycleManagementDeprecatedFeaturesV1Api,
    FilterDevCycleManagementDeprecatedFeaturesV1ApiDict,
    FilterDict,
    Flag,
    FlagDict,
    Value,
    ValueDict,
    Variables,
    VariablesDict,
)
from .unmodified_long_staleness_dto import UnmodifiedLongStalenessDto, UnmodifiedLongStalenessDtoDict
from .unmodified_long_staleness_settings import UnmodifiedLongStalenessSettings, UnmodifiedLongStalenessSettingsDict
from .unmodified_short_staleness_dto import UnmodifiedShortStalenessDto, UnmodifiedShortStalenessDtoDict
from .unmodified_short_staleness_settings import UnmodifiedShortStalenessSettings, UnmodifiedShortStalenessSettingsDict
from .unused_staleness_dto import UnusedStalenessDto, UnusedStalenessDtoDict
from .unused_staleness_settings import UnusedStalenessSettings, UnusedStalenessSettingsDict
from .update_audience_dto import UpdateAudienceDto, UpdateAudienceDtoDict
from .update_custom_property_dto import UpdateCustomPropertyDto, UpdateCustomPropertyDtoDict
from .update_environment_dto import UpdateEnvironmentDto, UpdateEnvironmentDtoDict
from .update_feature_config_dto import UpdateFeatureConfigDto, UpdateFeatureConfigDtoDict
from .update_feature_dto import UpdateFeatureDto, UpdateFeatureDtoDict
from .update_feature_status_dto import UpdateFeatureStatusDto, UpdateFeatureStatusDtoDict
from .update_feature_summary_dto import UpdateFeatureSummaryDto, UpdateFeatureSummaryDtoDict
from .update_feature_variation_dto import UpdateFeatureVariationDto, UpdateFeatureVariationDtoDict
from .update_metric_dto import UpdateMetricDto, UpdateMetricDtoDict
from .update_override_dto import UpdateOverrideDto, UpdateOverrideDtoDict
from .update_project_dto import UpdateProjectDto, UpdateProjectDtoDict
from .update_project_settings_dto import UpdateProjectSettingsDto, UpdateProjectSettingsDtoDict
from .update_protected_project_settings_dto import (
    UpdateProtectedProjectSettingsDto,
    UpdateProtectedProjectSettingsDtoDict,
)
from .update_staleness_dto import UpdateStalenessDto, UpdateStalenessDtoDict
from .update_static_configuration_dto import UpdateStaticConfigurationDto, UpdateStaticConfigurationDtoDict
from .update_target_dto import UpdateTargetDto, UpdateTargetDtoDict
from .update_user_profile_dto import UpdateUserProfileDto, UpdateUserProfileDtoDict
from .update_variable_dto import UpdateVariableDto, UpdateVariableDtoDict
from .update_variable_status_dto import UpdateVariableStatusDto, UpdateVariableStatusDtoDict
from .update_variation_dto import UpdateVariationDto, UpdateVariationDtoDict
from .update_webhook_dto import UpdateWebhookDto, UpdateWebhookDtoDict
from .user_app_version_filter import UserAppVersionFilter, UserAppVersionFilterDict
from .user_app_version_filter_dev_cycle_management_feature_configurations_api import (
    UserAppVersionFilterDevCycleManagementFeatureConfigurationsApi,
    UserAppVersionFilterDevCycleManagementFeatureConfigurationsApiDict,
)
from .user_country_filter import UserCountryFilter, UserCountryFilterDict
from .user_custom_filter import UserCustomFilter, UserCustomFilterDict
from .user_data import UserData, UserDataDict
from .user_data_and_events_body import UserDataAndEventsBody, UserDataAndEventsBodyDict
from .user_data_edge_db import UserDataEdgeDb, UserDataEdgeDbDict
from .user_filter import UserFilter, UserFilterDict
from .user_override import UserOverride, UserOverrideDict
from .user_platform_version_filter import UserPlatformVersionFilter, UserPlatformVersionFilterDict
from .user_platform_version_filter_dev_cycle_management_feature_configurations_api import (
    UserPlatformVersionFilterDevCycleManagementFeatureConfigurationsApi,
    UserPlatformVersionFilterDevCycleManagementFeatureConfigurationsApiDict,
)
from .v1_opt_ins_response import V1OptInsResponse, V1OptInsResponseDict
from .v1_track_response import V1TrackResponse, V1TrackResponseDict
from .variable import Variable, VariableDict
from .variable_dev_cycle_management_deprecated_features_v1_api import (
    VariableDevCycleManagementDeprecatedFeaturesV1Api,
    VariableDevCycleManagementDeprecatedFeaturesV1ApiDict,
)
from .variable_dev_cycle_management_metric_associations_api import (
    VariableDevCycleManagementMetricAssociationsApi,
    VariableDevCycleManagementMetricAssociationsApiDict,
)
from .variable_dev_cycle_management_variables_api import (
    VariableDevCycleManagementVariablesApi,
    VariableDevCycleManagementVariablesApiDict,
)
from .variable_validation_entity import VariableValidationEntity, VariableValidationEntityDict
from .variation import Variation, VariationDict
from .variation_result import VariationResult, VariationResultDict
from .vercel_edge_config_connection import VercelEdgeConfigConnection, VercelEdgeConfigConnectionDict
from .webhook import Webhook, WebhookDict

__all__ = [
    "enums",
    "unions",
    "AllFilter",
    "AllFilterDict",
    "AllowedValue",
    "AllowedValueDict",
    "ApplyFeatureChangeRequestDto",
    "ApplyFeatureChangeRequestDtoDict",
    "Audience",
    "AudienceDict",
    "AudienceFeature",
    "AudienceFeatureDict",
    "AudienceMatchFilter",
    "AudienceMatchFilterDict",
    "AudienceOperator",
    "AudienceOperatorDict",
    "AudienceOperatorWithAudienceMatchFilter",
    "AudienceOperatorWithAudienceMatchFilterDict",
    "AudiencePatchAction",
    "AudiencePatchActionDict",
    "AudiencePatchDto",
    "AudiencePatchDtoDict",
    "AudiencePatchInstructionsDto",
    "AudiencePatchInstructionsDtoDict",
    "AudienceUsage",
    "AudienceUsageDict",
    "AuditLogEntity",
    "AuditLogEntityDict",
    "BadRequestErrorResponse",
    "BadRequestErrorResponseDict",
    "BadRequestErrorResponseError",
    "BadRequestErrorResponseErrorDict",
    "CannotDeleteLastItemErrorResponse",
    "CannotDeleteLastItemErrorResponseDict",
    "CannotDeleteLastItemErrorResponseError",
    "CannotDeleteLastItemErrorResponseErrorDict",
    "ColorSettings",
    "ColorSettingsDict",
    "ColorSettingsDto",
    "ColorSettingsDtoDict",
    "Colors",
    "ColorsDict",
    "ConflictErrorResponse",
    "ConflictErrorResponseDict",
    "ConflictErrorResponseError",
    "ConflictErrorResponseErrorDict",
    "CreateAudienceDto",
    "CreateAudienceDtoDict",
    "CreateCustomPropertyDto",
    "CreateCustomPropertyDtoDict",
    "CreateDynatraceIntegrationDto",
    "CreateDynatraceIntegrationDtoDict",
    "CreateEnvironmentDto",
    "CreateEnvironmentDtoDict",
    "CreateFeatureChangeRequestDto",
    "CreateFeatureChangeRequestDtoDict",
    "CreateFeatureDto",
    "CreateFeatureDtoDict",
    "CreateMetricAssociationDto",
    "CreateMetricAssociationDtoDict",
    "CreateMetricDto",
    "CreateMetricDtoDict",
    "CreateProjectDto",
    "CreateProjectDtoDict",
    "CreateVariableDto",
    "CreateVariableDtoDevCycleManagementVariablesApi",
    "CreateVariableDtoDevCycleManagementVariablesApiDict",
    "CreateVariableDtoDict",
    "CreateVariationDto",
    "CreateVariationDtoDict",
    "CreateWebhookDto",
    "CreateWebhookDtoDict",
    "CustomProperty",
    "CustomPropertyDict",
    "DataPoint",
    "DataPointDict",
    "DynatraceEnvironment",
    "DynatraceEnvironmentDict",
    "DynatraceIntegration",
    "DynatraceIntegrationDict",
    "DynatraceProjectSettings",
    "DynatraceProjectSettingsDict",
    "DynatraceProjectSettingsDto",
    "DynatraceProjectSettingsDtoDict",
    "EdgeDbApiResponse",
    "EdgeDbApiResponseDict",
    "EdgeDbSettings",
    "EdgeDbSettingsDict",
    "EdgeDbSettingsDto",
    "EdgeDbSettingsDtoDict",
    "EmailSettingsDto",
    "EmailSettingsDtoDict",
    "EnumSchema",
    "EnumSchemaDict",
    "EnvironmentModel",
    "EnvironmentModelDict",
    "EnvironmentSettings",
    "EnvironmentSettingsDict",
    "ErrorResponse",
    "ErrorResponseDict",
    "ErrorResponseError",
    "ErrorResponseErrorDict",
    "EvalReason",
    "EvalReasonDict",
    "Event",
    "EventDict",
    "Feature",
    "FeatureApprovalWorkflowDto",
    "FeatureApprovalWorkflowDtoDict",
    "FeatureApprovalWorkflowSettings",
    "FeatureApprovalWorkflowSettingsDict",
    "FeatureChangeRequest",
    "FeatureChangeRequestDict",
    "FeatureChangeRequestSummary",
    "FeatureChangeRequestSummaryDict",
    "FeatureConfig",
    "FeatureConfigDict",
    "FeatureCustomStatus",
    "FeatureCustomStatusDict",
    "FeatureDataPoint",
    "FeatureDataPointDict",
    "FeatureDetails",
    "FeatureDetailsDict",
    "FeatureDevCycleBucketingFeatureOptInApi",
    "FeatureDevCycleBucketingFeatureOptInApiDict",
    "FeatureDevCycleManagementDeprecatedFeaturesV1Api",
    "FeatureDevCycleManagementDeprecatedFeaturesV1ApiDict",
    "FeatureDevCycleManagementMetricAssociationsApi",
    "FeatureDevCycleManagementMetricAssociationsApiDict",
    "FeatureDict",
    "FeatureOverride",
    "FeatureOverrideDict",
    "FeatureOverrides",
    "FeatureOverridesDict",
    "FeatureSdkVisibility",
    "FeatureSdkVisibilityDict",
    "FeatureSdkVisibilityDto",
    "FeatureSdkVisibilityDtoDict",
    "FeatureSettings",
    "FeatureSettingsDict",
    "FeatureSettingsDto",
    "FeatureSettingsDtoDict",
    "FeatureStalenessEntity",
    "FeatureStalenessEntityDict",
    "FeatureSummary",
    "FeatureSummaryDict",
    "FeatureVariationDto",
    "FeatureVariationDtoDict",
    "Filter",
    "FilterDevCycleManagementDeprecatedFeaturesV1Api",
    "FilterDevCycleManagementDeprecatedFeaturesV1ApiDict",
    "FilterDict",
    "Flag",
    "FlagDict",
    "GenerateSdkTokensDto",
    "GenerateSdkTokensDtoDict",
    "JiraIssueLink",
    "JiraIssueLinkDict",
    "LifeCycleSettings",
    "LifeCycleSettingsDict",
    "LifeCycleSettingsDto",
    "LifeCycleSettingsDtoDict",
    "Link",
    "LinkDict",
    "LinkJiraIssueDto",
    "LinkJiraIssueDtoDict",
    "Metric",
    "MetricAssociation",
    "MetricAssociationDict",
    "MetricDevCycleManagementMetricsApi",
    "MetricDevCycleManagementMetricsApiDict",
    "MetricDict",
    "MetricResult",
    "MetricResultDict",
    "NotFoundErrorResponse",
    "NotFoundErrorResponseDict",
    "NotFoundErrorResponseError",
    "NotFoundErrorResponseErrorDict",
    "ObfuscationSettings",
    "ObfuscationSettingsDict",
    "ObfuscationSettingsDto",
    "ObfuscationSettingsDtoDict",
    "OfrepBooleanFlag",
    "OfrepBooleanFlagDict",
    "OfrepBulkEvaluationFailure",
    "OfrepBulkEvaluationFailureDict",
    "OfrepBulkEvaluationFailureError",
    "OfrepBulkEvaluationFailureErrorDict",
    "OfrepBulkEvaluationRequest",
    "OfrepBulkEvaluationRequestDict",
    "OfrepBulkEvaluationSuccess",
    "OfrepBulkEvaluationSuccessDict",
    "OfrepEvaluationFailure",
    "OfrepEvaluationFailureDict",
    "OfrepEvaluationFailureError",
    "OfrepEvaluationFailureErrorDict",
    "OfrepEvaluationRequest",
    "OfrepEvaluationRequestDict",
    "OfrepEvaluationSuccess",
    "OfrepEvaluationSuccessDict",
    "OfrepFlagNotFound",
    "OfrepFlagNotFoundDict",
    "OfrepFlagNotFoundError",
    "OfrepFlagNotFoundErrorDict",
    "OfrepFloatFlag",
    "OfrepFloatFlagDict",
    "OfrepGeneralErrorResponse",
    "OfrepGeneralErrorResponseDict",
    "OfrepGeneralErrorResponseError",
    "OfrepGeneralErrorResponseErrorDict",
    "OfrepIntegerFlag",
    "OfrepIntegerFlagDict",
    "OfrepObjectFlag",
    "OfrepObjectFlagDict",
    "OfrepStringFlag",
    "OfrepStringFlagDict",
    "OptInConfigResponse",
    "OptInConfigResponseDict",
    "OptInSettings",
    "OptInSettingsDict",
    "OptInSettingsDto",
    "OptInSettingsDtoDict",
    "Override",
    "OverrideDict",
    "OverrideResponse",
    "OverrideResponseDict",
    "PreconditionFailedErrorResponse",
    "PreconditionFailedErrorResponseDict",
    "PreconditionFailedErrorResponseError",
    "PreconditionFailedErrorResponseErrorDict",
    "Project",
    "ProjectDataPoint",
    "ProjectDataPointDict",
    "ProjectDict",
    "ProjectSettings",
    "ProjectSettingsDict",
    "ProjectSettingsDto",
    "ProjectSettingsDtoDict",
    "ProjectUserProfile",
    "ProjectUserProfileDict",
    "PropertySchema",
    "PropertySchemaDict",
    "ProtectedProjectSettingsDto",
    "ProtectedProjectSettingsDtoDict",
    "ReleasedStalenessDto",
    "ReleasedStalenessDtoDict",
    "ReleasedStalenessSettings",
    "ReleasedStalenessSettingsDict",
    "Result",
    "ResultDict",
    "ResultEvaluationsByHourDto",
    "ResultEvaluationsByHourDtoDict",
    "ResultProjectEvaluationsByHourDto",
    "ResultProjectEvaluationsByHourDtoDict",
    "ResultWithFeatureData",
    "ResultWithFeatureDataDict",
    "ResultsWithProjectData",
    "ResultsWithProjectDataDict",
    "ReviewFeatureChangeRequestDto",
    "ReviewFeatureChangeRequestDtoDict",
    "Rollout",
    "RolloutDict",
    "RolloutStage",
    "RolloutStageDict",
    "SdkKeys",
    "SdkKeysDict",
    "SdkTypeVisibilitySettings",
    "SdkTypeVisibilitySettingsDict",
    "SdkTypeVisibilitySettingsDto",
    "SdkTypeVisibilitySettingsDtoDict",
    "Settings",
    "SettingsDict",
    "StalenessEmailSettings",
    "StalenessEmailSettingsDict",
    "StalenessSettings",
    "StalenessSettingsDict",
    "StalenessSettingsDto",
    "StalenessSettingsDtoDict",
    "StaticConfiguration",
    "StaticConfigurationDict",
    "SubmitFeatureChangeRequestDto",
    "SubmitFeatureChangeRequestDtoDict",
    "Target",
    "TargetAudience",
    "TargetAudienceDict",
    "TargetDict",
    "TargetDistribution",
    "TargetDistributionDict",
    "UnmodifiedLongStalenessDto",
    "UnmodifiedLongStalenessDtoDict",
    "UnmodifiedLongStalenessSettings",
    "UnmodifiedLongStalenessSettingsDict",
    "UnmodifiedShortStalenessDto",
    "UnmodifiedShortStalenessDtoDict",
    "UnmodifiedShortStalenessSettings",
    "UnmodifiedShortStalenessSettingsDict",
    "UnusedStalenessDto",
    "UnusedStalenessDtoDict",
    "UnusedStalenessSettings",
    "UnusedStalenessSettingsDict",
    "UpdateAudienceDto",
    "UpdateAudienceDtoDict",
    "UpdateCustomPropertyDto",
    "UpdateCustomPropertyDtoDict",
    "UpdateEnvironmentDto",
    "UpdateEnvironmentDtoDict",
    "UpdateFeatureConfigDto",
    "UpdateFeatureConfigDtoDict",
    "UpdateFeatureDto",
    "UpdateFeatureDtoDict",
    "UpdateFeatureStatusDto",
    "UpdateFeatureStatusDtoDict",
    "UpdateFeatureSummaryDto",
    "UpdateFeatureSummaryDtoDict",
    "UpdateFeatureVariationDto",
    "UpdateFeatureVariationDtoDict",
    "UpdateMetricDto",
    "UpdateMetricDtoDict",
    "UpdateOverrideDto",
    "UpdateOverrideDtoDict",
    "UpdateProjectDto",
    "UpdateProjectDtoDict",
    "UpdateProjectSettingsDto",
    "UpdateProjectSettingsDtoDict",
    "UpdateProtectedProjectSettingsDto",
    "UpdateProtectedProjectSettingsDtoDict",
    "UpdateStalenessDto",
    "UpdateStalenessDtoDict",
    "UpdateStaticConfigurationDto",
    "UpdateStaticConfigurationDtoDict",
    "UpdateTargetDto",
    "UpdateTargetDtoDict",
    "UpdateUserProfileDto",
    "UpdateUserProfileDtoDict",
    "UpdateVariableDto",
    "UpdateVariableDtoDict",
    "UpdateVariableStatusDto",
    "UpdateVariableStatusDtoDict",
    "UpdateVariationDto",
    "UpdateVariationDtoDict",
    "UpdateWebhookDto",
    "UpdateWebhookDtoDict",
    "UserAppVersionFilter",
    "UserAppVersionFilterDevCycleManagementFeatureConfigurationsApi",
    "UserAppVersionFilterDevCycleManagementFeatureConfigurationsApiDict",
    "UserAppVersionFilterDict",
    "UserCountryFilter",
    "UserCountryFilterDict",
    "UserCustomFilter",
    "UserCustomFilterDict",
    "UserData",
    "UserDataAndEventsBody",
    "UserDataAndEventsBodyDict",
    "UserDataDict",
    "UserDataEdgeDb",
    "UserDataEdgeDbDict",
    "UserFilter",
    "UserFilterDict",
    "UserOverride",
    "UserOverrideDict",
    "UserPlatformVersionFilter",
    "UserPlatformVersionFilterDevCycleManagementFeatureConfigurationsApi",
    "UserPlatformVersionFilterDevCycleManagementFeatureConfigurationsApiDict",
    "UserPlatformVersionFilterDict",
    "V1OptInsResponse",
    "V1OptInsResponseDict",
    "V1TrackResponse",
    "V1TrackResponseDict",
    "Value",
    "ValueDict",
    "Variable",
    "VariableDevCycleManagementDeprecatedFeaturesV1Api",
    "VariableDevCycleManagementDeprecatedFeaturesV1ApiDict",
    "VariableDevCycleManagementMetricAssociationsApi",
    "VariableDevCycleManagementMetricAssociationsApiDict",
    "VariableDevCycleManagementVariablesApi",
    "VariableDevCycleManagementVariablesApiDict",
    "VariableDict",
    "VariableValidationEntity",
    "VariableValidationEntityDict",
    "Variables",
    "VariablesDict",
    "Variation",
    "VariationDict",
    "VariationResult",
    "VariationResultDict",
    "VercelEdgeConfigConnection",
    "VercelEdgeConfigConnectionDict",
    "Webhook",
    "WebhookDict",
]
