from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .historical_feature_usage import HistoricalFeatureUsage, HistoricalFeatureUsageDict


class GroupHistoricalUsage(SdkBaseModel):
    group_guid: str
    """the group's guid"""

    unit: str
    """A unit of time (day, week, or month)"""

    start_date: str
    """Start date (format "2006-01-02") of the historical usage"""

    end_date: str
    """End date (format "2006-01-02") of the historical usage"""

    historical_limit_usage: list[HistoricalFeatureUsage]
    """an array of all of the group's historical feature usage"""


class GroupHistoricalUsageDict(TypedDict):
    group_guid: str
    unit: str
    start_date: str
    end_date: str
    historical_limit_usage: list[HistoricalFeatureUsageDict]
