from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.status_fellow_developer_webhooks_api import StatusFellowDeveloperWebhooksApiOrStr


class UpdateWebhookRequest(SdkBaseModel):
    """Request body for updating a webhook. All fields are optional."""

    url: OptionalNullable[str] = UNSET
    """The URL endpoint that will receive webhook POST requests"""

    enabled_events: OptionalNullable[list[str]] = UNSET
    """List of event types to subscribe to. Valid values: 'ai_note.shared_to_channel', 'ai_note.generated',
    'action_item.assigned', 'action_item.completed'."""

    description: OptionalNullable[str] = UNSET
    """Optional description for this webhook endpoint"""

    status: OptionalNullable[StatusFellowDeveloperWebhooksApiOrStr] = UNSET
    """Webhook status. Valid values: 'active', 'inactive'"""


class UpdateWebhookRequestDict(TypedDict):
    url: NotRequired[str | None]
    enabled_events: NotRequired[list[str] | None]
    description: NotRequired[str | None]
    status: NotRequired[StatusFellowDeveloperWebhooksApiOrStr | None]
