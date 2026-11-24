from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ItemCompSniperMarketplaceAndShippingPoshmarkApi(SdkBaseModel):
    listing_id: str = Field(alias="listingId")
    """Poshmark listing ID (24-char hex)"""

    url: str
    title: str
    sold_price: float | None = Field(alias="soldPrice")
    """Sale price in USD"""

    original_price: float | None = Field(alias="originalPrice")
    """Original listing price in USD"""

    shipping_cost: float | None = Field(alias="shippingCost")
    """Reserved for item-level shipping evidence. null when Poshmark does not expose it."""

    brand: str | None
    size: str | None
    category: str | None
    """Department > Category path."""

    condition: str | None
    """Item condition from Poshmark API."""

    nwt: bool
    """New With Tags flag"""

    colors: list[str]
    """Color names from Poshmark API."""

    description: str | None
    """Full listing description text."""

    sold_at: str | None = Field(alias="soldAt")
    """Public ISO timestamp when Poshmark marked the item sold."""

    listed_at: str | None = Field(alias="listedAt")
    """ISO timestamp when the item was first published."""

    days_to_sell: float | None = Field(alias="daysToSell")
    """Days between listedAt and soldAt. null when either date is missing."""

    likes_count: float | None = Field(alias="likesCount")
    comments_count: float | None = Field(alias="commentsCount")
    """Public comment count when exposed by Poshmark search."""

    share_count: float | None = Field(alias="shareCount")
    """Public share count when exposed by Poshmark search."""

    seller_username: str | None = Field(alias="sellerUsername")
    seller_location: str | None = Field(alias="sellerLocation")
    """Seller city + state. Requires enrich=true."""

    seller_sold_count: float | None = Field(alias="sellerSoldCount")
    """Approximate public seller sold count. Requires enrich=true."""

    seller_avg_ship_time: float | None = Field(alias="sellerAvgShipTime")
    """Seller's average ship time in days. Requires enrich=true."""

    thumbnail_url: str | None = Field(alias="thumbnailUrl")
    """Listing thumbnail URL"""

    scraped_at: str = Field(alias="scrapedAt")
    """ISO timestamp when the listing was scraped"""


class ItemCompSniperMarketplaceAndShippingPoshmarkApiDict(TypedDict):
    listing_id: str
    url: str
    title: str
    sold_price: float | None
    original_price: float | None
    shipping_cost: float | None
    brand: str | None
    size: str | None
    category: str | None
    condition: str | None
    nwt: bool
    colors: list[str]
    description: str | None
    sold_at: str | None
    listed_at: str | None
    days_to_sell: float | None
    likes_count: float | None
    comments_count: float | None
    share_count: float | None
    seller_username: str | None
    seller_location: str | None
    seller_sold_count: float | None
    seller_avg_ship_time: float | None
    thumbnail_url: str | None
    scraped_at: str
