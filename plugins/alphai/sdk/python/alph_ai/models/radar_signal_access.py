from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.scope import ScopeOrStr
from .enums.tier import TierOrStr


class RadarSignalAccess(SdkBaseModel):
    tier: TierOrStr
    delay_seconds: int
    scope: ScopeOrStr
    watchlist_count: int
    watchlist_limit: int


class RadarSignalAccessDict(TypedDict):
    tier: TierOrStr
    delay_seconds: int
    scope: ScopeOrStr
    watchlist_count: int
    watchlist_limit: int
