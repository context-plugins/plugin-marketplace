from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Depth(SdkBaseModel):
    quantity: Optional[int] = UNSET
    """quantity"""

    price: Optional[float] = UNSET
    """price"""

    orders: Optional[int] = UNSET
    """orders"""


class DepthDict(TypedDict):
    quantity: NotRequired[int]
    price: NotRequired[float]
    orders: NotRequired[int]
