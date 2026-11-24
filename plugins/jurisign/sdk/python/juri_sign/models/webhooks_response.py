from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_endpoint import WebhookEndpoint, WebhookEndpointDict


class WebhooksResponse(SdkBaseModel):
    data: Optional[list[WebhookEndpoint]] = UNSET
    available_events: Optional[list[str]] = UNSET


class WebhooksResponseDict(TypedDict):
    data: NotRequired[list[WebhookEndpointDict]]
    available_events: NotRequired[list[str]]
