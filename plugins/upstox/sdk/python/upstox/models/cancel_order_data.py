from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelOrderData(SdkBaseModel):
    order_id: Optional[str] = UNSET
    """Reference order ID"""


class CancelOrderDataDict(TypedDict):
    order_id: NotRequired[str]
