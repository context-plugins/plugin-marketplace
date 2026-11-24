from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_rate_plan import GoogleCloudApigeeV1RatePlan, GoogleCloudApigeeV1RatePlanDict


class GoogleCloudApigeeV1ListRatePlansResponse(SdkBaseModel):
    """Response for ListRatePlans."""

    next_start_key: Optional[str] = Field(default=UNSET, alias="nextStartKey")
    """Value that can be sent as ``startKey`` to retrieve the next page of content. If this field is omitted, there are
    no subsequent pages."""

    rate_plans: Optional[list[GoogleCloudApigeeV1RatePlan]] = Field(default=UNSET, alias="ratePlans")
    """List of rate plans in an organization."""


class GoogleCloudApigeeV1ListRatePlansResponseDict(TypedDict):
    next_start_key: NotRequired[str]
    rate_plans: NotRequired[list[GoogleCloudApigeeV1RatePlanDict]]
