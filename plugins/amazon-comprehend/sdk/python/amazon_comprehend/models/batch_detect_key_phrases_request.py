from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code import LanguageCodeOrStr


class BatchDetectKeyPhrasesRequest(SdkBaseModel):
    text_list: list[str] = Field(alias="TextList")
    """A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents.
    The maximum size of each document is 5 KB."""

    language_code: LanguageCodeOrStr = Field(alias="LanguageCode")
    """The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend.
    All documents must be in the same language."""


class BatchDetectKeyPhrasesRequestDict(TypedDict):
    text_list: list[str]
    language_code: LanguageCodeOrStr
