from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TimerStartedEventAttributes(SdkBaseModel):
    timer_id: str = Field(alias="timerId")
    """The unique ID of the timer that was started."""

    control: Optional[str] = UNSET
    """Data attached to the event that can be used by the decider in subsequent workflow tasks."""

    start_to_fire_timeout: str = Field(alias="startToFireTimeout")
    """The duration of time after which the timer fires. The duration is specified in seconds, an integer greater than
    or equal to 0."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartTimer
    decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of
    events leading up to this event."""


class TimerStartedEventAttributesDict(TypedDict):
    timer_id: str
    control: NotRequired[str]
    start_to_fire_timeout: str
    decision_task_completed_event_id: int
