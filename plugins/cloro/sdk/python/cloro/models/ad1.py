from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr
from .old_price2 import OldPrice2, OldPrice2Dict
from .price4 import Price4, Price4Dict


class Ad1(SdkBaseModel):
    position: float
    """Position of the ad (1-indexed)"""

    title: str
    """Ad title"""

    url: str
    """Ad destination URL"""

    type_: Type2OrStr = Field(alias="type")
    """Sub-type discriminator. TEXT ads carry ``domain`` + ``description``; SHOPPING ads carry ``price`` + ``store`` (+
    optional ``old_price``). Always present."""

    domain: Optional[str] = UNSET
    """Domain name of the advertiser (present when ``type`` is ``TEXT``)"""

    description: Optional[str] = UNSET
    """Ad description text (present when ``type`` is ``TEXT``)"""

    price: Optional[Price4] = UNSET
    """Product price (present when ``type`` is ``SHOPPING``). ``currency`` and ``raw`` are always present; ``value`` is
    omitted when the number doesn't parse, and the whole object is omitted when no currency appears beside a number.
    ``raw`` carries the visible text verbatim."""

    old_price: Optional[OldPrice2] = UNSET
    """Original price before discount (present when ``type`` is ``SHOPPING`` and the ad has sale pricing). Same shape as
    ``price``."""

    store: Optional[str] = UNSET
    """Retailer name (present when ``type`` is ``SHOPPING``)"""

    image: Optional[str] = UNSET
    """Ad image URL (product photo for shopping ads, hero image for text ads)"""


class Ad1Dict(TypedDict):
    position: float
    title: str
    url: str
    type_: Type2OrStr
    domain: NotRequired[str]
    description: NotRequired[str]
    price: NotRequired[Price4Dict]
    old_price: NotRequired[OldPrice2Dict]
    store: NotRequired[str]
    image: NotRequired[str]
