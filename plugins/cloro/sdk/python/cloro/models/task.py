from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr
from .enums.task_type1 import TaskType1OrStr


class Task(SdkBaseModel):
    id: UUID
    """Unique task identifier."""

    task_type: TaskType1OrStr = Field(alias="taskType")
    """The AI provider for this task."""

    status: StatusOrStr
    """Current task status."""

    priority: int
    """Task priority level (1-10). Higher numbers are processed first. Defaults to 1."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """Timestamp when the task was created."""

    latency_ms: OptionalNullable[int] = Field(default=UNSET, alias="latencyMs")
    """Processing time in milliseconds, from first pickup to the final outcome. Excludes the initial queue wait, but on
    a retried task covers every attempt including the backoff between them. Null while the task is ``QUEUED`` or
    ``PROCESSING``, and on a task that failed before processing started."""

    idempotency_key: OptionalNullable[str] = Field(default=UNSET, alias="idempotencyKey")
    """The idempotency key if one was provided."""


class TaskDict(TypedDict):
    id: UUID
    task_type: TaskType1OrStr
    status: StatusOrStr
    priority: int
    created_at: RFC3339DateTime
    latency_ms: NotRequired[int | None]
    idempotency_key: NotRequired[str | None]
