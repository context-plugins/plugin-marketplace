from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .create_order_line_request import CreateOrderLineRequest, CreateOrderLineRequestDict
from .enums.order_creation_state import OrderCreationStateOrStr
from .order_billing_frequency_override import OrderBillingFrequencyOverride, OrderBillingFrequencyOverrideDict


class CreateOrderRequest(SdkBaseModel):
    customer_id: str = Field(alias="customerId")
    billing_customer_id: Optional[str] = Field(default=UNSET, alias="billingCustomerId")
    billing_contact_ids: Optional[list[str]] = Field(default=UNSET, alias="billingContactIds")
    name: Optional[str] = UNSET
    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    subscription_terms: Optional[int] = Field(default=UNSET, alias="subscriptionTerms")
    creation_state: Optional[OrderCreationStateOrStr] = Field(default=UNSET, alias="creationState")
    billing_anchor: Optional[int] = Field(default=UNSET, alias="billingAnchor")
    """Day of month for billing anchor (1-31). Defaults to start date day if not provided."""

    payment_terms: Optional[str] = Field(default=UNSET, alias="paymentTerms")
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    metadata: Optional[dict[str, Any]] = UNSET
    currency: Optional[str] = UNSET
    auto_post_invoices: Optional[bool] = Field(default=UNSET, alias="autoPostInvoices")
    auto_send_billing_emails: Optional[bool] = Field(default=UNSET, alias="autoSendBillingEmails")
    auto_send_payment_emails: Optional[bool] = Field(default=UNSET, alias="autoSendPaymentEmails")
    lines: Optional[list[CreateOrderLineRequest]] = UNSET
    billing_frequency_override: Optional[OrderBillingFrequencyOverride] = Field(
        default=UNSET, alias="billingFrequencyOverride"
    )
    purchase_order_reference: OptionalNullable[str] = Field(default=UNSET, alias="purchaseOrderReference")
    """Purchase order number printed on invoices generated from this order."""


class CreateOrderRequestDict(TypedDict):
    customer_id: str
    billing_customer_id: NotRequired[str]
    billing_contact_ids: NotRequired[list[str]]
    name: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
    subscription_terms: NotRequired[int]
    creation_state: NotRequired[OrderCreationStateOrStr]
    billing_anchor: NotRequired[int]
    payment_terms: NotRequired[str]
    external_id: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    currency: NotRequired[str]
    auto_post_invoices: NotRequired[bool]
    auto_send_billing_emails: NotRequired[bool]
    auto_send_payment_emails: NotRequired[bool]
    lines: NotRequired[list[CreateOrderLineRequestDict]]
    billing_frequency_override: NotRequired[OrderBillingFrequencyOverrideDict]
    purchase_order_reference: NotRequired[str | None]
