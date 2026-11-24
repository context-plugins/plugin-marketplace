from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer import Customer, CustomerDict
from .enums.creation_state import CreationStateOrStr
from .order_line import OrderLine, OrderLineDict


class Order(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    total_amount: Optional[float] = Field(default=UNSET, alias="totalAmount")
    estimated_tax: Optional[float] = Field(default=UNSET, alias="estimatedTax")
    billed_amount_no_tax: Optional[float] = Field(default=UNSET, alias="billedAmountNoTax")
    billed_tax: Optional[float] = Field(default=UNSET, alias="billedTax")
    total_billed_amount: Optional[float] = Field(default=UNSET, alias="totalBilledAmount")
    pending_billing_amount: Optional[float] = Field(default=UNSET, alias="pendingBillingAmount")
    creation_state: Optional[CreationStateOrStr] = Field(default=UNSET, alias="creationState")
    order_lines: Optional[list[OrderLine]] = Field(default=UNSET, alias="orderLines")
    customer: Optional[Customer] = UNSET


class OrderDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    customer_id: NotRequired[str]
    organization_id: NotRequired[str]
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    total_amount: NotRequired[float]
    estimated_tax: NotRequired[float]
    billed_amount_no_tax: NotRequired[float]
    billed_tax: NotRequired[float]
    total_billed_amount: NotRequired[float]
    pending_billing_amount: NotRequired[float]
    creation_state: NotRequired[CreationStateOrStr]
    order_lines: NotRequired[list[OrderLineDict]]
    customer: NotRequired[CustomerDict]
