from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cash_flow_entry import CashFlowEntry, CashFlowEntryDict
from .financial_statement_entry import FinancialStatementEntry, FinancialStatementEntryDict


class CashFlowData(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Report type: consolidated or standalone"""

    time_period: Optional[str] = UNSET
    """Time period: yearly or quarterly"""

    units_in: Optional[str] = UNSET
    """Unit of monetary values"""

    cash_flow: Optional[list[CashFlowEntry]] = UNSET
    """Cash flow entries grouped by type (Operating, Investing, Financing)"""

    full_statement: Optional[list[FinancialStatementEntry]] = UNSET
    """List of financial statement cash flow items with historical values"""


class CashFlowDataDict(TypedDict):
    type_: NotRequired[str]
    time_period: NotRequired[str]
    units_in: NotRequired[str]
    cash_flow: NotRequired[list[CashFlowEntryDict]]
    full_statement: NotRequired[list[FinancialStatementEntryDict]]
