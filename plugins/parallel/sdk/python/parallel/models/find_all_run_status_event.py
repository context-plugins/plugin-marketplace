from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .find_all_run3 import FindAllRun3, FindAllRun3Dict


class FindAllRunStatusEvent(SdkBaseModel):
    """Event containing status update for FindAll run."""

    type_: Literal["findall.status"] = Field(default="findall.status", alias="type")
    """Event type; always 'findall.status'."""

    timestamp: RFC3339DateTime
    """Timestamp of the event."""

    event_id: str
    """Unique event identifier for the event."""

    data: FindAllRun3
    """Updated FindAll run information."""


class FindAllRunStatusEventDict(TypedDict):
    type_: Literal["findall.status"]
    timestamp: RFC3339DateTime
    event_id: str
    data: FindAllRun3Dict
