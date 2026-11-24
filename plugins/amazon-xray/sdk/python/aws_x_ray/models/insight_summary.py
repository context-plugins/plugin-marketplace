from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .anomalous_service import AnomalousService, AnomalousServiceDict
from .enums.category import CategoryOrStr
from .enums.state import StateOrStr
from .request_impact_statistics import RequestImpactStatistics, RequestImpactStatisticsDict
from .service_id import ServiceId, ServiceIdDict


class InsightSummary(SdkBaseModel):
    insight_id: Optional[str] = Field(default=UNSET, alias="InsightId")
    """The insights unique identifier."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The Amazon Resource Name (ARN) of the group that the insight belongs to."""

    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The name of the group that the insight belongs to."""

    root_cause_service_id: Optional[ServiceId] = Field(default=UNSET, alias="RootCauseServiceId")
    categories: Optional[list[CategoryOrStr]] = Field(default=UNSET, alias="Categories")
    """Categories The categories that label and describe the type of insight."""

    state: Optional[StateOrStr] = Field(default=UNSET, alias="State")
    """The current state of the insight."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The time, in Unix seconds, at which the insight began."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time, in Unix seconds, at which the insight ended."""

    summary: Optional[str] = Field(default=UNSET, alias="Summary")
    """A brief description of the insight."""

    client_request_impact_statistics: Optional[RequestImpactStatistics] = Field(
        default=UNSET, alias="ClientRequestImpactStatistics"
    )
    root_cause_service_request_impact_statistics: Optional[RequestImpactStatistics] = Field(
        default=UNSET, alias="RootCauseServiceRequestImpactStatistics"
    )
    top_anomalous_services: Optional[list[AnomalousService]] = Field(default=UNSET, alias="TopAnomalousServices")
    """The service within the insight that is most impacted by the incident."""

    last_update_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdateTime")
    """The time, in Unix seconds, that the insight was last updated."""


class InsightSummaryDict(TypedDict):
    insight_id: NotRequired[str]
    group_arn: NotRequired[str]
    group_name: NotRequired[str]
    root_cause_service_id: NotRequired[ServiceIdDict]
    categories: NotRequired[list[CategoryOrStr]]
    state: NotRequired[StateOrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    summary: NotRequired[str]
    client_request_impact_statistics: NotRequired[RequestImpactStatisticsDict]
    root_cause_service_request_impact_statistics: NotRequired[RequestImpactStatisticsDict]
    top_anomalous_services: NotRequired[list[AnomalousServiceDict]]
    last_update_time: NotRequired[RFC3339DateTime]
