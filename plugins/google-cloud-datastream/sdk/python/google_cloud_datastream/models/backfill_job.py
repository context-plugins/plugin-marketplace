from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr
from .enums.trigger import TriggerOrStr
from .error import Error, ErrorDict
from .event_filter3 import EventFilter3, EventFilter3Dict


class BackfillJob(SdkBaseModel):
    """Represents a backfill job on a specific stream object."""

    last_start_time: Optional[str] = Field(default=UNSET, alias="lastStartTime")
    """Output only. Backfill job's start time."""

    state: Optional[StateOrStr] = UNSET
    """Output only. Backfill job state."""

    trigger: Optional[TriggerOrStr] = UNSET
    """Backfill job's triggering reason."""

    errors: Optional[list[Error]] = UNSET
    """Output only. Errors which caused the backfill job to fail."""

    last_end_time: Optional[str] = Field(default=UNSET, alias="lastEndTime")
    """Output only. Backfill job's end time."""

    event_filter: Optional[EventFilter3] = Field(default=UNSET, alias="eventFilter")
    """Output only. The filter for performing a partial backfill."""


class BackfillJobDict(TypedDict):
    last_start_time: NotRequired[str]
    state: NotRequired[StateOrStr]
    trigger: NotRequired[TriggerOrStr]
    errors: NotRequired[list[ErrorDict]]
    last_end_time: NotRequired[str]
    event_filter: NotRequired[EventFilter3Dict]
