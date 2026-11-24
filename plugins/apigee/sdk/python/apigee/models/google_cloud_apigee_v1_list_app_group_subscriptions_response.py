from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_app_group_subscription import (
    GoogleCloudApigeeV1AppGroupSubscription,
    GoogleCloudApigeeV1AppGroupSubscriptionDict,
)


class GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse(SdkBaseModel):
    """Response for ListAppGroupSubscriptions."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Value that can be sent as ``pageToken`` to retrieve the next page of content. If this field is omitted, there are
    no subsequent pages."""

    app_group_subscriptions: Optional[list[GoogleCloudApigeeV1AppGroupSubscription]] = Field(
        default=UNSET, alias="appGroupSubscriptions"
    )
    """The list of subscriptions for an AppGroup."""


class GoogleCloudApigeeV1ListAppGroupSubscriptionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    app_group_subscriptions: NotRequired[list[GoogleCloudApigeeV1AppGroupSubscriptionDict]]
