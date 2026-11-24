from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.invoice_line_payment_status import InvoiceLinePaymentStatusOrStr


class InvoiceLine(SdkBaseModel):
    id: str
    order_id: str | None = Field(alias="orderId")
    order_line_id: str | None = Field(alias="orderLineId")
    order_line_attribute_id: str | None = Field(alias="orderLineAttributeId")
    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: RFC3339DateTime = Field(alias="endDate")
    payment_status: InvoiceLinePaymentStatusOrStr = Field(alias="paymentStatus")
    quantity: int
    total_price_before_tax: float = Field(alias="totalPriceBeforeTax")
    tax: float
    tax_rate: float = Field(alias="taxRate")
    total_price_after_tax: float = Field(alias="totalPriceAfterTax")
    currency: str
    description: str
    balance_amount: float = Field(alias="balanceAmount")
    credited_amount: float = Field(alias="creditedAmount")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class InvoiceLineDict(TypedDict):
    id: str
    order_id: str | None
    order_line_id: str | None
    order_line_attribute_id: str | None
    start_date: RFC3339DateTime
    end_date: RFC3339DateTime
    payment_status: InvoiceLinePaymentStatusOrStr
    quantity: int
    total_price_before_tax: float
    tax: float
    tax_rate: float
    total_price_after_tax: float
    currency: str
    description: str
    balance_amount: float
    credited_amount: float
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
