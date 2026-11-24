from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict
from .enums.status import StatusOrStr


class ActivityTypeInfo(SdkBaseModel):
    activity_type: ActivityType = Field(alias="activityType")
    status: StatusOrStr
    """The current status of the activity type."""

    description: Optional[str] = UNSET
    """The description of the activity type provided in RegisterActivityType."""

    creation_date: RFC3339DateTime = Field(alias="creationDate")
    """The date and time this activity type was created through RegisterActivityType."""

    deprecation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="deprecationDate")
    """If DEPRECATED, the date and time DeprecateActivityType was called."""


class ActivityTypeInfoDict(TypedDict):
    activity_type: ActivityTypeDict
    status: StatusOrStr
    description: NotRequired[str]
    creation_date: RFC3339DateTime
    deprecation_date: NotRequired[RFC3339DateTime]
