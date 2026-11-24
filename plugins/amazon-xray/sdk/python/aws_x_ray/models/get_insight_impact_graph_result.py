from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .insight_impact_graph_service import InsightImpactGraphService, InsightImpactGraphServiceDict


class GetInsightImpactGraphResult(SdkBaseModel):
    insight_id: Optional[str] = Field(default=UNSET, alias="InsightId")
    """The insight's unique identifier."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The provided start time."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The provided end time."""

    service_graph_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ServiceGraphStartTime")
    """The time, in Unix seconds, at which the service graph started."""

    service_graph_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ServiceGraphEndTime")
    """The time, in Unix seconds, at which the service graph ended."""

    services: Optional[list[InsightImpactGraphService]] = Field(default=UNSET, alias="Services")
    """The Amazon Web Services instrumented services related to the insight."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetInsightImpactGraphResultDict(TypedDict):
    insight_id: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    service_graph_start_time: NotRequired[RFC3339DateTime]
    service_graph_end_time: NotRequired[RFC3339DateTime]
    services: NotRequired[list[InsightImpactGraphServiceDict]]
    next_token: NotRequired[str]
