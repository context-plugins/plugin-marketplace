from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TimerCanceledEventAttributes(SdkBaseModel):
    timer_id: str = Field(alias="timerId")
    """The unique ID of the timer that was canceled."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the TimerStarted event that was recorded when this timer was started. This information can be useful
    for diagnosing problems by tracing back the chain of events leading up to this event."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CancelTimer
    decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of
    events leading up to this event."""


class TimerCanceledEventAttributesDict(TypedDict):
    timer_id: str
    started_event_id: int
    decision_task_completed_event_id: int
