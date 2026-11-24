from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code import LanguageCodeOrStr


class DetectKeyPhrasesRequest(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded characters."""

    language_code: LanguageCodeOrStr = Field(alias="LanguageCode")
    """The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend.
    All documents must be in the same language."""


class DetectKeyPhrasesRequestDict(TypedDict):
    text: str
    language_code: LanguageCodeOrStr
