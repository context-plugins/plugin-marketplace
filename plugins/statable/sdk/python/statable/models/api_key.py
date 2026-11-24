from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class ApiKey(SdkBaseModel):
    """The non-secret view of a key. The raw token is never stored and never appears here — only in the create/rotate
    responses."""

    id: int
    name: str
    prefix: str
    """Non-secret fragment of the token, to identify the key in a list."""

    website_id: int | None
    """The site the key is locked to; null = all of the owner's sites."""

    scopes: str
    """Comma-separated scope set, in catalog order."""

    created_at: RFC3339DateTime
    created_ip: OptionalNullable[str] = UNSET
    last_used_at: OptionalNullable[RFC3339DateTime] = UNSET
    last_used_ip: OptionalNullable[str] = UNSET
    expires_at: OptionalNullable[RFC3339DateTime] = UNSET
    """null = never expires. Only dashboard-created keys can be non-expiring; keys created over the API always carry an
    expiry."""


class ApiKeyDict(TypedDict):
    id: int
    name: str
    prefix: str
    website_id: int | None
    scopes: str
    created_at: RFC3339DateTime
    created_ip: NotRequired[str | None]
    last_used_at: NotRequired[RFC3339DateTime | None]
    last_used_ip: NotRequired[str | None]
    expires_at: NotRequired[RFC3339DateTime | None]
