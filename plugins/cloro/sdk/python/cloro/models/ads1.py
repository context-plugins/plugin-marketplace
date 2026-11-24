from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .price6 import Price6, Price6Dict


class Ads1(SdkBaseModel):
    title: Optional[str] = UNSET
    """Ad product title"""

    url: Optional[str] = UNSET
    """Ad click-through URL"""

    position: Optional[int] = UNSET
    """Position index of the ad"""

    price: Optional[Price6] = UNSET
    """Price as displayed. ``raw`` is always present; ``value`` and ``currency`` are omitted when they can't be parsed,
    never sent as ``null``."""

    store: Optional[str] = UNSET
    """Merchant/store name"""

    rating: Optional[float] = UNSET
    """Product rating"""

    reviews: Optional[str] = UNSET
    """Review count"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class Ads1Dict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
    position: NotRequired[int]
    price: NotRequired[Price6Dict]
    store: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    redirect_link: NotRequired[str]
