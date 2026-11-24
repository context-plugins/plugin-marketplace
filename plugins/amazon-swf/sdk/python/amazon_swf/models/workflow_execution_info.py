from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.close_status import CloseStatusOrStr
from .enums.execution_status import ExecutionStatusOrStr
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class WorkflowExecutionInfo(SdkBaseModel):
    execution: WorkflowExecution
    workflow_type: WorkflowType = Field(alias="workflowType")
    start_timestamp: RFC3339DateTime = Field(alias="startTimestamp")
    """The time when the execution was started."""

    close_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="closeTimestamp")
    """The time when the workflow execution was closed. Set only if the execution status is CLOSED."""

    execution_status: ExecutionStatusOrStr = Field(alias="executionStatus")
    """The current status of the execution."""

    close_status: Optional[CloseStatusOrStr] = Field(default=UNSET, alias="closeStatus")
    """If the execution status is closed then this specifies how the execution was closed: COMPLETED – the execution was
    successfully completed. CANCELED – the execution was canceled.Cancellation allows the implementation to gracefully
    clean up before the execution is closed. TERMINATED – the execution was force terminated. FAILED – the execution
    failed to complete. TIMED_OUT – the execution did not complete in the alloted time and was automatically timed out.
    CONTINUED_AS_NEW – the execution is logically continued. This means the current execution was completed and a new
    execution was started to car"""

    parent: Optional[WorkflowExecution] = UNSET
    tag_list: Optional[list[str]] = Field(default=UNSET, alias="tagList")
    """The list of tags associated with the workflow execution. Tags can be used to identify and list workflow
    executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags."""

    cancel_requested: Optional[bool] = Field(default=UNSET, alias="cancelRequested")
    """Set to true if a cancellation is requested for this workflow execution."""


class WorkflowExecutionInfoDict(TypedDict):
    execution: WorkflowExecutionDict
    workflow_type: WorkflowTypeDict
    start_timestamp: RFC3339DateTime
    close_timestamp: NotRequired[RFC3339DateTime]
    execution_status: ExecutionStatusOrStr
    close_status: NotRequired[CloseStatusOrStr]
    parent: NotRequired[WorkflowExecutionDict]
    tag_list: NotRequired[list[str]]
    cancel_requested: NotRequired[bool]
