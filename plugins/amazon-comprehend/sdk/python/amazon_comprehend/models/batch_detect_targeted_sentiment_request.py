from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code4 import LanguageCode4OrStr


class BatchDetectTargetedSentimentRequest(SdkBaseModel):
    text_list: list[str] = Field(alias="TextList")
    """A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents.
    The maximum size of each document is 5 KB."""

    language_code: LanguageCode4OrStr = Field(alias="LanguageCode")
    """The language of the input documents. Currently, English is the only supported language."""


class BatchDetectTargetedSentimentRequestDict(TypedDict):
    text_list: list[str]
    language_code: LanguageCode4OrStr
