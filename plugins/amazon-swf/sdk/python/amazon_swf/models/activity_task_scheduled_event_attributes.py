from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict
from .task_list import TaskList, TaskListDict


class ActivityTaskScheduledEventAttributes(SdkBaseModel):
    activity_type: ActivityType = Field(alias="activityType")
    activity_id: str = Field(alias="activityId")
    """The unique ID of the activity task."""

    input: Optional[str] = UNSET
    """The input provided to the activity task."""

    control: Optional[str] = UNSET
    """Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to
    the activity."""

    schedule_to_start_timeout: Optional[str] = Field(default=UNSET, alias="scheduleToStartTimeout")
    """The maximum amount of time the activity task can wait to be assigned to a worker."""

    schedule_to_close_timeout: Optional[str] = Field(default=UNSET, alias="scheduleToCloseTimeout")
    """The maximum amount of time for this activity task."""

    start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="startToCloseTimeout")
    """The maximum amount of time a worker may take to process the activity task."""

    task_list: TaskList = Field(alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """The priority to assign to the scheduled activity task. If set, this overrides any default priority value that was
    assigned when the activity type was registered. Valid values are integers that range from Java's Integer.MIN_VALUE
    (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about
    setting task priority, see Setting Task Priority in the Amazon SWF Developer Guide."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision that resulted in the scheduling of this
    activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up
    to this event."""

    heartbeat_timeout: Optional[str] = Field(default=UNSET, alias="heartbeatTimeout")
    """The maximum time before which the worker processing this task must report progress by calling
    RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If the worker
    subsequently attempts to record a heartbeat or return a result, it is ignored."""


class ActivityTaskScheduledEventAttributesDict(TypedDict):
    activity_type: ActivityTypeDict
    activity_id: str
    input: NotRequired[str]
    control: NotRequired[str]
    schedule_to_start_timeout: NotRequired[str]
    schedule_to_close_timeout: NotRequired[str]
    start_to_close_timeout: NotRequired[str]
    task_list: TaskListDict
    task_priority: NotRequired[str]
    decision_task_completed_event_id: int
    heartbeat_timeout: NotRequired[str]
