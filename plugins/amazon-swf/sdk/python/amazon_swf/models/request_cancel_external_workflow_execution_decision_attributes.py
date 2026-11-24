from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestCancelExternalWorkflowExecutionDecisionAttributes(SdkBaseModel):
    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the external workflow execution to cancel."""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    """The runId of the external workflow execution to cancel."""

    control: Optional[str] = UNSET
    """The data attached to the event that can be used by the decider in subsequent workflow tasks."""


class RequestCancelExternalWorkflowExecutionDecisionAttributesDict(TypedDict):
    workflow_id: str
    run_id: NotRequired[str]
    control: NotRequired[str]
