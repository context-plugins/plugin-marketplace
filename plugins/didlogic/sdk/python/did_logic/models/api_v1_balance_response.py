from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1BalanceResponse(SdkBaseModel):
    balance: float
    """Current account balance rounded to 2 decimal places"""


class ApiV1BalanceResponseDict(TypedDict):
    balance: float
