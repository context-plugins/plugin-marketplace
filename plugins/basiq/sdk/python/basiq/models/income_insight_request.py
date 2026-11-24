from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .income import Income, IncomeDict


class IncomeInsightRequest(SdkBaseModel):
    income: Income
    """Income range to verify"""


class IncomeInsightRequestDict(TypedDict):
    income: IncomeDict
