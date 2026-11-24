from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_amazon_dev_ops_guru_organization_api import SeverityAmazonDevOpsGuruOrganizationApiOrStr
from .enums.status_amazon_dev_ops_guru_organization_api import StatusAmazonDevOpsGuruOrganizationApiOrStr
from .insight_time_range import InsightTimeRange, InsightTimeRangeDict
from .prediction_time_range import PredictionTimeRange, PredictionTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict
from .service_collection_amazon_dev_ops_guru_organization_api import (
    ServiceCollectionAmazonDevOpsGuruOrganizationApi,
    ServiceCollectionAmazonDevOpsGuruOrganizationApiDict,
)


class ProactiveOrganizationInsightSummary(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The ID of the insight summary."""

    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    """The ID of the Amazon Web Services account."""

    organizational_unit_id: Optional[str] = Field(default=UNSET, alias="OrganizationalUnitId")
    """The ID of the organizational unit."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the insight summary."""

    severity: Optional[SeverityAmazonDevOpsGuruOrganizationApiOrStr] = Field(default=UNSET, alias="Severity")
    """An array of severity values used to search for insights. For more information, see Understanding insight
    severities in the Amazon DevOps Guru User Guide."""

    status: Optional[StatusAmazonDevOpsGuruOrganizationApiOrStr] = Field(default=UNSET, alias="Status")
    """An array of status values used to search for insights."""

    insight_time_range: Optional[InsightTimeRange] = Field(default=UNSET, alias="InsightTimeRange")
    prediction_time_range: Optional[PredictionTimeRange] = Field(default=UNSET, alias="PredictionTimeRange")
    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    service_collection: Optional[ServiceCollectionAmazonDevOpsGuruOrganizationApi] = Field(
        default=UNSET, alias="ServiceCollection"
    )


class ProactiveOrganizationInsightSummaryDict(TypedDict):
    id: NotRequired[str]
    account_id: NotRequired[str]
    organizational_unit_id: NotRequired[str]
    name: NotRequired[str]
    severity: NotRequired[SeverityAmazonDevOpsGuruOrganizationApiOrStr]
    status: NotRequired[StatusAmazonDevOpsGuruOrganizationApiOrStr]
    insight_time_range: NotRequired[InsightTimeRangeDict]
    prediction_time_range: NotRequired[PredictionTimeRangeDict]
    resource_collection: NotRequired[ResourceCollectionDict]
    service_collection: NotRequired[ServiceCollectionAmazonDevOpsGuruOrganizationApiDict]
