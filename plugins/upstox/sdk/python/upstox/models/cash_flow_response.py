from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cash_flow_data import CashFlowData, CashFlowDataDict
from .enums.status import StatusOrStr


class CashFlowResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[CashFlowData] = UNSET


class CashFlowResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[CashFlowDataDict]
