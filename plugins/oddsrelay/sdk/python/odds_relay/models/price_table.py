from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recent import Recent, RecentDict


class PriceTable(SdkBaseModel):
    """The price table the feed prices every call from, byte for byte. A call costs max(1, ceil(whole x each named
    filter's points / 100))."""

    rate_card: str
    provisional: Optional[bool] = UNSET
    captured_at: Optional[str] = UNSET
    recent: Recent
    regions: Any


class PriceTableDict(TypedDict):
    rate_card: str
    provisional: NotRequired[bool]
    captured_at: NotRequired[str]
    recent: RecentDict
    regions: Any
