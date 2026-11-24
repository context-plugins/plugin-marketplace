from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.platform_id import PlatformIdOrStr


class Data7(SdkBaseModel):
    id: str
    """Location ID."""

    connection_id: str
    """Connection ID."""

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

    failed_checks: int
    """How many checks in a row had failed."""


class Data7Dict(TypedDict):
    id: str
    connection_id: str
    platform: PlatformIdOrStr
    failed_checks: int
