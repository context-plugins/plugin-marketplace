from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .income_statement_data import IncomeStatementData, IncomeStatementDataDict


class IncomeStatementResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[IncomeStatementData] = UNSET


class IncomeStatementResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[IncomeStatementDataDict]
