from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.order_creation_state import OrderCreationStateOrStr
from .order_billing_frequency_override import OrderBillingFrequencyOverride, OrderBillingFrequencyOverrideDict


class Order1(SdkBaseModel):
    id: str
    customer_id: str = Field(alias="customerId")
    billing_customer_id: str | None = Field(alias="billingCustomerId")
    billing_contact_ids: list[str] = Field(alias="billingContactIds")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    end_date: RFC3339DateTime | None = Field(alias="endDate")
    name: str
    start_date: RFC3339DateTime = Field(alias="startDate")
    subscription_terms: int | None = Field(alias="subscriptionTerms")
    billed_amount_no_tax: float = Field(alias="billedAmountNoTax")
    billed_tax: float = Field(alias="billedTax")
    estimated_tax: float = Field(alias="estimatedTax")
    order_amount: float = Field(alias="orderAmount")
    pending_billing_amount: float = Field(alias="pendingBillingAmount")
    total_amount: float = Field(alias="totalAmount")
    total_billed_amount: float = Field(alias="totalBilledAmount")
    creation_state: OrderCreationStateOrStr = Field(alias="creationState")
    payment_terms: str | None = Field(alias="paymentTerms")
    number: float
    metadata: dict[str, Any] | None
    show_payment_link: bool | None = Field(alias="showPaymentLink")
    show_bank_details: bool | None = Field(alias="showBankDetails")
    auto_post_invoices: bool | None = Field(alias="autoPostInvoices")
    auto_send_billing_emails: bool | None = Field(alias="autoSendBillingEmails")
    auto_send_payment_emails: bool | None = Field(alias="autoSendPaymentEmails")
    version: int
    billing_frequency_overridden: bool = Field(alias="billingFrequencyOverridden")
    billing_frequency_override: Optional[OrderBillingFrequencyOverride] = Field(
        default=UNSET, alias="billingFrequencyOverride"
    )
    purchase_order_reference: str | None = Field(alias="purchaseOrderReference")


class Order1Dict(TypedDict):
    id: str
    customer_id: str
    billing_customer_id: str | None
    billing_contact_ids: list[str]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    end_date: RFC3339DateTime | None
    name: str
    start_date: RFC3339DateTime
    subscription_terms: int | None
    billed_amount_no_tax: float
    billed_tax: float
    estimated_tax: float
    order_amount: float
    pending_billing_amount: float
    total_amount: float
    total_billed_amount: float
    creation_state: OrderCreationStateOrStr
    payment_terms: str | None
    number: float
    metadata: dict[str, Any] | None
    show_payment_link: bool | None
    show_bank_details: bool | None
    auto_post_invoices: bool | None
    auto_send_billing_emails: bool | None
    auto_send_payment_emails: bool | None
    version: int
    billing_frequency_overridden: bool
    billing_frequency_override: NotRequired[OrderBillingFrequencyOverrideDict]
    purchase_order_reference: str | None
