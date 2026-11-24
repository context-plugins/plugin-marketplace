from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .activity_type import ActivityType, ActivityTypeDict
from .task_list import TaskList, TaskListDict


class ScheduleActivityTaskDecisionAttributes(SdkBaseModel):
    activity_type: ActivityType = Field(alias="activityType")
    activity_id: str = Field(alias="activityId")
    r"""The activityId of the activity task. The specified string must not contain a : (colon), / (slash), | (vertical
    bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn."""

    control: Optional[str] = UNSET
    """Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to
    the activity."""

    input: Optional[str] = UNSET
    """The input provided to the activity task."""

    schedule_to_close_timeout: Optional[str] = Field(default=UNSET, alias="scheduleToCloseTimeout")
    """The maximum duration for this activity task. The duration is specified in seconds, an integer greater than or
    equal to 0. You can use NONE to specify unlimited duration. A schedule-to-close timeout for this activity task must
    be specified either as a default for the activity type or through this field. If neither this field is set nor a
    default schedule-to-close timeout was specified at registration time then a fault is returned."""

    task_list: Optional[TaskList] = Field(default=UNSET, alias="taskList")
    task_priority: Optional[str] = Field(default=UNSET, alias="taskPriority")
    """If set, specifies the priority with which the activity task is to be assigned to a worker. This overrides the
    defaultTaskPriority specified when registering the activity type using RegisterActivityType. Valid values are
    integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers
    indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon
    SWF Developer Guide."""

    schedule_to_start_timeout: Optional[str] = Field(default=UNSET, alias="scheduleToStartTimeout")
    """If set, specifies the maximum duration the activity task can wait to be assigned to a worker. This overrides the
    default schedule-to-start timeout specified when registering the activity type using RegisterActivityType. The
    duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited
    duration. A schedule-to-start timeout for this activity task must be specified either as a default for the activity
    type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at
    registration time then a fault is r"""

    start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="startToCloseTimeout")
    """If set, specifies the maximum duration a worker may take to process this activity task. This overrides the
    default start-to-close timeout specified when registering the activity type using RegisterActivityType. The duration
    is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration. A
    start-to-close timeout for this activity task must be specified either as a default for the activity type or through
    this field. If neither this field is set nor a default start-to-close timeout was specified at registration time
    then a fault is returned."""

    heartbeat_timeout: Optional[str] = Field(default=UNSET, alias="heartbeatTimeout")
    """If set, specifies the maximum time before which a worker processing a task of this type must report progress by
    calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If
    the worker subsequently attempts to record a heartbeat or returns a result, it is ignored. This overrides the
    default heartbeat timeout specified when registering the activity type using RegisterActivityType. The duration is
    specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration."""


class ScheduleActivityTaskDecisionAttributesDict(TypedDict):
    activity_type: ActivityTypeDict
    activity_id: str
    control: NotRequired[str]
    input: NotRequired[str]
    schedule_to_close_timeout: NotRequired[str]
    task_list: NotRequired[TaskListDict]
    task_priority: NotRequired[str]
    schedule_to_start_timeout: NotRequired[str]
    start_to_close_timeout: NotRequired[str]
    heartbeat_timeout: NotRequired[str]
