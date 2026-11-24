from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stat import Stat, StatDict


class StatsCard(SdkBaseModel):
    """Statistics card — present for sports teams, organizations, and similar entities"""

    context: Optional[str] = UNSET
    """Context label for the stats (e.g. season or year)"""

    stats: Optional[list[Stat]] = UNSET
    """Individual stat items"""


class StatsCardDict(TypedDict):
    context: NotRequired[str]
    stats: NotRequired[list[StatDict]]
