from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_amazon_dev_ops_guru_insights_api import SeverityAmazonDevOpsGuruInsightsApiOrStr
from .enums.status1_amazon_dev_ops_guru_insights_api import Status1AmazonDevOpsGuruInsightsApiOrStr
from .insight_time_range import InsightTimeRange, InsightTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict
from .service_collection import ServiceCollection, ServiceCollectionDict


class ReactiveInsightSummary(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of a reactive summary."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of a reactive insight."""

    severity: Optional[SeverityAmazonDevOpsGuruInsightsApiOrStr] = Field(default=UNSET, alias="Severity")
    """The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru
    User Guide."""

    status: Optional[Status1AmazonDevOpsGuruInsightsApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of a reactive insight."""

    insight_time_range: Optional[InsightTimeRange] = Field(default=UNSET, alias="InsightTimeRange")
    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    service_collection: Optional[ServiceCollection] = Field(default=UNSET, alias="ServiceCollection")
    associated_resource_arns: Optional[list[str]] = Field(default=UNSET, alias="AssociatedResourceArns")
    """The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight."""


class ReactiveInsightSummaryDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    severity: NotRequired[SeverityAmazonDevOpsGuruInsightsApiOrStr]
    status: NotRequired[Status1AmazonDevOpsGuruInsightsApiOrStr]
    insight_time_range: NotRequired[InsightTimeRangeDict]
    resource_collection: NotRequired[ResourceCollectionDict]
    service_collection: NotRequired[ServiceCollectionDict]
    associated_resource_arns: NotRequired[list[str]]
