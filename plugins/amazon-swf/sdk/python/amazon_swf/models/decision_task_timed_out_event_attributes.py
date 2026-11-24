from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.timeout_type1 import TimeoutType1OrStr


class DecisionTaskTimedOutEventAttributes(SdkBaseModel):
    timeout_type: TimeoutType1OrStr = Field(alias="timeoutType")
    """The type of timeout that expired before the decision task could be completed."""

    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the DecisionTaskStarted event recorded when this decision task was started. This information can be
    useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class DecisionTaskTimedOutEventAttributesDict(TypedDict):
    timeout_type: TimeoutType1OrStr
    scheduled_event_id: int
    started_event_id: int
