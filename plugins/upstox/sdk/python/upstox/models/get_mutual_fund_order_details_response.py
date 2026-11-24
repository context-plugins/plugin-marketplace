from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .mutual_fund_order_data1 import MutualFundOrderData1, MutualFundOrderData1Dict


class GetMutualFundOrderDetailsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[MutualFundOrderData1] = UNSET
    """Mutual fund order details."""


class GetMutualFundOrderDetailsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[MutualFundOrderData1Dict]
