from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.webhook_event_type import WebhookEventTypeOrStr


class PublicationsWebhooksRequest(SdkBaseModel):
    url: str
    """The webhook URL to send events to."""

    event_types: list[WebhookEventTypeOrStr]
    """The types of events the webhook will receive."""

    description: Optional[str] = UNSET
    """A description of the webhook."""


class PublicationsWebhooksRequestDict(TypedDict):
    url: str
    event_types: list[WebhookEventTypeOrStr]
    description: NotRequired[str]
