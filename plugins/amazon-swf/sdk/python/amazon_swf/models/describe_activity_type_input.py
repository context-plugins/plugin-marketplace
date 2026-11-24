from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict


class DescribeActivityTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain in which the activity type is registered."""

    activity_type: ActivityType = Field(alias="activityType")


class DescribeActivityTypeInputDict(TypedDict):
    domain: str
    activity_type: ActivityTypeDict
