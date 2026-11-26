from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .bill_create_line_item_dto import BillCreateLineItemDto, BillCreateLineItemDtoDict
from .bill_vendor_credit_request_item_dto import BillVendorCreditRequestItemDto, BillVendorCreditRequestItemDtoDict
from .classifications2 import Classifications2, Classifications2Dict
from .invoice1 import Invoice1, Invoice1Dict


class BillCreateRequestDto(SdkBaseModel):
    """Create a bill"""

    vendor_id: str = Field(alias="vendorId")
    """BILL-generated ID of the vendor. The value begins with ``009``."""

    description: Optional[str] = UNSET
    """Bill description"""

    due_date: Date = Field(alias="dueDate")
    """Bill due date. The value is in the ``yyyy-MM-dd`` format."""

    payment_term_id: Optional[str] = Field(default=UNSET, alias="paymentTermId")
    bill_line_items: list[BillCreateLineItemDto] = Field(alias="billLineItems")
    """Bill line items information"""

    invoice: Invoice1
    pay_from_chart_of_account_id: Optional[str] = Field(default=UNSET, alias="payFromChartOfAccountId")
    """BILL-generated ID of the chart of accounts for the bill payment. The value begins with ``0ca``."""

    classifications: Optional[Classifications2] = UNSET
    vendor_credits: Optional[list[BillVendorCreditRequestItemDto]] = Field(default=UNSET, alias="vendorCredits")
    """Vendor credits applied to the bill"""

    purchase_order_number: Optional[str] = Field(default=UNSET, alias="purchaseOrderNumber")
    """Purchase order number linked with the bill"""

    bill_approvals: Optional[bool] = Field(default=UNSET, alias="billApprovals")
    """Set as ``true`` for BILL to add approvals information in the response.

    When you have approval policies set up for bills and a bill matches a policy, you see an additional ``approvers``
    array of objects in the response. The array shows the list of individual users and/or user groups assigned as bill
    approvers. In addition, the array provides information about the status of the bill in the current approval flow.

    **Note**: When you set ``billApprovals`` as ``true``, you must set the field as ``true`` if you want to update the
    bill (``PATCH /v3/bills/{billId}``) or replace the bill (``PUT /v3/bills/{billId}``)."""

    allow_duplicate_invoice_number: Optional[bool] = Field(default=UNSET, alias="allowDuplicateInvoiceNumber")
    """Set as ``false`` to reject the request when the bill's ``invoice.invoiceNumber`` duplicates an existing invoice
    number for the vendor. Defaults to ``true``, which allows duplicate invoice numbers."""


class BillCreateRequestDtoDict(TypedDict):
    vendor_id: str
    description: NotRequired[str]
    due_date: Date
    payment_term_id: NotRequired[str]
    bill_line_items: list[BillCreateLineItemDtoDict]
    invoice: Invoice1Dict
    pay_from_chart_of_account_id: NotRequired[str]
    classifications: NotRequired[Classifications2Dict]
    vendor_credits: NotRequired[list[BillVendorCreditRequestItemDtoDict]]
    purchase_order_number: NotRequired[str]
    bill_approvals: NotRequired[bool]
    allow_duplicate_invoice_number: NotRequired[bool]
