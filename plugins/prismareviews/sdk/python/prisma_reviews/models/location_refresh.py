from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.platform_id import PlatformIdOrStr
from .enums.status_prisma_reviews_locations_api import StatusPrismaReviewsLocationsApiOrStr
from .review_link import ReviewLink, ReviewLinkDict
from .sync import Sync, SyncDict


class LocationRefresh(SdkBaseModel):
    id: str
    """Location ID (``loc_…``)."""

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

    connection_id: str
    """The connection that created it (``con_…``)."""

    name: str
    """Name on the platform. For listing URL platforms, the listing URL."""

    address: str | None
    """Address for places. For App Store apps, the bundle ID."""

    url: str | None
    """Public page of the location, app or listing, when known."""

    external_id: str
    """The platform's own ID."""

    status: StatusPrismaReviewsLocationsApiOrStr
    last_synced_at: RFC3339DateTime | None
    """Last time Prisma checked it for reviews. ``null`` until the first sync finishes."""

    next_sync_at: RFC3339DateTime | None
    """When the next check is scheduled. ``null`` once disconnected."""

    review_link: ReviewLink
    """The link to send customers to ask for a review (email, SMS, QR code). ``type: "write_review"`` opens the
    platform's review form; ``listing`` is the public page with its review button. ``null`` where only verified buyers
    or guests can review (Booking.com, eBay, Etsy, shop-review apps)."""

    sync: Sync
    """Sync health: tells "no new reviews" apart from "the check failed". After 3 failed checks in a row Prisma sends
    ``location.sync_failed``, and ``location.sync_recovered`` on the next successful one."""

    refresh: Literal["queued"] = "queued"


class LocationRefreshDict(TypedDict):
    id: str
    platform: PlatformIdOrStr
    connection_id: str
    name: str
    address: str | None
    url: str | None
    external_id: str
    status: StatusPrismaReviewsLocationsApiOrStr
    last_synced_at: RFC3339DateTime | None
    next_sync_at: RFC3339DateTime | None
    review_link: ReviewLinkDict
    sync: SyncDict
    refresh: Literal["queued"]
