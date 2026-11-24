from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code7_amazon_comprehend_operations_api import LanguageCode7AmazonComprehendOperationsApiOrStr
from .text_segment import TextSegment, TextSegmentDict


class DetectToxicContentRequest(SdkBaseModel):
    text_segments: list[TextSegment] = Field(alias="TextSegments")
    """A list of up to 10 text strings. Each string has a maximum size of 1 KB, and the maximum size of the list is 10
    KB."""

    language_code: LanguageCode7AmazonComprehendOperationsApiOrStr = Field(alias="LanguageCode")
    """The language of the input text. Currently, English is the only supported language."""


class DetectToxicContentRequestDict(TypedDict):
    text_segments: list[TextSegmentDict]
    language_code: LanguageCode7AmazonComprehendOperationsApiOrStr
