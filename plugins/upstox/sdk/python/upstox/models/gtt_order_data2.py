from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GttOrderData2(SdkBaseModel):
    """Response data for GTT order request"""

    gtt_order_ids: Optional[list[str]] = UNSET
    """Order ID for the placed GTT order"""


class GttOrderData2Dict(TypedDict):
    gtt_order_ids: NotRequired[list[str]]
