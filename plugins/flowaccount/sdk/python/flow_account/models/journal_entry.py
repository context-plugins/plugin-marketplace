from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .contact import Contact, ContactDict
from .enums.document_types import DocumentTypesOrInt
from .enums.journal_entry_status import JournalEntryStatusOrInt
from .enums.journal_entry_template_type import JournalEntryTemplateTypeOrInt
from .enums.rule_compile_status import RuleCompileStatusOrInt
from .enums.running_number_type import RunningNumberTypeOrInt
from .fiscal_year import FiscalYear, FiscalYearDict
from .i_book_of_account import IBookOfAccount, IBookOfAccountDict
from .user import User, UserDict

if TYPE_CHECKING:
    from .gallery import Gallery, GalleryDict


class JournalEntry(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    document_type: DocumentTypesOrInt = Field(alias="documentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    status: JournalEntryStatusOrInt
    """0 = Delete 1 = Awaiting 5 = Approved 9 = Void"""

    document_date: RFC3339DateTime = Field(alias="documentDate")
    description: OptionalNullable[str] = UNSET
    description_foreign: OptionalNullable[str] = Field(default=UNSET, alias="descriptionForeign")
    void_description: OptionalNullable[str] = Field(default=UNSET, alias="voidDescription")
    voided_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="voidedOn")
    approved_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="approvedOn")
    transaction_no: OptionalNullable[int] = Field(default=UNSET, alias="transactionNo")
    note: OptionalNullable[str] = UNSET
    template_type: Optional[JournalEntryTemplateTypeOrInt] = Field(default=UNSET, alias="templateType")
    """1 = Default 3 = DocumentCreated 5 = Payment 7 = ChequeDate 9 = TaxNoRefund 11 = VATManagementHistory"""

    contact_name: OptionalNullable[str] = Field(default=UNSET, alias="contactName")
    document_serial_no_prefix: OptionalNullable[int] = Field(default=UNSET, alias="documentSerialNoPrefix")
    created_by: Optional[int] = Field(default=UNSET, alias="createdBy")
    modified_by: Optional[int] = Field(default=UNSET, alias="modifiedBy")
    approved_by: OptionalNullable[int] = Field(default=UNSET, alias="approvedBy")
    voided_by: OptionalNullable[int] = Field(default=UNSET, alias="voidedBy")
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    contact_id: OptionalNullable[int] = Field(default=UNSET, alias="contactId")
    running_number_type: Optional[RunningNumberTypeOrInt] = Field(default=UNSET, alias="runningNumberType")
    fiscal_year_id: OptionalNullable[int] = Field(default=UNSET, alias="fiscalYearId")
    gallery: Optional[Gallery] = UNSET
    company: Optional[Company] = UNSET
    approved_by_user: Optional[User] = Field(default=UNSET, alias="approvedByUser")
    modified_by_user: Optional[User] = Field(default=UNSET, alias="modifiedByUser")
    voided_by_user: Optional[User] = Field(default=UNSET, alias="voidedByUser")
    remarks: OptionalNullable[str] = UNSET
    contact: Optional[Contact] = UNSET
    fiscal_year: Optional[FiscalYear] = Field(default=UNSET, alias="fiscalYear")
    reference: OptionalNullable[str] = UNSET
    reference_id: OptionalNullable[int] = Field(default=UNSET, alias="referenceId")
    reference_document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="referenceDocumentType")
    is_system_document: bool = Field(default=False, alias="isSystemDocument")
    rule_compile_status: Optional[RuleCompileStatusOrInt] = Field(default=UNSET, alias="ruleCompileStatus")
    """1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore"""

    book_of_accounts: OptionalNullable[list[IBookOfAccount]] = Field(default=UNSET, alias="bookOfAccounts")
    is_changed_document_date: Optional[bool] = Field(default=UNSET, alias="isChangedDocumentDate")
    is_reset_document: Optional[bool] = Field(default=UNSET, alias="isResetDocument")


class JournalEntryDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int]
    document_serial: NotRequired[str | None]
    document_type: DocumentTypesOrInt
    status: JournalEntryStatusOrInt
    document_date: RFC3339DateTime
    description: NotRequired[str | None]
    description_foreign: NotRequired[str | None]
    void_description: NotRequired[str | None]
    voided_on: NotRequired[RFC3339DateTime | None]
    approved_on: NotRequired[RFC3339DateTime | None]
    transaction_no: NotRequired[int | None]
    note: NotRequired[str | None]
    template_type: NotRequired[JournalEntryTemplateTypeOrInt]
    contact_name: NotRequired[str | None]
    document_serial_no_prefix: NotRequired[int | None]
    created_by: NotRequired[int]
    modified_by: NotRequired[int]
    approved_by: NotRequired[int | None]
    voided_by: NotRequired[int | None]
    gallery_id: NotRequired[int | None]
    contact_id: NotRequired[int | None]
    running_number_type: NotRequired[RunningNumberTypeOrInt]
    fiscal_year_id: NotRequired[int | None]
    gallery: NotRequired[GalleryDict]
    company: NotRequired[CompanyDict]
    approved_by_user: NotRequired[UserDict]
    modified_by_user: NotRequired[UserDict]
    voided_by_user: NotRequired[UserDict]
    remarks: NotRequired[str | None]
    contact: NotRequired[ContactDict]
    fiscal_year: NotRequired[FiscalYearDict]
    reference: NotRequired[str | None]
    reference_id: NotRequired[int | None]
    reference_document_type: NotRequired[DocumentTypesOrInt]
    is_system_document: bool
    rule_compile_status: NotRequired[RuleCompileStatusOrInt]
    book_of_accounts: NotRequired[list[IBookOfAccountDict] | None]
    is_changed_document_date: NotRequired[bool]
    is_reset_document: NotRequired[bool]
