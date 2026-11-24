from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .actor_circle_ci_rest_api_v2_schedule_api import (
    ActorCircleCiRestApiV2ScheduleApi,
    ActorCircleCiRestApiV2ScheduleApiDict,
)
from .timetable import Timetable, TimetableDict


class Schedule(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the schedule"""

    name: Optional[str] = UNSET
    """The name of the schedule"""

    description: Optional[str] = UNSET
    """The description of the schedule"""

    timetable: Optional[Timetable] = UNSET
    parameters: Optional[Any] = UNSET
    """Pipeline parameters for the schedule"""

    project_slug: Optional[str] = UNSET
    """The project slug"""

    actor: Optional[ActorCircleCiRestApiV2ScheduleApi] = UNSET
    """The user who created the schedule"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the schedule was created"""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """When the schedule was last updated"""


class ScheduleDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    description: NotRequired[str]
    timetable: NotRequired[TimetableDict]
    parameters: NotRequired[Any]
    project_slug: NotRequired[str]
    actor: NotRequired[ActorCircleCiRestApiV2ScheduleApiDict]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
