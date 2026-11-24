from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .order_book_data import OrderBookData, OrderBookDataDict


class GetOrderBookResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[OrderBookData]] = UNSET
    """Response data for order Book"""


class GetOrderBookResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[OrderBookDataDict]]
