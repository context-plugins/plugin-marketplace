from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_comprehend_operations_api import TypeAmazonComprehendOperationsApiOrStr


class RelationshipsListItemAmazonComprehendOperationsApi(SdkBaseModel):
    ids: Optional[list[str]] = Field(default=UNSET, alias="Ids")
    """Identifers of the child blocks."""

    type_: Optional[TypeAmazonComprehendOperationsApiOrStr] = Field(default=UNSET, alias="Type")
    """Only supported relationship is a child relationship."""


class RelationshipsListItemAmazonComprehendOperationsApiDict(TypedDict):
    ids: NotRequired[list[str]]
    type_: NotRequired[TypeAmazonComprehendOperationsApiOrStr]
