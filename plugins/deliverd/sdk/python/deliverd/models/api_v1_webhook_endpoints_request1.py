from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.event import EventOrStr
from .enums.format1 import Format1OrStr


class ApiV1WebhookEndpointsRequest1(SdkBaseModel):
    url: Optional[str] = UNSET
    """Where to POST each event. HTTPS, on a public host."""

    description: OptionalNullable[str] = UNSET
    """What the endpoint is for, as an administrator will read it in the list."""

    events: Optional[list[EventOrStr]] = UNSET
    """The events to send. Empty means every event, including any added later, except the opt-in ones (gate.* lifecycle,
    task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named."""

    format: Optional[Format1OrStr] = UNSET
    """json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card for a Workflows
    webhook. discord: an embed with a link button for a channel webhook. workspace_studio: fires a Google Workspace
    Studio starter; made by the Deliverd add-on, with runAs."""

    enabled: Optional[bool] = UNSET
    """Turn deliveries off or back on. Turning one back on clears its run of failures, so an endpoint paused after
    twenty is not paused again by the next."""


class ApiV1WebhookEndpointsRequest1Dict(TypedDict):
    url: NotRequired[str]
    description: NotRequired[str | None]
    events: NotRequired[list[EventOrStr]]
    format: NotRequired[Format1OrStr]
    enabled: NotRequired[bool]
