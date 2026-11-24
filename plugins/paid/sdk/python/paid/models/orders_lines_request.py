from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .order_line_create import OrderLineCreate, OrderLineCreateDict


class OrdersLinesRequest(SdkBaseModel):
    lines: Optional[list[OrderLineCreate]] = UNSET


class OrdersLinesRequestDict(TypedDict):
    lines: NotRequired[list[OrderLineCreateDict]]
