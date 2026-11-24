from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_credentials import TaskCredentials, TaskCredentialsDict


class TaskScheduledEventDetails(SdkBaseModel):
    resource_type: str = Field(alias="resourceType")
    """The service name of the resource in a task state."""

    resource: str
    """The action of the resource called by a task state."""

    region: str
    """The region of the scheduled task"""

    parameters: str
    """The JSON data passed to the resource referenced in a task state. Length constraints apply to the payload size,
    and are expressed as bytes in UTF-8 encoding."""

    timeout_in_seconds: Optional[int] = Field(default=UNSET, alias="timeoutInSeconds")
    """The maximum allowed duration of the task."""

    heartbeat_in_seconds: Optional[int] = Field(default=UNSET, alias="heartbeatInSeconds")
    """The maximum allowed duration between two heartbeats for the task."""

    task_credentials: Optional[TaskCredentials] = Field(default=UNSET, alias="taskCredentials")


class TaskScheduledEventDetailsDict(TypedDict):
    resource_type: str
    resource: str
    region: str
    parameters: str
    timeout_in_seconds: NotRequired[int]
    heartbeat_in_seconds: NotRequired[int]
    task_credentials: NotRequired[TaskCredentialsDict]
