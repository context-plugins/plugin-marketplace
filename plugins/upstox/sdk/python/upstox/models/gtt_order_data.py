from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GttOrderData(SdkBaseModel):
    gtt_order_ids: Optional[list[str]] = UNSET
    """Order ID for the placed GTT order"""


class GttOrderDataDict(TypedDict):
    gtt_order_ids: NotRequired[list[str]]
