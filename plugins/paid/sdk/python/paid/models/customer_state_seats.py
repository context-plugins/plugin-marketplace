from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_state_seat import CustomerStateSeat, CustomerStateSeatDict


class CustomerStateSeats(SdkBaseModel):
    total: int
    assigned: int
    unassigned: int
    data: list[CustomerStateSeat]


class CustomerStateSeatsDict(TypedDict):
    total: int
    assigned: int
    unassigned: int
    data: list[CustomerStateSeatDict]
