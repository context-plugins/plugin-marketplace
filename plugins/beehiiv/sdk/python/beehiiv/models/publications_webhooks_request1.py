from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.webhook_event_type import WebhookEventTypeOrStr


class PublicationsWebhooksRequest1(SdkBaseModel):
    event_types: Optional[list[WebhookEventTypeOrStr]] = UNSET
    """The types of events the webhook will receive."""

    description: Optional[str] = UNSET
    """A description of the webhook."""


class PublicationsWebhooksRequest1Dict(TypedDict):
    event_types: NotRequired[list[WebhookEventTypeOrStr]]
    description: NotRequired[str]
