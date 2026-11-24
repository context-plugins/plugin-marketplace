from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SendMessageRequest(SdkBaseModel):
    to: str
    """Plus sign followed by 7–15 digits."""

    from_: str = Field(alias="from")
    """A number you own. For SMS/MMS it must be carrier-registered: associated with your 10DLC campaign (local) or
    Toll-Free Verified (toll-free)."""

    body: Optional[str] = UNSET
    """Message text. Required unless ``media`` is supplied."""

    media: Optional[list[str]] = UNSET
    """Any entry makes this an MMS. Each entry is a public URL or the file itself as a base64 data URL
    (``data:image/png;base64,...``). JPG, PNG, GIF, WebP, MP4 and PDF; up to 5 MB each. CallNode stores a copy and
    delivers from its own URL. An inline file of an unsupported type or size is a 400 ``invalid_media``."""

    status_webhook_url: Optional[str] = Field(default=UNSET, alias="statusWebhookUrl")
    """URL we POST delivery status updates to."""

    tcpa_override: bool = Field(default=False, alias="tcpaOverride")
    metadata: Optional[Any] = UNSET


class SendMessageRequestDict(TypedDict):
    to: str
    from_: str
    body: NotRequired[str]
    media: NotRequired[list[str]]
    status_webhook_url: NotRequired[str]
    tcpa_override: NotRequired[bool]
    metadata: NotRequired[Any]
