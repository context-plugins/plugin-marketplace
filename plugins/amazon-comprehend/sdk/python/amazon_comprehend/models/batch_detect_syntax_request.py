from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code3 import LanguageCode3OrStr


class BatchDetectSyntaxRequest(SdkBaseModel):
    text_list: list[str] = Field(alias="TextList")
    """A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents.
    The maximum size for each document is 5 KB."""

    language_code: LanguageCode3OrStr = Field(alias="LanguageCode")
    """The language of the input documents. You can specify any of the following languages supported by Amazon
    Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt"). All
    documents must be in the same language."""


class BatchDetectSyntaxRequestDict(TypedDict):
    text_list: list[str]
    language_code: LanguageCode3OrStr
