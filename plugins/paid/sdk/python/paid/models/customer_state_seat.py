from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_state_credit_summary import CustomerStateCreditSummary, CustomerStateCreditSummaryDict
from .customer_state_product_ref import CustomerStateProductRef, CustomerStateProductRefDict
from .customer_state_seat_assignee import CustomerStateSeatAssignee, CustomerStateSeatAssigneeDict
from .enums.customer_state_seat_status import CustomerStateSeatStatusOrStr


class CustomerStateSeat(SdkBaseModel):
    id: str
    """Seat UUID. Seats do not currently have display IDs; use this value as ``{seatId}`` with the order seat assignment
    endpoints."""

    order_id: str = Field(alias="orderId")
    product: CustomerStateProductRef
    status: CustomerStateSeatStatusOrStr
    assignee: CustomerStateSeatAssignee
    credits: CustomerStateCreditSummary


class CustomerStateSeatDict(TypedDict):
    id: str
    order_id: str
    product: CustomerStateProductRefDict
    status: CustomerStateSeatStatusOrStr
    assignee: CustomerStateSeatAssigneeDict
    credits: CustomerStateCreditSummaryDict
