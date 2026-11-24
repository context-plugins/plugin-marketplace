from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .historical_usage import HistoricalUsage, HistoricalUsageDict


class HistoricalFeatureUsage(SdkBaseModel):
    name: Optional[str] = UNSET
    """feature name"""

    usage: Optional[list[HistoricalUsage]] = UNSET


class HistoricalFeatureUsageDict(TypedDict):
    name: NotRequired[str]
    usage: NotRequired[list[HistoricalUsageDict]]
