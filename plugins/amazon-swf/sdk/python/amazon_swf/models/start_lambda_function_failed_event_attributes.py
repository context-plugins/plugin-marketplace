from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cause14 import Cause14OrStr


class StartLambdaFunctionFailedEventAttributes(SdkBaseModel):
    scheduled_event_id: Optional[int] = Field(default=UNSET, alias="scheduledEventId")
    """The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. To help
    diagnose issues, use this information to trace back the chain of events leading up to this event."""

    cause: Optional[Cause14OrStr] = UNSET
    """The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading
    up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because the IAM role attached to
    the execution lacked sufficient permissions. For details and example IAM policies, see Lambda Tasks in the Amazon
    SWF Developer Guide."""

    message: Optional[str] = UNSET
    """A description that can help diagnose the cause of the fault."""


class StartLambdaFunctionFailedEventAttributesDict(TypedDict):
    scheduled_event_id: NotRequired[int]
    cause: NotRequired[Cause14OrStr]
    message: NotRequired[str]
