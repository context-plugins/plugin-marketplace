from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.buying_format_comp_sniper_marketplace_and_shipping_scrape_api import (
    BuyingFormatCompSniperMarketplaceAndShippingScrapeApiOrStr,
)
from .enums.listing_type import ListingTypeOrStr
from .enums.seller_type import SellerTypeOrStr
from .enums.shipping_type import ShippingTypeOrStr


class ActiveItem(SdkBaseModel):
    """A current eBay listing returned when sold=false. Demand fields are null when eBay does not show them on the
    search card."""

    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    url: Optional[str] = UNSET
    title: Optional[str] = UNSET
    condition: OptionalNullable[str] = UNSET
    condition_id: OptionalNullable[int] = Field(default=UNSET, alias="conditionId")
    seller_type: OptionalNullable[SellerTypeOrStr] = Field(default=UNSET, alias="sellerType")
    listing_type: Optional[ListingTypeOrStr] = Field(default=UNSET, alias="listingType")
    buying_format: OptionalNullable[BuyingFormatCompSniperMarketplaceAndShippingScrapeApiOrStr] = Field(
        default=UNSET, alias="buyingFormat"
    )
    bid_count: OptionalNullable[int] = Field(default=UNSET, alias="bidCount")
    current_price: Optional[str] = Field(default=UNSET, alias="currentPrice")
    """Current asking or bid price as a decimal string."""

    current_price_max: OptionalNullable[str] = Field(default=UNSET, alias="currentPriceMax")
    """Upper bound when eBay displays a price range."""

    current_currency: Optional[str] = Field(default=UNSET, alias="currentCurrency")
    """ISO 4217."""

    watcher_count: OptionalNullable[int] = Field(default=UNSET, alias="watcherCount")
    units_sold: OptionalNullable[int] = Field(default=UNSET, alias="unitsSold")
    accepts_offers: Optional[bool] = Field(default=UNSET, alias="acceptsOffers")
    time_left: OptionalNullable[str] = Field(default=UNSET, alias="timeLeft")
    """Raw localized time remaining when visible."""

    shipping_price: OptionalNullable[str] = Field(default=UNSET, alias="shippingPrice")
    shipping_type: Optional[ShippingTypeOrStr] = Field(default=UNSET, alias="shippingType")
    total_price: OptionalNullable[str] = Field(default=UNSET, alias="totalPrice")
    seller_username: OptionalNullable[str] = Field(default=UNSET, alias="sellerUsername")
    seller_feedback_score: OptionalNullable[int] = Field(default=UNSET, alias="sellerFeedbackScore")
    product_rating: OptionalNullable[float] = Field(default=UNSET, alias="productRating")
    """eBay catalog star rating shown on the result card. This describes the product, not the seller."""

    product_review_count: OptionalNullable[int] = Field(default=UNSET, alias="productReviewCount")
    """Number of eBay catalog ratings behind productRating."""

    item_location: OptionalNullable[str] = Field(default=UNSET, alias="itemLocation")


class ActiveItemDict(TypedDict):
    item_id: NotRequired[str]
    url: NotRequired[str]
    title: NotRequired[str]
    condition: NotRequired[str | None]
    condition_id: NotRequired[int | None]
    seller_type: NotRequired[SellerTypeOrStr | None]
    listing_type: NotRequired[ListingTypeOrStr]
    buying_format: NotRequired[BuyingFormatCompSniperMarketplaceAndShippingScrapeApiOrStr | None]
    bid_count: NotRequired[int | None]
    current_price: NotRequired[str]
    current_price_max: NotRequired[str | None]
    current_currency: NotRequired[str]
    watcher_count: NotRequired[int | None]
    units_sold: NotRequired[int | None]
    accepts_offers: NotRequired[bool]
    time_left: NotRequired[str | None]
    shipping_price: NotRequired[str | None]
    shipping_type: NotRequired[ShippingTypeOrStr]
    total_price: NotRequired[str | None]
    seller_username: NotRequired[str | None]
    seller_feedback_score: NotRequired[int | None]
    product_rating: NotRequired[float | None]
    product_review_count: NotRequired[int | None]
    item_location: NotRequired[str | None]
