from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.task_type4 import TaskType4OrStr
from .webhook import Webhook, WebhookDict


class BatchTaskRequest3(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    task_type: TaskType4OrStr = Field(alias="taskType")
    """The AI provider to use for this task."""

    payload: Any
    """The provider's request body, validated against the same schema as its sync endpoint (for example
    ``ChatGPTMonitorRequest``). That makes ``country`` required here too, or ``gl`` on the Google endpoints. For
    ``GOOGLE_PRODUCT``, send only ``productResultToken``."""

    priority: int = 1
    """Task priority level (1-10). Higher numbers are processed first. Defaults to 1."""

    idempotency_key: Optional[str] = Field(default=UNSET, alias="idempotencyKey")
    """Unique string to prevent duplicate task creation. Must be unique across your account."""

    webhook: Optional[Webhook] = UNSET
    """Webhook configuration for task completion notification."""


class BatchTaskRequest3Dict(TypedDict):
    task_type: TaskType4OrStr
    payload: Any
    priority: NotRequired[int]
    idempotency_key: NotRequired[str]
    webhook: NotRequired[WebhookDict]
