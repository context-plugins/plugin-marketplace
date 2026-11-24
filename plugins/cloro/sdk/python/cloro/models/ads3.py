from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.block_position import BlockPositionOrStr
from .enums.type1 import Type1OrStr
from .old_price1 import OldPrice1, OldPrice1Dict
from .price3 import Price3, Price3Dict
from .sitelinks1 import Sitelinks1, Sitelinks1Dict


class Ads3(SdkBaseModel):
    position: Optional[float] = UNSET
    """Position within the ad block (1-indexed)"""

    block_position: Optional[BlockPositionOrStr] = Field(default=UNSET, alias="blockPosition")
    """Where the ad appeared on the SERP. ``top``/``bottom`` are text-ad blocks, ``middle`` covers direct/in-content
    ads, ``rhs`` is the right-hand-side sponsored-products carousel."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Discriminates plain text ads (``RESULT``) from shopping-style sponsored cards (``SHOPPING_CARD``). Shopping cards
    appear in the right-hand-side PLA carousel, the top-of-page PLA carousel, and the top-of-page sponsored
    shopping-card carousels (vehicles, products, hotels, …)."""

    title: Optional[str] = UNSET
    """Ad title"""

    url: Optional[str] = UNSET
    """Destination URL of the ad. For ``type: SHOPPING_CARD`` items this is a Google ``aclk?``-redirected URL."""

    page: Optional[float] = UNSET
    """Page number where the ad was found"""

    displayed_url: Optional[str] = Field(default=UNSET, alias="displayedUrl")
    """Formatted URL as displayed in the ad"""

    domain: Optional[str] = UNSET
    """Domain name of the advertiser"""

    description: Optional[str] = UNSET
    """Ad description text. For ``type: RESULT`` items this is classic ad copy. For ``type: SHOPPING_CARD`` items it
    carries category-specific subtitle fragments joined with ``·`` (e.g. vehicle condition + city: ``Used - 94k miles ·
    Greeley``)."""

    category: Optional[str] = UNSET
    """Carousel header label for shopping-card ads. Examples observed today include ``Sponsored products``, ``Sponsored
    vehicles``, and ``Sponsored hotels``. Omitted for ``type: RESULT`` text ads."""

    price: Optional[Price3] = UNSET
    """Product price for ``type: SHOPPING_CARD`` ads. ``currency`` and ``raw`` are always present; ``value`` is omitted
    when the number doesn't parse, and the whole object is omitted when no currency appears beside a number. ``raw``
    carries the visible text verbatim (e.g. ``"$0 down with 24 monthly payments"`` on installment offers) so consumers
    can disambiguate genuine zero prices from down-payment labels."""

    old_price: Optional[OldPrice1] = Field(default=UNSET, alias="oldPrice")
    """Original price before discount on ``type: SHOPPING_CARD`` ads that surface MSRP / sale messaging. Same shape as
    ``price``."""

    store: Optional[str] = UNSET
    """Merchant/dealer name attached to a ``type: SHOPPING_CARD`` ad."""

    image_url: Optional[str] = Field(default=UNSET, alias="imageUrl")
    """Hero image URL served by Google's ``encrypted-tbn`` CDN for ``type: SHOPPING_CARD`` ads. Omitted when the
    lazy-image chain cannot resolve a non-placeholder source."""

    sitelinks: Optional[list[Sitelinks1]] = UNSET
    """Sitelinks displayed under the ad"""


class Ads3Dict(TypedDict):
    position: NotRequired[float]
    block_position: NotRequired[BlockPositionOrStr]
    type_: NotRequired[Type1OrStr]
    title: NotRequired[str]
    url: NotRequired[str]
    page: NotRequired[float]
    displayed_url: NotRequired[str]
    domain: NotRequired[str]
    description: NotRequired[str]
    category: NotRequired[str]
    price: NotRequired[Price3Dict]
    old_price: NotRequired[OldPrice1Dict]
    store: NotRequired[str]
    image_url: NotRequired[str]
    sitelinks: NotRequired[list[Sitelinks1Dict]]
