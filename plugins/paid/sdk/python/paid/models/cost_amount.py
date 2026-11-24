from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CostAmount(SdkBaseModel):
    """Cost amount with currency"""

    amount: float
    """The cost amount"""

    currency: str
    """The currency code (e.g., "USD")"""


class CostAmountDict(TypedDict):
    amount: float
    currency: str
