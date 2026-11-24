from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeAccountOverviewResponse(SdkBaseModel):
    reactive_insights: int = Field(alias="ReactiveInsights")
    """An integer that specifies the number of open reactive insights in your Amazon Web Services account that were
    created during the time range passed in."""

    proactive_insights: int = Field(alias="ProactiveInsights")
    """An integer that specifies the number of open proactive insights in your Amazon Web Services account that were
    created during the time range passed in."""

    mean_time_to_recover_in_milliseconds: int = Field(alias="MeanTimeToRecoverInMilliseconds")
    """The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in."""


class DescribeAccountOverviewResponseDict(TypedDict):
    reactive_insights: int
    proactive_insights: int
    mean_time_to_recover_in_milliseconds: int
