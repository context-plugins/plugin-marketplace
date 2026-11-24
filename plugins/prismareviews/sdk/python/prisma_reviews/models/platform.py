from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .connect_field import ConnectField, ConnectFieldDict
from .enums.connect import ConnectOrStr
from .enums.platform_id import PlatformIdOrStr
from .enums.reply import ReplyOrStr


class Platform(SdkBaseModel):
    """How a platform connects and whether this workspace can connect it now."""

    id: PlatformIdOrStr
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

    name: str
    """Display name."""

    connect: ConnectOrStr
    """How ``POST /v1/connections`` connects it."""

    reply: ReplyOrStr
    """``api``: Prisma publishes replies. ``read``: read only."""

    in_your_plan: bool
    """Whether your plan (or its read packs) includes it."""

    available: bool
    """Whether it is enabled for your account (some platforms open gradually)."""

    live_ready: bool
    """``false`` while it can only be tried with test keys; a live ``POST /v1/connections`` returns ``501
    platform_not_available``."""

    live_note: str | None
    """Why it isn't ready for live keys yet."""

    summary: str
    """What the account owner needs before starting."""

    steps: list[str]
    """Short setup steps for the account owner."""

    console_url: str | None
    """Where the values come from."""

    fields: list[ConnectField]
    """What ``POST /v1/connections`` expects."""

    example: Any
    """A request body for ``POST /v1/connections`` that works with a test key."""


class PlatformDict(TypedDict):
    id: PlatformIdOrStr
    name: str
    connect: ConnectOrStr
    reply: ReplyOrStr
    in_your_plan: bool
    available: bool
    live_ready: bool
    live_note: str | None
    summary: str
    steps: list[str]
    console_url: str | None
    fields: list[ConnectFieldDict]
    example: Any
