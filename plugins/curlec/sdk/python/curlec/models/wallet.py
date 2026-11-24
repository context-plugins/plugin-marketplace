from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.provider import ProviderOrStr


class Wallet(SdkBaseModel):
    """Amazon Pay wallet details. Required when account_type=wallet."""

    provider: Optional[ProviderOrStr] = UNSET
    phone: Optional[str] = UNSET
    """10-digit phone with country code, e.g. +919876543210"""

    email: Optional[EmailStr] = UNSET
    name: Optional[str] = UNSET
    """Wallet holder name. Case-sensitive. Supported: a-z, A-Z, 0-9, space, ', -, _, /, (, ), ."""


class WalletDict(TypedDict):
    provider: NotRequired[ProviderOrStr]
    phone: NotRequired[str]
    email: NotRequired[EmailStr]
    name: NotRequired[str]
