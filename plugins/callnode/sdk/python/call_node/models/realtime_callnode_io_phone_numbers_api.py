from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .webhook_auth_callnode_io_phone_numbers_api import (
    WebhookAuthCallnodeIoPhoneNumbersApi,
    WebhookAuthCallnodeIoPhoneNumbersApiDict,
)


class RealtimeCallnodeIoPhoneNumbersApi(SdkBaseModel):
    """Realtime WebSocket mode (see /docs/realtime): CallNode opens a WebSocket to ``url`` for every call to this number
    and streams transcripts (and, on request, caller audio); you stream audio back, transfer or hang up. The webhook
    stays the fallback when the socket cannot be reached. Null turns it off. The auth secret is write-only (reads return
    valueSet)."""

    url: str
    """wss:// URL on a public host"""

    auth: Optional[WebhookAuthCallnodeIoPhoneNumbersApi] = UNSET
    """How CallNode authenticates to your webhook endpoint."""

    voice: OptionalNullable[str] = UNSET
    """Voice for ``say`` frames (text mode): an id from GET /api/v1/numbers/voices. Null = the platform default
    voice."""


class RealtimeCallnodeIoPhoneNumbersApiDict(TypedDict):
    url: str
    auth: NotRequired[WebhookAuthCallnodeIoPhoneNumbersApiDict]
    voice: NotRequired[str | None]
