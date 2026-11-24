from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HotelOption(SdkBaseModel):
    provider: Optional[str] = UNSET
    """Booking provider name"""

    price: Optional[str] = UNSET
    """Price as displayed"""

    link: Optional[str] = UNSET
    """URL to book on this provider"""

    note: Optional[str] = UNSET
    """Optional note (e.g. "Includes breakfast") — omitted when not present"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class HotelOptionDict(TypedDict):
    provider: NotRequired[str]
    price: NotRequired[str]
    link: NotRequired[str]
    note: NotRequired[str]
    redirect_link: NotRequired[str]
