from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .financial_statement_entry import FinancialStatementEntry, FinancialStatementEntryDict
from .income_statement_entry import IncomeStatementEntry, IncomeStatementEntryDict


class IncomeStatementData(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Report type: consolidated or standalone"""

    time_period: Optional[str] = UNSET
    """Time period: yearly or quarterly"""

    units_in: Optional[str] = UNSET
    """Unit of monetary values"""

    income_statement: Optional[list[IncomeStatementEntry]] = UNSET
    """Income statement entries grouped by type (Revenue, Operating profit, Net profit)"""

    full_statement: Optional[list[FinancialStatementEntry]] = UNSET
    """List of financial statement income statement items with historical values"""


class IncomeStatementDataDict(TypedDict):
    type_: NotRequired[str]
    time_period: NotRequired[str]
    units_in: NotRequired[str]
    income_statement: NotRequired[list[IncomeStatementEntryDict]]
    full_statement: NotRequired[list[FinancialStatementEntryDict]]
