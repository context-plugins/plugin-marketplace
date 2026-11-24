from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope import ScopeOrStr


class BootstrapVerifyOtpRequest(SdkBaseModel):
    email: EmailStr
    code: str
    """The code from the email. Single-use; three wrong guesses destroy it."""

    accept_terms: bool
    """Must be true. Recorded server-side with the version, channel ``api``, IP and User-Agent as the account's
    acceptance evidence."""

    terms_version: Optional[str] = UNSET
    """The version being accepted. Defaults to the server's current version."""

    key_name: str = "agent bootstrap"
    scopes: Optional[list[ScopeOrStr]] = UNSET
    """Must be within ``API_BOOTSTRAP_SCOPES`` (default ``read,sites:write``). Omitted = that whole set.
    ``billing:write`` is never available here."""

    expires_in_days: int = 90


class BootstrapVerifyOtpRequestDict(TypedDict):
    email: EmailStr
    code: str
    accept_terms: bool
    terms_version: NotRequired[str]
    key_name: NotRequired[str]
    scopes: NotRequired[list[ScopeOrStr]]
    expires_in_days: NotRequired[int]
