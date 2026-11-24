from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dialing_type1 import DialingType1OrStr
from .enums.transport1 import Transport1OrInt


class Destination1(SdkBaseModel):
    destination: Optional[str] = UNSET
    """Forwarding target (SIP URI or phone number). Required for every transport except Webphone (10), which rings your
    webphone and takes no address."""

    callhunt: Optional[bool] = UNSET
    """Enable callhunt (ring all). Ignored when ``destination[dialing_type]`` is sent."""

    dialing_type: Optional[DialingType1OrStr] = UNSET
    """Dialing mode of the group this destination belongs to: ``sequence`` tries it alone, ``ring_all`` dials the whole
    group at once, ``random`` picks group members in a random order. Mirrors ``callhunt`` (``ring_all`` maps to true).
    Takes precedence over ``callhunt``."""

    active: Optional[bool] = UNSET
    """Activate this destination"""

    transport: Transport1OrInt
    """Transport type (1=SIP URI, 4=Phone number, 5=SIP device, 10=Webphone, 12=WebSocket). 12 requires an account
    enabled for voice streaming."""


class Destination1Dict(TypedDict):
    destination: NotRequired[str]
    callhunt: NotRequired[bool]
    dialing_type: NotRequired[DialingType1OrStr]
    active: NotRequired[bool]
    transport: Transport1OrInt
