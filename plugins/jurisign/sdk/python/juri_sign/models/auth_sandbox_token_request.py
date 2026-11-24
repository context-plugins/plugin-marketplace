from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AuthSandboxTokenRequest(SdkBaseModel):
    email: EmailStr
    """Your account email address"""

    password: str
    """Your account password"""

    device_name: Optional[str] = UNSET
    """Optional device identifier. Tokens with the same device name will be revoked and replaced."""


class AuthSandboxTokenRequestDict(TypedDict):
    email: EmailStr
    password: str
    device_name: NotRequired[str]
