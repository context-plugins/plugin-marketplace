from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict


class DescribeWorkflowExecutionInput(SdkBaseModel):
    domain: str
    """The name of the domain containing the workflow execution."""

    execution: WorkflowExecution


class DescribeWorkflowExecutionInputDict(TypedDict):
    domain: str
    execution: WorkflowExecutionDict
