from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .webhook_auth_callnode_io_phone_numbers_api import (
    WebhookAuthCallnodeIoPhoneNumbersApi,
    WebhookAuthCallnodeIoPhoneNumbersApiDict,
)


class MessagingConfig(SdkBaseModel):
    """Messaging webhook configuration for inbound SMS/MMS to this number."""

    webhook_url: OptionalNullable[str] = Field(default=UNSET, alias="webhookUrl")
    webhook_auth: Optional[WebhookAuthCallnodeIoPhoneNumbersApi] = Field(default=UNSET, alias="webhookAuth")
    """How CallNode authenticates to your webhook endpoint."""

    enabled: bool = True


class MessagingConfigDict(TypedDict):
    webhook_url: NotRequired[str | None]
    webhook_auth: NotRequired[WebhookAuthCallnodeIoPhoneNumbersApiDict]
    enabled: NotRequired[bool]
