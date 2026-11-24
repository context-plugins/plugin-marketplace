from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .async_task_credits import AsyncTaskCredits, AsyncTaskCreditsDict
from .async_task_summary import AsyncTaskSummary, AsyncTaskSummaryDict
from .webhook1 import Webhook1, Webhook1Dict


class TaskStatusResponse(SdkBaseModel):
    task: AsyncTaskSummary
    """Common task summary fields shared across async task responses."""

    credits: AsyncTaskCredits
    """Credit information for an async task."""

    webhook: Optional[Webhook1] = UNSET
    """Webhook delivery status. Present on ``COMPLETED`` and ``FAILED`` tasks created with a ``webhook.url``."""

    response: Optional[Any] = UNSET
    """Present only when the task is ``COMPLETED`` or ``FAILED``. For a ``COMPLETED`` task it is the provider's result;
    for a ``FAILED`` task it is the error, ``{ "error": { "code", "message", "details" } }``, with ``details`` only when
    there is extra context."""


class TaskStatusResponseDict(TypedDict):
    task: AsyncTaskSummaryDict
    credits: AsyncTaskCreditsDict
    webhook: NotRequired[Webhook1Dict]
    response: NotRequired[Any]
