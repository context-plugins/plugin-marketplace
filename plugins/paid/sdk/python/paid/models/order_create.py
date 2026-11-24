from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .order_line_create import OrderLineCreate, OrderLineCreateDict


class OrderCreate(SdkBaseModel):
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    customer_external_id: Optional[str] = Field(default=UNSET, alias="customerExternalId")
    billing_contact_id: Optional[str] = Field(default=UNSET, alias="billingContactId")
    name: str
    description: Optional[str] = UNSET
    start_date: str = Field(alias="startDate")
    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    currency: str
    plan_id: Optional[UUID] = Field(default=UNSET, alias="planId")
    """Optional plan ID to associate with this order"""

    order_lines: Optional[list[OrderLineCreate]] = Field(default=UNSET, alias="orderLines")


class OrderCreateDict(TypedDict):
    customer_id: NotRequired[str]
    customer_external_id: NotRequired[str]
    billing_contact_id: NotRequired[str]
    name: str
    description: NotRequired[str]
    start_date: str
    end_date: NotRequired[str]
    currency: str
    plan_id: NotRequired[UUID]
    order_lines: NotRequired[list[OrderLineCreateDict]]
