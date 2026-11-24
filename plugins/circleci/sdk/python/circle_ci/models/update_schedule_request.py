from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribution_actor import AttributionActorOrStr
from .timetable import Timetable, TimetableDict


class UpdateScheduleRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the schedule"""

    description: Optional[str] = UNSET
    """The description of the schedule"""

    timetable: Optional[Timetable] = UNSET
    attribution_actor: Optional[AttributionActorOrStr] = Field(default=UNSET, alias="attribution-actor")
    """Who to attribute pipeline triggers to"""

    parameters: Optional[Any] = UNSET
    """Pipeline parameters for the schedule"""


class UpdateScheduleRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    timetable: NotRequired[TimetableDict]
    attribution_actor: NotRequired[AttributionActorOrStr]
    parameters: NotRequired[Any]
