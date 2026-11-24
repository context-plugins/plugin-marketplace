from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.accepted_offer_price_status import AcceptedOfferPriceStatusOrStr


class Item(SdkBaseModel):
    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    accepted_offer_price: OptionalNullable[str] = Field(default=UNSET, alias="acceptedOfferPrice")
    accepted_offer_price_status: Optional[AcceptedOfferPriceStatusOrStr] = Field(
        default=UNSET, alias="acceptedOfferPriceStatus"
    )


class ItemDict(TypedDict):
    item_id: NotRequired[str]
    accepted_offer_price: NotRequired[str | None]
    accepted_offer_price_status: NotRequired[AcceptedOfferPriceStatusOrStr]
