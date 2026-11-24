from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.event_state import EventStateOrInt
from .event_action import EventAction, EventActionDict


class Data(SdkBaseModel):
    """Event status response"""

    id: Optional[UUID] = UNSET
    """Global event identifier"""

    ts: Optional[RFC3339DateTime] = UNSET
    """Event registration time in ISO format"""

    state: Optional[EventStateOrInt] = UNSET
    """State of event processing.
    * 1 - Event has been registered and awaiting processing
    * 2 - Event processing was delayed
    * 3 - Event was processed
    * 4 - Event has nothing to do with
    * 5 - Event processing was blocked by internal rules"""

    state_on: Optional[RFC3339DateTime] = UNSET
    """Time when event get in current state in ISO format"""

    decision: Optional[str] = UNSET
    """Processing decision"""

    actions: Optional[list[EventAction]] = UNSET
    """Actions taken on event"""


class DataDict(TypedDict):
    id: NotRequired[UUID]
    ts: NotRequired[RFC3339DateTime]
    state: NotRequired[EventStateOrInt]
    state_on: NotRequired[RFC3339DateTime]
    decision: NotRequired[str]
    actions: NotRequired[list[EventActionDict]]
