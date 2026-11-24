from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .status3 import Status3, Status3Dict


class Attempt3(SdkBaseModel):
    """Output only. The status of the task's first attempt. Only dispatch_time will be set. The other Attempt
    information is not retained by Cloud Tasks."""

    response_time: Optional[str] = Field(default=UNSET, alias="responseTime")
    """Output only. The time that this attempt response was received. ``response_time`` will be truncated to the nearest
    microsecond."""

    schedule_time: Optional[str] = Field(default=UNSET, alias="scheduleTime")
    """Output only. The time that this attempt was scheduled. ``schedule_time`` will be truncated to the nearest
    microsecond."""

    response_status: Optional[Status3] = Field(default=UNSET, alias="responseStatus")
    """Output only. The response from the worker for this attempt. If ``response_time`` is unset, then the task has not
    been attempted or is currently running and the ``response_status`` field is meaningless."""

    dispatch_time: Optional[str] = Field(default=UNSET, alias="dispatchTime")
    """Output only. The time that this attempt was dispatched. ``dispatch_time`` will be truncated to the nearest
    microsecond."""


class Attempt3Dict(TypedDict):
    response_time: NotRequired[str]
    schedule_time: NotRequired[str]
    response_status: NotRequired[Status3Dict]
    dispatch_time: NotRequired[str]
