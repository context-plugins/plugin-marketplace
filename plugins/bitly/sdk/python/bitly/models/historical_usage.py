from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoricalUsage(SdkBaseModel):
    count: Optional[int] = UNSET
    """the usage count during the time period"""

    unit_start: Optional[str] = UNSET
    """ISO_TIMESTAMP of the beginning of the time period"""


class HistoricalUsageDict(TypedDict):
    count: NotRequired[int]
    unit_start: NotRequired[str]
