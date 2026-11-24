from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .contact import Contact, ContactDict
from .enums.partial_payment_method import PartialPaymentMethodOrInt
from .enums.receivable_invoice_status import ReceivableInvoiceStatusOrInt
from .enums.rule_compile_status import RuleCompileStatusOrInt
from .i_document_reference import IDocumentReference, IDocumentReferenceDict
from .user import User, UserDict

if TYPE_CHECKING:
    from .gallery import Gallery, GalleryDict


class ReceivableInvoice(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    contact_id: Optional[int] = Field(default=UNSET, alias="contactId")
    company_id: int = Field(alias="companyId")
    status: Optional[ReceivableInvoiceStatusOrInt] = UNSET
    """1 = Awaiting 3 = Approved 5 = ApprovedAndProcessed 7 = Void 9 = Delete"""

    created_on: RFC3339DateTime = Field(alias="createdOn")
    modified_on: RFC3339DateTime = Field(alias="modifiedOn")
    published_on: RFC3339DateTime = Field(alias="publishedOn")
    document_date: RFC3339DateTime = Field(alias="documentDate")
    published: Optional[bool] = UNSET
    approved: Optional[bool] = UNSET
    approved_by: OptionalNullable[int] = Field(default=UNSET, alias="approvedBy")
    approved_by_client_id: OptionalNullable[int] = Field(default=UNSET, alias="approvedByClientId")
    approved_image_url: OptionalNullable[str] = Field(default=UNSET, alias="approvedImageUrl")
    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    remarks: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    value: Optional[float] = UNSET
    due_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="dueDate")
    expected_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="expectedDate")
    created_by: Optional[int] = Field(default=UNSET, alias="createdBy")
    document_id: OptionalNullable[str] = Field(default=UNSET, alias="documentId")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    vat_rate: Optional[int] = Field(default=UNSET, alias="vatRate")
    internal_notes: OptionalNullable[str] = Field(default=UNSET, alias="internalNotes")
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    is_vat_inclusive: Optional[bool] = Field(default=UNSET, alias="isVatInclusive")
    sales_id: OptionalNullable[int] = Field(default=UNSET, alias="salesId")
    sales_name: OptionalNullable[str] = Field(default=UNSET, alias="salesName")
    rounding_adjustment: Optional[float] = Field(default=UNSET, alias="roundingAdjustment")
    is_inline_discount: bool = Field(default=False, alias="isInlineDiscount")
    is_inline_vat: bool = Field(default=False, alias="isInlineVat")
    tax: OptionalNullable[float] = UNSET
    document_serial_no_prefix: OptionalNullable[int] = Field(default=UNSET, alias="documentSerialNoPrefix")
    vat_value: OptionalNullable[float] = Field(default=UNSET, alias="vatValue")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")
    contact: Optional[Contact] = UNSET
    approved_by_client: Optional[User] = Field(default=UNSET, alias="approvedByClient")
    company: Optional[Company] = UNSET
    created_by_user: Optional[User] = Field(default=UNSET, alias="createdByUser")
    approved_by_user: Optional[User] = Field(default=UNSET, alias="approvedByUser")
    sales: Optional[User] = UNSET
    gallery: Optional[Gallery] = UNSET
    inline_vat_value: Optional[float] = Field(default=UNSET, alias="inlineVatValue")
    inline_discount_value: Optional[float] = Field(default=UNSET, alias="inlineDiscountValue")
    rule_compile_status: Optional[RuleCompileStatusOrInt] = Field(default=UNSET, alias="ruleCompileStatus")
    """1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore"""

    running_number_type: Optional[int] = Field(default=UNSET, alias="runningNumberType")
    running_modified_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="runningModifiedOn")
    exempt_amount: Optional[float] = Field(default=UNSET, alias="exemptAmount")
    vatable_amount: Optional[float] = Field(default=UNSET, alias="vatableAmount")
    total_after_discount: Optional[float] = Field(default=UNSET, alias="totalAfterDiscount")
    sub_total: Optional[float] = Field(default=UNSET, alias="subTotal")
    document_references: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="documentReferences")
    referenced_to_me: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="referencedToMe")
    referenced_by_me: OptionalNullable[list[IDocumentReference]] = Field(default=UNSET, alias="referencedByMe")
    status_int: Optional[int] = Field(default=UNSET, alias="statusInt")
    is_re_calculate: Optional[bool] = Field(default=UNSET, alias="isReCalculate")
    partial_payment_method: Optional[PartialPaymentMethodOrInt] = Field(default=UNSET, alias="partialPaymentMethod")
    vat_amount: OptionalNullable[float] = Field(default=UNSET, alias="vatAmount")
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")


class ReceivableInvoiceDict(TypedDict):
    id: NotRequired[int]
    contact_id: NotRequired[int]
    company_id: int
    status: NotRequired[ReceivableInvoiceStatusOrInt]
    created_on: RFC3339DateTime
    modified_on: RFC3339DateTime
    published_on: RFC3339DateTime
    document_date: RFC3339DateTime
    published: NotRequired[bool]
    approved: NotRequired[bool]
    approved_by: NotRequired[int | None]
    approved_by_client_id: NotRequired[int | None]
    approved_image_url: NotRequired[str | None]
    document_serial: NotRequired[str | None]
    remarks: NotRequired[str | None]
    name: NotRequired[str | None]
    value: NotRequired[float]
    due_date: NotRequired[RFC3339DateTime | None]
    expected_date: NotRequired[RFC3339DateTime | None]
    created_by: NotRequired[int]
    document_id: NotRequired[str | None]
    is_delete: NotRequired[bool]
    vat_rate: NotRequired[int]
    internal_notes: NotRequired[str | None]
    gallery_id: NotRequired[int | None]
    is_vat_inclusive: NotRequired[bool]
    sales_id: NotRequired[int | None]
    sales_name: NotRequired[str | None]
    rounding_adjustment: NotRequired[float]
    is_inline_discount: NotRequired[bool]
    is_inline_vat: NotRequired[bool]
    tax: NotRequired[float | None]
    document_serial_no_prefix: NotRequired[int | None]
    vat_value: NotRequired[float | None]
    reset_transaction_id: NotRequired[int | None]
    contact: NotRequired[ContactDict]
    approved_by_client: NotRequired[UserDict]
    company: NotRequired[CompanyDict]
    created_by_user: NotRequired[UserDict]
    approved_by_user: NotRequired[UserDict]
    sales: NotRequired[UserDict]
    gallery: NotRequired[GalleryDict]
    inline_vat_value: NotRequired[float]
    inline_discount_value: NotRequired[float]
    rule_compile_status: NotRequired[RuleCompileStatusOrInt]
    running_number_type: NotRequired[int]
    running_modified_on: NotRequired[RFC3339DateTime | None]
    exempt_amount: NotRequired[float]
    vatable_amount: NotRequired[float]
    total_after_discount: NotRequired[float]
    sub_total: NotRequired[float]
    document_references: NotRequired[list[IDocumentReferenceDict] | None]
    referenced_to_me: NotRequired[list[IDocumentReferenceDict] | None]
    referenced_by_me: NotRequired[list[IDocumentReferenceDict] | None]
    status_int: NotRequired[int]
    is_re_calculate: NotRequired[bool]
    partial_payment_method: NotRequired[PartialPaymentMethodOrInt]
    vat_amount: NotRequired[float | None]
    is_migrate: NotRequired[bool]
