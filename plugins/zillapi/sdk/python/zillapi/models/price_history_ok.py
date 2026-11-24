from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .price_history_event import PriceHistoryEvent, PriceHistoryEventDict


class PriceHistoryOk(SdkBaseModel):
    data: Optional[list[PriceHistoryEvent]] = UNSET
    request_id: Optional[str] = UNSET


class PriceHistoryOkDict(TypedDict):
    data: NotRequired[list[PriceHistoryEventDict]]
    request_id: NotRequired[str]
