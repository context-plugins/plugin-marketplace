from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.scope import ScopeOrStr


class CreateApiKeyRequest(SdkBaseModel):
    name: str
    scopes: Optional[list[ScopeOrStr]] = UNSET
    """Defaults to ["read"]. Must be a subset of the authenticating key's scopes, else 403 scope_escalation."""

    website_id: OptionalNullable[int] = UNSET
    """Lock the new key to one site. Omit/null = all of the owner's sites. A single-site key MUST pass its own site id
    here."""

    expires_in_days: int = 90
    """Outside 1–365 → 400 invalid_expiry."""


class CreateApiKeyRequestDict(TypedDict):
    name: str
    scopes: NotRequired[list[ScopeOrStr]]
    website_id: NotRequired[int | None]
    expires_in_days: NotRequired[int]
