from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .contact import Contact, ContactDict
from .enums.batch_tax_filing_status import BatchTaxFilingStatusOrInt
from .enums.deduction_type import DeductionTypeOrInt
from .enums.partial_payment_method import PartialPaymentMethodOrInt
from .enums.payment_method import PaymentMethodOrInt
from .enums.remaining_collected_type import RemainingCollectedTypeOrInt
from .enums.rule_compile_status import RuleCompileStatus, RuleCompileStatusOrInt
from .gallery import Gallery, GalleryDict
from .i_document_reference import IDocumentReference, IDocumentReferenceDict
from .user import User, UserDict


class BatchTaxFiling(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    status: Optional[BatchTaxFilingStatusOrInt] = UNSET
    """1 = Awaiting 3 = Refunded"""

    claim_date: RFC3339DateTime = Field(alias="claimDate")
    total_buy_value: Optional[float] = Field(default=UNSET, alias="totalBuyValue")
    total_buy_vat_value: Optional[float] = Field(default=UNSET, alias="totalBuyVatValue")
    total_sell_value: Optional[float] = Field(default=UNSET, alias="totalSellValue")
    total_sell_vat_value: Optional[float] = Field(default=UNSET, alias="totalSellVatValue")
    brought_forward: Optional[float] = Field(default=UNSET, alias="broughtForward")
    value: Optional[float] = UNSET
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    created_by: Optional[int] = Field(default=UNSET, alias="createdBy")
    modified_by: Optional[int] = Field(default=UNSET, alias="modifiedBy")
    created_on: RFC3339DateTime = Field(alias="createdOn")
    modified_on: RFC3339DateTime = Field(alias="modifiedOn")
    company: Optional[Company] = UNSET
    created_by_user: Optional[User] = Field(default=UNSET, alias="createdByUser")
    modified_by_user: Optional[User] = Field(default=UNSET, alias="modifiedByUser")
    date_payment: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="datePayment")
    charge: OptionalNullable[float] = UNSET
    collected: OptionalNullable[float] = UNSET
    tax: OptionalNullable[float] = UNSET
    remarks: OptionalNullable[str] = UNSET
    payment_with_held: Optional[float] = Field(default=UNSET, alias="paymentWithHeld")
    remaining_collected: OptionalNullable[float] = Field(default=UNSET, alias="remainingCollected")
    remaining_collected_type: Optional[RemainingCollectedTypeOrInt] = Field(
        default=UNSET, alias="remainingCollectedType"
    )
    deduction_amount: OptionalNullable[float] = Field(default=UNSET, alias="deductionAmount")
    payment_deduction_type: Optional[DeductionTypeOrInt] = Field(default=UNSET, alias="paymentDeductionType")
    bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="bankAccountId")
    check_number: OptionalNullable[str] = Field(default=UNSET, alias="checkNumber")
    check_bank_id: OptionalNullable[str] = Field(default=UNSET, alias="checkBankId")
    transfer_bank_id: OptionalNullable[str] = Field(default=UNSET, alias="transferBankId")
    bank_account_number: OptionalNullable[str] = Field(default=UNSET, alias="bankAccountNumber")
    check_date_paid: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="checkDatePaid")
    method_payment: Optional[PaymentMethodOrInt] = Field(default=UNSET, alias="methodPayment")
    no: Optional[int] = UNSET
    petty_cash_name: OptionalNullable[str] = Field(default=UNSET, alias="pettyCashName")
    petty_cash_id: OptionalNullable[int] = Field(default=UNSET, alias="pettyCashId")
    cheque_id: OptionalNullable[int] = Field(default=UNSET, alias="chequeId")
    credit_card_id: OptionalNullable[int] = Field(default=UNSET, alias="creditCardId")
    other_channel_id: OptionalNullable[int] = Field(default=UNSET, alias="otherChannelId")
    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    document_id: OptionalNullable[str] = Field(default=UNSET, alias="documentId")
    approved: Optional[bool] = UNSET
    published_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="publishedOn")
    document_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="documentDate")
    vat_rate: Optional[int] = Field(default=UNSET, alias="vatRate")
    due_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="dueDate")
    name: OptionalNullable[str] = UNSET
    internal_notes: OptionalNullable[str] = Field(default=UNSET, alias="internalNotes")
    rounding_adjustment: Optional[float] = Field(default=UNSET, alias="roundingAdjustment")
    gallery: Optional[Gallery] = UNSET
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    contact: Optional[Contact] = UNSET
    contact_id: Optional[int] = Field(default=UNSET, alias="contactId")
    document_references: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="documentReferences")
    referenced_to_me: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="referencedToMe")
    referenced_by_me: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="referencedByMe")
    status_int: Optional[int] = Field(default=UNSET, alias="statusInt")
    is_inline_discount: Optional[bool] = Field(default=UNSET, alias="isInlineDiscount")
    is_inline_vat: Optional[bool] = Field(default=UNSET, alias="isInlineVat")
    vat_value: OptionalNullable[float] = Field(default=UNSET, alias="vatValue")
    document_serial_no_prefix: OptionalNullable[int] = Field(default=UNSET, alias="documentSerialNoPrefix")
    inline_vat_value: Optional[float] = Field(default=UNSET, alias="inlineVatValue")
    inline_discount_value: Optional[float] = Field(default=UNSET, alias="inlineDiscountValue")
    published: Optional[bool] = UNSET
    is_vat_inclusive: Optional[bool] = Field(default=UNSET, alias="isVatInclusive")
    running_number_type: Optional[int] = Field(default=UNSET, alias="runningNumberType")
    running_modified_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="runningModifiedOn")
    exempt_amount: Optional[float] = Field(default=UNSET, alias="exemptAmount")
    vatable_amount: Optional[float] = Field(default=UNSET, alias="vatableAmount")
    total_after_discount: Optional[float] = Field(default=UNSET, alias="totalAfterDiscount")
    sub_total: Optional[float] = Field(default=UNSET, alias="subTotal")
    is_re_calculate: Optional[bool] = Field(default=UNSET, alias="isReCalculate")
    partial_payment_method: Optional[PartialPaymentMethodOrInt] = Field(default=UNSET, alias="partialPaymentMethod")
    vat_amount: OptionalNullable[float] = Field(default=UNSET, alias="vatAmount")
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")
    rule_compile_status: RuleCompileStatusOrInt = Field(default=RuleCompileStatus.VALUE_1, alias="ruleCompileStatus")
    cheque_cashing_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="chequeCashingDate")
    project_id: OptionalNullable[int] = Field(default=UNSET, alias="projectId")
    project_name: OptionalNullable[str] = Field(default=UNSET, alias="projectName")
    project_name_and_project_deatil: OptionalNullable[str] = Field(default=UNSET, alias="projectNameAndProjectDeatil")
    reconciled: Optional[bool] = UNSET
    outstanding: Optional[float] = UNSET
    withholding: OptionalNullable[int] = UNSET
    ref_document_status: Optional[int] = Field(default=UNSET, alias="refDocumentStatus")
    ref_document_status_string: OptionalNullable[str] = Field(default=UNSET, alias="refDocumentStatusString")
    document_deduction_type: Optional[DeductionTypeOrInt] = Field(default=UNSET, alias="documentDeductionType")


class BatchTaxFilingDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    status: NotRequired[BatchTaxFilingStatusOrInt]
    claim_date: RFC3339DateTime
    total_buy_value: NotRequired[float]
    total_buy_vat_value: NotRequired[float]
    total_sell_value: NotRequired[float]
    total_sell_vat_value: NotRequired[float]
    brought_forward: NotRequired[float]
    value: NotRequired[float]
    is_delete: NotRequired[bool]
    created_by: NotRequired[int]
    modified_by: NotRequired[int]
    created_on: RFC3339DateTime
    modified_on: RFC3339DateTime
    company: NotRequired[CompanyDict]
    created_by_user: NotRequired[UserDict]
    modified_by_user: NotRequired[UserDict]
    date_payment: NotRequired[RFC3339DateTime | None]
    charge: NotRequired[float | None]
    collected: NotRequired[float | None]
    tax: NotRequired[float | None]
    remarks: NotRequired[str | None]
    payment_with_held: NotRequired[float]
    remaining_collected: NotRequired[float | None]
    remaining_collected_type: NotRequired[RemainingCollectedTypeOrInt]
    deduction_amount: NotRequired[float | None]
    payment_deduction_type: NotRequired[DeductionTypeOrInt]
    bank_account_id: NotRequired[int | None]
    check_number: NotRequired[str | None]
    check_bank_id: NotRequired[str | None]
    transfer_bank_id: NotRequired[str | None]
    bank_account_number: NotRequired[str | None]
    check_date_paid: NotRequired[RFC3339DateTime | None]
    method_payment: NotRequired[PaymentMethodOrInt]
    no: NotRequired[int]
    petty_cash_name: NotRequired[str | None]
    petty_cash_id: NotRequired[int | None]
    cheque_id: NotRequired[int | None]
    credit_card_id: NotRequired[int | None]
    other_channel_id: NotRequired[int | None]
    document_serial: NotRequired[str | None]
    document_id: NotRequired[str | None]
    approved: NotRequired[bool]
    published_on: NotRequired[RFC3339DateTime]
    document_date: NotRequired[RFC3339DateTime]
    vat_rate: NotRequired[int]
    due_date: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str | None]
    internal_notes: NotRequired[str | None]
    rounding_adjustment: NotRequired[float]
    gallery: NotRequired[GalleryDict]
    gallery_id: NotRequired[int | None]
    contact: NotRequired[ContactDict]
    contact_id: NotRequired[int]
    document_references: NotRequired[list[IDocumentReferenceDict] | None]
    referenced_to_me: NotRequired[list[IDocumentReferenceDict] | None]
    referenced_by_me: NotRequired[list[IDocumentReferenceDict] | None]
    status_int: NotRequired[int]
    is_inline_discount: NotRequired[bool]
    is_inline_vat: NotRequired[bool]
    vat_value: NotRequired[float | None]
    document_serial_no_prefix: NotRequired[int | None]
    inline_vat_value: NotRequired[float]
    inline_discount_value: NotRequired[float]
    published: NotRequired[bool]
    is_vat_inclusive: NotRequired[bool]
    running_number_type: NotRequired[int]
    running_modified_on: NotRequired[RFC3339DateTime | None]
    exempt_amount: NotRequired[float]
    vatable_amount: NotRequired[float]
    total_after_discount: NotRequired[float]
    sub_total: NotRequired[float]
    is_re_calculate: NotRequired[bool]
    partial_payment_method: NotRequired[PartialPaymentMethodOrInt]
    vat_amount: NotRequired[float | None]
    is_migrate: NotRequired[bool]
    reset_transaction_id: NotRequired[int | None]
    rule_compile_status: NotRequired[RuleCompileStatusOrInt]
    cheque_cashing_date: NotRequired[RFC3339DateTime | None]
    project_id: NotRequired[int | None]
    project_name: NotRequired[str | None]
    project_name_and_project_deatil: NotRequired[str | None]
    reconciled: NotRequired[bool]
    outstanding: NotRequired[float]
    withholding: NotRequired[int | None]
    ref_document_status: NotRequired[int]
    ref_document_status_string: NotRequired[str | None]
    document_deduction_type: NotRequired[DeductionTypeOrInt]
