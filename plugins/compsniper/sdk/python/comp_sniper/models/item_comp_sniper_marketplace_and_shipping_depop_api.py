from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ItemCompSniperMarketplaceAndShippingDepopApi(SdkBaseModel):
    product_id: Optional[str] = Field(default=UNSET, alias="productId")
    url: Optional[str] = UNSET
    title: Optional[str] = UNSET
    description: OptionalNullable[str] = UNSET
    price: OptionalNullable[float] = UNSET
    original_price: OptionalNullable[float] = Field(default=UNSET, alias="originalPrice")
    shipping_price: OptionalNullable[float] = Field(default=UNSET, alias="shippingPrice")
    currency: OptionalNullable[str] = UNSET
    brand: OptionalNullable[str] = UNSET
    category: OptionalNullable[str] = UNSET
    sizes: Optional[list[str]] = UNSET
    condition: OptionalNullable[str] = UNSET
    gender: OptionalNullable[str] = UNSET
    colors: Optional[list[str]] = UNSET
    quantity: OptionalNullable[int] = UNSET
    seller_username: OptionalNullable[str] = Field(default=UNSET, alias="sellerUsername")
    location: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")


class ItemCompSniperMarketplaceAndShippingDepopApiDict(TypedDict):
    product_id: NotRequired[str]
    url: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str | None]
    price: NotRequired[float | None]
    original_price: NotRequired[float | None]
    shipping_price: NotRequired[float | None]
    currency: NotRequired[str | None]
    brand: NotRequired[str | None]
    category: NotRequired[str | None]
    sizes: NotRequired[list[str]]
    condition: NotRequired[str | None]
    gender: NotRequired[str | None]
    colors: NotRequired[list[str]]
    quantity: NotRequired[int | None]
    seller_username: NotRequired[str | None]
    location: NotRequired[str | None]
    country: NotRequired[str | None]
    image_url: NotRequired[str | None]
