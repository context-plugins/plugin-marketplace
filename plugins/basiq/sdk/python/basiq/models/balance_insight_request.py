from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .balance2 import Balance2, Balance2Dict


class BalanceInsightRequest(SdkBaseModel):
    balance: Balance2
    """Balance criteria for filtering accounts. Only 'min' is required, 'max' is optional."""


class BalanceInsightRequestDict(TypedDict):
    balance: Balance2Dict
