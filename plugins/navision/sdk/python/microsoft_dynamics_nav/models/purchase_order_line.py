from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .enums.line_type import LineTypeOrStr


class PurchaseOrderLine(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    id: Optional[UUID] = UNSET
    document_id: Optional[UUID] = Field(default=UNSET, alias="documentId")
    sequence: Optional[int] = UNSET
    item_id: Optional[UUID] = Field(default=UNSET, alias="itemId")
    account_id: Optional[UUID] = Field(default=UNSET, alias="accountId")
    line_type: Optional[LineTypeOrStr] = Field(default=UNSET, alias="lineType")
    line_object_number: Optional[str] = Field(default=UNSET, alias="lineObjectNumber")
    description: Optional[str] = UNSET
    description2: Optional[str] = UNSET
    unit_of_measure_id: Optional[UUID] = Field(default=UNSET, alias="unitOfMeasureId")
    unit_of_measure_code: Optional[str] = Field(default=UNSET, alias="unitOfMeasureCode")
    quantity: Optional[float] = UNSET
    direct_unit_cost: Optional[float] = Field(default=UNSET, alias="directUnitCost")
    discount_amount: Optional[float] = Field(default=UNSET, alias="discountAmount")
    discount_percent: Optional[float] = Field(default=UNSET, alias="discountPercent")
    discount_applied_before_tax: Optional[bool] = Field(default=UNSET, alias="discountAppliedBeforeTax")
    amount_excluding_tax: Optional[float] = Field(default=UNSET, alias="amountExcludingTax")
    tax_code: Optional[str] = Field(default=UNSET, alias="taxCode")
    tax_percent: Optional[float] = Field(default=UNSET, alias="taxPercent")
    total_tax_amount: Optional[float] = Field(default=UNSET, alias="totalTaxAmount")
    amount_including_tax: Optional[float] = Field(default=UNSET, alias="amountIncludingTax")
    expected_receipt_date: Optional[Date] = Field(default=UNSET, alias="expectedReceiptDate")
    received_quantity: Optional[float] = Field(default=UNSET, alias="receivedQuantity")
    invoiced_quantity: Optional[float] = Field(default=UNSET, alias="invoicedQuantity")
    invoice_quantity: Optional[float] = Field(default=UNSET, alias="invoiceQuantity")
    receive_quantity: Optional[float] = Field(default=UNSET, alias="receiveQuantity")


class PurchaseOrderLineDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    document_id: NotRequired[UUID]
    sequence: NotRequired[int]
    item_id: NotRequired[UUID]
    account_id: NotRequired[UUID]
    line_type: NotRequired[LineTypeOrStr]
    line_object_number: NotRequired[str]
    description: NotRequired[str]
    description2: NotRequired[str]
    unit_of_measure_id: NotRequired[UUID]
    unit_of_measure_code: NotRequired[str]
    quantity: NotRequired[float]
    direct_unit_cost: NotRequired[float]
    discount_amount: NotRequired[float]
    discount_percent: NotRequired[float]
    discount_applied_before_tax: NotRequired[bool]
    amount_excluding_tax: NotRequired[float]
    tax_code: NotRequired[str]
    tax_percent: NotRequired[float]
    total_tax_amount: NotRequired[float]
    amount_including_tax: NotRequired[float]
    expected_receipt_date: NotRequired[Date]
    received_quantity: NotRequired[float]
    invoiced_quantity: NotRequired[float]
    invoice_quantity: NotRequired[float]
    receive_quantity: NotRequired[float]
