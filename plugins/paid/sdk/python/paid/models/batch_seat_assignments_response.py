from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .order_seat import OrderSeat, OrderSeatDict


class BatchSeatAssignmentsResponse(SdkBaseModel):
    data: list[OrderSeat]


class BatchSeatAssignmentsResponseDict(TypedDict):
    data: list[OrderSeatDict]
