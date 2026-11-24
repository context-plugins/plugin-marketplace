from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ItemCompSniperMarketplaceAndShippingGrailedApi(SdkBaseModel):
    listing_id: Optional[str] = Field(default=UNSET, alias="listingId")
    url: Optional[str] = UNSET
    title: Optional[str] = UNSET
    currency: Optional[str] = UNSET
    designers: Optional[list[str]] = UNSET
    size: OptionalNullable[str] = UNSET
    condition: OptionalNullable[str] = UNSET
    category: OptionalNullable[str] = UNSET
    department: OptionalNullable[str] = UNSET
    location: OptionalNullable[str] = UNSET
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    sold_price: OptionalNullable[float] = Field(default=UNSET, alias="soldPrice")
    list_price: OptionalNullable[float] = Field(default=UNSET, alias="listPrice")
    shipping_price: OptionalNullable[float] = Field(default=UNSET, alias="shippingPrice")
    sold_price_includes_shipping: OptionalNullable[bool] = Field(default=UNSET, alias="soldPriceIncludesShipping")
    sold_at: OptionalNullable[str] = Field(default=UNSET, alias="soldAt")


class ItemCompSniperMarketplaceAndShippingGrailedApiDict(TypedDict):
    listing_id: NotRequired[str]
    url: NotRequired[str]
    title: NotRequired[str]
    currency: NotRequired[str]
    designers: NotRequired[list[str]]
    size: NotRequired[str | None]
    condition: NotRequired[str | None]
    category: NotRequired[str | None]
    department: NotRequired[str | None]
    location: NotRequired[str | None]
    image_url: NotRequired[str | None]
    sold_price: NotRequired[float | None]
    list_price: NotRequired[float | None]
    shipping_price: NotRequired[float | None]
    sold_price_includes_shipping: NotRequired[bool | None]
    sold_at: NotRequired[str | None]
