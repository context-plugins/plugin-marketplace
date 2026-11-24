from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .monitor_summary import MonitorSummary, MonitorSummaryDict


class ListMonitorsResponse(SdkBaseModel):
    monitors: Optional[list[MonitorSummary]] = Field(default=UNSET, alias="Monitors")
    """An array of objects that summarize each monitor's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListMonitorsResponseDict(TypedDict):
    monitors: NotRequired[list[MonitorSummaryDict]]
    next_token: NotRequired[str]
