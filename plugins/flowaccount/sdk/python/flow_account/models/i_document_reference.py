from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.document_reference_types import DocumentReferenceTypesOrInt
from .enums.document_types import DocumentTypesOrInt


class IDocumentReference(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    reference_id: Optional[int] = Field(default=UNSET, alias="referenceId")
    reference_document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="referenceDocumentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    reference_document_serial: OptionalNullable[str] = Field(default=UNSET, alias="referenceDocumentSerial")
    document_id: Optional[int] = Field(default=UNSET, alias="documentId")
    document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="documentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    type_: Optional[DocumentReferenceTypesOrInt] = Field(default=UNSET, alias="type")
    """1 = ImportDocument 3 = PartialPayments 5 = Batch 7 = Etax 9 = MiigratePartialPayments 11 = BatchPartialPayments
    13 = DepositFirst 15 = DepositLast"""

    document_status: Optional[int] = Field(default=UNSET, alias="documentStatus")
    document_status_string: OptionalNullable[str] = Field(default=UNSET, alias="documentStatusString")
    document_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="documentDate")
    document_amount: Optional[float] = Field(default=UNSET, alias="documentAmount")
    document_amount_with_vat: Optional[float] = Field(default=UNSET, alias="documentAmountWithVat")
    ref_document_status: Optional[int] = Field(default=UNSET, alias="refDocumentStatus")
    ref_document_status_string: OptionalNullable[str] = Field(default=UNSET, alias="refDocumentStatusString")
    ref_document_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="refDocumentDate")
    ref_document_amount: Optional[float] = Field(default=UNSET, alias="refDocumentAmount")
    ref_document_amount_with_vat: Optional[float] = Field(default=UNSET, alias="refDocumentAmountWithVat")
    partial_payment_total_amount: Optional[float] = Field(default=UNSET, alias="partialPaymentTotalAmount")
    partial_payment_total_percent: Optional[float] = Field(default=UNSET, alias="partialPaymentTotalPercent")
    ref_created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="refCreatedOn")
    ref_modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="refModifiedOn")
    ref_is_migrate: Optional[bool] = Field(default=UNSET, alias="refIsMigrate")
    is_compile_rule: Optional[bool] = Field(default=UNSET, alias="isCompileRule")
    document_collected: Optional[float] = Field(default=UNSET, alias="documentCollected")


class IDocumentReferenceDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int]
    reference_id: NotRequired[int]
    reference_document_type: NotRequired[DocumentTypesOrInt]
    reference_document_serial: NotRequired[str | None]
    document_id: NotRequired[int]
    document_type: NotRequired[DocumentTypesOrInt]
    document_serial: NotRequired[str | None]
    is_delete: NotRequired[bool]
    type_: NotRequired[DocumentReferenceTypesOrInt]
    document_status: NotRequired[int]
    document_status_string: NotRequired[str | None]
    document_date: NotRequired[RFC3339DateTime]
    document_amount: NotRequired[float]
    document_amount_with_vat: NotRequired[float]
    ref_document_status: NotRequired[int]
    ref_document_status_string: NotRequired[str | None]
    ref_document_date: NotRequired[RFC3339DateTime]
    ref_document_amount: NotRequired[float]
    ref_document_amount_with_vat: NotRequired[float]
    partial_payment_total_amount: NotRequired[float]
    partial_payment_total_percent: NotRequired[float]
    ref_created_on: NotRequired[RFC3339DateTime]
    ref_modified_on: NotRequired[RFC3339DateTime]
    ref_is_migrate: NotRequired[bool]
    is_compile_rule: NotRequired[bool]
    document_collected: NotRequired[float]
