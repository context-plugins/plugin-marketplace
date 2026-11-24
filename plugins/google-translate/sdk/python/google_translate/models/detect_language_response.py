from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detected_language import DetectedLanguage, DetectedLanguageDict


class DetectLanguageResponse(SdkBaseModel):
    """The response message for language detection."""

    languages: Optional[list[DetectedLanguage]] = UNSET
    """The most probable language detected by the Translation API. For each request, the Translation API will always
    return only one result."""


class DetectLanguageResponseDict(TypedDict):
    languages: NotRequired[list[DetectedLanguageDict]]
