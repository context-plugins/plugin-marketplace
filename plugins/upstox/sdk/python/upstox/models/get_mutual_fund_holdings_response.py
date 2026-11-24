from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .mutual_fund_holding_data import MutualFundHoldingData, MutualFundHoldingDataDict


class GetMutualFundHoldingsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[MutualFundHoldingData]] = UNSET
    """Mutual fund holdings."""


class GetMutualFundHoldingsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[MutualFundHoldingDataDict]]
