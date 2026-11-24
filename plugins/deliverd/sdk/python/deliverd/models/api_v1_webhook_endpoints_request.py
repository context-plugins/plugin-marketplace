from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.event import EventOrStr
from .enums.format1 import Format1, Format1OrStr


class ApiV1WebhookEndpointsRequest(SdkBaseModel):
    url: str
    """Where to POST each event. HTTPS, on a public host."""

    description: OptionalNullable[str] = UNSET
    """What the endpoint is for, as an administrator will read it in the list."""

    events: Optional[list[EventOrStr]] = UNSET
    """The events to send. Empty means every event, including any added later, except the opt-in ones (gate.* lifecycle,
    task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named."""

    format: Format1OrStr = Format1.JSON
    """json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card for a Workflows
    webhook. discord: an embed with a link button for a channel webhook. workspace_studio: fires a Google Workspace
    Studio starter; made by the Deliverd add-on, with runAs."""

    run_as: Optional[EmailStr] = Field(default=UNSET, alias="runAs")
    """workspace_studio only: the Google address of the person whose flow this starter belongs to."""


class ApiV1WebhookEndpointsRequestDict(TypedDict):
    url: str
    description: NotRequired[str | None]
    events: NotRequired[list[EventOrStr]]
    format: NotRequired[Format1OrStr]
    run_as: NotRequired[EmailStr]
