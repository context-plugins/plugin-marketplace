from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignalExternalWorkflowExecutionDecisionAttributes(SdkBaseModel):
    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the workflow execution to be signaled."""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    """The runId of the workflow execution to be signaled."""

    signal_name: str = Field(alias="signalName")
    """The name of the signal.The target workflow execution uses the signal name and input to process the signal."""

    input: Optional[str] = UNSET
    """The input data to be provided with the signal. The target workflow execution uses the signal name and input data
    to process the signal."""

    control: Optional[str] = UNSET
    """The data attached to the event that can be used by the decider in subsequent decision tasks."""


class SignalExternalWorkflowExecutionDecisionAttributesDict(TypedDict):
    workflow_id: str
    run_id: NotRequired[str]
    signal_name: str
    input: NotRequired[str]
    control: NotRequired[str]
