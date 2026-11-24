from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .balance_sheet_history_item import BalanceSheetHistoryItem, BalanceSheetHistoryItemDict
from .financial_statement_entry import FinancialStatementEntry, FinancialStatementEntryDict


class BalanceSheetData(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Report type: consolidated or standalone"""

    time_period: Optional[str] = UNSET
    """Time period: yearly or quarterly"""

    units_in: Optional[str] = UNSET
    """Unit of monetary values"""

    history: Optional[list[BalanceSheetHistoryItem]] = UNSET
    """Historical balance sheet entries"""

    full_statement: Optional[list[FinancialStatementEntry]] = UNSET
    """List of financial statement balance sheet items with historical values"""


class BalanceSheetDataDict(TypedDict):
    type_: NotRequired[str]
    time_period: NotRequired[str]
    units_in: NotRequired[str]
    history: NotRequired[list[BalanceSheetHistoryItemDict]]
    full_statement: NotRequired[list[FinancialStatementEntryDict]]
