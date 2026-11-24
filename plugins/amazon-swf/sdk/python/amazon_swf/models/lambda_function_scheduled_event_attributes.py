from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LambdaFunctionScheduledEventAttributes(SdkBaseModel):
    id: str
    """The unique ID of the Lambda task."""

    name: str
    """The name of the Lambda function."""

    control: Optional[str] = UNSET
    """Data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the
    Lambda task."""

    input: Optional[str] = UNSET
    """The input provided to the Lambda task."""

    start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="startToCloseTimeout")
    """The maximum amount of time a worker can take to process the Lambda task."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the LambdaFunctionCompleted event corresponding to the decision that resulted in scheduling this
    activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this
    event."""


class LambdaFunctionScheduledEventAttributesDict(TypedDict):
    id: str
    name: str
    control: NotRequired[str]
    input: NotRequired[str]
    start_to_close_timeout: NotRequired[str]
    decision_task_completed_event_id: int
