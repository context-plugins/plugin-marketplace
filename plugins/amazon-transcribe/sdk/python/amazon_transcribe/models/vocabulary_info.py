from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.language_code3 import LanguageCode3OrStr
from .enums.vocabulary_state2 import VocabularyState2OrStr


class VocabularyInfo(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """A unique name, chosen by you, for your custom vocabulary. This name is case sensitive, cannot contain spaces, and
    must be unique within an Amazon Web Services account."""

    language_code: Optional[LanguageCode3OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code used to create your custom vocabulary. Each custom vocabulary must contain terms in only one
    language. A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary.
    For example, if you create a custom vocabulary using US English (en-US), you can only apply this custom vocabulary
    to files that contain English audio."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom vocabulary was last modified. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    vocabulary_state: Optional[VocabularyState2OrStr] = Field(default=UNSET, alias="VocabularyState")
    """The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a
    StartTranscriptionJob request."""


class VocabularyInfoDict(TypedDict):
    vocabulary_name: NotRequired[str]
    language_code: NotRequired[LanguageCode3OrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
    vocabulary_state: NotRequired[VocabularyState2OrStr]
