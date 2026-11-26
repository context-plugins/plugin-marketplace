from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_dynamics365_business_central_api_v20_purchase_orders_api import (
    StatusDynamics365BusinessCentralApiV20PurchaseOrdersApiOrStr,
)
from .purchase_order_line import PurchaseOrderLine, PurchaseOrderLineDict


class PurchaseOrder(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    id: Optional[UUID] = UNSET
    """The unique identifier of the purchase order"""

    number: Optional[str] = UNSET
    """The purchase order number"""

    order_date: Optional[Date] = Field(default=UNSET, alias="orderDate")
    """The order date"""

    posting_date: Optional[Date] = Field(default=UNSET, alias="postingDate")
    """The posting date"""

    vendor_id: Optional[UUID] = Field(default=UNSET, alias="vendorId")
    """The vendor ID"""

    vendor_number: Optional[str] = Field(default=UNSET, alias="vendorNumber")
    """The vendor number"""

    vendor_name: Optional[str] = Field(default=UNSET, alias="vendorName")
    """The vendor name"""

    pay_to_name: Optional[str] = Field(default=UNSET, alias="payToName")
    pay_to_vendor_id: Optional[UUID] = Field(default=UNSET, alias="payToVendorId")
    pay_to_vendor_number: Optional[str] = Field(default=UNSET, alias="payToVendorNumber")
    ship_to_name: Optional[str] = Field(default=UNSET, alias="shipToName")
    ship_to_contact: Optional[str] = Field(default=UNSET, alias="shipToContact")
    buy_from_address_line1: Optional[str] = Field(default=UNSET, alias="buyFromAddressLine1")
    buy_from_address_line2: Optional[str] = Field(default=UNSET, alias="buyFromAddressLine2")
    buy_from_city: Optional[str] = Field(default=UNSET, alias="buyFromCity")
    buy_from_country: Optional[str] = Field(default=UNSET, alias="buyFromCountry")
    buy_from_state: Optional[str] = Field(default=UNSET, alias="buyFromState")
    buy_from_post_code: Optional[str] = Field(default=UNSET, alias="buyFromPostCode")
    currency_id: Optional[UUID] = Field(default=UNSET, alias="currencyId")
    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    prices_include_tax: Optional[bool] = Field(default=UNSET, alias="pricesIncludeTax")
    payment_terms_id: Optional[UUID] = Field(default=UNSET, alias="paymentTermsId")
    shipment_method_id: Optional[UUID] = Field(default=UNSET, alias="shipmentMethodId")
    purchaser: Optional[str] = UNSET
    requested_receipt_date: Optional[Date] = Field(default=UNSET, alias="requestedReceiptDate")
    discount_amount: Optional[float] = Field(default=UNSET, alias="discountAmount")
    discount_applied_before_tax: Optional[bool] = Field(default=UNSET, alias="discountAppliedBeforeTax")
    total_amount_excluding_tax: Optional[float] = Field(default=UNSET, alias="totalAmountExcludingTax")
    total_tax_amount: Optional[float] = Field(default=UNSET, alias="totalTaxAmount")
    total_amount_including_tax: Optional[float] = Field(default=UNSET, alias="totalAmountIncludingTax")
    fully_received: Optional[bool] = Field(default=UNSET, alias="fullyReceived")
    status: Optional[StatusDynamics365BusinessCentralApiV20PurchaseOrdersApiOrStr] = UNSET
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")
    purchase_order_lines: Optional[list[PurchaseOrderLine]] = Field(default=UNSET, alias="purchaseOrderLines")


class PurchaseOrderDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    number: NotRequired[str]
    order_date: NotRequired[Date]
    posting_date: NotRequired[Date]
    vendor_id: NotRequired[UUID]
    vendor_number: NotRequired[str]
    vendor_name: NotRequired[str]
    pay_to_name: NotRequired[str]
    pay_to_vendor_id: NotRequired[UUID]
    pay_to_vendor_number: NotRequired[str]
    ship_to_name: NotRequired[str]
    ship_to_contact: NotRequired[str]
    buy_from_address_line1: NotRequired[str]
    buy_from_address_line2: NotRequired[str]
    buy_from_city: NotRequired[str]
    buy_from_country: NotRequired[str]
    buy_from_state: NotRequired[str]
    buy_from_post_code: NotRequired[str]
    currency_id: NotRequired[UUID]
    currency_code: NotRequired[str]
    prices_include_tax: NotRequired[bool]
    payment_terms_id: NotRequired[UUID]
    shipment_method_id: NotRequired[UUID]
    purchaser: NotRequired[str]
    requested_receipt_date: NotRequired[Date]
    discount_amount: NotRequired[float]
    discount_applied_before_tax: NotRequired[bool]
    total_amount_excluding_tax: NotRequired[float]
    total_tax_amount: NotRequired[float]
    total_amount_including_tax: NotRequired[float]
    fully_received: NotRequired[bool]
    status: NotRequired[StatusDynamics365BusinessCentralApiV20PurchaseOrdersApiOrStr]
    last_modified_date_time: NotRequired[RFC3339DateTime]
    purchase_order_lines: NotRequired[list[PurchaseOrderLineDict]]
