from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class IncomeStatement(SdkBaseModel):
    date: Optional[Date] = UNSET
    symbol: Optional[str] = UNSET
    period: Optional[str] = UNSET
    revenue: Optional[float] = UNSET
    cost_of_revenue: Optional[float] = Field(default=UNSET, alias="costOfRevenue")
    gross_profit: Optional[float] = Field(default=UNSET, alias="grossProfit")
    operating_income: Optional[float] = Field(default=UNSET, alias="operatingIncome")
    net_income: Optional[float] = Field(default=UNSET, alias="netIncome")
    eps: Optional[float] = UNSET


class IncomeStatementDict(TypedDict):
    date: NotRequired[Date]
    symbol: NotRequired[str]
    period: NotRequired[str]
    revenue: NotRequired[float]
    cost_of_revenue: NotRequired[float]
    gross_profit: NotRequired[float]
    operating_income: NotRequired[float]
    net_income: NotRequired[float]
    eps: NotRequired[float]
