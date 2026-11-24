from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code1_amazon_transcribe_service_vocabulary_filter_api import (
    LanguageCode1AmazonTranscribeServiceVocabularyFilterApiOrStr,
)


class UpdateVocabularyFilterResponse(SdkBaseModel):
    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """The name of the updated custom vocabulary filter."""

    language_code: Optional[LanguageCode1AmazonTranscribeServiceVocabularyFilterApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code you selected for your custom vocabulary filter."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom vocabulary filter was last updated. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""


class UpdateVocabularyFilterResponseDict(TypedDict):
    vocabulary_filter_name: NotRequired[str]
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceVocabularyFilterApiOrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
