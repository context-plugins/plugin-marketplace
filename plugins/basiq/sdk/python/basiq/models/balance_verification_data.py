from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .balance3 import Balance3, Balance3Dict


class BalanceVerificationData(SdkBaseModel):
    """Required when type is BALANCE_VERIFICATION."""

    balance: Balance3


class BalanceVerificationDataDict(TypedDict):
    balance: Balance3Dict
