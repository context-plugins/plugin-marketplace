from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class WebhookCreated(SdkBaseModel):
    id: Optional[UUID] = UNSET
    url: Optional[str] = UNSET
    events: Optional[list[str]] = UNSET
    active: Optional[bool] = UNSET
    description: OptionalNullable[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    revoked_at: OptionalNullable[RFC3339DateTime] = UNSET
    secret: Optional[str] = UNSET
    """Plaintext signing secret (whsec_*). Shown only once, at creation."""


class WebhookCreatedDict(TypedDict):
    id: NotRequired[UUID]
    url: NotRequired[str]
    events: NotRequired[list[str]]
    active: NotRequired[bool]
    description: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    revoked_at: NotRequired[RFC3339DateTime | None]
    secret: NotRequired[str]
