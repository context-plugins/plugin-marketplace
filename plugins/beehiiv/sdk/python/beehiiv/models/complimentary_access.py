from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .complimentary_access_stats2 import ComplimentaryAccessStats2, ComplimentaryAccessStats2Dict
from .enums.complimentary_access_time_unit2 import ComplimentaryAccessTimeUnit2OrStr
from .tier2 import Tier2, Tier2Dict


class ComplimentaryAccess(SdkBaseModel):
    """The complimentary access object."""

    id: str
    """The prefixed ID of the complimentary access object."""

    duration: Optional[int] = UNSET
    """The duration of the gift. Null when time_unit is "forever"."""

    time_unit: ComplimentaryAccessTimeUnit2OrStr
    """The unit of time for the gift duration."""

    description: str
    """A human-readable description of the gift (e.g., "3 Months Gift", "Lifetime Gift")."""

    tier_id: Optional[str] = UNSET
    """The prefixed ID of the associated tier. Always present."""

    tier: Optional[Tier2] = UNSET
    """The full tier object. Present when ``expand: [tier]`` is requested. Returned alongside ``tier_id``."""

    stats: Optional[ComplimentaryAccessStats2] = UNSET
    """Stats for this complimentary access. Retrievable by including ``expand: [stats]`` in the request."""


class ComplimentaryAccessDict(TypedDict):
    id: str
    duration: NotRequired[int]
    time_unit: ComplimentaryAccessTimeUnit2OrStr
    description: str
    tier_id: NotRequired[str]
    tier: NotRequired[Tier2Dict]
    stats: NotRequired[ComplimentaryAccessStats2Dict]
