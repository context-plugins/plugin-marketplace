from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_engine_routing1 import AppEngineRouting1, AppEngineRouting1Dict
from .enums.state import StateOrStr
from .http_target2 import HttpTarget2, HttpTarget2Dict
from .rate_limits1 import RateLimits1, RateLimits1Dict
from .retry_config1 import RetryConfig1, RetryConfig1Dict
from .stackdriver_logging_config1 import StackdriverLoggingConfig1, StackdriverLoggingConfig1Dict


class Queue(SdkBaseModel):
    """A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched.
    Configurable properties include rate limits, retry options, queue types, and others."""

    retry_config: Optional[RetryConfig1] = Field(default=UNSET, alias="retryConfig")
    """Settings that determine the retry behavior. * For tasks created using Cloud Tasks: the queue-level retry settings
    apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual
    tasks. * For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue
    which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See `App Engine
    documentation <https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks>`__."""

    state: Optional[StateOrStr] = UNSET
    """Output only. The state of the queue. ``state`` can only be changed by calling PauseQueue, ResumeQueue, or
    uploading `queue.yaml/xml <https://cloud.google.com/appengine/docs/python/config/queueref>`__. UpdateQueue cannot be
    used to change ``state``."""

    name: Optional[str] = UNSET
    """Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name
    must have the following format: ``projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`` * ``PROJECT_ID`` can
    contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see
    `Identifying projects
    <https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects>`__ *
    ``LOCATION_ID`` is the canonical ID for the queue's location. The list of available locations can be obtained by
    calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * ``QUEUE_ID`` can
    contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters."""

    app_engine_routing_override: Optional[AppEngineRouting1] = Field(default=UNSET, alias="appEngineRoutingOverride")
    """Overrides for task-level app_engine_routing. These settings apply only to App Engine tasks in this queue. Http
    tasks are not affected. If set, ``app_engine_routing_override`` is used for all App Engine tasks in the queue, no
    matter what the setting is for the task-level app_engine_routing."""

    stackdriver_logging_config: Optional[StackdriverLoggingConfig1] = Field(
        default=UNSET, alias="stackdriverLoggingConfig"
    )
    """Configuration options for writing logs to `Stackdriver Logging <https://cloud.google.com/logging/docs/>`__. If
    this field is unset, then no logs are written."""

    http_target: Optional[HttpTarget2] = Field(default=UNSET, alias="httpTarget")
    """Modifies HTTP target for HTTP tasks."""

    rate_limits: Optional[RateLimits1] = Field(default=UNSET, alias="rateLimits")
    """Rate limits for task dispatches. rate_limits and retry_config are related because they both control task
    attempts. However they control task attempts in different ways: * rate_limits controls the total rate of dispatches
    from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt
    or a retry). * retry_config controls what happens to a particular task after its first attempt fails. That is,
    retry_config controls task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the
    result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config, and the queue's
    state. * System throttling due to ``429`` (Too Many Requests) or ``503`` (Service Unavailable) responses from the
    worker, high error rates, or to smooth sudden large traffic spikes."""

    purge_time: Optional[str] = Field(default=UNSET, alias="purgeTime")
    """Output only. The last time this queue was purged. All tasks that were created before this time were purged. A
    queue can be purged using PurgeQueue, the `App Engine Task Queue SDK, or the Cloud Console
    <https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue>`__.
    Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been
    purged."""


class QueueDict(TypedDict):
    retry_config: NotRequired[RetryConfig1Dict]
    state: NotRequired[StateOrStr]
    name: NotRequired[str]
    app_engine_routing_override: NotRequired[AppEngineRouting1Dict]
    stackdriver_logging_config: NotRequired[StackdriverLoggingConfig1Dict]
    http_target: NotRequired[HttpTarget2Dict]
    rate_limits: NotRequired[RateLimits1Dict]
    purge_time: NotRequired[str]
