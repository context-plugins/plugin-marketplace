from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .anomalous_service import AnomalousService, AnomalousServiceDict
from .request_impact_statistics import RequestImpactStatistics, RequestImpactStatisticsDict


class InsightEvent(SdkBaseModel):
    summary: Optional[str] = Field(default=UNSET, alias="Summary")
    """A brief description of the event."""

    event_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EventTime")
    """The time, in Unix seconds, at which the event was recorded."""

    client_request_impact_statistics: Optional[RequestImpactStatistics] = Field(
        default=UNSET, alias="ClientRequestImpactStatistics"
    )
    root_cause_service_request_impact_statistics: Optional[RequestImpactStatistics] = Field(
        default=UNSET, alias="RootCauseServiceRequestImpactStatistics"
    )
    top_anomalous_services: Optional[list[AnomalousService]] = Field(default=UNSET, alias="TopAnomalousServices")
    """The service during the event that is most impacted by the incident."""


class InsightEventDict(TypedDict):
    summary: NotRequired[str]
    event_time: NotRequired[RFC3339DateTime]
    client_request_impact_statistics: NotRequired[RequestImpactStatisticsDict]
    root_cause_service_request_impact_statistics: NotRequired[RequestImpactStatisticsDict]
    top_anomalous_services: NotRequired[list[AnomalousServiceDict]]
