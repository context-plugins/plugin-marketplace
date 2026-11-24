from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .messaging_config import MessagingConfig, MessagingConfigDict
from .voice_config import VoiceConfig, VoiceConfigDict


class ApiV1NumbersRequest(SdkBaseModel):
    friendly_name: Optional[str] = Field(default=UNSET, alias="friendlyName")
    tags: Optional[list[str]] = UNSET
    """Your own labels for the number. Trimmed, de-duplicated case-insensitively, returned on every number, filterable
    on the dashboard. PATCH replaces the whole list; send [] to clear."""

    voice: Optional[VoiceConfig] = UNSET
    """Voice configuration — how inbound calls to this number are answered. Three modes: a conversational WEBHOOK agent
    (webhookUrl set), SIP DELIVERY to a literal endpoint (sipUri set), or SIP DELIVERY to one of your saved trunks
    (trunkId set). sipUri and trunkId are mutually exclusive — setting one clears the other, and either takes precedence
    over the webhook. Wholesale numbers must always keep at least one mode — a change that would leave none is rejected
    with 400."""

    messaging: Optional[MessagingConfig] = UNSET
    """Messaging webhook configuration for inbound SMS/MMS to this number."""


class ApiV1NumbersRequestDict(TypedDict):
    friendly_name: NotRequired[str]
    tags: NotRequired[list[str]]
    voice: NotRequired[VoiceConfigDict]
    messaging: NotRequired[MessagingConfigDict]
