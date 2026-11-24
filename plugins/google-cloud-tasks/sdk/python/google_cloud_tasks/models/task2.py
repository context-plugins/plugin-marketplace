from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_engine_http_request2 import AppEngineHttpRequest2, AppEngineHttpRequest2Dict
from .attempt1 import Attempt1, Attempt1Dict
from .attempt3 import Attempt3, Attempt3Dict
from .enums.view import ViewOrStr
from .http_request2 import HttpRequest2, HttpRequest2Dict
from .retry_config3 import RetryConfig3, RetryConfig3Dict


class Task2(SdkBaseModel):
    """Required. The task to add. Task names have the following format:
    ``projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID``. The user can optionally specify a task
    name. If a name is not specified then the system will generate a random unique task id, which will be set in the
    task returned in the response. If schedule_time is not set or is in the past then Cloud Tasks will set it to the
    current time. Task De-duplication: Explicitly specifying a task ID enables task de-duplication. If a task's ID is
    identical to that of an existing task or a task that was deleted or executed recently then the call will fail with
    ALREADY_EXISTS. The IDs of deleted tasks are not immediately available for reuse. It can take up to 24 hours (or 9
    days if the task's queue was created using a queue.yaml or queue.xml) for the task ID to be released and made
    available again. Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have
    significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is
    recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp,
    causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately
    uniform distribution of task ids to store and serve tasks efficiently."""

    view: Optional[ViewOrStr] = UNSET
    """Output only. The view specifies which subset of the Task has been returned."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time that the task was created. ``create_time`` will be truncated to the nearest second."""

    response_count: Optional[int] = Field(default=UNSET, alias="responseCount")
    """Output only. The number of attempts which have received a response."""

    retry_config: Optional[RetryConfig3] = Field(default=UNSET, alias="retryConfig")
    """Optional. Specifies the task-level RetryConfig. If present, this overrides the Queue.retry_config for this
    task."""

    dispatch_deadline: Optional[str] = Field(default=UNSET, alias="dispatchDeadline")
    """The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is
    cancelled and the attempt is marked as a ``DEADLINE_EXCEEDED`` failure. Cloud Tasks will retry the task according to
    the RetryConfig. Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but
    whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to
    cancelled requests. The default and maximum values depend on the type of request: * For HTTP tasks, the default is
    10 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine tasks, 0 indicates that
    the request has the default deadline. The default deadline depends on the `scaling type
    <https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling>`__ of the service:
    10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and
    60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15
    seconds]. Regardless of the task's ``dispatch_deadline``, the app handler will not run for longer than than the
    service's timeout. We recommend setting the ``dispatch_deadline`` to at most a few seconds more than the app
    handler's timeout. For more information see `Timeouts
    <https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts>`__. The value must be given as a string
    that indicates the length of time (in seconds) followed by ``s`` (for "seconds"). For more information on the
    format, see the documentation for `Duration <https://protobuf.dev/reference/protobuf/google.protobuf/#duration>`__.
    ``dispatch_deadline`` will be truncated to the nearest millisecond. The deadline is an approximate deadline."""

    dispatch_count: Optional[int] = Field(default=UNSET, alias="dispatchCount")
    """Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but
    haven't received a response."""

    first_attempt: Optional[Attempt3] = Field(default=UNSET, alias="firstAttempt")
    """Output only. The status of the task's first attempt. Only dispatch_time will be set. The other Attempt
    information is not retained by Cloud Tasks."""

    last_attempt: Optional[Attempt1] = Field(default=UNSET, alias="lastAttempt")
    """Output only. The status of the task's last attempt."""

    schedule_time: Optional[str] = Field(default=UNSET, alias="scheduleTime")
    """The time when the task is scheduled to be attempted or retried. ``schedule_time`` will be truncated to the
    nearest microsecond."""

    http_request: Optional[HttpRequest2] = Field(default=UNSET, alias="httpRequest")
    """HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set."""

    app_engine_http_request: Optional[AppEngineHttpRequest2] = Field(default=UNSET, alias="appEngineHttpRequest")
    """HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has
    AppEngineHttpRequest set."""

    name: Optional[str] = UNSET
    """Optionally caller-specified in CreateTask. The task name. The task name must have the following format:
    ``projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`` * ``PROJECT_ID`` can contain letters
    ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see `Identifying
    projects <https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects>`__ *
    ``LOCATION_ID`` is the canonical ID for the task's location. The list of available locations can be obtained by
    calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * ``QUEUE_ID`` can
    contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * ``TASK_ID`` can
    contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500
    characters."""


class Task2Dict(TypedDict):
    view: NotRequired[ViewOrStr]
    create_time: NotRequired[str]
    response_count: NotRequired[int]
    retry_config: NotRequired[RetryConfig3Dict]
    dispatch_deadline: NotRequired[str]
    dispatch_count: NotRequired[int]
    first_attempt: NotRequired[Attempt3Dict]
    last_attempt: NotRequired[Attempt1Dict]
    schedule_time: NotRequired[str]
    http_request: NotRequired[HttpRequest2Dict]
    app_engine_http_request: NotRequired[AppEngineHttpRequest2Dict]
    name: NotRequired[str]
