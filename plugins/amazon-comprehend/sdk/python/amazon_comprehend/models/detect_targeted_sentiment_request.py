from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code4 import LanguageCode4OrStr


class DetectTargetedSentimentRequest(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The maximum string length is 5 KB."""

    language_code: LanguageCode4OrStr = Field(alias="LanguageCode")
    """The language of the input documents. Currently, English is the only supported language."""


class DetectTargetedSentimentRequestDict(TypedDict):
    text: str
    language_code: LanguageCode4OrStr
