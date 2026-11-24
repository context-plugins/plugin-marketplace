from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anomaly_reported_time_range import AnomalyReportedTimeRange, AnomalyReportedTimeRangeDict
from .anomaly_resource import AnomalyResource, AnomalyResourceDict
from .anomaly_source_details import AnomalySourceDetails, AnomalySourceDetailsDict
from .anomaly_time_range import AnomalyTimeRange, AnomalyTimeRangeDict
from .enums.severity import SeverityOrStr
from .enums.status3 import Status3OrStr
from .enums.type import TypeOrStr
from .resource_collection import ResourceCollection, ResourceCollectionDict


class ReactiveAnomalySummary(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of the reactive anomaly."""

    severity: Optional[SeverityOrStr] = Field(default=UNSET, alias="Severity")
    """The severity of the anomaly. The severity of anomalies that generate an insight determine that insight's
    severity. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide."""

    status: Optional[Status3OrStr] = Field(default=UNSET, alias="Status")
    """The status of the reactive anomaly."""

    anomaly_time_range: Optional[AnomalyTimeRange] = Field(default=UNSET, alias="AnomalyTimeRange")
    anomaly_reported_time_range: Optional[AnomalyReportedTimeRange] = Field(
        default=UNSET, alias="AnomalyReportedTimeRange"
    )
    source_details: Optional[AnomalySourceDetails] = Field(default=UNSET, alias="SourceDetails")
    associated_insight_id: Optional[str] = Field(default=UNSET, alias="AssociatedInsightId")
    """The ID of the insight that contains this anomaly. An insight is composed of related anomalies."""

    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="Type")
    """The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly can cause a new
    insight. CONTEXTUAL - the anomaly contains additional information about an insight or its causal anomaly."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the reactive anomaly."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """A description of the reactive anomaly."""

    causal_anomaly_id: Optional[str] = Field(default=UNSET, alias="CausalAnomalyId")
    """The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a ``CAUSAL`` anomaly is
    always ``NULL``."""

    anomaly_resources: Optional[list[AnomalyResource]] = Field(default=UNSET, alias="AnomalyResources")
    """The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru."""


class ReactiveAnomalySummaryDict(TypedDict):
    id: NotRequired[str]
    severity: NotRequired[SeverityOrStr]
    status: NotRequired[Status3OrStr]
    anomaly_time_range: NotRequired[AnomalyTimeRangeDict]
    anomaly_reported_time_range: NotRequired[AnomalyReportedTimeRangeDict]
    source_details: NotRequired[AnomalySourceDetailsDict]
    associated_insight_id: NotRequired[str]
    resource_collection: NotRequired[ResourceCollectionDict]
    type_: NotRequired[TypeOrStr]
    name: NotRequired[str]
    description: NotRequired[str]
    causal_anomaly_id: NotRequired[str]
    anomaly_resources: NotRequired[list[AnomalyResourceDict]]
