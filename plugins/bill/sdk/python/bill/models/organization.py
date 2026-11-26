from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .card import Card, CardDict
from .wallet import Wallet, WalletDict


class Organization(SdkBaseModel):
    card: Optional[Card] = UNSET
    wallet: Optional[Wallet] = UNSET


class OrganizationDict(TypedDict):
    card: NotRequired[CardDict]
    wallet: NotRequired[WalletDict]
