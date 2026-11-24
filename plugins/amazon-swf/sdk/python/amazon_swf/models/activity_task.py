from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict


class ActivityTask(SdkBaseModel):
    task_token: str = Field(alias="taskToken")
    """The opaque string used as a handle on the task. This token is used by workers to communicate progress and
    response information back to the system about the task."""

    activity_id: str = Field(alias="activityId")
    """The unique ID of the task."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ActivityTaskStarted event recorded in the history."""

    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    activity_type: ActivityType = Field(alias="activityType")
    input: Optional[str] = UNSET
    """The inputs provided when the activity task was scheduled. The form of the input is user defined and should be
    meaningful to the activity implementation."""


class ActivityTaskDict(TypedDict):
    task_token: str
    activity_id: str
    started_event_id: int
    workflow_execution: WorkflowExecutionDict
    activity_type: ActivityTypeDict
    input: NotRequired[str]
