from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cause5 import Cause5OrStr
from .enums.child_policy3 import ChildPolicy3OrStr


class WorkflowExecutionTerminatedEventAttributes(SdkBaseModel):
    reason: Optional[str] = UNSET
    """The reason provided for the termination."""

    details: Optional[str] = UNSET
    """The details provided for the termination."""

    child_policy: ChildPolicy3OrStr = Field(alias="childPolicy")
    """The policy used for the child workflow executions of this workflow execution. The supported child policies are:
    TERMINATE – The child executions are terminated. REQUEST_CANCEL – A request to cancel is attempted for each child
    execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take
    appropriate actions when it receives an execution history with this event. ABANDON – No action is taken. The child
    executions continue to run."""

    cause: Optional[Cause5OrStr] = UNSET
    """If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens
    if the parent workflow execution times out or is terminated and the child policy is set to terminate child
    executions."""


class WorkflowExecutionTerminatedEventAttributesDict(TypedDict):
    reason: NotRequired[str]
    details: NotRequired[str]
    child_policy: ChildPolicy3OrStr
    cause: NotRequired[Cause5OrStr]
