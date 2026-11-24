from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiKey(SdkBaseModel):
    created_at: OptionalNullable[str] = UNSET
    """RFC 3339 UTC timestamp."""

    expires_at: OptionalNullable[str] = UNSET
    """When the key stops authenticating (RFC 3339). ``null`` = never expires, which is the case for every key issued
    before 2026-07-31."""

    id: int
    key_name: str
    """Human-readable label for the key (shown in the dashboard)."""

    key_prefix: str
    """Display-safe prefix of the key (first 12 characters + "..."). Always present. Use this to identify the key in
    logs and UIs."""

    key_value: OptionalNullable[str] = UNSET
    """The full bearer token, format ``sk_<base64(32 random bytes)>``. **Returned only in the response to ``POST
    /api/keys``** — Audioscrape stores only a SHA-256 hash, so list / delete endpoints cannot recover the raw value.
    Save it client-side immediately on creation."""

    last_used: OptionalNullable[str] = UNSET
    """RFC 3339 UTC timestamp of the most recent request that used this key. ``null`` if the key has never been used."""

    last_used_ip: OptionalNullable[str] = UNSET
    """Source IP of the request described by ``last_used`` (as seen by our edge). ``null`` if the key has never been
    used or the IP was unavailable. Use it to spot a leaked key being used from somewhere unexpected."""

    workspace_id: OptionalNullable[int] = UNSET
    """Workspace this key is scoped to. ``null`` means the key follows the user's ``current_workspace_id`` at request
    time (legacy behavior)."""


class ApiKeyDict(TypedDict):
    created_at: NotRequired[str | None]
    expires_at: NotRequired[str | None]
    id: int
    key_name: str
    key_prefix: str
    key_value: NotRequired[str | None]
    last_used: NotRequired[str | None]
    last_used_ip: NotRequired[str | None]
    workspace_id: NotRequired[int | None]
