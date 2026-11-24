from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code import LanguageCodeOrStr


class DetectSentimentRequest(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The maximum string size is 5 KB."""

    language_code: LanguageCodeOrStr = Field(alias="LanguageCode")
    """The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend.
    All documents must be in the same language."""


class DetectSentimentRequestDict(TypedDict):
    text: str
    language_code: LanguageCodeOrStr
