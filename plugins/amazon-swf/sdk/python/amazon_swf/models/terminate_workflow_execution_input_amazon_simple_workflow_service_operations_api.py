from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.child_policy7_amazon_simple_workflow_service_operations_api import (
    ChildPolicy7AmazonSimpleWorkflowServiceOperationsApiOrStr,
)


class TerminateWorkflowExecutionInputAmazonSimpleWorkflowServiceOperationsApi(SdkBaseModel):
    domain: str
    """The domain of the workflow execution to terminate."""

    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the workflow execution to terminate."""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    """The runId of the workflow execution to terminate."""

    reason: Optional[str] = UNSET
    """A descriptive reason for terminating the workflow execution."""

    details: Optional[str] = UNSET
    """Details for terminating the workflow execution."""

    child_policy: Optional[ChildPolicy7AmazonSimpleWorkflowServiceOperationsApiOrStr] = Field(
        default=UNSET, alias="childPolicy"
    )
    """If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated.
    This policy overrides the child policy specified for the workflow execution at registration time or when starting
    the execution. The supported child policies are: TERMINATE – The child executions are terminated. REQUEST_CANCEL – A
    request to cancel is attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its
    history. It is up to the decider to take appropriate actions when it receives an execution history with this event.
    ABANDON – No action is"""


class TerminateWorkflowExecutionInputAmazonSimpleWorkflowServiceOperationsApiDict(TypedDict):
    domain: str
    workflow_id: str
    run_id: NotRequired[str]
    reason: NotRequired[str]
    details: NotRequired[str]
    child_policy: NotRequired[ChildPolicy7AmazonSimpleWorkflowServiceOperationsApiOrStr]
