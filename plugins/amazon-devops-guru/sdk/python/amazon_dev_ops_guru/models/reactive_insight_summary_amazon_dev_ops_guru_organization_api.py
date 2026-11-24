from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity2 import Severity2OrStr
from .enums.status3_amazon_dev_ops_guru_organization_api import Status3AmazonDevOpsGuruOrganizationApiOrStr
from .insight_time_range import InsightTimeRange, InsightTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict
from .service_collection_amazon_dev_ops_guru_organization_api import (
    ServiceCollectionAmazonDevOpsGuruOrganizationApi,
    ServiceCollectionAmazonDevOpsGuruOrganizationApiDict,
)


class ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApi(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of a reactive summary."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of a reactive insight."""

    severity: Optional[Severity2OrStr] = Field(default=UNSET, alias="Severity")
    """The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru
    User Guide."""

    status: Optional[Status3AmazonDevOpsGuruOrganizationApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of a reactive insight."""

    insight_time_range: Optional[InsightTimeRange] = Field(default=UNSET, alias="InsightTimeRange")
    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    service_collection: Optional[ServiceCollectionAmazonDevOpsGuruOrganizationApi] = Field(
        default=UNSET, alias="ServiceCollection"
    )
    associated_resource_arns: Optional[list[str]] = Field(default=UNSET, alias="AssociatedResourceArns")
    """The Amazon Resource Names (ARNs) of the Amazon Web Services resources that generated this insight."""


class ReactiveInsightSummaryAmazonDevOpsGuruOrganizationApiDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    severity: NotRequired[Severity2OrStr]
    status: NotRequired[Status3AmazonDevOpsGuruOrganizationApiOrStr]
    insight_time_range: NotRequired[InsightTimeRangeDict]
    resource_collection: NotRequired[ResourceCollectionDict]
    service_collection: NotRequired[ServiceCollectionAmazonDevOpsGuruOrganizationApiDict]
    associated_resource_arns: NotRequired[list[str]]
