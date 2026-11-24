from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_list import TaskList, TaskListDict


class DecisionTaskCompletedEventAttributes(SdkBaseModel):
    execution_context: Optional[str] = Field(default=UNSET, alias="executionContext")
    """User defined context for the workflow execution."""

    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the DecisionTaskStarted event recorded when this decision task was started. This information can be
    useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    task_list: Optional[TaskList] = Field(default=UNSET, alias="taskList")
    task_list_schedule_to_start_timeout: Optional[str] = Field(default=UNSET, alias="taskListScheduleToStartTimeout")
    """The maximum amount of time the decision task can wait to be assigned to a worker."""


class DecisionTaskCompletedEventAttributesDict(TypedDict):
    execution_context: NotRequired[str]
    scheduled_event_id: int
    started_event_id: int
    task_list: NotRequired[TaskListDict]
    task_list_schedule_to_start_timeout: NotRequired[str]
