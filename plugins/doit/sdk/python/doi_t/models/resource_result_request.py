from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.result_type import ResultTypeOrStr
from .result import Result, ResultDict


class ResourceResultRequest(SdkBaseModel):
    """A single resource-level result for creating or updating an insight. Server-computed fields (severity, resolved,
    enhancement) are not accepted here and will be ignored. Identity fields (resourceId, resultType, account,
    cloudProvider) form the composite key. The fields location and resource_type are set on creation only — any values
    provided for these fields during subsequent upserts are silently ignored."""

    resource_id: str = Field(alias="resourceId")
    """The cloud resource identifier."""

    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    """What the resource actually is, e.g. for an EC2 resource ID, this field would be ``instance``. Immutable after
    creation — updates to this field are silently ignored."""

    cloud_provider: str = Field(alias="cloudProvider")
    """Immutable after creation — updates to this field are silently ignored."""

    account: str
    """The cloud account or project ID containing this resource. Immutable after creation — updates to this field are
    silently ignored."""

    location: Optional[str] = UNSET
    """Represents the region/zone of the resource in AWS, or equivalent for other providers. Immutable after creation —
    updates to this field are silently ignored."""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """the external ID of the resource in the provider's system for the resource"""

    external_url: Optional[str] = Field(default=UNSET, alias="externalUrl")
    """the URL to the resource-level issue in the provider's system"""

    metadata: Optional[Any] = UNSET
    """contains any additional information for the resource results"""

    result_type: ResultTypeOrStr = Field(alias="resultType")
    """The discriminator property that determines which fields are populated in the 'result' object."""

    result: Optional[Result] = UNSET
    """The result data for this resource. Which fields are populated depends on the resultType. For security_risk:
    critical, high, medium, low. For potential_daily_savings: value. For potential_daily_savings_with_recommendation:
    value, current, recommendation. For potential_daily_savings_with_cluster_agent: value, agentInstalled."""


class ResourceResultRequestDict(TypedDict):
    resource_id: str
    resource_type: NotRequired[str]
    cloud_provider: str
    account: str
    location: NotRequired[str]
    external_id: NotRequired[str]
    external_url: NotRequired[str]
    metadata: NotRequired[Any]
    result_type: ResultTypeOrStr
    result: NotRequired[ResultDict]
