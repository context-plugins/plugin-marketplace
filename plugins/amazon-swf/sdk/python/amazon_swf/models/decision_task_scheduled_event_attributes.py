from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_list import TaskList, TaskListDict


class DecisionTaskScheduledEventAttributes(SdkBaseModel):
    task_list: TaskList = Field(alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """A task priority that, if set, specifies the priority for this decision task. Valid values are integers that range
    from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher
    priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF Developer
    Guide."""

    start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="startToCloseTimeout")
    """The maximum duration for this decision task. The task is considered timed out if it doesn't completed within this
    duration. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
    unlimited duration."""

    schedule_to_start_timeout: Optional[str] = Field(default=UNSET, alias="scheduleToStartTimeout")
    """The maximum amount of time the decision task can wait to be assigned to a worker."""


class DecisionTaskScheduledEventAttributesDict(TypedDict):
    task_list: TaskListDict
    task_priority: NotRequired[str]
    start_to_close_timeout: NotRequired[str]
    schedule_to_start_timeout: NotRequired[str]
