from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .concurrency import Concurrency, ConcurrencyDict
from .priority_breakdown import PriorityBreakdown, PriorityBreakdownDict


class AsyncStatusResponse(SdkBaseModel):
    queued_tasks: int = Field(alias="queuedTasks")
    """Number of tasks currently queued for this organization (status ``QUEUED``)."""

    processing_tasks: int = Field(alias="processingTasks")
    """Number of tasks currently being processed for this organization (status ``PROCESSING``)."""

    priority_breakdown: list[PriorityBreakdown] = Field(alias="priorityBreakdown")
    """Queued task counts per priority level, ordered by priority descending. Only includes priority levels that have
    queued tasks."""

    concurrency: OptionalNullable[Concurrency] = UNSET
    """Current concurrency usage. Null if unable to retrieve concurrency information."""


class AsyncStatusResponseDict(TypedDict):
    queued_tasks: int
    processing_tasks: int
    priority_breakdown: list[PriorityBreakdownDict]
    concurrency: NotRequired[ConcurrencyDict | None]
