from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links import Links, LinksDict


class LocalResult(SdkBaseModel):
    position: float
    """Position within the pack (1-indexed)"""

    title: str
    """Business name as displayed on the SERP"""

    place_id: Optional[str] = Field(default=UNSET, alias="placeId")
    """Google entity id for the place"""

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
    """Phone number, when shown (locale-formatted)"""

    hours: Optional[str] = UNSET
    """Opening-hours text as displayed (e.g. "Open · Closes 11 PM", "Open 24 hours")"""

    description: Optional[str] = UNSET
    """Trailing snippet — a review quote or a service-options line"""

    links: Optional[Links] = UNSET
    """Action links rendered on the place, typically on business/service-style packs (plumbers, salons, …) and absent on
    restaurant packs whose places are plain buttons. Each key is present only when Google rendered that button."""


class LocalResultDict(TypedDict):
    position: float
    title: str
    place_id: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    price: NotRequired[str]
    type_: NotRequired[str]
    years_in_business: NotRequired[str]
    address: NotRequired[str]
    phone: NotRequired[str]
    hours: NotRequired[str]
    description: NotRequired[str]
    links: NotRequired[LinksDict]
