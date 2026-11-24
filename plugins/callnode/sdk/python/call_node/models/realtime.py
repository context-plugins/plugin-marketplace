from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_auth import WebhookAuth, WebhookAuthDict


class Realtime(SdkBaseModel):
    """Realtime WebSocket mode for this call (see /docs/realtime): instead of the per-turn webhook, CallNode opens a
    WebSocket to ``url`` when the call connects and streams transcripts (and, on request, caller audio) to it; you
    stream audio back, transfer or hang up. Overrides the from-number's realtime setting. The webhook stays the fallback
    if the socket cannot be reached. Billed per started minute of socket time on top of the call minute
    (``realtimePerMinuteRate`` on GET /api/plans)."""

    url: str
    """wss:// URL on a public host."""

    auth: Optional[WebhookAuth] = UNSET
    """How CallNode authenticates to your webhook endpoint."""


class RealtimeDict(TypedDict):
    url: str
    auth: NotRequired[WebhookAuthDict]
