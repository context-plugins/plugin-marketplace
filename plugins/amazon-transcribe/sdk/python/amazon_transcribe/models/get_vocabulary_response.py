from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .enums.language_code1_amazon_transcribe_service_vocabularies_api import (
    LanguageCode1AmazonTranscribeServiceVocabulariesApiOrStr,
)
from .enums.vocabulary_state_amazon_transcribe_service_vocabularies_api import (
    VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr,
)


class GetVocabularyResponse(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The name of the custom vocabulary you requested information about."""

    language_code: Optional[LanguageCode1AmazonTranscribeServiceVocabulariesApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code you selected for your custom vocabulary."""

    vocabulary_state: Optional[VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr] = Field(
        default=UNSET, alias="VocabularyState"
    )
    """The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a
    StartTranscriptionJob request."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom vocabulary was last modified. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If VocabularyState is FAILED, FailureReason contains information about why the custom vocabulary request failed.
    See also: Common Errors."""

    download_uri: Optional[str] = Field(default=UNSET, alias="DownloadUri")
    """The Amazon S3 location where the custom vocabulary is stored; use this URI to view or download the custom
    vocabulary."""

    data_access_role_arn: Optional[str] = Field(default=UNSET, alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role used to access the Amazon S3 bucket that contains your input files
    and, if applicable, the KMS key specified in EncryptionConfiguration."""

    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="EncryptionConfiguration")


class GetVocabularyResponseDict(TypedDict):
    vocabulary_name: NotRequired[str]
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceVocabulariesApiOrStr]
    vocabulary_state: NotRequired[VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
    failure_reason: NotRequired[str]
    download_uri: NotRequired[str]
    data_access_role_arn: NotRequired[str]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
