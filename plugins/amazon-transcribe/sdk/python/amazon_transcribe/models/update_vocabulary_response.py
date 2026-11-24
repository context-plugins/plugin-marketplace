from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code1_amazon_transcribe_service_vocabularies_api import (
    LanguageCode1AmazonTranscribeServiceVocabulariesApiOrStr,
)
from .enums.vocabulary_state_amazon_transcribe_service_vocabularies_api import (
    VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr,
)


class UpdateVocabularyResponse(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """The name of the updated custom vocabulary."""

    language_code: Optional[LanguageCode1AmazonTranscribeServiceVocabulariesApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code you selected for your custom vocabulary."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom vocabulary was last updated. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    vocabulary_state: Optional[VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr] = Field(
        default=UNSET, alias="VocabularyState"
    )
    """The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a
    StartTranscriptionJob request."""


class UpdateVocabularyResponseDict(TypedDict):
    vocabulary_name: NotRequired[str]
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceVocabulariesApiOrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
    vocabulary_state: NotRequired[VocabularyStateAmazonTranscribeServiceVocabulariesApiOrStr]
