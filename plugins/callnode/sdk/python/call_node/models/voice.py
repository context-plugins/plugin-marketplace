from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .realtime1 import Realtime1, Realtime1Dict
from .webhook_auth_status import WebhookAuthStatus, WebhookAuthStatusDict


class Voice(SdkBaseModel):
    webhook_url: OptionalNullable[str] = Field(default=UNSET, alias="webhookUrl")
    webhook_auth: OptionalNullable[WebhookAuthStatus] = Field(default=UNSET, alias="webhookAuth")
    """How CallNode authenticates to your webhook. The secret itself is write-only and never returned."""

    webhook_timeout: Optional[int] = Field(default=UNSET, alias="webhookTimeout")
    sip_uri: OptionalNullable[str] = Field(default=UNSET, alias="sipUri")
    """SIP delivery target (BYOC / wholesale). Null when the number runs in webhook mode."""

    srtp: Optional[bool] = UNSET
    """Whether the sipUri delivery leg offers SRTP (only ever true beside a ;transport=tls address)."""

    trunk_id: OptionalNullable[str] = Field(default=UNSET, alias="trunkId")
    """SIP trunk this number delivers inbound calls to. Null unless trunk delivery is configured."""

    realtime: OptionalNullable[Realtime1] = UNSET
    """Realtime WebSocket mode (see /docs/realtime). Null when the number runs the per-turn webhook loop."""


class VoiceDict(TypedDict):
    webhook_url: NotRequired[str | None]
    webhook_auth: NotRequired[WebhookAuthStatusDict | None]
    webhook_timeout: NotRequired[int]
    sip_uri: NotRequired[str | None]
    srtp: NotRequired[bool]
    trunk_id: NotRequired[str | None]
    realtime: NotRequired[Realtime1Dict | None]
