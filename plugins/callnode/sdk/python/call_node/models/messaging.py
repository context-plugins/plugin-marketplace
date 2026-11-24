from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .webhook_auth_status import WebhookAuthStatus, WebhookAuthStatusDict


class Messaging(SdkBaseModel):
    webhook_url: OptionalNullable[str] = Field(default=UNSET, alias="webhookUrl")
    webhook_auth: OptionalNullable[WebhookAuthStatus] = Field(default=UNSET, alias="webhookAuth")
    """How CallNode authenticates to your webhook. The secret itself is write-only and never returned."""

    enabled: Optional[bool] = UNSET
    ready: OptionalNullable[bool] = UNSET
    """Whether A2P messaging registration has completed for this number. Provisions asynchronously after purchase."""


class MessagingDict(TypedDict):
    webhook_url: NotRequired[str | None]
    webhook_auth: NotRequired[WebhookAuthStatusDict | None]
    enabled: NotRequired[bool]
    ready: NotRequired[bool | None]
