from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.cause13 import Cause13OrStr


class ScheduleLambdaFunctionFailedEventAttributes(SdkBaseModel):
    id: str
    """The ID provided in the ScheduleLambdaFunction decision that failed."""

    name: str
    """The name of the Lambda function."""

    cause: Cause13OrStr
    """The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading
    up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient
    permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the
    Amazon SWF Developer Guide."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the LambdaFunctionCompleted event corresponding to the decision that resulted in scheduling this Lambda
    task. To help diagnose issues, use this information to trace back the chain of events leading up to this event."""


class ScheduleLambdaFunctionFailedEventAttributesDict(TypedDict):
    id: str
    name: str
    cause: Cause13OrStr
    decision_task_completed_event_id: int
