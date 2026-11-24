from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event import EventOrStr


class UpdateWebhookRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the webhook"""

    url: Optional[str] = UNSET
    """The URL to deliver webhook payloads to"""

    events: Optional[list[EventOrStr]] = UNSET
    """The events to subscribe to"""

    signing_secret: Optional[str] = Field(default=UNSET, alias="signing-secret")
    """Secret used to generate HMAC signature"""

    verify_tls: Optional[bool] = Field(default=UNSET, alias="verify-tls")
    """Whether to verify TLS on delivery"""


class UpdateWebhookRequestDict(TypedDict):
    name: NotRequired[str]
    url: NotRequired[str]
    events: NotRequired[list[EventOrStr]]
    signing_secret: NotRequired[str]
    verify_tls: NotRequired[bool]
