from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.item_type import ItemTypeOrStr


class Query1(SdkBaseModel):
    q: str
    item_type: Optional[ItemTypeOrStr] = Field(default=UNSET, alias="itemType")
    """Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything."""

    site: Optional[str] = UNSET


class Query1Dict(TypedDict):
    q: str
    item_type: NotRequired[ItemTypeOrStr]
    site: NotRequired[str]
