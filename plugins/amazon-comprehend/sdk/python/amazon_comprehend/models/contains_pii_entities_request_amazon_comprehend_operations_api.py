from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code_amazon_comprehend_operations_api import LanguageCodeAmazonComprehendOperationsApiOrStr


class ContainsPiiEntitiesRequestAmazonComprehendOperationsApi(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The maximum string size is 100 KB."""

    language_code: LanguageCodeAmazonComprehendOperationsApiOrStr = Field(alias="LanguageCode")
    """The language of the input documents."""


class ContainsPiiEntitiesRequestAmazonComprehendOperationsApiDict(TypedDict):
    text: str
    language_code: LanguageCodeAmazonComprehendOperationsApiOrStr
