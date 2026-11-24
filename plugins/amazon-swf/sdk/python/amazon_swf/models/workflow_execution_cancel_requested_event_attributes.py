from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cause6 import Cause6OrStr
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict


class WorkflowExecutionCancelRequestedEventAttributes(SdkBaseModel):
    external_workflow_execution: Optional[WorkflowExecution] = Field(default=UNSET, alias="externalWorkflowExecution")
    external_initiated_event_id: Optional[int] = Field(default=UNSET, alias="externalInitiatedEventId")
    """The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the
    RequestCancelExternalWorkflowExecution decision to cancel this workflow execution.The source event with this ID can
    be found in the history of the source workflow execution. This information can be useful for diagnosing problems by
    tracing back the chain of events leading up to this event."""

    cause: Optional[Cause6OrStr] = UNSET
    """If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies
    the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to
    cancel child executions."""


class WorkflowExecutionCancelRequestedEventAttributesDict(TypedDict):
    external_workflow_execution: NotRequired[WorkflowExecutionDict]
    external_initiated_event_id: NotRequired[int]
    cause: NotRequired[Cause6OrStr]
