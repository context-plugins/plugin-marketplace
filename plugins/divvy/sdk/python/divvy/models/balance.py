from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Balance(SdkBaseModel):
    amount: Optional[float] = UNSET


class BalanceDict(TypedDict):
    amount: NotRequired[float]
