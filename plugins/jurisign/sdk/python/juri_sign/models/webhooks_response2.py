from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_endpoint import WebhookEndpoint, WebhookEndpointDict


class WebhooksResponse2(SdkBaseModel):
    data: Optional[WebhookEndpoint] = UNSET


class WebhooksResponse2Dict(TypedDict):
    data: NotRequired[WebhookEndpointDict]
