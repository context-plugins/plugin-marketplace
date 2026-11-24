from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelOrderData1(SdkBaseModel):
    """Response data for Cancel order request"""

    order_id: Optional[str] = UNSET
    """Reference order ID"""


class CancelOrderData1Dict(TypedDict):
    order_id: NotRequired[str]
