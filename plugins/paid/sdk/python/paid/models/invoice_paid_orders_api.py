from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .customer import Customer, CustomerDict
from .enums.invoice_status_paid_orders_api import InvoiceStatusPaidOrdersApiOrStr


class InvoicePaidOrdersApi(SdkBaseModel):
    """An invoice for an order"""

    id: Optional[UUID] = UNSET
    display_id: Optional[str] = Field(default=UNSET, alias="displayId")
    """Human-readable invoice number"""

    organization_id: Optional[UUID] = Field(default=UNSET, alias="organizationId")
    customer_id: Optional[UUID] = Field(default=UNSET, alias="customerId")
    order_id: Optional[UUID] = Field(default=UNSET, alias="orderId")
    status: Optional[InvoiceStatusPaidOrdersApiOrStr] = UNSET
    currency: Optional[str] = UNSET
    subtotal: Optional[float] = UNSET
    """Total before tax (in smallest currency unit)"""

    tax: Optional[float] = UNSET
    """Tax amount (in smallest currency unit)"""

    total: Optional[float] = UNSET
    """Total amount including tax (in smallest currency unit)"""

    amount_paid: Optional[float] = Field(default=UNSET, alias="amountPaid")
    """Amount already paid (in smallest currency unit)"""

    amount_due: Optional[float] = Field(default=UNSET, alias="amountDue")
    """Amount still due (in smallest currency unit)"""

    due_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="dueDate")
    paid_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="paidAt")
    voided_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="voidedAt")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    customer: Optional[Customer] = UNSET


class InvoicePaidOrdersApiDict(TypedDict):
    id: NotRequired[UUID]
    display_id: NotRequired[str]
    organization_id: NotRequired[UUID]
    customer_id: NotRequired[UUID]
    order_id: NotRequired[UUID]
    status: NotRequired[InvoiceStatusPaidOrdersApiOrStr]
    currency: NotRequired[str]
    subtotal: NotRequired[float]
    tax: NotRequired[float]
    total: NotRequired[float]
    amount_paid: NotRequired[float]
    amount_due: NotRequired[float]
    due_date: NotRequired[RFC3339DateTime]
    paid_at: NotRequired[RFC3339DateTime | None]
    voided_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    customer: NotRequired[CustomerDict]
