from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .schedule import Schedule, ScheduleDict


class ApiV1SchedulesResponse(SdkBaseModel):
    schedules: list[Schedule]


class ApiV1SchedulesResponseDict(TypedDict):
    schedules: list[ScheduleDict]
