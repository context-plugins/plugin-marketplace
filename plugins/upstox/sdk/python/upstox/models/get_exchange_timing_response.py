from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .exchange_timing_data import ExchangeTimingData, ExchangeTimingDataDict


class GetExchangeTimingResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[ExchangeTimingData]] = UNSET
    """Response data for exchange timing list"""


class GetExchangeTimingResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[ExchangeTimingDataDict]]
