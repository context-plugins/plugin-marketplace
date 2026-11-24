from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .income1 import Income1, Income1Dict


class IncomeVerificationData(SdkBaseModel):
    """Required when type is INCOME_VERIFICATION."""

    income: Income1


class IncomeVerificationDataDict(TypedDict):
    income: Income1Dict
