from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Webhook1(SdkBaseModel):
    """Webhook delivery status. Present on ``COMPLETED`` and ``FAILED`` tasks created with a ``webhook.url``."""

    url: str
    """The ``webhook.url`` you set when creating the task."""

    delivered_at: RFC3339DateTime | None = Field(alias="deliveredAt")
    """When your endpoint acknowledged the webhook with a ``2xx``. Null until then."""

    delivered: bool
    """Whether your endpoint has acknowledged the webhook with a ``2xx``."""


class Webhook1Dict(TypedDict):
    url: str
    delivered_at: RFC3339DateTime | None
    delivered: bool
