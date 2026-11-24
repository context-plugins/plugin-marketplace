from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language_code1_amazon_transcribe_service_transcription_jobs_api import (
    LanguageCode1AmazonTranscribeServiceTranscriptionJobsApiOrStr,
)


class LanguageCodeItem(SdkBaseModel):
    language_code: Optional[LanguageCode1AmazonTranscribeServiceTranscriptionJobsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """Provides the language code for each language identified in your media."""

    duration_in_seconds: Optional[float] = Field(default=UNSET, alias="DurationInSeconds")
    """Provides the total time, in seconds, each identified language is spoken in your media."""


class LanguageCodeItemDict(TypedDict):
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceTranscriptionJobsApiOrStr]
    duration_in_seconds: NotRequired[float]
