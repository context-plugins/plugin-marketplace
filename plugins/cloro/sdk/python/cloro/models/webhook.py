from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Webhook(SdkBaseModel):
    """Webhook configuration for task completion notification."""

    model_config = ConfigDict(extra="forbid")

    url: str
    """URL to receive the webhook POST request when the task completes."""


class WebhookDict(TypedDict):
    url: str
