from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.event6 import Event6, Event6OrStr


class ApiV1WebhookEndpointsTestRequest(SdkBaseModel):
    event: Event6OrStr = Event6.REPORT_PUBLISHED
    """Which event to send, with obviously fake ids and "test": true beside it. Default report.published."""


class ApiV1WebhookEndpointsTestRequestDict(TypedDict):
    event: NotRequired[Event6OrStr]
