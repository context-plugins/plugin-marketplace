from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.platform_id import PlatformIdOrStr
from .enums.status import StatusOrStr


class ConnectionCreated(SdkBaseModel):
    id: str
    """Connection ID (``con_…``)."""

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

    status: StatusOrStr
    """``pending`` (waiting for the owner to approve OAuth), ``active``, ``reauth_required`` (the platform rejected the
    stored token or key) or ``disconnected``."""

    metadata: Any
    """Your own key-value pairs, returned as sent."""

    created_at: RFC3339DateTime
    """When it was created."""

    updated_at: RFC3339DateTime
    """When it last changed."""

    authorization_url: Optional[str] = UNSET
    """``oauth`` platforms with a live key: send the account owner here to approve access."""

    locations_created: Optional[int] = UNSET
    """Locations imported (credentials, listing URL and test connections)."""

    locations_over_plan_limit: Optional[int] = UNSET
    """Locations not imported because of the plan limit."""


class ConnectionCreatedDict(TypedDict):
    id: str
    platform: PlatformIdOrStr
    status: StatusOrStr
    metadata: Any
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    authorization_url: NotRequired[str]
    locations_created: NotRequired[int]
    locations_over_plan_limit: NotRequired[int]
