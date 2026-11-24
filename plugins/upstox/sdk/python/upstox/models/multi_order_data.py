from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MultiOrderData(SdkBaseModel):
    correlation_id: Optional[str] = UNSET
    """A unique identifier for tracking individual orders within the batch"""

    order_id: Optional[str] = UNSET
    """An order ID for the order request placed"""


class MultiOrderDataDict(TypedDict):
    correlation_id: NotRequired[str]
    order_id: NotRequired[str]
