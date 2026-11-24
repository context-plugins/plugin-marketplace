from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Product(SdkBaseModel):
    product_id: OptionalNullable[int] = Field(default=UNSET, alias="productId")
    name: OptionalNullable[str] = UNSET
    product_line: OptionalNullable[str] = Field(default=UNSET, alias="productLine")
    set_name: OptionalNullable[str] = Field(default=UNSET, alias="setName")
    number: OptionalNullable[str] = UNSET
    rarity: OptionalNullable[str] = UNSET
    sealed: OptionalNullable[bool] = UNSET
    market_price: OptionalNullable[float] = Field(default=UNSET, alias="marketPrice")
    lowest_price: OptionalNullable[float] = Field(default=UNSET, alias="lowestPrice")
    lowest_price_with_shipping: OptionalNullable[float] = Field(default=UNSET, alias="lowestPriceWithShipping")
    total_listings: OptionalNullable[int] = Field(default=UNSET, alias="totalListings")
    url: OptionalNullable[str] = UNSET


class ProductDict(TypedDict):
    product_id: NotRequired[int | None]
    name: NotRequired[str | None]
    product_line: NotRequired[str | None]
    set_name: NotRequired[str | None]
    number: NotRequired[str | None]
    rarity: NotRequired[str | None]
    sealed: NotRequired[bool | None]
    market_price: NotRequired[float | None]
    lowest_price: NotRequired[float | None]
    lowest_price_with_shipping: NotRequired[float | None]
    total_listings: NotRequired[int | None]
    url: NotRequired[str | None]
