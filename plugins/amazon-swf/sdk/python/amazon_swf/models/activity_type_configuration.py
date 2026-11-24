from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_list import TaskList, TaskListDict


class ActivityTypeConfiguration(SdkBaseModel):
    default_task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="defaultTaskStartToCloseTimeout")
    """The default maximum duration for tasks of an activity type specified when registering the activity type. You can
    override this default when scheduling a task through the ScheduleActivityTask Decision. The duration is specified in
    seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration."""

    default_task_heartbeat_timeout: Optional[str] = Field(default=UNSET, alias="defaultTaskHeartbeatTimeout")
    """The default maximum time, in seconds, before which a worker processing a task must report progress by calling
    RecordActivityTaskHeartbeat. You can specify this value only when registering an activity type. The registered
    default value can be overridden when you schedule a task through the ScheduleActivityTask Decision. If the activity
    worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an
    UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity
    worker should clean up the activity task. The d"""

    default_task_list: Optional[TaskList] = Field(default=UNSET, alias="defaultTaskList")
    default_task_priority: Optional[str] = Field(default=UNSET, alias="defaultTaskPriority")
    """The default task priority for tasks of this activity type, specified at registration. If not set, then 0 is used
    as the default priority. This default can be overridden when scheduling an activity task. Valid values are integers
    that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate
    higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon SWF
    Developer Guide."""

    default_task_schedule_to_start_timeout: Optional[str] = Field(
        default=UNSET, alias="defaultTaskScheduleToStartTimeout"
    )
    """The default maximum duration, specified when registering the activity type, that a task of an activity type can
    wait before being assigned to a worker. You can override this default when scheduling a task through the
    ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can
    use NONE to specify unlimited duration."""

    default_task_schedule_to_close_timeout: Optional[str] = Field(
        default=UNSET, alias="defaultTaskScheduleToCloseTimeout"
    )
    """The default maximum duration, specified when registering the activity type, for tasks of this activity type. You
    can override this default when scheduling a task through the ScheduleActivityTask Decision. The duration is
    specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration."""


class ActivityTypeConfigurationDict(TypedDict):
    default_task_start_to_close_timeout: NotRequired[str]
    default_task_heartbeat_timeout: NotRequired[str]
    default_task_list: NotRequired[TaskListDict]
    default_task_priority: NotRequired[str]
    default_task_schedule_to_start_timeout: NotRequired[str]
    default_task_schedule_to_close_timeout: NotRequired[str]
