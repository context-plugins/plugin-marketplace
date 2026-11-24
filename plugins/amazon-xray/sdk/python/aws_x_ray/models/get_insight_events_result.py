from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_event import InsightEvent, InsightEventDict


class GetInsightEventsResult(SdkBaseModel):
    insight_events: Optional[list[InsightEvent]] = Field(default=UNSET, alias="InsightEvents")
    """A detailed description of the event. This includes the time of the event, client and root cause impact
    statistics, and the top anomalous service at the time of the event."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Use this token to retrieve the next page of insight events."""


class GetInsightEventsResultDict(TypedDict):
    insight_events: NotRequired[list[InsightEventDict]]
    next_token: NotRequired[str]
