from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code1_amazon_transcribe_service_medical_vocabulary_api import (
    LanguageCode1AmazonTranscribeServiceMedicalVocabularyApiOrStr,
)
from .enums.vocabulary_state import VocabularyStateOrStr


class GetMedicalVocabularyResponse(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The name of the custom medical vocabulary you requested information about."""

    language_code: Optional[LanguageCode1AmazonTranscribeServiceMedicalVocabularyApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code you selected for your custom medical vocabulary. US English (en-US) is the only language
    supported with Amazon Transcribe Medical."""

    vocabulary_state: Optional[VocabularyStateOrStr] = Field(default=UNSET, alias="VocabularyState")
    """The processing state of your custom medical vocabulary. If the state is READY, you can use the custom vocabulary
    in a StartMedicalTranscriptionJob request."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom medical vocabulary was last modified. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If VocabularyState is FAILED, FailureReason contains information about why the custom medical vocabulary request
    failed. See also: Common Errors."""

    download_uri: Optional[str] = Field(default=UNSET, alias="DownloadUri")
    """The Amazon S3 location where the specified custom medical vocabulary is stored; use this URI to view or download
    the custom vocabulary."""


class GetMedicalVocabularyResponseDict(TypedDict):
    vocabulary_name: NotRequired[str]
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceMedicalVocabularyApiOrStr]
    vocabulary_state: NotRequired[VocabularyStateOrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
    failure_reason: NotRequired[str]
    download_uri: NotRequired[str]
