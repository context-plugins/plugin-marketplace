from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.adjust_inventory_reason import AdjustInventoryReasonOrInt
from .enums.document_types import DocumentTypesOrInt
from .enums.inventory_type import InventoryTypeOrInt
from .object_id import ObjectId, ObjectIdDict


class IStockCard(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[ObjectId] = UNSET
    """Represents an ObjectId (see also BsonObjectId)."""

    product_id: Optional[int] = Field(default=UNSET, alias="productId")
    product_name: OptionalNullable[str] = Field(default=UNSET, alias="productName")
    product_code: OptionalNullable[str] = Field(default=UNSET, alias="productCode")
    inventory_id: Optional[int] = Field(default=UNSET, alias="inventoryId")
    inventory_type: Optional[InventoryTypeOrInt] = Field(default=UNSET, alias="inventoryType")
    """3 = Initial 5 = BroughtForward 7 = In 11 = TransferIn 17 = Out 21 = TransferOut 25 = CreditNote 27 = DebitNote 29
    = InternalUse 31 = Hold 35 = AdjustIn 39 = AdjustOut"""

    date: Optional[RFC3339DateTime] = UNSET
    quantity: Optional[float] = UNSET
    unit_id: Optional[int] = Field(default=UNSET, alias="unitId")
    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    unit_name: OptionalNullable[str] = Field(default=UNSET, alias="unitName")
    total: Optional[float] = UNSET
    remaining: Optional[float] = UNSET
    document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="documentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    allow_delete: Optional[bool] = Field(default=UNSET, alias="allowDelete")
    remarks: OptionalNullable[str] = UNSET
    reason: Optional[AdjustInventoryReasonOrInt] = UNSET
    """0 = Default 1 = DisastersFire 3 = StolenGoods 5 = StockWrittenOff 7 = StockTakingResults 9 = ReturnedStock 11 =
    DamagedGoods 13 = RawMaterialUsed 15 = FinishedGoodsTransfer 17 = Other"""

    contact_name: OptionalNullable[str] = Field(default=UNSET, alias="contactName")
    is_over_sold: Optional[bool] = Field(default=UNSET, alias="isOverSold")
    row_index: Optional[int] = Field(default=UNSET, alias="rowIndex")
    reason_description: OptionalNullable[str] = Field(default=UNSET, alias="reasonDescription")
    average_price_per_unit: Optional[float] = Field(default=UNSET, alias="averagePricePerUnit")
    remaining_amount: Optional[float] = Field(default=UNSET, alias="remainingAmount")
    transactions: OptionalNullable[list[IStockCard]] = UNSET


class IStockCardDict(TypedDict):
    id: NotRequired[ObjectIdDict]
    product_id: NotRequired[int]
    product_name: NotRequired[str | None]
    product_code: NotRequired[str | None]
    inventory_id: NotRequired[int]
    inventory_type: NotRequired[InventoryTypeOrInt]
    date: NotRequired[RFC3339DateTime]
    quantity: NotRequired[float]
    unit_id: NotRequired[int]
    unit_price: NotRequired[float]
    unit_name: NotRequired[str | None]
    total: NotRequired[float]
    remaining: NotRequired[float]
    document_type: NotRequired[DocumentTypesOrInt]
    document_serial: NotRequired[str | None]
    allow_delete: NotRequired[bool]
    remarks: NotRequired[str | None]
    reason: NotRequired[AdjustInventoryReasonOrInt]
    contact_name: NotRequired[str | None]
    is_over_sold: NotRequired[bool]
    row_index: NotRequired[int]
    reason_description: NotRequired[str | None]
    average_price_per_unit: NotRequired[float]
    remaining_amount: NotRequired[float]
    transactions: NotRequired[list[IStockCardDict] | None]
