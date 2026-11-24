from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .expired_future_data import ExpiredFutureData, ExpiredFutureDataDict


class GetExpiredFuturesContractResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[ExpiredFutureData]] = UNSET


class GetExpiredFuturesContractResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[ExpiredFutureDataDict]]
