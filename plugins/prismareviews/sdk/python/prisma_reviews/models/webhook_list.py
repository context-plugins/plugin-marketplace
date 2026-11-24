from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook import Webhook, WebhookDict


class WebhookList(SdkBaseModel):
    """Not paginated, and without ``next_cursor``."""

    data: list[Webhook]


class WebhookListDict(TypedDict):
    data: list[WebhookDict]
