from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.provider import ProviderOrStr


class Wallet1(SdkBaseModel):
    """Required when account_type=wallet (Amazon Pay only)"""

    provider: Optional[ProviderOrStr] = UNSET
    phone: Optional[str] = UNSET
    """10-digit phone with country code (mandatory)"""

    email: Optional[str] = UNSET
    name: Optional[str] = UNSET


class Wallet1Dict(TypedDict):
    provider: NotRequired[ProviderOrStr]
    phone: NotRequired[str]
    email: NotRequired[str]
    name: NotRequired[str]
