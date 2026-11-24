from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_amazon_dev_ops_guru_insights_api import SeverityAmazonDevOpsGuruInsightsApiOrStr
from .enums.status_amazon_dev_ops_guru_insights_api import StatusAmazonDevOpsGuruInsightsApiOrStr
from .insight_time_range import InsightTimeRange, InsightTimeRangeDict
from .prediction_time_range import PredictionTimeRange, PredictionTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict
from .service_collection import ServiceCollection, ServiceCollectionDict


class ProactiveInsightSummary(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of the proactive insight."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the proactive insight."""

    severity: Optional[SeverityAmazonDevOpsGuruInsightsApiOrStr] = Field(default=UNSET, alias="Severity")
    """The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru
    User Guide."""

    status: Optional[StatusAmazonDevOpsGuruInsightsApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the proactive insight."""

    insight_time_range: Optional[InsightTimeRange] = Field(default=UNSET, alias="InsightTimeRange")
    prediction_time_range: Optional[PredictionTimeRange] = Field(default=UNSET, alias="PredictionTimeRange")
    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    service_collection: Optional[ServiceCollection] = Field(default=UNSET, alias="ServiceCollection")
    associated_resource_arns: Optional[list[str]] = Field(default=UNSET, alias="AssociatedResourceArns")
    """The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight."""


class ProactiveInsightSummaryDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    severity: NotRequired[SeverityAmazonDevOpsGuruInsightsApiOrStr]
    status: NotRequired[StatusAmazonDevOpsGuruInsightsApiOrStr]
    insight_time_range: NotRequired[InsightTimeRangeDict]
    prediction_time_range: NotRequired[PredictionTimeRangeDict]
    resource_collection: NotRequired[ResourceCollectionDict]
    service_collection: NotRequired[ServiceCollectionDict]
    associated_resource_arns: NotRequired[list[str]]
