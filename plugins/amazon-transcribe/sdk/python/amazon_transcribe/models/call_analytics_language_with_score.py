from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language_code_amazon_transcribe_service_operations_api import (
    LanguageCodeAmazonTranscribeServiceOperationsApiOrStr,
)


class CallAnalyticsLanguageWithScore(SdkBaseModel):
    language_code: Optional[LanguageCodeAmazonTranscribeServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code of the identified language."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The confidence score associated with the identified language code. Confidence scores are values between zero and
    one; larger values indicate a higher confidence in the identified language."""


class CallAnalyticsLanguageWithScoreDict(TypedDict):
    language_code: NotRequired[LanguageCodeAmazonTranscribeServiceOperationsApiOrStr]
    score: NotRequired[float]
