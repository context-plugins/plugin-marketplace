from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class InsightImpactGraphRequest(SdkBaseModel):
    insight_id: str = Field(alias="InsightId")
    """The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId."""

    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided
    and can't be more than 30 days old."""

    end_time: RFC3339DateTime = Field(alias="EndTime")
    """The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The
    time range between the start time and end time can't be more than six hours."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of results."""


class InsightImpactGraphRequestDict(TypedDict):
    insight_id: str
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
    next_token: NotRequired[str]
