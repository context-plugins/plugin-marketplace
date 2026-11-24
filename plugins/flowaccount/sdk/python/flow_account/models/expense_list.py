from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .batch_tax_filing import BatchTaxFiling, BatchTaxFilingDict
from .company import Company, CompanyDict
from .contact import Contact, ContactDict
from .enums.currency import CurrencyOrInt
from .enums.deduction_type import DeductionTypeOrInt
from .enums.entity import EntityOrInt
from .enums.expense_status import ExpenseStatusOrInt
from .enums.income_type import IncomeTypeOrInt
from .enums.partial_payment_method import PartialPaymentMethodOrInt
from .enums.payment_method import PaymentMethodOrInt
from .enums.remaining_collected_type import RemainingCollectedTypeOrInt
from .enums.rule_compile_status import RuleCompileStatusOrInt
from .enums.supplier_invoice_status import SupplierInvoiceStatusOrInt
from .gallery import Gallery, GalleryDict
from .i_document_reference import IDocumentReference, IDocumentReferenceDict
from .payroll_detail import PayrollDetail, PayrollDetailDict

if TYPE_CHECKING:
    from .expense_category import ExpenseCategory, ExpenseCategoryDict


class ExpenseList(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    vendor_company_id: OptionalNullable[int] = Field(default=UNSET, alias="vendorCompanyId")
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    status: Optional[ExpenseStatusOrInt] = UNSET
    """1 = Awaiting 3 = Approved 4 = PendingPayment 5 = Paid 6 = PaidByPaymentSlip 7 = Void 9 = ApprovedAndProcessed 11
    = Received 23 = ReceivedByPaymentSlip"""

    receipt_image: OptionalNullable[str] = Field(default=UNSET, alias="receiptImage")
    value: Optional[float] = UNSET
    description: OptionalNullable[str] = UNSET
    expense_category_id: Optional[int] = Field(default=UNSET, alias="expenseCategoryId")
    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    document_id: OptionalNullable[str] = Field(default=UNSET, alias="documentId")
    published_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="publishedOn")
    expense_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expenseDate")
    document_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="documentDate")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    created_by: Optional[int] = Field(default=UNSET, alias="createdBy")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    published: Optional[bool] = UNSET
    approved: Optional[bool] = UNSET
    approved_by: Optional[int] = Field(default=UNSET, alias="approvedBy")
    remarks: OptionalNullable[str] = UNSET
    is_tax: Optional[bool] = Field(default=UNSET, alias="isTax")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    tax_refundable: Optional[bool] = Field(default=UNSET, alias="taxRefundable")
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    reconciled: Optional[bool] = UNSET
    nullable_contact_id: OptionalNullable[int] = Field(default=UNSET, alias="nullableContactId")
    bank_account_number: OptionalNullable[str] = Field(default=UNSET, alias="bankAccountNumber")
    is_vat_inclusive: Optional[bool] = Field(default=UNSET, alias="isVatInclusive")
    method_payment: Optional[PaymentMethodOrInt] = Field(default=UNSET, alias="methodPayment")
    vendor_name: OptionalNullable[str] = Field(default=UNSET, alias="vendorName")
    address_local: OptionalNullable[str] = Field(default=UNSET, alias="addressLocal")
    address_local_line2: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine2")
    address_local_line3: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine3")
    company_tax_id: OptionalNullable[str] = Field(default=UNSET, alias="companyTaxId")
    branch: OptionalNullable[str] = UNSET
    vat_rate: Optional[int] = Field(default=UNSET, alias="vatRate")
    tax: OptionalNullable[float] = UNSET
    value_include_vat: Optional[float] = Field(default=UNSET, alias="valueIncludeVat")
    vat_amount: OptionalNullable[float] = Field(default=UNSET, alias="vatAmount")
    document_serial_no_prefix: OptionalNullable[int] = Field(default=UNSET, alias="documentSerialNoPrefix")
    withholding: OptionalNullable[int] = UNSET
    charge: OptionalNullable[float] = UNSET
    date_payment: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="datePayment")
    check_number: OptionalNullable[str] = Field(default=UNSET, alias="checkNumber")
    check_bank_id: OptionalNullable[str] = Field(default=UNSET, alias="checkBankId")
    check_date_paid: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="checkDatePaid")
    transfer_bank_id: OptionalNullable[str] = Field(default=UNSET, alias="transferBankId")
    collected: float = 0.0
    outstanding: float = 0.0
    payment_with_held: float = Field(default=0.0, alias="paymentWithHeld")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")
    bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="bankAccountId")
    rule_compile_status: Optional[RuleCompileStatusOrInt] = Field(default=UNSET, alias="ruleCompileStatus")
    """1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore"""

    remaining_collected: OptionalNullable[float] = Field(default=UNSET, alias="remainingCollected")
    remaining_collected_type: Optional[RemainingCollectedTypeOrInt] = Field(
        default=UNSET, alias="remainingCollectedType"
    )
    company: Optional[Company] = UNSET
    vendor_company: Optional[Company] = Field(default=UNSET, alias="vendorCompany")
    expense_category: Optional[ExpenseCategory] = Field(default=UNSET, alias="expenseCategory")
    gallery: Optional[Gallery] = UNSET
    contact: Optional[Contact] = UNSET
    running_number_type: Optional[int] = Field(default=UNSET, alias="runningNumberType")
    running_modified_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="runningModifiedOn")
    is_foreign_currency: Optional[bool] = Field(default=UNSET, alias="isForeignCurrency")
    foreign_currency: Optional[CurrencyOrInt] = Field(default=UNSET, alias="foreignCurrency")
    exchange_rate: OptionalNullable[float] = Field(default=UNSET, alias="exchangeRate")
    foreign_value: OptionalNullable[float] = Field(default=UNSET, alias="foreignValue")
    exempt_amount: Optional[float] = Field(default=UNSET, alias="exemptAmount")
    vatable_amount: Optional[float] = Field(default=UNSET, alias="vatableAmount")
    total_after_discount: Optional[float] = Field(default=UNSET, alias="totalAfterDiscount")
    due_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="dueDate")
    sub_total: Optional[float] = Field(default=UNSET, alias="subTotal")
    payroll_detail: OptionalNullable[list[PayrollDetail]] = Field(default=UNSET, alias="payrollDetail")
    batch_tax_filing_id: OptionalNullable[int] = Field(default=UNSET, alias="batchTaxFilingId")
    batch_tax_filing: Optional[BatchTaxFiling] = Field(default=UNSET, alias="batchTaxFiling")
    supplier_invoice_status: Optional[SupplierInvoiceStatusOrInt] = Field(default=UNSET, alias="supplierInvoiceStatus")
    sale_and_purchase_channel: OptionalNullable[str] = Field(default=UNSET, alias="saleAndPurchaseChannel")
    petty_cash_name: OptionalNullable[str] = Field(default=UNSET, alias="pettyCashName")
    petty_cash_id: OptionalNullable[int] = Field(default=UNSET, alias="pettyCashId")
    cheque_id: OptionalNullable[int] = Field(default=UNSET, alias="chequeId")
    credit_card_id: OptionalNullable[int] = Field(default=UNSET, alias="creditCardId")
    other_channel_id: OptionalNullable[int] = Field(default=UNSET, alias="otherChannelId")
    cheque_cashing_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="chequeCashingDate")
    auto_create_withholding_tax: OptionalNullable[bool] = Field(default=UNSET, alias="autoCreateWithholdingTax")
    withholding_tax_income_type: Optional[IncomeTypeOrInt] = Field(default=UNSET, alias="withholdingTaxIncomeType")
    withholding_tax_income_description: OptionalNullable[str] = Field(
        default=UNSET, alias="withholdingTaxIncomeDescription"
    )
    withholding_tax_entity: Optional[EntityOrInt] = Field(default=UNSET, alias="withholdingTaxEntity")
    exchange_ratio: OptionalNullable[float] = Field(default=UNSET, alias="exchangeRatio")
    is_manual_rate: OptionalNullable[bool] = Field(default=UNSET, alias="isManualRate")
    exchange_rate_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="exchangeRateDate")
    company_currency_id: OptionalNullable[int] = Field(default=UNSET, alias="companyCurrencyId")
    foreign_inline_vat_value: OptionalNullable[float] = Field(default=UNSET, alias="foreignInlineVatValue")
    foreign_inline_discount_value: OptionalNullable[float] = Field(default=UNSET, alias="foreignInlineDiscountValue")
    foreign_vat_amount: OptionalNullable[float] = Field(default=UNSET, alias="foreignVatAmount")
    foreign_deduction_amount: OptionalNullable[float] = Field(default=UNSET, alias="foreignDeductionAmount")
    project_id: OptionalNullable[int] = Field(default=UNSET, alias="projectId")
    is_manual_vat: OptionalNullable[bool] = Field(default=UNSET, alias="isManualVat")
    external_document_id: OptionalNullable[str] = Field(default=UNSET, alias="externalDocumentId")
    batch_id: OptionalNullable[str] = Field(default=UNSET, alias="batchId")
    document_references: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="documentReferences")
    referenced_to_me: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="referencedToMe")
    referenced_by_me: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="referencedByMe")
    status_int: Optional[int] = Field(default=UNSET, alias="statusInt")
    partial_payment_method: Optional[PartialPaymentMethodOrInt] = Field(default=UNSET, alias="partialPaymentMethod")
    ref_document_status: Optional[int] = Field(default=UNSET, alias="refDocumentStatus")
    ref_document_status_string: OptionalNullable[str] = Field(default=UNSET, alias="refDocumentStatusString")
    is_re_calculate: Optional[bool] = Field(default=UNSET, alias="isReCalculate")
    inline_vat_value: Optional[float] = Field(default=UNSET, alias="inlineVatValue")
    inline_discount_value: Optional[float] = Field(default=UNSET, alias="inlineDiscountValue")
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")
    vat_value: OptionalNullable[float] = Field(default=UNSET, alias="vatValue")
    deduction_amount: OptionalNullable[float] = Field(default=UNSET, alias="deductionAmount")
    payment_deduction_type: Optional[DeductionTypeOrInt] = Field(default=UNSET, alias="paymentDeductionType")
    document_deduction_type: Optional[DeductionTypeOrInt] = Field(default=UNSET, alias="documentDeductionType")
    is_inline_discount: Optional[bool] = Field(default=UNSET, alias="isInlineDiscount")
    is_inline_vat: Optional[bool] = Field(default=UNSET, alias="isInlineVat")
    contact_id: Optional[int] = Field(default=UNSET, alias="contactId")
    value_exclude_vat: Optional[float] = Field(default=UNSET, alias="valueExcludeVat")
    rounding_adjustment: Optional[float] = Field(default=UNSET, alias="roundingAdjustment")
    name: OptionalNullable[str] = UNSET
    internal_notes: OptionalNullable[str] = Field(default=UNSET, alias="internalNotes")
    project_name: OptionalNullable[str] = Field(default=UNSET, alias="projectName")
    project_name_and_project_deatil: OptionalNullable[str] = Field(default=UNSET, alias="projectNameAndProjectDeatil")


