from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .brand import Brand, BrandDict
from .card import Card, CardDict


class Ads2(SdkBaseModel):
    brand: Brand
    """Advertiser brand information"""

    cards: list[Card]
    """Array of carousel cards in the ad"""

    visibility: str
    """OpenAI serving status for the ad. ``allowed`` means the ad was eligible to serve; ``hidden`` means OpenAI
    filtered it (for example, an integrity check)."""

    ads_response_index: int = Field(alias="adsResponseIndex")
    """The ad's slot position in OpenAI's served ad response. This reflects served order, not what was shown — use
    ``rendered`` for actual exposure."""

    rendered: bool
    """Whether the ad was shown as a visible card in the response. OpenAI serves several candidates but the interface
    renders at most one; ads with ``rendered: false`` were served but not displayed."""


class Ads2Dict(TypedDict):
    brand: BrandDict
    cards: list[CardDict]
    visibility: str
    ads_response_index: int
    rendered: bool
