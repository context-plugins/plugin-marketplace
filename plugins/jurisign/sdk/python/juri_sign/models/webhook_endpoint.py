from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .stats_juri_sign_webhooks_api import StatsJuriSignWebhooksApi, StatsJuriSignWebhooksApiDict


class WebhookEndpoint(SdkBaseModel):
    id: Optional[int] = UNSET
    url: Optional[str] = UNSET
    secret: Optional[str] = UNSET
    """Full secret only shown on creation"""

    events: Optional[list[str]] = UNSET
    is_active: Optional[bool] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    stats: Optional[StatsJuriSignWebhooksApi] = UNSET


class WebhookEndpointDict(TypedDict):
    id: NotRequired[int]
    url: NotRequired[str]
    secret: NotRequired[str]
    events: NotRequired[list[str]]
    is_active: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
    stats: NotRequired[StatsJuriSignWebhooksApiDict]
