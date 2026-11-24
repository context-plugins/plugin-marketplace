from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.event import EventOrStr
from .scope import Scope, ScopeDict


class WebhookInfo(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The unique identifier of the webhook"""

    url: Optional[str] = UNSET
    """The URL the webhook delivers to"""

    name: Optional[str] = UNSET
    """The name of the webhook"""

    events: Optional[list[EventOrStr]] = UNSET
    """The events this webhook subscribes to"""

    scope: Optional[Scope] = UNSET
    """The scope of the webhook"""

    signing_secret: Optional[str] = Field(default=UNSET, alias="signing-secret")
    """The signing secret for verifying webhook payloads"""

    verify_tls: Optional[bool] = Field(default=UNSET, alias="verify-tls")
    """Whether to verify TLS certificates"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="created-at")
    """When the webhook was created"""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updated-at")
    """When the webhook was last updated"""


class WebhookInfoDict(TypedDict):
    id: NotRequired[UUID]
    url: NotRequired[str]
    name: NotRequired[str]
    events: NotRequired[list[EventOrStr]]
    scope: NotRequired[ScopeDict]
    signing_secret: NotRequired[str]
    verify_tls: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
