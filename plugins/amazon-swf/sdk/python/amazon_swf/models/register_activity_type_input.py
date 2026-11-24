from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_list import TaskList, TaskListDict


class RegisterActivityTypeInput(SdkBaseModel):
    domain: str
    """The name of the domain in which this activity is to be registered."""

    name: str
    r"""The name of the activity type within the domain. The specified string must not contain a : (colon), / (slash), |
    (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string
    arn."""

    version: str
    r"""The version of the activity type. The activity type consists of the name and version, the combination of which
    must be unique within the domain. The specified string must not contain a : (colon), / (slash), | (vertical bar), or
    any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn."""

    description: Optional[str] = UNSET
    """A textual description of the activity type."""

    default_task_start_to_close_timeout: Optional[str] = Field(default=UNSET, alias="defaultTaskStartToCloseTimeout")
    """If set, specifies the default maximum duration that a worker can take to process tasks of this activity type.
    This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The
    duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited
    duration."""

    default_task_heartbeat_timeout: Optional[str] = Field(default=UNSET, alias="defaultTaskHeartbeatTimeout")
    """If set, specifies the default maximum time before which a worker processing a task of this type must report
    progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically
    timed out. This default can be overridden when scheduling an activity task using the ScheduleActivityTask Decision.
    If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives
    an UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity
    worker should clean up the activ"""

    default_task_list: Optional[TaskList] = Field(default=UNSET, alias="defaultTaskList")
    default_task_priority: Optional[str] = Field(default=UNSET, alias="defaultTaskPriority")
    """The default task priority to assign to the activity type. If not assigned, then 0 is used. Valid values are
    integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers
    indicate higher priority. For more information about setting task priority, see Setting Task Priority in the in the
    Amazon SWF Developer Guide.."""

    default_task_schedule_to_start_timeout: Optional[str] = Field(
        default=UNSET, alias="defaultTaskScheduleToStartTimeout"
    )
    """If set, specifies the default maximum duration that a task of this activity type can wait before being assigned
    to a worker. This default can be overridden when scheduling an activity task using the ScheduleActivityTask
    Decision. The duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
    unlimited duration."""

    default_task_schedule_to_close_timeout: Optional[str] = Field(
        default=UNSET, alias="defaultTaskScheduleToCloseTimeout"
    )
    """If set, specifies the default maximum duration for a task of this activity type. This default can be overridden
    when scheduling an activity task using the ScheduleActivityTask Decision. The duration is specified in seconds, an
    integer greater than or equal to 0. You can use NONE to specify unlimited duration."""


class RegisterActivityTypeInputDict(TypedDict):
    domain: str
    name: str
    version: str
    description: NotRequired[str]
    default_task_start_to_close_timeout: NotRequired[str]
    default_task_heartbeat_timeout: NotRequired[str]
    default_task_list: NotRequired[TaskListDict]
    default_task_priority: NotRequired[str]
    default_task_schedule_to_start_timeout: NotRequired[str]
    default_task_schedule_to_close_timeout: NotRequired[str]
