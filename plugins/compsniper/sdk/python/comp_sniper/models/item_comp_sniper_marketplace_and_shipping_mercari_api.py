from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_comp_sniper_marketplace_and_shipping_mercari_api import (
    StatusCompSniperMarketplaceAndShippingMercariApiOrStr,
)
from .unions.seller_id import SellerId, SellerIdDict


class ItemCompSniperMarketplaceAndShippingMercariApi(SdkBaseModel):
    item_id: str = Field(alias="itemId")
    url: str
    title: str
    price: str
    """Dollars, 2 decimal places"""

    currency: Literal["USD"] = "USD"
    original_price: str | None = Field(alias="originalPrice")
    condition: str | None
    condition_id: float | None = Field(alias="conditionId")
    status: StatusCompSniperMarketplaceAndShippingMercariApiOrStr
    image_url: str | None = Field(alias="imageUrl")
    thumbnail_url: str | None = Field(alias="thumbnailUrl")
    seller_id: SellerId = Field(alias="sellerId")
    brand: str | None
    category_id: float | None = Field(alias="categoryId")
    category_name: str | None = Field(alias="categoryName")
    marketplace: Literal["mercari"] = "mercari"


class ItemCompSniperMarketplaceAndShippingMercariApiDict(TypedDict):
    item_id: str
    url: str
    title: str
    price: str
    currency: Literal["USD"]
    original_price: str | None
    condition: str | None
    condition_id: float | None
    status: StatusCompSniperMarketplaceAndShippingMercariApiOrStr
    image_url: str | None
    thumbnail_url: str | None
    seller_id: SellerIdDict
    brand: str | None
    category_id: float | None
    category_name: str | None
    marketplace: Literal["mercari"]
