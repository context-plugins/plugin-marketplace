from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpoApplyData(SdkBaseModel):
    order_id: Optional[str] = UNSET
    """Application id created for this IPO application. Pass this as order_id to the get-order and cancel-order APIs"""


class IpoApplyDataDict(TypedDict):
    order_id: NotRequired[str]
