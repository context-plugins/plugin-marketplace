from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .customer import Customer, CustomerDict
from .employee import Employee, EmployeeDict
from .enums.business_type import BusinessTypeOrStr
from .enums.order_service_type import OrderServiceTypeOrStr
from .enums.receipt_delivery import ReceiptDeliveryOrStr
from .enums.receipt_type import ReceiptTypeOrStr
from .line_item import LineItem, LineItemDict
from .loyalty import Loyalty, LoyaltyDict
from .payment import Payment, PaymentDict
from .receipt_summary import ReceiptSummary, ReceiptSummaryDict


class Bill(SdkBaseModel):
    """A Razorpay Billme digital receipt/bill. Used for retail, food & beverage, events, ecommerce, and other use
    cases."""

    id: Optional[str] = UNSET
    """Bill ID with prefix bill_"""

    business_type: Optional[BusinessTypeOrStr] = UNSET
    business_category: Optional[str] = UNSET
    customer: Optional[Customer] = UNSET
    employee: Optional[Employee] = UNSET
    loyalty: Optional[Loyalty] = UNSET
    store_code: Optional[str] = UNSET
    receipt_timestamp: Optional[int] = UNSET
    """Unix timestamp of the transaction"""

    receipt_number: Optional[str] = UNSET
    receipt_type: Optional[ReceiptTypeOrStr] = UNSET
    receipt_delivery: Optional[ReceiptDeliveryOrStr] = UNSET
    tags: Optional[Any] = UNSET
    bar_code_number: Optional[str] = UNSET
    qr_code_number: Optional[str] = UNSET
    billing_pos_number: Optional[str] = UNSET
    pos_category: Optional[str] = UNSET
    order_number: Optional[str] = UNSET
    order_service_type: Optional[OrderServiceTypeOrStr] = UNSET
    delivery_status_url: Optional[str] = UNSET
    line_items: Optional[list[LineItem]] = UNSET
    receipt_summary: Optional[ReceiptSummary] = UNSET
    taxes: Optional[list[Any]] = UNSET
    payments: Optional[list[Payment]] = UNSET
    event: Optional[Any] = UNSET
    """Event details for events business type"""

    irn: Optional[str] = UNSET
    """Invoice Reference Number for GST e-invoicing"""

    receipt_url: Optional[str] = UNSET
    created_at: Optional[int] = UNSET


class BillDict(TypedDict):
    id: NotRequired[str]
    business_type: NotRequired[BusinessTypeOrStr]
    business_category: NotRequired[str]
    customer: NotRequired[CustomerDict]
    employee: NotRequired[EmployeeDict]
    loyalty: NotRequired[LoyaltyDict]
    store_code: NotRequired[str]
    receipt_timestamp: NotRequired[int]
    receipt_number: NotRequired[str]
    receipt_type: NotRequired[ReceiptTypeOrStr]
    receipt_delivery: NotRequired[ReceiptDeliveryOrStr]
    tags: NotRequired[Any]
    bar_code_number: NotRequired[str]
    qr_code_number: NotRequired[str]
    billing_pos_number: NotRequired[str]
    pos_category: NotRequired[str]
    order_number: NotRequired[str]
    order_service_type: NotRequired[OrderServiceTypeOrStr]
    delivery_status_url: NotRequired[str]
    line_items: NotRequired[list[LineItemDict]]
    receipt_summary: NotRequired[ReceiptSummaryDict]
    taxes: NotRequired[list[Any]]
    payments: NotRequired[list[PaymentDict]]
    event: NotRequired[Any]
    irn: NotRequired[str]
    receipt_url: NotRequired[str]
    created_at: NotRequired[int]