class ExpenseListDict(TypedDict):
    id: NotRequired[int]
    vendor_company_id: NotRequired[int | None]
    company_id: NotRequired[int]
    status: NotRequired[ExpenseStatusOrInt]
    receipt_image: NotRequired[str | None]
    value: NotRequired[float]
    description: NotRequired[str | None]
    expense_category_id: NotRequired[int]
    document_serial: NotRequired[str | None]
    document_id: NotRequired[str | None]
    published_on: NotRequired[RFC3339DateTime]
    expense_date: NotRequired[RFC3339DateTime]
    document_date: NotRequired[RFC3339DateTime]
    created_on: NotRequired[RFC3339DateTime]
    created_by: NotRequired[int]
    modified_on: NotRequired[RFC3339DateTime]
    published: NotRequired[bool]
    approved: NotRequired[bool]
    approved_by: NotRequired[int]
    remarks: NotRequired[str | None]
    is_tax: NotRequired[bool]
    is_delete: NotRequired[bool]
    tax_refundable: NotRequired[bool]
    gallery_id: NotRequired[int | None]
    reconciled: NotRequired[bool]
    nullable_contact_id: NotRequired[int | None]
    bank_account_number: NotRequired[str | None]
    is_vat_inclusive: NotRequired[bool]
    method_payment: NotRequired[PaymentMethodOrInt]
    vendor_name: NotRequired[str | None]
    address_local: NotRequired[str | None]
    address_local_line2: NotRequired[str | None]
    address_local_line3: NotRequired[str | None]
    company_tax_id: NotRequired[str | None]
    branch: NotRequired[str | None]
    vat_rate: NotRequired[int]
    tax: NotRequired[float | None]
    value_include_vat: NotRequired[float]
    vat_amount: NotRequired[float | None]
    document_serial_no_prefix: NotRequired[int | None]
    withholding: NotRequired[int | None]
    charge: NotRequired[float | None]
    date_payment: NotRequired[RFC3339DateTime | None]
    check_number: NotRequired[str | None]
    check_bank_id: NotRequired[str | None]
    check_date_paid: NotRequired[RFC3339DateTime | None]
    transfer_bank_id: NotRequired[str | None]
    collected: float
    outstanding: float
    payment_with_held: float
    reset_transaction_id: NotRequired[int | None]
    bank_account_id: NotRequired[int | None]
    rule_compile_status: NotRequired[RuleCompileStatusOrInt]
    remaining_collected: NotRequired[float | None]
    remaining_collected_type: NotRequired[RemainingCollectedTypeOrInt]
    company: NotRequired[CompanyDict]
    vendor_company: NotRequired[CompanyDict]
    expense_category: NotRequired[ExpenseCategoryDict]
    gallery: NotRequired[GalleryDict]
    contact: NotRequired[ContactDict]
    running_number_type: NotRequired[int]
    running_modified_on: NotRequired[RFC3339DateTime | None]
    is_foreign_currency: NotRequired[bool]
    foreign_currency: NotRequired[CurrencyOrInt]
    exchange_rate: NotRequired[float | None]
    foreign_value: NotRequired[float | None]
    exempt_amount: NotRequired[float]
    vatable_amount: NotRequired[float]
    total_after_discount: NotRequired[float]
    due_date: NotRequired[RFC3339DateTime | None]
    sub_total: NotRequired[float]
    payroll_detail: NotRequired[list[PayrollDetailDict] | None]
    batch_tax_filing_id: NotRequired[int | None]
    batch_tax_filing: NotRequired[BatchTaxFilingDict]
    supplier_invoice_status: NotRequired[SupplierInvoiceStatusOrInt]
    sale_and_purchase_channel: NotRequired[str | None]
    petty_cash_name: NotRequired[str | None]
    petty_cash_id: NotRequired[int | None]
    cheque_id: NotRequired[int | None]
    credit_card_id: NotRequired[int | None]
    other_channel_id: NotRequired[int | None]
    cheque_cashing_date: NotRequired[RFC3339DateTime | None]
    auto_create_withholding_tax: NotRequired[bool | None]
    withholding_tax_income_type: NotRequired[IncomeTypeOrInt]
    withholding_tax_income_description: NotRequired[str | None]
    withholding_tax_entity: NotRequired[EntityOrInt]
    exchange_ratio: NotRequired[float | None]
    is_manual_rate: NotRequired[bool | None]
    exchange_rate_date: NotRequired[RFC3339DateTime | None]
    company_currency_id: NotRequired[int | None]
    foreign_inline_vat_value: NotRequired[float | None]
    foreign_inline_discount_value: NotRequired[float | None]
    foreign_vat_amount: NotRequired[float | None]
    foreign_deduction_amount: NotRequired[float | None]
    project_id: NotRequired[int | None]
    is_manual_vat: NotRequired[bool | None]
    external_document_id: NotRequired[str | None]
    batch_id: NotRequired[str | None]
    document_references: NotRequired[list[IDocumentReferenceDict] | None]
    referenced_to_me: NotRequired[list[IDocumentReferenceDict] | None]
    referenced_by_me: NotRequired[list[IDocumentReferenceDict] | None]
    status_int: NotRequired[int]
    partial_payment_method: NotRequired[PartialPaymentMethodOrInt]
    ref_document_status: NotRequired[int]
    ref_document_status_string: NotRequired[str | None]
    is_re_calculate: NotRequired[bool]
    inline_vat_value: NotRequired[float]
    inline_discount_value: NotRequired[float]
    is_migrate: NotRequired[bool]
    vat_value: NotRequired[float | None]
    deduction_amount: NotRequired[float | None]
    payment_deduction_type: NotRequired[DeductionTypeOrInt]
    document_deduction_type: NotRequired[DeductionTypeOrInt]
    is_inline_discount: NotRequired[bool]
    is_inline_vat: NotRequired[bool]
    contact_id: NotRequired[int]
    value_exclude_vat: NotRequired[float]
    rounding_adjustment: NotRequired[float]
    name: NotRequired[str | None]
    internal_notes: NotRequired[str | None]
    project_name: NotRequired[str | None]
    project_name_and_project_deatil: NotRequired[str | None]
