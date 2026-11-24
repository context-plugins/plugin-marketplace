from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Wallet(SdkBaseModel):
    previous_balance: Optional[float] = Field(default=UNSET, alias="previousBalance")
    new_balance: Optional[float] = Field(default=UNSET, alias="newBalance")


class WalletDict(TypedDict):
    previous_balance: NotRequired[float]
    new_balance: NotRequired[float]
