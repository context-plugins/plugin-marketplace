from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .bill_response_line_item import BillResponseLineItem, BillResponseLineItemDict
from .classifications2 import Classifications2, Classifications2Dict
from .enums.bill_approval_status_response import BillApprovalStatusResponseOrStr
from .enums.bill_payment_status_dto import BillPaymentStatusDtoOrStr
from .enums.bill_record_status import BillRecordStatusOrStr
from .invoice1 import Invoice1, Invoice1Dict


class BillReadWithoutApproversResponseDto(SdkBaseModel):
    """Bills read response without approvers."""

    id: str
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    record_status: BillRecordStatusOrStr = Field(alias="recordStatus")
    archived: bool
    """Set as ``true`` if the bill is archived"""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    vendor_name: str = Field(alias="vendorName")
    """Vendor name"""

    funding_amount: Optional[float] = Field(default=UNSET, alias="fundingAmount")
    """Bill total amount. This value is in USD."""

    amount: Optional[float] = UNSET
    """Bill total amount. For a bill in an international currency (not USD), this value is in the local currency."""

    paid_amount: Optional[float] = Field(default=UNSET, alias="paidAmount")
    """Bill paid amount. This value is the sum of all cleared payments and any credit amount applied to the bill."""

    due_amount: Optional[float] = Field(default=UNSET, alias="dueAmount")
    """Bill due amount. The value is calculated by subtracting any applied credits (``creditAmount``), scheduled payment
    (``scheduledAmount``), and cleared payment from the bill ``amount``."""

    scheduled_amount: Optional[float] = Field(default=UNSET, alias="scheduledAmount")
    """Bill scheduled amount. The value is set as the vendor payment amount that is pending clearance."""

    credit_amount: Optional[float] = Field(default=UNSET, alias="creditAmount")
    """Credit amount applied to the bill"""

    exchange_rate: Optional[float] = Field(default=UNSET, alias="exchangeRate")
    """Exchange rate for the bill amount in an international currency (not USD).

    The BILL exchange rate changes periodically and a different rate may apply at the time of payment."""

    description: Optional[str] = UNSET
    """Bill description"""

    due_date: Optional[Date] = Field(default=UNSET, alias="dueDate")
    """Bill due date. The value is in the ``yyyy-MM-dd`` format."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    invoice: Optional[Invoice1] = UNSET
    bill_line_items: Optional[list[BillResponseLineItem]] = Field(default=UNSET, alias="billLineItems")
    """Bill line item information"""

    pay_from_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payFromChartOfAccountId")
    """BILL-generated ID of the chart of accounts for the bill payment. The value begins with ``0ca``."""

    payment_status: Optional[BillPaymentStatusDtoOrStr] = Field(default=UNSET, alias="paymentStatus")
    approval_status: Optional[BillApprovalStatusResponseOrStr] = Field(default=UNSET, alias="approvalStatus")
    created_by: Optional[str] = Field(default=UNSET, alias="createdBy")
    """BILL-generated ID of the user that created the bill. The value begins with ``006``."""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedTime")
    """Updated date and time"""

    classifications: Optional[Classifications2] = UNSET
    purchase_order_number: Optional[str] = Field(default=UNSET, alias="purchaseOrderNumber")
    """Purchase order number linked with the bill"""


class BillReadWithoutApproversResponseDtoDict(TypedDict):
    id: str
    record_status: BillRecordStatusOrStr
    archived: bool
    vendor_id: str
    vendor_name: str
    funding_amount: NotRequired[float]
    amount: NotRequired[float]
    paid_amount: NotRequired[float]
    due_amount: NotRequired[float]
    scheduled_amount: NotRequired[float]
    credit_amount: NotRequired[float]
    exchange_rate: NotRequired[float]
    description: NotRequired[str]
    due_date: NotRequired[Date]
    payment_term_id: NotRequired[str]
    invoice: NotRequired[Invoice1Dict]
    bill_line_items: NotRequired[list[BillResponseLineItemDict]]
    pay_from_chart_of_account_id: NotRequired[str]
    payment_status: NotRequired[BillPaymentStatusDtoOrStr]
    approval_status: NotRequired[BillApprovalStatusResponseOrStr]
    created_by: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    classifications: NotRequired[Classifications2Dict]
    purchase_order_number: NotRequired[str]
