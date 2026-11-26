from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Balance(SdkBaseModel):
    pence: Optional[int] = UNSET
    gbp: Optional[str] = UNSET
    withdrawable: Optional[bool] = UNSET


class BalanceDict(TypedDict):
    pence: NotRequired[int]
    gbp: NotRequired[str]
    withdrawable: NotRequired[bool]
