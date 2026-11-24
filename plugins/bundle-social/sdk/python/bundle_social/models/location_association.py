from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.category import CategoryOrStr


class LocationAssociation(SdkBaseModel):
    category: Optional[CategoryOrStr] = UNSET
    price_list_item_id: Optional[str] = Field(default=UNSET, alias="priceListItemId")


class LocationAssociationDict(TypedDict):
    category: NotRequired[CategoryOrStr]
    price_list_item_id: NotRequired[str]
