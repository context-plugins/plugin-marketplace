from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .realtime_callnode_io_phone_numbers_api import (
    RealtimeCallnodeIoPhoneNumbersApi,
    RealtimeCallnodeIoPhoneNumbersApiDict,
)
from .webhook_auth_callnode_io_phone_numbers_api import (
    WebhookAuthCallnodeIoPhoneNumbersApi,
    WebhookAuthCallnodeIoPhoneNumbersApiDict,
)


class VoiceConfig(SdkBaseModel):
    """Voice configuration — how inbound calls to this number are answered. Three modes: a conversational WEBHOOK agent
    (webhookUrl set), SIP DELIVERY to a literal endpoint (sipUri set), or SIP DELIVERY to one of your saved trunks
    (trunkId set). sipUri and trunkId are mutually exclusive — setting one clears the other, and either takes precedence
    over the webhook. Wholesale numbers must always keep at least one mode — a change that would leave none is rejected
    with 400."""

    webhook_url: OptionalNullable[str] = Field(default=UNSET, alias="webhookUrl")
    """Invoked when a call connects and once per caller utterance. Empty/null disconnects the webhook."""

    sip_uri: OptionalNullable[str] = Field(default=UNSET, alias="sipUri")
    """BYOC / wholesale SIP delivery: when set, inbound calls bridge straight to this sip: endpoint and the webhook
    never runs. Format sip:user@host[:port][;transport=udp|tcp|tls], public hosts only. Null switches the number back to
    webhook mode (for wholesale numbers, only allowed when a webhookUrl is present)."""

    srtp: bool = False
    """Encrypt the audio on the sipUri delivery leg (SRTP with SDES key exchange, AES_CM_128_HMAC_SHA1_80 /
    AES_CM_128_HMAC_SHA1_32; no fallback to plain RTP). Accepted only when sipUri ends in ;transport=tls — otherwise
    400. Cleared automatically when the address changes to UDP/TCP or the number switches to trunk delivery. See
    /docs/sip-trunking#byoc-srtp."""

    trunk_id: OptionalNullable[str] = Field(default=UNSET, alias="trunkId")
    """Deliver inbound calls to one of your SIP trunks. A trunk with an egress host is dialed at that host; a
    REGISTRATION trunk is resolved to wherever your PBX is currently registered, at call time — the way to receive DID
    calls on equipment behind NAT. If the trunk is not registered when a call arrives, the call falls back to the
    number's webhook agent (if configured). Null clears trunk delivery. Mutually exclusive with sipUri."""

    realtime: OptionalNullable[RealtimeCallnodeIoPhoneNumbersApi] = UNSET
    """Realtime WebSocket mode (see /docs/realtime): CallNode opens a WebSocket to ``url`` for every call to this number
    and streams transcripts (and, on request, caller audio); you stream audio back, transfer or hang up. The webhook
    stays the fallback when the socket cannot be reached. Null turns it off. The auth secret is write-only (reads return
    valueSet)."""

    webhook_auth: Optional[WebhookAuthCallnodeIoPhoneNumbersApi] = Field(default=UNSET, alias="webhookAuth")
    """How CallNode authenticates to your webhook endpoint."""

    webhook_timeout: int = Field(default=30000, alias="webhookTimeout")
    """Webhook response timeout in milliseconds."""


class VoiceConfigDict(TypedDict):
    webhook_url: NotRequired[str | None]
    sip_uri: NotRequired[str | None]
    srtp: NotRequired[bool]
    trunk_id: NotRequired[str | None]
    realtime: NotRequired[RealtimeCallnodeIoPhoneNumbersApiDict | None]
    webhook_auth: NotRequired[WebhookAuthCallnodeIoPhoneNumbersApiDict]
    webhook_timeout: NotRequired[int]
