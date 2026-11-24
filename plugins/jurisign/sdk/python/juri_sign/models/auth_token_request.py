from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope import ScopeOrStr


class AuthTokenRequest(SdkBaseModel):
    email: EmailStr
    """Your account email address"""

    password: str
    """Your account password"""

    device_name: Optional[str] = UNSET
    """Optional device identifier. Tokens with the same device name will be revoked and replaced."""

    scopes: Optional[list[ScopeOrStr]] = UNSET
    """Optional. Restricts the token to the given scopes. ``sign-requests:read`` / ``sign-requests:write`` also cover
    the templates and bulk-* endpoints. Omit to receive all 5 scopes (default, unchanged behavior for existing
    integrations)."""


class AuthTokenRequestDict(TypedDict):
    email: EmailStr
    password: str
    device_name: NotRequired[str]
    scopes: NotRequired[list[ScopeOrStr]]
