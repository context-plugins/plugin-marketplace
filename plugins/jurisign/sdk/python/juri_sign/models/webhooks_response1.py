from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_endpoint import WebhookEndpoint, WebhookEndpointDict


class WebhooksResponse1(SdkBaseModel):
    data: Optional[WebhookEndpoint] = UNSET
    message: Optional[str] = UNSET


class WebhooksResponse1Dict(TypedDict):
    data: NotRequired[WebhookEndpointDict]
    message: NotRequired[str]
