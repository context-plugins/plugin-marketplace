from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .anomaly_reported_time_range import AnomalyReportedTimeRange, AnomalyReportedTimeRangeDict
from .anomaly_resource import AnomalyResource, AnomalyResourceDict
from .anomaly_source_details import AnomalySourceDetails, AnomalySourceDetailsDict
from .anomaly_source_metadata import AnomalySourceMetadata, AnomalySourceMetadataDict
from .anomaly_time_range import AnomalyTimeRange, AnomalyTimeRangeDict
from .enums.severity import SeverityOrStr
from .enums.status1 import Status1OrStr
from .prediction_time_range import PredictionTimeRange, PredictionTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict


class ProactiveAnomalySummary(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of the anomaly."""

    severity: Optional[SeverityOrStr] = Field(default=UNSET, alias="Severity")
    """The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's
    severity. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide."""

    status: Optional[Status1OrStr] = Field(default=UNSET, alias="Status")
    """The status of the anomaly."""

    update_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="UpdateTime")
    """The time of the anomaly's most recent update."""

    anomaly_time_range: Optional[AnomalyTimeRange] = Field(default=UNSET, alias="AnomalyTimeRange")
    anomaly_reported_time_range: Optional[AnomalyReportedTimeRange] = Field(
        default=UNSET, alias="AnomalyReportedTimeRange"
    )
    prediction_time_range: Optional[PredictionTimeRange] = Field(default=UNSET, alias="PredictionTimeRange")
    source_details: Optional[AnomalySourceDetails] = Field(default=UNSET, alias="SourceDetails")
    associated_insight_id: Optional[str] = Field(default=UNSET, alias="AssociatedInsightId")
    """The ID of the insight that contains this anomaly. An insight is composed of related anomalies."""

    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    limit: Optional[float] = Field(default=UNSET, alias="Limit")
    """A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is related to the
    anomalous behavior that generated this anomaly."""

    source_metadata: Optional[AnomalySourceMetadata] = Field(default=UNSET, alias="SourceMetadata")
    anomaly_resources: Optional[list[AnomalyResource]] = Field(default=UNSET, alias="AnomalyResources")
    """Information about a resource in which DevOps Guru detected anomalous behavior."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """A description of the proactive anomaly."""


class ProactiveAnomalySummaryDict(TypedDict):
    id: NotRequired[str]
    severity: NotRequired[SeverityOrStr]
    status: NotRequired[Status1OrStr]
    update_time: NotRequired[RFC3339DateTime]
    anomaly_time_range: NotRequired[AnomalyTimeRangeDict]
    anomaly_reported_time_range: NotRequired[AnomalyReportedTimeRangeDict]
    prediction_time_range: NotRequired[PredictionTimeRangeDict]
    source_details: NotRequired[AnomalySourceDetailsDict]
    associated_insight_id: NotRequired[str]
    resource_collection: NotRequired[ResourceCollectionDict]
    limit: NotRequired[float]
    source_metadata: NotRequired[AnomalySourceMetadataDict]
    anomaly_resources: NotRequired[list[AnomalyResourceDict]]
    description: NotRequired[str]
