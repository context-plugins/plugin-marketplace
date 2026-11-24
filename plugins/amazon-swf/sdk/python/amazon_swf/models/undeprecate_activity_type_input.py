from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict


class UndeprecateActivityTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain of the deprecated activity type."""

    activity_type: ActivityType = Field(alias="activityType")


class UndeprecateActivityTypeInputDict(TypedDict):
    domain: str
    activity_type: ActivityTypeDict
