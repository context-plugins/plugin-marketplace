from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .order_book_data2 import OrderBookData2, OrderBookData2Dict


class GetOrderDetailsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[OrderBookData2] = UNSET
    """Response data for order details"""


class GetOrderDetailsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[OrderBookData2Dict]
