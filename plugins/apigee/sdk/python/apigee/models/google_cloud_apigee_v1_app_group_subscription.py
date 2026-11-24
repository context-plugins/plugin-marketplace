from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AppGroupSubscription(SdkBaseModel):
    """AppGroup Subscription details."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time when the API product subscription was last modified in milliseconds since epoch."""

    apiproduct: Optional[str] = UNSET
    """Required. Name of the API product for which the appgroup is purchasing a subscription."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time when the API product subscription was created in milliseconds since epoch."""

    name: Optional[str] = UNSET
    """Output only. Name of the API product subscription."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. Time when the API product subscription ends in milliseconds since epoch."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. Time when the API product subscription starts in milliseconds since epoch."""


class GoogleCloudApigeeV1AppGroupSubscriptionDict(TypedDict):
    last_modified_at: NotRequired[str]
    apiproduct: NotRequired[str]
    created_at: NotRequired[str]
    name: NotRequired[str]
    end_time: NotRequired[str]
    start_time: NotRequired[str]
