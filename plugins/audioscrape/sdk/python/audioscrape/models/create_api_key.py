from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class CreateApiKey(SdkBaseModel):
    expires_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Optional: when this key stops working (RFC 3339). Omit for a key that never expires — the behaviour of every key
    issued before 2026-07-31."""

    key_name: str
    """Human-readable label for the key. Stored verbatim; visible in the dashboard and in ``last_used`` audit logs.
    Recommended: identify the integration + environment, e.g. ``"acme-dev-connector-v1"``."""

    workspace_id: OptionalNullable[int] = UNSET
    """Optional: scope this key to a single workspace. If omitted, the key uses the user's current_workspace_id at each
    request (legacy behavior). To scope to a workspace, the caller must be a member of it."""


class CreateApiKeyDict(TypedDict):
    expires_at: NotRequired[RFC3339DateTime | None]
    key_name: str
    workspace_id: NotRequired[int | None]
