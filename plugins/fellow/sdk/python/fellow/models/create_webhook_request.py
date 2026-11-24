from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.scope_fellow_developer_webhooks_api import (
    ScopeFellowDeveloperWebhooksApi,
    ScopeFellowDeveloperWebhooksApiOrStr,
)
from .enums.status_fellow_developer_webhooks_api import (
    StatusFellowDeveloperWebhooksApi,
    StatusFellowDeveloperWebhooksApiOrStr,
)


class CreateWebhookRequest(SdkBaseModel):
    """Request body for creating a webhook."""

    url: str
    """The URL endpoint that will receive webhook POST requests"""

    enabled_events: list[str]
    """List of event types to subscribe to. Valid values: 'ai_note.shared_to_channel', 'ai_note.generated',
    'action_item.assigned', 'action_item.completed'."""

    description: str = ""
    """Optional description for this webhook endpoint"""

    status: StatusFellowDeveloperWebhooksApiOrStr = StatusFellowDeveloperWebhooksApi.ACTIVE
    """Webhook status. Valid values: 'active', 'inactive'"""

    scope: ScopeFellowDeveloperWebhooksApiOrStr = ScopeFellowDeveloperWebhooksApi.USER
    """Who the webhook belongs to. 'user' is the authenticated user, the default and the existing behaviour. 'workspace'
    is the whole account: it receives every matching event with no per-user filter, and each event is delivered once
    rather than once per attendee. Creating one requires a privileged API key."""


class CreateWebhookRequestDict(TypedDict):
    url: str
    enabled_events: list[str]
    description: NotRequired[str]
    status: NotRequired[StatusFellowDeveloperWebhooksApiOrStr]
    scope: NotRequired[ScopeFellowDeveloperWebhooksApiOrStr]
