from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code_amazon_transcribe_service_vocabulary_filter_api import (
    LanguageCodeAmazonTranscribeServiceVocabularyFilterApiOrStr,
)


class VocabularyFilterInfo(SdkBaseModel):
    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """A unique name, chosen by you, for your custom vocabulary filter. This name is case sensitive, cannot contain
    spaces, and must be unique within an Amazon Web Services account."""

    language_code: Optional[LanguageCodeAmazonTranscribeServiceVocabularyFilterApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code that represents the language of the entries in your vocabulary filter. Each custom vocabulary
    filter must contain terms in only one language. A custom vocabulary filter can only be used to transcribe files in
    the same language as the filter. For example, if you create a custom vocabulary filter using US English (en-US), you
    can only apply this filter to files that contain English audio. For a list of supported languages and their
    associated language codes, refer to the Supported languages table."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom vocabulary filter was last modified. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""


class VocabularyFilterInfoDict(TypedDict):
    vocabulary_filter_name: NotRequired[str]
    language_code: NotRequired[LanguageCodeAmazonTranscribeServiceVocabularyFilterApiOrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
