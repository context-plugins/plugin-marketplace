from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestCancelWorkflowExecutionInput(SdkBaseModel):
    domain: str
    """The name of the domain containing the workflow execution to cancel."""

    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the workflow execution to cancel."""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    """The runId of the workflow execution to cancel."""


class RequestCancelWorkflowExecutionInputDict(TypedDict):
    domain: str
    workflow_id: str
    run_id: NotRequired[str]
