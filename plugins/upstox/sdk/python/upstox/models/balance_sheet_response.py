from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .balance_sheet_data import BalanceSheetData, BalanceSheetDataDict
from .enums.status import StatusOrStr


class BalanceSheetResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[BalanceSheetData] = UNSET


class BalanceSheetResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[BalanceSheetDataDict]
