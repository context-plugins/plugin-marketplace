from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignalWorkflowExecutionInput(SdkBaseModel):
    domain: str
    """The name of the domain containing the workflow execution to signal."""

    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the workflow execution to signal."""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    """The runId of the workflow execution to signal."""

    signal_name: str = Field(alias="signalName")
    """The name of the signal. This name must be meaningful to the target workflow."""

    input: Optional[str] = UNSET
    """Data to attach to the WorkflowExecutionSignaled event in the target workflow execution's history."""


class SignalWorkflowExecutionInputDict(TypedDict):
    domain: str
    workflow_id: str
    run_id: NotRequired[str]
    signal_name: str
    input: NotRequired[str]
