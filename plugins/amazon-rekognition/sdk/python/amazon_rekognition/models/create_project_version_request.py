from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customization_feature_config import CustomizationFeatureConfig, CustomizationFeatureConfigDict
from .output_config import OutputConfig, OutputConfigDict
from .testing_data import TestingData, TestingDataDict
from .training_data import TrainingData, TrainingDataDict


class CreateProjectVersionRequest(SdkBaseModel):
    project_arn: str = Field(alias="ProjectArn")
    """The ARN of the Amazon Rekognition project that will manage the project version you want to train."""

    version_name: str = Field(alias="VersionName")
    """A name for the version of the project version. This value must be unique."""

    output_config: OutputConfig = Field(alias="OutputConfig")
    training_data: Optional[TrainingData] = Field(default=UNSET, alias="TrainingData")
    testing_data: Optional[TestingData] = Field(default=UNSET, alias="TestingData")
    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """A set of tags (key-value pairs) that you want to attach to the project version."""

    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name
    (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to
    encrypt training images, test images, and manifest files copied into the service for the project version. Your
    source images are unaffected. The key is also used to encrypt training results and manifest files written to the
    output Amazon S3 bucket (OutputConfig). If you choose to use your own KMS key, you need the following permissions on
    the KMS key. kms:CreateGrant kms:Descri"""

    version_description: Optional[str] = Field(default=UNSET, alias="VersionDescription")
    """A description applied to the project version being created."""

    feature_config: Optional[CustomizationFeatureConfig] = Field(default=UNSET, alias="FeatureConfig")


class CreateProjectVersionRequestDict(TypedDict):
    project_arn: str
    version_name: str
    output_config: OutputConfigDict
    training_data: NotRequired[TrainingDataDict]
    testing_data: NotRequired[TestingDataDict]
    tags: NotRequired[dict[str, str]]
    kms_key_id: NotRequired[str]
    version_description: NotRequired[str]
    feature_config: NotRequired[CustomizationFeatureConfigDict]
