from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code3_amazon_comprehend_operations_api import LanguageCode3AmazonComprehendOperationsApiOrStr


class DetectPiiEntitiesRequestAmazonComprehendOperationsApi(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The maximum string size is 100 KB."""

    language_code: LanguageCode3AmazonComprehendOperationsApiOrStr = Field(alias="LanguageCode")
    """The language of the input text. Enter the language code for English (en) or Spanish (es)."""


class DetectPiiEntitiesRequestAmazonComprehendOperationsApiDict(TypedDict):
    text: str
    language_code: LanguageCode3AmazonComprehendOperationsApiOrStr
