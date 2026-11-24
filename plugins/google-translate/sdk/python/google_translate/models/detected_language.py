from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DetectedLanguage(SdkBaseModel):
    """The response message for language detection."""

    confidence: Optional[float] = UNSET
    """The confidence of the detection result for this language."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """The ISO-639 language code of the source content in the request, detected automatically."""


class DetectedLanguageDict(TypedDict):
    confidence: NotRequired[float]
    language_code: NotRequired[str]
