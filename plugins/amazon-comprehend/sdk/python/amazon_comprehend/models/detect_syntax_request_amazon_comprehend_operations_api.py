from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code5_amazon_comprehend_operations_api import LanguageCode5AmazonComprehendOperationsApiOrStr


class DetectSyntaxRequestAmazonComprehendOperationsApi(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 string. The maximum string size is 5 KB."""

    language_code: LanguageCode5AmazonComprehendOperationsApiOrStr = Field(alias="LanguageCode")
    """The language code of the input documents. You can specify any of the following languages supported by Amazon
    Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), or Portuguese ("pt")."""


class DetectSyntaxRequestAmazonComprehendOperationsApiDict(TypedDict):
    text: str
    language_code: LanguageCode5AmazonComprehendOperationsApiOrStr
