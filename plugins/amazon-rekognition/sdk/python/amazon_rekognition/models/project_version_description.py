from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .customization_feature_config import CustomizationFeatureConfig, CustomizationFeatureConfigDict
from .enums.feature_amazon_rekognition_project_version_api import FeatureAmazonRekognitionProjectVersionApiOrStr
from .enums.status1_amazon_rekognition_project_version_api import Status1AmazonRekognitionProjectVersionApiOrStr
from .evaluation_result import EvaluationResult, EvaluationResultDict
from .ground_truth_manifest import GroundTruthManifest, GroundTruthManifestDict
from .output_config import OutputConfig, OutputConfigDict
from .testing_data_result import TestingDataResult, TestingDataResultDict
from .training_data_result import TrainingDataResult, TrainingDataResultDict


class ProjectVersionDescription(SdkBaseModel):
    project_version_arn: Optional[str] = Field(default=UNSET, alias="ProjectVersionArn")
    """The Amazon Resource Name (ARN) of the project version."""

    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """The Unix datetime for the date and time that training started."""

    min_inference_units: Optional[int] = Field(default=UNSET, alias="MinInferenceUnits")
    """The minimum number of inference units used by the model. Applies only to Custom Labels projects. For more
    information, see StartProjectVersion."""

    status: Optional[Status1AmazonRekognitionProjectVersionApiOrStr] = Field(default=UNSET, alias="Status")
    """The current status of the model version."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """A descriptive message for an error or warning that occurred."""

    billable_training_time_in_seconds: Optional[int] = Field(default=UNSET, alias="BillableTrainingTimeInSeconds")
    """The duration, in seconds, that you were billed for a successful training of the model version. This value is only
    returned if the model version has been successfully trained."""

    training_end_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TrainingEndTimestamp")
    """The Unix date and time that training of the model ended."""

    output_config: Optional[OutputConfig] = Field(default=UNSET, alias="OutputConfig")
    training_data_result: Optional[TrainingDataResult] = Field(default=UNSET, alias="TrainingDataResult")
    testing_data_result: Optional[TestingDataResult] = Field(default=UNSET, alias="TestingDataResult")
    evaluation_result: Optional[EvaluationResult] = Field(default=UNSET, alias="EvaluationResult")
    manifest_summary: Optional[GroundTruthManifest] = Field(default=UNSET, alias="ManifestSummary")
    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifer for the AWS Key Management Service key (AWS KMS key) that was used to encrypt the model during
    training."""

    max_inference_units: Optional[int] = Field(default=UNSET, alias="MaxInferenceUnits")
    """The maximum number of inference units Amazon Rekognition uses to auto-scale the model. Applies only to Custom
    Labels projects. For more information, see StartProjectVersion."""

    source_project_version_arn: Optional[str] = Field(default=UNSET, alias="SourceProjectVersionArn")
    """If the model version was copied from a different project, SourceProjectVersionArn contains the ARN of the source
    model version."""

    version_description: Optional[str] = Field(default=UNSET, alias="VersionDescription")
    """A user-provided description of the project version."""

    feature: Optional[FeatureAmazonRekognitionProjectVersionApiOrStr] = Field(default=UNSET, alias="Feature")
    """The feature that was customized."""

    base_model_version: Optional[str] = Field(default=UNSET, alias="BaseModelVersion")
    """The base detection model version used to create the project version."""

    feature_config: Optional[CustomizationFeatureConfig] = Field(default=UNSET, alias="FeatureConfig")


class ProjectVersionDescriptionDict(TypedDict):
    project_version_arn: NotRequired[str]
    creation_timestamp: NotRequired[RFC3339DateTime]
    min_inference_units: NotRequired[int]
    status: NotRequired[Status1AmazonRekognitionProjectVersionApiOrStr]
    status_message: NotRequired[str]
    billable_training_time_in_seconds: NotRequired[int]
    training_end_timestamp: NotRequired[RFC3339DateTime]
    output_config: NotRequired[OutputConfigDict]
    training_data_result: NotRequired[TrainingDataResultDict]
    testing_data_result: NotRequired[TestingDataResultDict]
    evaluation_result: NotRequired[EvaluationResultDict]
    manifest_summary: NotRequired[GroundTruthManifestDict]
    kms_key_id: NotRequired[str]
    max_inference_units: NotRequired[int]
    source_project_version_arn: NotRequired[str]
    version_description: NotRequired[str]
    feature: NotRequired[FeatureAmazonRekognitionProjectVersionApiOrStr]
    base_model_version: NotRequired[str]
    feature_config: NotRequired[CustomizationFeatureConfigDict]
