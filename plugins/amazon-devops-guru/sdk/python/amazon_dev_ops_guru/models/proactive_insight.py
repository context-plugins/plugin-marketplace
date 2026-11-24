from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_amazon_dev_ops_guru_insights_api import SeverityAmazonDevOpsGuruInsightsApiOrStr
from .enums.status_amazon_dev_ops_guru_insights_api import StatusAmazonDevOpsGuruInsightsApiOrStr
from .insight_time_range import InsightTimeRange, InsightTimeRangeDict
from .prediction_time_range import PredictionTimeRange, PredictionTimeRangeDict
from .resource_collection import ResourceCollection, ResourceCollectionDict


class ProactiveInsight(SdkBaseModel):
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
    ssm_ops_item_id: Optional[str] = Field(default=UNSET, alias="SsmOpsItemId")
    """The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable the creation
    of OpstItems insights before they are created for each insight."""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Describes the proactive insight."""


class ProactiveInsightDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    severity: NotRequired[SeverityAmazonDevOpsGuruInsightsApiOrStr]
    status: NotRequired[StatusAmazonDevOpsGuruInsightsApiOrStr]
    insight_time_range: NotRequired[InsightTimeRangeDict]
    prediction_time_range: NotRequired[PredictionTimeRangeDict]
    resource_collection: NotRequired[ResourceCollectionDict]
    ssm_ops_item_id: NotRequired[str]
    description: NotRequired[str]
