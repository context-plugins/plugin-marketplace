from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .company import Company, CompanyDict
from .enums.document_types import DocumentTypesOrInt

if TYPE_CHECKING:
    from .bank import Bank, BankDict


class ReconciledDocument(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    document_id: Optional[int] = Field(default=UNSET, alias="documentId")
    document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="documentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    transaction_id: OptionalNullable[str] = Field(default=UNSET, alias="transactionId")
    amount: Optional[float] = UNSET
    from_account: OptionalNullable[str] = Field(default=UNSET, alias="fromAccount")
    channel: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    account_number: str = Field(alias="accountNumber")
    bank_id: Optional[int] = Field(default=UNSET, alias="bankId")
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    bank: Optional[Bank] = UNSET
    company: Optional[Company] = UNSET


class ReconciledDocumentDict(TypedDict):
    document_id: NotRequired[int]
    document_type: NotRequired[DocumentTypesOrInt]
    transaction_id: NotRequired[str | None]
    amount: NotRequired[float]
    from_account: NotRequired[str | None]
    channel: NotRequired[str | None]
    description: NotRequired[str | None]
    account_number: str
    bank_id: NotRequired[int]
    company_id: NotRequired[int]
    bank: NotRequired[BankDict]
    company: NotRequired[CompanyDict]
