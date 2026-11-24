from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Item1CompSniperMarketplaceAndShippingTcGplayerApi(SdkBaseModel):
    listing_id: OptionalNullable[str] = Field(default=UNSET, alias="listingId")
    price: OptionalNullable[float] = UNSET
    shipping: OptionalNullable[float] = UNSET
    total_price: OptionalNullable[float] = Field(default=UNSET, alias="totalPrice")
    condition: OptionalNullable[str] = UNSET
    variant: OptionalNullable[str] = UNSET
    language: OptionalNullable[str] = UNSET
    quantity: OptionalNullable[int] = UNSET
    seller_name: OptionalNullable[str] = Field(default=UNSET, alias="sellerName")
    seller_rating: OptionalNullable[float] = Field(default=UNSET, alias="sellerRating")
    seller_sales: OptionalNullable[int] = Field(default=UNSET, alias="sellerSales")
    seller_location: OptionalNullable[str] = Field(default=UNSET, alias="sellerLocation")
    gold_seller: OptionalNullable[bool] = Field(default=UNSET, alias="goldSeller")
    verified_seller: OptionalNullable[bool] = Field(default=UNSET, alias="verifiedSeller")
    direct_seller: OptionalNullable[bool] = Field(default=UNSET, alias="directSeller")


class Item1CompSniperMarketplaceAndShippingTcGplayerApiDict(TypedDict):
    listing_id: NotRequired[str | None]
    price: NotRequired[float | None]
    shipping: NotRequired[float | None]
    total_price: NotRequired[float | None]
    condition: NotRequired[str | None]
    variant: NotRequired[str | None]
    language: NotRequired[str | None]
    quantity: NotRequired[int | None]
    seller_name: NotRequired[str | None]
    seller_rating: NotRequired[float | None]
    seller_sales: NotRequired[int | None]
    seller_location: NotRequired[str | None]
    gold_seller: NotRequired[bool | None]
    verified_seller: NotRequired[bool | None]
    direct_seller: NotRequired[bool | None]
