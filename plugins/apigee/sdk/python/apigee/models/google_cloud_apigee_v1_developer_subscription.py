from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeveloperSubscription(SdkBaseModel):
    """Structure of a DeveloperSubscription."""

    apiproduct: Optional[str] = UNSET
    """Name of the API product for which the developer is purchasing a subscription."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. Time when the API product subscription was last modified in milliseconds since epoch."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Time when the API product subscription ends in milliseconds since epoch."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Time when the API product subscription starts in milliseconds since epoch."""

    name: Optional[str] = UNSET
    """Output only. Name of the API product subscription."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time when the API product subscription was created in milliseconds since epoch."""


class GoogleCloudApigeeV1DeveloperSubscriptionDict(TypedDict):
    apiproduct: NotRequired[str]
    last_modified_at: NotRequired[str]
    end_time: NotRequired[str]
    start_time: NotRequired[str]
    name: NotRequired[str]
    created_at: NotRequired[str]
