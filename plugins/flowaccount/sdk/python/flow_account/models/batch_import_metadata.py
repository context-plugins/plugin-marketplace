from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.batch_import_status import BatchImportStatusOrInt
from .enums.document_types import DocumentTypesOrInt


class BatchImportMetadata(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    company_user_guid: OptionalNullable[str] = Field(default=UNSET, alias="companyUserGuid")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    template_id: OptionalNullable[str] = Field(default=UNSET, alias="templateId")
    batch_id: OptionalNullable[str] = Field(default=UNSET, alias="batchId")
    filename: OptionalNullable[str] = UNSET
    document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="documentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    status: Optional[BatchImportStatusOrInt] = UNSET
    """0 = None 1 = Awaiting 3 = Pending 5 = Failed 6 = HandledDuplicated 7 = Succeed"""

    document_count: Optional[int] = Field(default=UNSET, alias="documentCount")
    success_count: Optional[int] = Field(default=UNSET, alias="successCount")
    failed_count: Optional[int] = Field(default=UNSET, alias="failedCount")
    s3_key: OptionalNullable[str] = Field(default=UNSET, alias="s3Key")
    user_id: Optional[int] = Field(default=UNSET, alias="userId")
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    is_viewed: Optional[bool] = Field(default=UNSET, alias="isViewed")


class BatchImportMetadataDict(TypedDict):
    company_user_guid: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    template_id: NotRequired[str | None]
    batch_id: NotRequired[str | None]
    filename: NotRequired[str | None]
    document_type: NotRequired[DocumentTypesOrInt]
    status: NotRequired[BatchImportStatusOrInt]
    document_count: NotRequired[int]
    success_count: NotRequired[int]
    failed_count: NotRequired[int]
    s3_key: NotRequired[str | None]
    user_id: NotRequired[int]
    company_id: NotRequired[int]
    is_viewed: NotRequired[bool]
