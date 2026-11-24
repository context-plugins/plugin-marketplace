from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpoOrderBid(SdkBaseModel):
    quantity: Optional[int] = UNSET
    """Number of shares bid for"""

    price: Optional[float] = UNSET
    """Bid price per share"""

    amount: Optional[float] = UNSET
    """Value of the bid, quantity x price"""

    message: Optional[str] = UNSET
    """Message from the exchange for this bid, when one was returned"""


class IpoOrderBidDict(TypedDict):
    quantity: NotRequired[int]
    price: NotRequired[float]
    amount: NotRequired[float]
    message: NotRequired[str]
