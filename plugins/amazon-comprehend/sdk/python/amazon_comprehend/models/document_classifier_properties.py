from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .classifier_metadata import ClassifierMetadata, ClassifierMetadataDict
from .document_classifier_input_data_config import (
    DocumentClassifierInputDataConfig,
    DocumentClassifierInputDataConfigDict,
)
from .document_classifier_output_data_config import (
    DocumentClassifierOutputDataConfig,
    DocumentClassifierOutputDataConfigDict,
)
from .enums.language_code9 import LanguageCode9OrStr
from .enums.mode2 import Mode2OrStr
from .enums.status2 import Status2OrStr
from .vpc_config import VpcConfig, VpcConfigDict


class DocumentClassifierProperties(SdkBaseModel):
    document_classifier_arn: Optional[str] = Field(default=UNSET, alias="DocumentClassifierArn")
    """The Amazon Resource Name (ARN) that identifies the document classifier."""

    language_code: Optional[LanguageCode9OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code for the language of the documents that the classifier was trained on."""

    status: Optional[Status2OrStr] = Field(default=UNSET, alias="Status")
    """The status of the document classifier. If the status is TRAINED the classifier is ready to use. If the status is
    TRAINED_WITH_WARNINGS the classifier training succeeded, but you should review the warnings returned in the
    CreateDocumentClassifier response. If the status is FAILED you can see additional information about why the
    classifier wasn't trained in the Message field."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Additional information about the status of the classifier."""

    submit_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="SubmitTime")
    """The time that the document classifier was submitted for training."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time that training the document classifier completed."""

    training_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TrainingStartTime")
    """Indicates the time when the training starts on documentation classifiers. You are billed for the time interval
    between this time and the value of TrainingEndTime."""

    training_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TrainingEndTime")
    """The time that training of the document classifier was completed. Indicates the time when the training completes
    on documentation classifiers. You are billed for the time interval between this time and the value of
    TrainingStartTime."""

    input_data_config: Optional[DocumentClassifierInputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    output_data_config: Optional[DocumentClassifierOutputDataConfig] = Field(default=UNSET, alias="OutputDataConfig")
    classifier_metadata: Optional[ClassifierMetadata] = Field(default=UNSET, alias="ClassifierMetadata")
    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data."""

    volume_kms_key_id: Optional[str] = Field(default=UNSET, alias="VolumeKmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on
    the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be
    either of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a
    KMS Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    vpc_config: Optional[VpcConfig] = Field(default=UNSET, alias="VpcConfig")
    mode: Optional[Mode2OrStr] = Field(default=UNSET, alias="Mode")
    """Indicates the mode in which the specific classifier was trained. This also indicates the format of input
    documents and the format of the confusion matrix. Each classifier can only be trained in one mode and this cannot be
    changed once the classifier is trained."""

    model_kms_key_id: Optional[str] = Field(default=UNSET, alias="ModelKmsKeyId")
    """ID for the KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either
    of the following formats: KMS Key ID: "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS
    Key: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
    """

    version_name: Optional[str] = Field(default=UNSET, alias="VersionName")
    """The version name that you assigned to the document classifier."""

    source_model_arn: Optional[str] = Field(default=UNSET, alias="SourceModelArn")
    """The Amazon Resource Name (ARN) of the source model. This model was imported from a different Amazon Web Services
    account to create the document classifier model in your Amazon Web Services account."""

    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel"""


class DocumentClassifierPropertiesDict(TypedDict):
    document_classifier_arn: NotRequired[str]
    language_code: NotRequired[LanguageCode9OrStr]
    status: NotRequired[Status2OrStr]
    message: NotRequired[str]
    submit_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    training_start_time: NotRequired[RFC3339DateTime]
    training_end_time: NotRequired[RFC3339DateTime]
    input_data_config: NotRequired[DocumentClassifierInputDataConfigDict]
    output_data_config: NotRequired[DocumentClassifierOutputDataConfigDict]
    classifier_metadata: NotRequired[ClassifierMetadataDict]
    data_access_role_arn: NotRequired[str]
    volume_kms_key_id: NotRequired[str]
    vpc_config: NotRequired[VpcConfigDict]
    mode: NotRequired[Mode2OrStr]
    model_kms_key_id: NotRequired[str]
    version_name: NotRequired[str]
    source_model_arn: NotRequired[str]
    flywheel_arn: NotRequired[str]
