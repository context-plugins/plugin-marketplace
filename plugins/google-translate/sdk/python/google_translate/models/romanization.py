from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Romanization(SdkBaseModel):
    """A single romanization response."""

    detected_language_code: Optional[str] = Field(default=UNSET, alias="detectedLanguageCode")
    """The ISO-639 language code of source text in the initial request, detected automatically, if no source language
    was passed within the initial request. If the source language was passed, auto-detection of the language does not
    occur and this field is empty."""

    romanized_text: Optional[str] = Field(default=UNSET, alias="romanizedText")
    """Romanized text. If an error occurs during romanization, this field might be excluded from the response."""


class RomanizationDict(TypedDict):
    detected_language_code: NotRequired[str]
    romanized_text: NotRequired[str]
