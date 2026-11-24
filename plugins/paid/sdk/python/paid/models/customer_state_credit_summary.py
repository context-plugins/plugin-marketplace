from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_state_credit_balance import CustomerStateCreditBalance, CustomerStateCreditBalanceDict


class CustomerStateCreditSummary(SdkBaseModel):
    balances: list[CustomerStateCreditBalance]


class CustomerStateCreditSummaryDict(TypedDict):
    balances: list[CustomerStateCreditBalanceDict]
