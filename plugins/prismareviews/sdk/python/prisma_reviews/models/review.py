from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.platform_id import PlatformIdOrStr
from .reply_prisma_reviews_replies_api import ReplyPrismaReviewsRepliesApi, ReplyPrismaReviewsRepliesApiDict


class Review(SdkBaseModel):
    """One customer review, in the same shape on every platform."""

    id: str
    """Review ID (``rev_…``)."""

    platform: PlatformIdOrStr
    """Platform ID.

    | ID | Platform | Connects with | Replies |
    | --- | --- | --- | --- |
    | ``google`` | Google Business Profile | oauth | by API |
    | ``app_store`` | App Store | credentials | by API |
    | ``google_play`` | Google Play | credentials | by API |
    | ``judge_me`` | Judge.me | credentials | by API |
    | ``trustpilot`` | Trustpilot | oauth | by API |
    | ``google_maps`` | Google Maps | listing_url | read only |
    | ``yelp`` | Yelp | listing_url | read only |
    | ``tripadvisor`` | Tripadvisor | listing_url | read only |
    | ``booking`` | Booking.com | listing_url | read only |
    | ``yotpo`` | Yotpo | credentials | read only |
    | ``reviews_io`` | REVIEWS.io | credentials | read only |
    | ``g2`` | G2 | credentials | read only |
    | ``ebay`` | eBay | oauth | by API |
    | ``etsy`` | Etsy | listing_url | read only |
    | ``steam`` | Steam | listing_url | read only |
    | ``okendo`` | Okendo | credentials | read only |
    | ``feefo`` | Feefo | credentials | read only |
    | ``trusted_shops`` | Trusted Shops | credentials | by API |
    | ``ekomi`` | eKomi | credentials | by API |
    | ``loox`` | Loox | credentials | read only |
    | ``proven_expert`` | ProvenExpert | credentials | read only |
    | ``shopper_approved`` | Shopper Approved | credentials | read only |
    | ``wordpress`` | WordPress.org | listing_url | read only |
    | ``appexchange`` | Salesforce AppExchange | listing_url | read only |
    | ``facebook`` | Facebook | listing_url | read only |
    | ``opentable`` | OpenTable | listing_url | read only |
    | ``doordash`` | DoorDash | listing_url | read only |
    | ``angi`` | Angi | listing_url | read only |
    | ``checkatrade`` | Checkatrade | listing_url | read only |
    | ``avvo`` | Avvo | listing_url | read only |
    | ``capterra`` | Capterra | listing_url | read only |
    | ``apartments`` | Apartments.com | listing_url | read only |
    | ``gartner`` | Gartner Peer Insights | listing_url | read only |
    | ``healthgrades`` | Healthgrades | listing_url | read only |
    | ``vitals`` | Vitals | listing_url | read only |
    | ``classpass`` | ClassPass | listing_url | read only |"""

    location_id: str
    """The location the review belongs to (``loc_…``)."""

    rating: int | None
    """1 to 5 stars. ``null`` if the platform gave no rating."""

    title: str | None
    """Review title, on platforms that have one."""

    text: str | None
    """Review body. ``null`` for rating-only reviews."""

    author: str | None
    """Display name as shown by the platform."""

    language: str | None
    """Language code when the platform provides one."""

    url: str | None
    """Public link to the review when the platform provides one. On read-only platforms, where to answer it."""

    created_at: RFC3339DateTime
    """When the review was written on the platform."""

    updated_at: RFC3339DateTime
    """When it was last edited on the platform."""

    reply: ReplyPrismaReviewsRepliesApi | None
    """The business reply, or ``null``."""


class ReviewDict(TypedDict):
    id: str
    platform: PlatformIdOrStr
    location_id: str
    rating: int | None
    title: str | None
    text: str | None
    author: str | None
    language: str | None
    url: str | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    reply: ReplyPrismaReviewsRepliesApiDict | None
