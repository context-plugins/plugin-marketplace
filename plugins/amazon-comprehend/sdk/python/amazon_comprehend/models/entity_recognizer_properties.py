from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .entity_recognizer_input_data_config import EntityRecognizerInputDataConfig, EntityRecognizerInputDataConfigDict
from .entity_recognizer_metadata import EntityRecognizerMetadata, EntityRecognizerMetadataDict
from .entity_recognizer_output_data_config import EntityRecognizerOutputDataConfig, EntityRecognizerOutputDataConfigDict
from .enums.language_code11 import LanguageCode11OrStr
from .enums.status4 import Status4OrStr
from .vpc_config import VpcConfig, VpcConfigDict


class EntityRecognizerProperties(SdkBaseModel):
    entity_recognizer_arn: Optional[str] = Field(default=UNSET, alias="EntityRecognizerArn")
    """The Amazon Resource Name (ARN) that identifies the entity recognizer."""

    language_code: Optional[LanguageCode11OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language of the input documents. All documents must be in the same language. Only English ("en") is currently
    supported."""

    status: Optional[Status4OrStr] = Field(default=UNSET, alias="Status")
    """Provides the status of the entity recognizer."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """A description of the status of the recognizer."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the recognizer was submitted for processing."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that the recognizer creation completed."""

    training_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TrainingStartTime")
    """The time that training of the entity recognizer started."""

    training_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TrainingEndTime")
    """The time that training of the entity recognizer was completed."""

    input_data_config: Optional[EntityRecognizerInputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    recognizer_metadata: Optional[EntityRecognizerMetadata] = Field(default=UNSET, alias="RecognizerMetadata")
    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on
    the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be
    either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a
    KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")
    model_kms_key_id: Optional[str] = Field(default=UNSET, alias="ModelKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either
    of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS
    Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    version_name: Optional[str] = Field(default=UNSET, alias="VersionName")
    """The version name you assigned to the entity recognizer."""

    source_model_arn: Optional[str] = Field(default=UNSET, alias="SourceModelArn")
    """The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services
    account to create the entity recognizer model in your Amazon Web Services account."""

    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel"""

    output_data_config: Optional[EntityRecognizerOutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")


class EntityRecognizerPropertiesDict(TypedDict):
    entity_recognizer_arn: NotRequired[str]
    language_code: NotRequired[LanguageCode11OrStr]
    status: NotRequired[Status4OrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    training_start_time: NotRequired[RFC3339DateTime]
    training_end_time: NotRequired[RFC3339DateTime]
    input_data_config: NotRequired[EntityRecognizerInputDataConfigDict]
    recognizer_metadata: NotRequired[EntityRecognizerMetadataDict]
    data_access_role_arn: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    model_kms_key_id: NotRequired[str]
    version_name: NotRequired[str]
    source_model_arn: NotRequired[str]
    flywheel_arn: NotRequired[str]
    output_data_config: NotRequired[EntityRecognizerOutputDataConfigDict]
