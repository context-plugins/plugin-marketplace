from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .webhook_auth_status import WebhookAuthStatus, WebhookAuthStatusDict


class Realtime1(SdkBaseModel):
    """Realtime WebSocket mode (see /docs/realtime). Null when the number runs the per-turn webhook loop."""

    url: Optional[str] = UNSET
    """wss:// endpoint CallNode connects to per call"""

    auth: OptionalNullable[WebhookAuthStatus] = UNSET
    """How CallNode authenticates to your webhook. The secret itself is write-only and never returned."""

    voice: OptionalNullable[str] = UNSET
    """Voice id used for say frames; null = platform default"""


class Realtime1Dict(TypedDict):
    url: NotRequired[str]
    auth: NotRequired[WebhookAuthStatusDict | None]
    voice: NotRequired[str | None]
