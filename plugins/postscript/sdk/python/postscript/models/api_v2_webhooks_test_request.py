from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.event2 import Event2, Event2OrStr


class ApiV2WebhooksTestRequest(SdkBaseModel):
    event: Event2OrStr = Event2.SHOP_TEST
    """Webhook subscription event type."""


class ApiV2WebhooksTestRequestDict(TypedDict):
    event: Event2OrStr
