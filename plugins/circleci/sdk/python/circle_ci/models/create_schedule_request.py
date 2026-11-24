from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.attribution_actor import AttributionActorOrStr
from .timetable import Timetable, TimetableDict


class CreateScheduleRequest(SdkBaseModel):
    name: str
    """The name of the schedule"""

    description: Optional[str] = UNSET
    """The description of the schedule"""

    timetable: Timetable
    attribution_actor: AttributionActorOrStr = Field(alias="attribution-actor")
    """Who to attribute pipeline triggers to"""

    parameters: Any
    """Pipeline parameters for the schedule"""


class CreateScheduleRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    timetable: TimetableDict
    attribution_actor: AttributionActorOrStr
    parameters: Any
