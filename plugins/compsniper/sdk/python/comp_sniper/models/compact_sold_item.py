from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CompactSoldItem(SdkBaseModel):
    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    title: OptionalNullable[str] = UNSET
    sold_price: OptionalNullable[str] = Field(default=UNSET, alias="soldPrice")
    currency: OptionalNullable[str] = UNSET
    shipping_price: OptionalNullable[str] = Field(default=UNSET, alias="shippingPrice")
    total_price: OptionalNullable[str] = Field(default=UNSET, alias="totalPrice")
    condition: OptionalNullable[str] = UNSET
    best_offer_accepted: OptionalNullable[bool] = Field(default=UNSET, alias="bestOfferAccepted")
    """true when eBay marked an accepted Best Offer; null otherwise. The accepted amount is not disclosed."""

    sold_date: OptionalNullable[str] = Field(default=UNSET, alias="soldDate")
    seller_username: OptionalNullable[str] = Field(default=UNSET, alias="sellerUsername")
    url: OptionalNullable[str] = UNSET


class CompactSoldItemDict(TypedDict):
    item_id: NotRequired[str]
    title: NotRequired[str | None]
    sold_price: NotRequired[str | None]
    currency: NotRequired[str | None]
    shipping_price: NotRequired[str | None]
    total_price: NotRequired[str | None]
    condition: NotRequired[str | None]
    best_offer_accepted: NotRequired[bool | None]
    sold_date: NotRequired[str | None]
    seller_username: NotRequired[str | None]
    url: NotRequired[str | None]
