from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .credit_balance import CreditBalance, CreditBalanceDict


class CreditBalanceListResponse(SdkBaseModel):
    data: list[CreditBalance]


class CreditBalanceListResponseDict(TypedDict):
    data: list[CreditBalanceDict]
