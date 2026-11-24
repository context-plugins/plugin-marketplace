from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IdentityVerificationData(SdkBaseModel):
    """Required when type is IDENTITY_VERIFICATION. At least one field must be provided."""

    name: Optional[str] = UNSET
    """Full name to verify."""

    email: Optional[EmailStr] = UNSET
    """Email address to verify."""

    phone: Optional[str] = UNSET
    """Phone number to verify (E.164 format recommended)."""

    address: Optional[str] = UNSET
    """Address to verify."""


class IdentityVerificationDataDict(TypedDict):
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    phone: NotRequired[str]
    address: NotRequired[str]
