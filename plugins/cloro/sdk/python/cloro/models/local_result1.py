from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links1 import Links1, Links1Dict


class LocalResult1(SdkBaseModel):
    position: float
    """Position within the pack (1-indexed)"""

    title: str
    """Business name as displayed on the SERP"""

    place_id: Optional[str] = Field(default=UNSET, alias="placeId")
    """Google entity id for the place"""

    cid: Optional[str] = UNSET
    """Google's numeric place id (CID) as a decimal string. ``https://maps.google.com/?cid=<cid>`` opens the place. Not
    sent for the newer layout that most German, French, Spanish, Italian, Danish and Polish SERPs use."""

    link: Optional[str] = UNSET
    """Google viewer URL for the place: the page that opens when you click the place on the SERP"""

    rating: Optional[float] = UNSET
    """Average star rating (0–5)"""

    reviews: Optional[str] = UNSET
    """Review count as displayed by Google (e.g. "26K"). Free-form string — not normalized to a number."""

    price: Optional[str] = UNSET
    """Price band as displayed by Google (e.g. "$10–20"). Currency symbol matches the locale."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Business category (e.g. "Pizza", "Plumber")"""

    years_in_business: Optional[str] = Field(default=UNSET, alias="yearsInBusiness")
    """Years-in-business badge, when shown (typical on service-style packs)"""

    address: Optional[str] = UNSET
    """Street address or locality as displayed on the SERP"""

    phone: Optional[str] = UNSET
    """Phone number. Desktop gives the number as Google displays it (e.g. "(702) 777-3777"). Mobile gives the number
    from the card's Call button (e.g. "+17027773777"). When the card does not show it, it comes from the place data in
    the page."""

    hours: Optional[str] = UNSET
    """Opening-hours text as displayed (e.g. "Open · Closes 11 PM", "Open 24 hours")"""

    description: Optional[str] = UNSET
    """Trailing snippet — a review quote or a service-options line"""

    links: Optional[Links1] = UNSET
    """Action links rendered on the place, typically on business/service-style packs (plumbers, salons, …) and absent on
    restaurant packs whose places are plain buttons. Each key is present only when Google rendered that button."""


class LocalResult1Dict(TypedDict):
    position: float
    title: str
    place_id: NotRequired[str]
    cid: NotRequired[str]
    link: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    price: NotRequired[str]
    type_: NotRequired[str]
    years_in_business: NotRequired[str]
    address: NotRequired[str]
    phone: NotRequired[str]
    hours: NotRequired[str]
    description: NotRequired[str]
    links: NotRequired[Links1Dict]
