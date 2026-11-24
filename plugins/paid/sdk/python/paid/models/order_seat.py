from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.seat_assignment_status import SeatAssignmentStatusOrStr
from .seat_assignee import SeatAssignee, SeatAssigneeDict


class OrderSeat(SdkBaseModel):
    id: str
    order_id: str = Field(alias="orderId")
    product_external_id: str | None = Field(alias="productExternalId")
    status: SeatAssignmentStatusOrStr
    assignee: SeatAssignee
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class OrderSeatDict(TypedDict):
    id: str
    order_id: str
    product_external_id: str | None
    status: SeatAssignmentStatusOrStr
    assignee: SeatAssigneeDict
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
