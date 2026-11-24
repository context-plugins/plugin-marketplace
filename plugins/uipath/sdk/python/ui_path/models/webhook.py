from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Webhook(SdkBaseModel):
    """A webhook subscription that receives Orchestrator event notifications"""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique integer identifier of the webhook"""

    url: Optional[str] = Field(default=UNSET, alias="Url")
    """The HTTPS endpoint URL that receives event POST requests"""

    enabled: Optional[bool] = Field(default=UNSET, alias="Enabled")
    """Whether the webhook is active and sending notifications"""

    secret: Optional[str] = Field(default=UNSET, alias="Secret")
    """Optional HMAC secret for validating payload signatures via X-UiPath-Signature header"""

    subscribe_to_all_events: Optional[bool] = Field(default=UNSET, alias="SubscribeToAllEvents")
    """Whether to receive all event types or only the specified ones"""

    allow_insecure_ssl: Optional[bool] = Field(default=UNSET, alias="AllowInsecureSsl")
    """Whether to allow webhook delivery to endpoints with invalid SSL certificates"""

    events: Optional[list[str]] = Field(default=UNSET, alias="Events")
    """List of event type identifiers to subscribe to when SubscribeToAllEvents is false"""


class WebhookDict(TypedDict):
    id: NotRequired[int]
    url: NotRequired[str]
    enabled: NotRequired[bool]
    secret: NotRequired[str]
    subscribe_to_all_events: NotRequired[bool]
    allow_insecure_ssl: NotRequired[bool]
    events: NotRequired[list[str]]
