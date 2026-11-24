from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.listing_type1 import ListingType1OrStr
from .enums.seller_type1 import SellerType1OrStr
from .enums.shipping_type import ShippingTypeOrStr


class SoldItem(SdkBaseModel):
    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    url: Optional[str] = UNSET
    title: Optional[str] = UNSET
    condition: OptionalNullable[str] = UNSET
    condition_id: OptionalNullable[int] = Field(default=UNSET, alias="conditionId")
    """Best-effort mapping of a known localized eBay condition label."""

    seller_type: OptionalNullable[SellerType1OrStr] = Field(default=UNSET, alias="sellerType")
    """Labeled seller classification on EU marketplaces."""

    listing_type: Optional[ListingType1OrStr] = Field(default=UNSET, alias="listingType")
    best_offer_accepted: OptionalNullable[bool] = Field(default=UNSET, alias="bestOfferAccepted")
    """true when eBay marked an accepted Best Offer; null when no accepted-offer marker was detected. eBay does not
    disclose the accepted amount."""

    sold_price: Optional[str] = Field(default=UNSET, alias="soldPrice")
    """Decimal string."""

    sold_currency: Optional[str] = Field(default=UNSET, alias="soldCurrency")
    """ISO 4217."""

    shipping_price: OptionalNullable[str] = Field(default=UNSET, alias="shippingPrice")
    shipping_type: OptionalNullable[ShippingTypeOrStr] = Field(default=UNSET, alias="shippingType")
    total_price: OptionalNullable[str] = Field(default=UNSET, alias="totalPrice")
    ended_at: Optional[str] = Field(default=UNSET, alias="endedAt")
    """YYYY-MM-DD sold date."""

    seller_username: OptionalNullable[str] = Field(default=UNSET, alias="sellerUsername")
    seller_feedback_score: OptionalNullable[int] = Field(default=UNSET, alias="sellerFeedbackScore")
    product_rating: OptionalNullable[float] = Field(default=UNSET, alias="productRating")
    """eBay catalog star rating shown on the result card. This describes the product, not the seller."""

    product_review_count: OptionalNullable[int] = Field(default=UNSET, alias="productReviewCount")
    """Number of eBay catalog ratings behind productRating."""

    item_location: OptionalNullable[str] = Field(default=UNSET, alias="itemLocation")


class SoldItemDict(TypedDict):
    item_id: NotRequired[str]
    url: NotRequired[str]
    title: NotRequired[str]
    condition: NotRequired[str | None]
    condition_id: NotRequired[int | None]
    seller_type: NotRequired[SellerType1OrStr | None]
    listing_type: NotRequired[ListingType1OrStr]
    best_offer_accepted: NotRequired[bool | None]
    sold_price: NotRequired[str]
    sold_currency: NotRequired[str]
    shipping_price: NotRequired[str | None]
    shipping_type: NotRequired[ShippingTypeOrStr | None]
    total_price: NotRequired[str | None]
    ended_at: NotRequired[str]
    seller_username: NotRequired[str | None]
    seller_feedback_score: NotRequired[int | None]
    product_rating: NotRequired[float | None]
    product_review_count: NotRequired[int | None]
    item_location: NotRequired[str | None]
