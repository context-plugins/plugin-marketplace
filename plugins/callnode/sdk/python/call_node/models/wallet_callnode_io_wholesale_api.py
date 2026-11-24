from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WalletCallnodeIoWholesaleApi(SdkBaseModel):
    balance: Optional[float] = UNSET


class WalletCallnodeIoWholesaleApiDict(TypedDict):
    balance: NotRequired[float]
