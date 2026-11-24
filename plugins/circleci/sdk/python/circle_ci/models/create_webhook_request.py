from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event import EventOrStr
from .scope1 import Scope1, Scope1Dict


class CreateWebhookRequest(SdkBaseModel):
    name: str
    """The name of the webhook"""

    url: str
    """The URL to deliver webhook payloads to"""

    events: list[EventOrStr]
    """The events to subscribe to"""

    scope: Scope1
    signing_secret: str = Field(alias="signing-secret")
    """Secret used to generate HMAC signature"""

    verify_tls: Optional[bool] = Field(default=UNSET, alias="verify-tls")
    """Whether to verify TLS on delivery"""


class CreateWebhookRequestDict(TypedDict):
    name: str
    url: str
    events: list[EventOrStr]
    scope: Scope1Dict
    signing_secret: str
    verify_tls: NotRequired[bool]
