from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event import Event, EventOrStr


class ApiV2WebhooksRequest(SdkBaseModel):
    callback_url: str
    """Destination URL for webhook deliveries (HTTPS only)."""

    event: EventOrStr = Event.SHOP_TEST
    """Webhook subscription event type."""

    headers: Optional[Any] = UNSET
    """Custom key:value pairs to be sent as headers in every callback."""


class ApiV2WebhooksRequestDict(TypedDict):
    callback_url: str
    event: EventOrStr
    headers: NotRequired[Any]
