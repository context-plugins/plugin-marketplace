from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict


class DeprecateActivityTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain in which the activity type is registered."""

    activity_type: ActivityType = Field(alias="activityType")


class DeprecateActivityTypeInputDict(TypedDict):
    domain: str
    activity_type: ActivityTypeDict
