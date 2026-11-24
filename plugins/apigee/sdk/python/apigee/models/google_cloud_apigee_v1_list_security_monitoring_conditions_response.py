from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_monitoring_condition import (
    GoogleCloudApigeeV1SecurityMonitoringCondition,
    GoogleCloudApigeeV1SecurityMonitoringConditionDict,
)


class GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse(SdkBaseModel):
    """Response for ListSecurityMonitoringConditions."""

    security_monitoring_conditions: Optional[list[GoogleCloudApigeeV1SecurityMonitoringCondition]] = Field(
        default=UNSET, alias="securityMonitoringConditions"
    )
    """List of security monitoring conditions in the organization."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponseDict(TypedDict):
    security_monitoring_conditions: NotRequired[list[GoogleCloudApigeeV1SecurityMonitoringConditionDict]]
    next_page_token: NotRequired[str]
