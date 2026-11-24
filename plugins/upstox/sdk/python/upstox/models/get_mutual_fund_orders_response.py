from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .mutual_fund_meta_data1 import MutualFundMetaData1, MutualFundMetaData1Dict
from .mutual_fund_order_data import MutualFundOrderData, MutualFundOrderDataDict


class GetMutualFundOrdersResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[MutualFundOrderData]] = UNSET
    """Mutual fund orders in the requested window."""

    meta_data: Optional[MutualFundMetaData1] = UNSET
    """Meta data for mutual fund orders"""


class GetMutualFundOrdersResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[MutualFundOrderDataDict]]
    meta_data: NotRequired[MutualFundMetaData1Dict]
