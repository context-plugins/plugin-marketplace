from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .profit_and_loss_charges_wrapper_data2 import (
    ProfitAndLossChargesWrapperData2,
    ProfitAndLossChargesWrapperData2Dict,
)


class GetProfitAndLossChargesResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[ProfitAndLossChargesWrapperData2] = UNSET
    """Response data for brokerage"""


class GetProfitAndLossChargesResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[ProfitAndLossChargesWrapperData2Dict]
