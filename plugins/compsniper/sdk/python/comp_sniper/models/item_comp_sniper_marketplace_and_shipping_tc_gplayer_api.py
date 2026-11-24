from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ItemCompSniperMarketplaceAndShippingTcGplayerApi(SdkBaseModel):
    title: OptionalNullable[str] = UNSET
    condition: OptionalNullable[str] = UNSET
    variant: OptionalNullable[str] = UNSET
    language: OptionalNullable[str] = UNSET
    quantity: OptionalNullable[int] = UNSET
    price: OptionalNullable[float] = UNSET
    shipping: OptionalNullable[float] = UNSET
    total_price: OptionalNullable[float] = Field(default=UNSET, alias="totalPrice")
    sold_at: OptionalNullable[str] = Field(default=UNSET, alias="soldAt")
    listing_type: OptionalNullable[str] = Field(default=UNSET, alias="listingType")


class ItemCompSniperMarketplaceAndShippingTcGplayerApiDict(TypedDict):
    title: NotRequired[str | None]
    condition: NotRequired[str | None]
    variant: NotRequired[str | None]
    language: NotRequired[str | None]
    quantity: NotRequired[int | None]
    price: NotRequired[float | None]
    shipping: NotRequired[float | None]
    total_price: NotRequired[float | None]
    sold_at: NotRequired[str | None]
    listing_type: NotRequired[str | None]
