from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.item_type import ItemTypeOrStr


class Query(SdkBaseModel):
    text: str
    q: Optional[str] = UNSET
    item_type: Optional[ItemTypeOrStr] = Field(default=UNSET, alias="itemType")
    """Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything."""

    site: Optional[str] = UNSET


class QueryDict(TypedDict):
    text: str
    q: NotRequired[str]
    item_type: NotRequired[ItemTypeOrStr]
    site: NotRequired[str]
