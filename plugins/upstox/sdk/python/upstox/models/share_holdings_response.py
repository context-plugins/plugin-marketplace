from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .share_holding_data import ShareHoldingData, ShareHoldingDataDict


class ShareHoldingsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[ShareHoldingData]] = UNSET


class ShareHoldingsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[ShareHoldingDataDict]]
