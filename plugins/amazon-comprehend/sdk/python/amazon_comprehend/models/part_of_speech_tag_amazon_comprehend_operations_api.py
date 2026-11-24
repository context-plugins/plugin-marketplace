from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tag_amazon_comprehend_operations_api import TagAmazonComprehendOperationsApiOrStr


class PartOfSpeechTagAmazonComprehendOperationsApi(SdkBaseModel):
    tag: Optional[TagAmazonComprehendOperationsApiOrStr] = Field(default=UNSET, alias="Tag")
    """Identifies the part of speech that the token represents."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The confidence that Amazon Comprehend has that the part of speech was correctly identified."""


class PartOfSpeechTagAmazonComprehendOperationsApiDict(TypedDict):
    tag: NotRequired[TagAmazonComprehendOperationsApiOrStr]
    score: NotRequired[float]
