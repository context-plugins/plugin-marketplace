from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code6_amazon_comprehend_operations_api import LanguageCode6AmazonComprehendOperationsApiOrStr


class DetectTargetedSentimentRequestAmazonComprehendOperationsApi(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The maximum string length is 5 KB."""

    language_code: LanguageCode6AmazonComprehendOperationsApiOrStr = Field(alias="LanguageCode")
    """The language of the input documents. Currently, English is the only supported language."""


class DetectTargetedSentimentRequestAmazonComprehendOperationsApiDict(TypedDict):
    text: str
    language_code: LanguageCode6AmazonComprehendOperationsApiOrStr
