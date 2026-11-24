from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.result_type import ResultTypeOrStr
from .enums.severity_doi_t_insights_api import SeverityDoiTInsightsApiOrStr
from .resource_result_enhancement import ResourceResultEnhancement, ResourceResultEnhancementDict
from .result import Result, ResultDict


class ResourceResult(SdkBaseModel):
    """A single resource-level result within an insight, as returned in API responses."""

    resource_id: str = Field(alias="resourceId")
    """The cloud resource identifier."""

    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    """What the resource actually is, eg. for an EC2 resource ID, this field would be ``instance``"""

    cloud_provider: str = Field(alias="cloudProvider")
    """The cloud provider associated with the resource."""

    account: str
    """The cloud account or project ID containing this resource."""

    location: Optional[str] = UNSET
    """represents the region/zone of the resource in AWS, or equivalent for other providers"""

    resolved: Optional[bool] = UNSET
    """Whether this resource-level issue has been resolved. Computed server-side."""

    severity: Optional[SeverityDoiTInsightsApiOrStr] = UNSET
    """The severity level of the finding. Computed server-side from the security risk counts."""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """the external ID of the resource in the provider's system for the resource"""

    external_url: Optional[str] = Field(default=UNSET, alias="externalUrl")
    """the URL to the resource-level issue in the provider's system"""

    metadata: Optional[Any] = UNSET
    """contains any additional information for the resource results"""

    enhancement: Optional[ResourceResultEnhancement] = UNSET
    """DoiT-managed metadata associated with a resource result."""

    result_type: ResultTypeOrStr = Field(alias="resultType")
    """The discriminator property that determines which fields are populated in the 'result' object."""

    result: Optional[Result] = UNSET
    """The result data for this resource. Which fields are populated depends on the resultType. For security_risk:
    critical, high, medium, low. For potential_daily_savings: value. For potential_daily_savings_with_recommendation:
    value, current, recommendation. For potential_daily_savings_with_cluster_agent: value, agentInstalled."""


class ResourceResultDict(TypedDict):
    resource_id: str
    resource_type: NotRequired[str]
    cloud_provider: str
    account: str
    location: NotRequired[str]
    resolved: NotRequired[bool]
    severity: NotRequired[SeverityDoiTInsightsApiOrStr]
    external_id: NotRequired[str]
    external_url: NotRequired[str]
    metadata: NotRequired[Any]
    enhancement: NotRequired[ResourceResultEnhancementDict]
    result_type: ResultTypeOrStr
    result: NotRequired[ResultDict]
