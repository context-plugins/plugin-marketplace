from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_amazon_comprehend_operations_api import Type1AmazonComprehendOperationsApiOrStr


class DocumentTypeListItemAmazonComprehendOperationsApi(SdkBaseModel):
    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number."""

    type_: Optional[Type1AmazonComprehendOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """Document type."""


class DocumentTypeListItemAmazonComprehendOperationsApiDict(TypedDict):
    page: NotRequired[int]
    type_: NotRequired[Type1AmazonComprehendOperationsApiOrStr]
