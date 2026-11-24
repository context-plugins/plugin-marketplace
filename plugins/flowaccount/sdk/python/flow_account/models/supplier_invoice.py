from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .enums.document_types import DocumentTypesOrInt
from .user import User, UserDict

if TYPE_CHECKING:
    from .gallery import Gallery, GalleryDict


class SupplierInvoice(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    company_id: int = Field(alias="companyId")
    document_date: RFC3339DateTime = Field(alias="documentDate")
    document_serial: OptionalNullable[str] = Field(default=UNSET, alias="documentSerial")
    contact_name: OptionalNullable[str] = Field(default=UNSET, alias="contactName")
    contact_tax_id: OptionalNullable[str] = Field(default=UNSET, alias="contactTaxId")
    contact_branch: OptionalNullable[str] = Field(default=UNSET, alias="contactBranch")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    reference_document_id: Optional[int] = Field(default=UNSET, alias="referenceDocumentId")
    reference_document_type: Optional[DocumentTypesOrInt] = Field(default=UNSET, alias="referenceDocumentType")
    """1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 = Vendor 17 =
    WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 = PurchaseTax 25 =
    ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 = CashInvoice 37 = PaymentSlip 51 =
    JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 = PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance
    63 = Transaction 65 = SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
    DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher 159 =
    DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 = PayrollPayment"""

    created_by: Optional[int] = Field(default=UNSET, alias="createdBy")
    modified_by: Optional[int] = Field(default=UNSET, alias="modifiedBy")
    created_on: RFC3339DateTime = Field(alias="createdOn")
    modified_on: RFC3339DateTime = Field(alias="modifiedOn")
    company: Optional[Company] = UNSET
    created_by_user: Optional[User] = Field(default=UNSET, alias="createdByUser")
    modified_by_user: Optional[User] = Field(default=UNSET, alias="modifiedByUser")
    gallery: Optional[Gallery] = UNSET


class SupplierInvoiceDict(TypedDict):
    id: NotRequired[int]
    company_id: int
    document_date: RFC3339DateTime
    document_serial: NotRequired[str | None]
    contact_name: NotRequired[str | None]
    contact_tax_id: NotRequired[str | None]
    contact_branch: NotRequired[str | None]
    is_delete: NotRequired[bool]
    gallery_id: NotRequired[int | None]
    reference_document_id: NotRequired[int]
    reference_document_type: NotRequired[DocumentTypesOrInt]
    created_by: NotRequired[int]
    modified_by: NotRequired[int]
    created_on: RFC3339DateTime
    modified_on: RFC3339DateTime
    company: NotRequired[CompanyDict]
    created_by_user: NotRequired[UserDict]
    modified_by_user: NotRequired[UserDict]
    gallery: NotRequired[GalleryDict]
