from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_developer_subscription import (
    GoogleCloudApigeeV1DeveloperSubscription,
    GoogleCloudApigeeV1DeveloperSubscriptionDict,
)


class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse(SdkBaseModel):
    """Response for ListDeveloperSubscriptions."""

    developer_subscriptions: Optional[list[GoogleCloudApigeeV1DeveloperSubscription]] = Field(
        default=UNSET, alias="developerSubscriptions"
    )
    """List of all subscriptions."""

    next_start_key: Optional[str] = Field(default=UNSET, alias="nextStartKey")
    """Value that can be sent as ``startKey`` to retrieve the next page of content. If this field is omitted, there are
    no subsequent pages."""


class GoogleCloudApigeeV1ListDeveloperSubscriptionsResponseDict(TypedDict):
    developer_subscriptions: NotRequired[list[GoogleCloudApigeeV1DeveloperSubscriptionDict]]
    next_start_key: NotRequired[str]
