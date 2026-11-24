from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.line_type_dynamics365_business_central_api_v20_sales_orders_api import (
    LineTypeDynamics365BusinessCentralApiV20SalesOrdersApiOrStr,
)


class SalesOrderLine(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    id: Optional[UUID] = UNSET
    document_id: Optional[UUID] = Field(default=UNSET, alias="documentId")
    sequence: Optional[int] = UNSET
    item_id: Optional[UUID] = Field(default=UNSET, alias="itemId")
    account_id: Optional[UUID] = Field(default=UNSET, alias="accountId")
    line_type: Optional[LineTypeDynamics365BusinessCentralApiV20SalesOrdersApiOrStr] = Field(
        default=UNSET, alias="lineType"
    )
    line_object_number: Optional[str] = Field(default=UNSET, alias="lineObjectNumber")
    description: Optional[str] = UNSET
    description2: Optional[str] = UNSET
    unit_of_measure_id: Optional[UUID] = Field(default=UNSET, alias="unitOfMeasureId")
    unit_of_measure_code: Optional[str] = Field(default=UNSET, alias="unitOfMeasureCode")
    quantity: Optional[float] = UNSET
    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    discount_amount: Optional[float] = Field(default=UNSET, alias="discountAmount")
    discount_percent: Optional[float] = Field(default=UNSET, alias="discountPercent")
    discount_applied_before_tax: Optional[bool] = Field(default=UNSET, alias="discountAppliedBeforeTax")
    amount_excluding_tax: Optional[float] = Field(default=UNSET, alias="amountExcludingTax")
    tax_code: Optional[str] = Field(default=UNSET, alias="taxCode")
    tax_percent: Optional[float] = Field(default=UNSET, alias="taxPercent")
    total_tax_amount: Optional[float] = Field(default=UNSET, alias="totalTaxAmount")
    amount_including_tax: Optional[float] = Field(default=UNSET, alias="amountIncludingTax")
    net_amount: Optional[float] = Field(default=UNSET, alias="netAmount")
    net_tax_amount: Optional[float] = Field(default=UNSET, alias="netTaxAmount")
    net_amount_including_tax: Optional[float] = Field(default=UNSET, alias="netAmountIncludingTax")
    shipment_date: Optional[Date] = Field(default=UNSET, alias="shipmentDate")
    shipped_quantity: Optional[float] = Field(default=UNSET, alias="shippedQuantity")
    invoiced_quantity: Optional[float] = Field(default=UNSET, alias="invoicedQuantity")
    invoice_quantity: Optional[float] = Field(default=UNSET, alias="invoiceQuantity")
    ship_quantity: Optional[float] = Field(default=UNSET, alias="shipQuantity")


class SalesOrderLineDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    document_id: NotRequired[UUID]
    sequence: NotRequired[int]
    item_id: NotRequired[UUID]
    account_id: NotRequired[UUID]
    line_type: NotRequired[LineTypeDynamics365BusinessCentralApiV20SalesOrdersApiOrStr]
    line_object_number: NotRequired[str]
    description: NotRequired[str]
    description2: NotRequired[str]
    unit_of_measure_id: NotRequired[UUID]
    unit_of_measure_code: NotRequired[str]
    quantity: NotRequired[float]
    unit_price: NotRequired[float]
    discount_amount: NotRequired[float]
    discount_percent: NotRequired[float]
    discount_applied_before_tax: NotRequired[bool]
    amount_excluding_tax: NotRequired[float]
    tax_code: NotRequired[str]
    tax_percent: NotRequired[float]
    total_tax_amount: NotRequired[float]
    amount_including_tax: NotRequired[float]
    net_amount: NotRequired[float]
    net_tax_amount: NotRequired[float]
    net_amount_including_tax: NotRequired[float]
    shipment_date: NotRequired[Date]
    shipped_quantity: NotRequired[float]
    invoiced_quantity: NotRequired[float]
    invoice_quantity: NotRequired[float]
    ship_quantity: NotRequired[float]
