from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict


class WorkflowExecutionSignaledEventAttributes(SdkBaseModel):
    signal_name: str = Field(alias="signalName")
    """The name of the signal received. The decider can use the signal name and inputs to determine how to the process
    the signal."""

    input: Optional[str] = UNSET
    """The inputs provided with the signal. The decider can use the signal name and inputs to determine how to process
    the signal."""

    external_workflow_execution: Optional[WorkflowExecution] = Field(default=UNSET, alias="externalWorkflowExecution")
    external_initiated_event_id: Optional[int] = Field(default=UNSET, alias="externalInitiatedEventId")
    """The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the SignalExternalWorkflow decision
    to signal this workflow execution.The source event with this ID can be found in the history of the source workflow
    execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to
    this event. This field is set only if the signal was initiated by another workflow execution."""


class WorkflowExecutionSignaledEventAttributesDict(TypedDict):
    signal_name: str
    input: NotRequired[str]
    external_workflow_execution: NotRequired[WorkflowExecutionDict]
    external_initiated_event_id: NotRequired[int]
