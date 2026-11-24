from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .realtime import Realtime, RealtimeDict
from .unions.to import To, ToDict
from .webhook_auth import WebhookAuth, WebhookAuthDict


class OriginateRequest(SdkBaseModel):
    """Three mutually exclusive destination forms: E.164 ``to`` (PSTN), a ``sip:`` URI ``to`` (direct SIP delivery), or
    ``sipTrunkId`` + an E.164/extension ``to`` (BYOC via your saved trunk). Passing ``sipTrunkId`` together with a
    ``sip:`` ``to`` is rejected with ``invalid_request``."""

    to: To
    """The destination. An E.164 number, a ``sip:`` URI, or — together with ``sipTrunkId`` — an E.164 number or a 1–64
    character extension the trunk's host understands."""

    sip_trunk_id: Optional[str] = Field(default=UNSET, alias="sipTrunkId")
    """ID of a saved SIP trunk (Dashboard → SIP Trunks). Routes the call to the trunk's configured host (BYOC / PBX).
    Mutually exclusive with a ``sip:`` ``to``."""

    from_: str = Field(alias="from")
    """Must be a DID owned by your account with status ``active``. Required for every destination form — it becomes the
    caller ID presented to the called party or to your SIP endpoint."""

    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    """Where your AI agent runs. Overrides the webhook stored on the ``from`` number. Invoked once when the call
    connects (``call_started``), then once per turn — for every caller utterance (``user_speech``) and every completed
    keypad entry (``user_dtmf``, with the digit string in a ``dtmf`` field) — see the Conversational Webhook guide."""

    webhook_auth: Optional[WebhookAuth] = Field(default=UNSET, alias="webhookAuth")
    """How CallNode authenticates to your webhook endpoint."""

    realtime: Optional[Realtime] = UNSET
    """Realtime WebSocket mode for this call (see /docs/realtime): instead of the per-turn webhook, CallNode opens a
    WebSocket to ``url`` when the call connects and streams transcripts (and, on request, caller audio) to it; you
    stream audio back, transfer or hang up. Overrides the from-number's realtime setting. The webhook stays the fallback
    if the socket cannot be reached. Billed per started minute of socket time on top of the call minute
    (``realtimePerMinuteRate`` on GET /api/plans)."""

    metadata: Optional[Any] = UNSET
    """Opaque JSON, echoed back on status webhooks. Max 4 KB."""

    status_webhook_url: Optional[str] = Field(default=UNSET, alias="statusWebhookUrl")
    """URL we POST call lifecycle events to (answered, completed, failed). For SIP destinations, ``call.failed`` events
    carry the mapped ``failureCode`` and may also include ``sipCause`` — the raw hangup cause string (diagnostic
    passthrough; not enumerated)."""

    max_duration_secs: int = Field(default=1800, alias="maxDurationSecs")
    """Hard cap on call duration."""

    tcpa_override: bool = Field(default=False, alias="tcpaOverride")
    """Bypass the 8am–9pm called-party-local-time check. Audited."""


class OriginateRequestDict(TypedDict):
    to: ToDict
    sip_trunk_id: NotRequired[str]
    from_: str
    webhook_url: NotRequired[str]
    webhook_auth: NotRequired[WebhookAuthDict]
    realtime: NotRequired[RealtimeDict]
    metadata: NotRequired[Any]
    status_webhook_url: NotRequired[str]
    max_duration_secs: NotRequired[int]
    tcpa_override: NotRequired[bool]
