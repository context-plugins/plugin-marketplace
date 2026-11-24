from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_filter1 import EventFilter1, EventFilter1Dict


class StartBackfillJobRequest(SdkBaseModel):
    """Request for manually initiating a backfill job for a specific stream object."""

    event_filter: Optional[EventFilter1] = Field(default=UNSET, alias="eventFilter")
    """Optional. Optional event filter. If not set, or empty, the backfill will be performed on the entire object. This
    is currently used for partial backfill and only supported for SQL sources."""


class StartBackfillJobRequestDict(TypedDict):
    event_filter: NotRequired[EventFilter1Dict]
