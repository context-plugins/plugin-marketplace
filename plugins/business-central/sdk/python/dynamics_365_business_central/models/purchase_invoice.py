from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_dynamics365_business_central_api_v20_purchase_invoices_api import (
    StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApiOrStr,
)


class PurchaseInvoice(SdkBaseModel):
    id: Optional[UUID] = UNSET
    number: Optional[str] = UNSET
    invoice_date: Optional[Date] = Field(default=UNSET, alias="invoiceDate")
    posting_date: Optional[Date] = Field(default=UNSET, alias="postingDate")
    due_date: Optional[Date] = Field(default=UNSET, alias="dueDate")
    vendor_id: Optional[UUID] = Field(default=UNSET, alias="vendorId")
    vendor_number: Optional[str] = Field(default=UNSET, alias="vendorNumber")
    vendor_name: Optional[str] = Field(default=UNSET, alias="vendorName")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    prices_include_tax: Optional[bool] = Field(default=UNSET, alias="pricesIncludeTax")
    total_amount_excluding_tax: Optional[float] = Field(default=UNSET, alias="totalAmountExcludingTax")
    total_tax_amount: Optional[float] = Field(default=UNSET, alias="totalTaxAmount")
    total_amount_including_tax: Optional[float] = Field(default=UNSET, alias="totalAmountIncludingTax")
    status: Optional[StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApiOrStr] = UNSET
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class PurchaseInvoiceDict(TypedDict):
    id: NotRequired[UUID]
    number: NotRequired[str]
    invoice_date: NotRequired[Date]
    posting_date: NotRequired[Date]
    due_date: NotRequired[Date]
    vendor_id: NotRequired[UUID]
    vendor_number: NotRequired[str]
    vendor_name: NotRequired[str]
    currency_code: NotRequired[str]
    prices_include_tax: NotRequired[bool]
    total_amount_excluding_tax: NotRequired[float]
    total_tax_amount: NotRequired[float]
    total_amount_including_tax: NotRequired[float]
    status: NotRequired[StatusDynamics365BusinessCentralApiV20PurchaseInvoicesApiOrStr]
    last_modified_date_time: NotRequired[RFC3339DateTime]
