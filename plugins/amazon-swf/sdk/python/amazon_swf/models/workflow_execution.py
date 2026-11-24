from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkflowExecution(SdkBaseModel):
    workflow_id: str = Field(alias="workflowId")
    """The user defined identifier associated with the workflow execution."""

    run_id: str = Field(alias="runId")
    """A system-generated unique identifier for the workflow execution."""


class WorkflowExecutionDict(TypedDict):
    workflow_id: str
    run_id: str
