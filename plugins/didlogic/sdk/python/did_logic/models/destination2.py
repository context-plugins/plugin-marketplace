from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dialing_type1 import DialingType1OrStr


class Destination2(SdkBaseModel):
    callhunt: Optional[bool] = UNSET
    """Enable callhunt (ring all). Ignored when ``destination[dialing_type]`` is sent."""

    dialing_type: Optional[DialingType1OrStr] = UNSET
    """Dialing mode of the group this destination belongs to: ``sequence`` tries it alone, ``ring_all`` dials the whole
    group at once, ``random`` picks group members in a random order. Mirrors ``callhunt`` (``ring_all`` maps to true).
    Takes precedence over ``callhunt``."""

    active: Optional[bool] = UNSET
    """Activate/deactivate this destination"""


class Destination2Dict(TypedDict):
    callhunt: NotRequired[bool]
    dialing_type: NotRequired[DialingType1OrStr]
    active: NotRequired[bool]
