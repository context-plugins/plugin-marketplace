from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .schedule import Schedule, ScheduleDict


class ScheduleList(SdkBaseModel):
    items: Optional[list[Schedule]] = UNSET
    """List of schedules"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class ScheduleListDict(TypedDict):
    items: NotRequired[list[ScheduleDict]]
    next_page_token: NotRequired[str]
