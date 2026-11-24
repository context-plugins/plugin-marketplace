from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Item1(SdkBaseModel):
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
    price: OptionalNullable[float] = UNSET
    shipping_price: OptionalNullable[float] = Field(default=UNSET, alias="shippingPrice")
    accepts_offers: Optional[bool] = Field(default=UNSET, alias="acceptsOffers")
    listed_at: OptionalNullable[str] = Field(default=UNSET, alias="listedAt")
    bumped_at: OptionalNullable[str] = Field(default=UNSET, alias="bumpedAt")


class Item1Dict(TypedDict):
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
    price: NotRequired[float | None]
    shipping_price: NotRequired[float | None]
    accepts_offers: NotRequired[bool]
    listed_at: NotRequired[str | None]
    bumped_at: NotRequired[str | None]
