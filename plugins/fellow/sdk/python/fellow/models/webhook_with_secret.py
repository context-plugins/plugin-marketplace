from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class WebhookWithSecret(SdkBaseModel):
    """Webhook response that includes the secret, only returned on creation."""

    id: Optional[str] = UNSET
    url: Optional[str] = UNSET
    description: Optional[str] = UNSET
    status: Optional[str] = UNSET
    scope: Optional[str] = UNSET
    enabled_events: Optional[list[str]] = UNSET
    created_at: OptionalNullable[RFC3339DateTime] = UNSET
    updated_at: OptionalNullable[RFC3339DateTime] = UNSET
    secret: str


class WebhookWithSecretDict(TypedDict):
    id: NotRequired[str]
    url: NotRequired[str]
    description: NotRequired[str]
    status: NotRequired[str]
    scope: NotRequired[str]
    enabled_events: NotRequired[list[str]]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    secret: str
