from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3_amazon_comprehend_operations_api import Type3AmazonComprehendOperationsApiOrStr


class PiiEntityAmazonComprehendOperationsApi(SdkBaseModel):
    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The level of confidence that Amazon Comprehend has in the accuracy of the detection."""

    type_: Optional[Type3AmazonComprehendOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """The entity's type."""

    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """The zero-based offset from the beginning of the source text to the first character in the entity."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """The zero-based offset from the beginning of the source text to the last character in the entity."""


class PiiEntityAmazonComprehendOperationsApiDict(TypedDict):
    score: NotRequired[float]
    type_: NotRequired[Type3AmazonComprehendOperationsApiOrStr]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]
