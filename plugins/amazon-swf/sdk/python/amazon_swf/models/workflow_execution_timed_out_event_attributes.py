from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.child_policy3 import ChildPolicy3OrStr


class WorkflowExecutionTimedOutEventAttributes(SdkBaseModel):
    timeout_type: Literal["START_TO_CLOSE"] = Field(default="START_TO_CLOSE", alias="timeoutType")
    """The type of timeout that caused this event."""

    child_policy: ChildPolicy3OrStr = Field(alias="childPolicy")
    """The policy used for the child workflow executions of this workflow execution. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""


class WorkflowExecutionTimedOutEventAttributesDict(TypedDict):
    timeout_type: Literal["START_TO_CLOSE"]
    child_policy: ChildPolicy3OrStr
