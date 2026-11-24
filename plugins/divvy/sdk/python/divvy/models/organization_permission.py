from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .card import Card, CardDict
from .wallet import Wallet, WalletDict


class OrganizationPermission(SdkBaseModel):
    """Organization level permission response DTO."""

    card: Optional[Card] = UNSET
    wallet: Optional[Wallet] = UNSET


class OrganizationPermissionDict(TypedDict):
    card: NotRequired[CardDict]
    wallet: NotRequired[WalletDict]
