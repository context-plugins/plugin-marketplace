from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class PurchaseOrderCreate(SdkBaseModel):
    order_date: Optional[Date] = Field(default=UNSET, alias="orderDate")
    vendor_id: Optional[UUID] = Field(default=UNSET, alias="vendorId")
    vendor_number: Optional[str] = Field(default=UNSET, alias="vendorNumber")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    prices_include_tax: Optional[bool] = Field(default=UNSET, alias="pricesIncludeTax")
    requested_receipt_date: Optional[Date] = Field(default=UNSET, alias="requestedReceiptDate")


class PurchaseOrderCreateDict(TypedDict):
    order_date: NotRequired[Date]
    vendor_id: NotRequired[UUID]
    vendor_number: NotRequired[str]
    currency_code: NotRequired[str]
    prices_include_tax: NotRequired[bool]
    requested_receipt_date: NotRequired[Date]
