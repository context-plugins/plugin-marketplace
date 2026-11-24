from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity2 import Severity2OrStr
from .enums.status2 import Status2OrStr
from .insight_time_range import InsightTimeRange, InsightTimeRangeDict
from .prediction_time_range import PredictionTimeRange, PredictionTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict
from .service_collection_amazon_dev_ops_guru_organization_api import (
    ServiceCollectionAmazonDevOpsGuruOrganizationApi,
    ServiceCollectionAmazonDevOpsGuruOrganizationApiDict,
)


class ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApi(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of the proactive insight."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the proactive insight."""

    severity: Optional[Severity2OrStr] = Field(default=UNSET, alias="Severity")
    """The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru
    User Guide."""

    status: Optional[Status2OrStr] = Field(default=UNSET, alias="Status")
    """The status of the proactive insight."""

    insight_time_range: Optional[InsightTimeRange] = Field(default=UNSET, alias="InsightTimeRange")
    prediction_time_range: Optional[PredictionTimeRange] = Field(default=UNSET, alias="PredictionTimeRange")
    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    service_collection: Optional[ServiceCollectionAmazonDevOpsGuruOrganizationApi] = Field(
        default=UNSET, alias="ServiceCollection"
    )
    associated_resource_arns: Optional[list[str]] = Field(default=UNSET, alias="AssociatedResourceArns")
    """The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight."""


class ProactiveInsightSummaryAmazonDevOpsGuruOrganizationApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    severity: NotRequired[Severity2OrStr]
    status: NotRequired[Status2OrStr]
    insight_time_range: NotRequired[InsightTimeRangeDict]
    prediction_time_range: NotRequired[PredictionTimeRangeDict]
    resource_collection: NotRequired[ResourceCollectionDict]
    service_collection: NotRequired[ServiceCollectionAmazonDevOpsGuruOrganizationApiDict]
    associated_resource_arns: NotRequired[list[str]]
