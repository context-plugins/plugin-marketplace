from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .inline_product_item import InlineProductItem, InlineProductItemDict
from .upgrade_document import UpgradeDocument, UpgradeDocumentDict


class InlineDocument(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    record_id: Optional[int] = Field(default=UNSET, alias="recordId")
    contact_code: OptionalNullable[str] = Field(default=UNSET, alias="contactCode")
    contact_name: OptionalNullable[str] = Field(default=UNSET, alias="contactName")
    contact_address: OptionalNullable[str] = Field(default=UNSET, alias="contactAddress")
    contact_tax_id: OptionalNullable[str] = Field(default=UNSET, alias="contactTaxId")
    contact_branch: OptionalNullable[str] = Field(default=UNSET, alias="contactBranch")
    contact_person: OptionalNullable[str] = Field(default=UNSET, alias="contactPerson")
    contact_email: OptionalNullable[str] = Field(default=UNSET, alias="contactEmail")
    contact_number: OptionalNullable[str] = Field(default=UNSET, alias="contactNumber")
    contact_zip_code: OptionalNullable[str] = Field(default=UNSET, alias="contactZipCode")
    contact_group: Optional[int] = Field(default=UNSET, alias="contactGroup")
    published_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="publishedOn")
    credit_type: Optional[int] = Field(default=UNSET, alias="creditType")
    credit_days: Optional[int] = Field(default=UNSET, alias="creditDays")
    due_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="dueDate")
    sales_name: OptionalNullable[str] = Field(default=UNSET, alias="salesName")
    project_name: OptionalNullable[str] = Field(default=UNSET, alias="projectName")
    reference: OptionalNullable[str] = UNSET
    is_vat_inclusive: Optional[bool] = Field(default=UNSET, alias="isVatInclusive")
    use_receipt_deduction: Optional[bool] = Field(default=UNSET, alias="useReceiptDeduction")
    sub_total: Optional[float] = Field(default=UNSET, alias="subTotal")
    discount_percentage: Optional[int] = Field(default=UNSET, alias="discountPercentage")
    discount_amount: Optional[float] = Field(default=UNSET, alias="discountAmount")
    total_after_discount: Optional[float] = Field(default=UNSET, alias="totalAfterDiscount")
    is_vat: Optional[bool] = Field(default=UNSET, alias="isVat")
    vat_amount: Optional[float] = Field(default=UNSET, alias="vatAmount")
    grand_total: Optional[float] = Field(default=UNSET, alias="grandTotal")
    document_show_withholding_tax: Optional[bool] = Field(default=UNSET, alias="documentShowWithholdingTax")
    document_withholding_tax_percentage: Optional[int] = Field(default=UNSET, alias="documentWithholdingTaxPercentage")
    document_withholding_tax_amount: Optional[float] = Field(default=UNSET, alias="documentWithholdingTaxAmount")
    document_deduction_type: Optional[int] = Field(default=UNSET, alias="documentDeductionType")
    document_deduction_amount: Optional[float] = Field(default=UNSET, alias="documentDeductionAmount")
    remarks: OptionalNullable[str] = UNSET
    internal_notes: OptionalNullable[str] = Field(default=UNSET, alias="internalNotes")
    show_signature_or_stamp: Optional[bool] = Field(default=UNSET, alias="showSignatureOrStamp")
    document_structure_type: OptionalNullable[str] = Field(default=UNSET, alias="documentStructureType")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    sale_and_purchase_channel: OptionalNullable[str] = Field(default=UNSET, alias="saleAndPurchaseChannel")
    row_index: OptionalNullable[str] = Field(default=UNSET, alias="rowIndex")
    discount_type: Optional[int] = Field(default=UNSET, alias="discountType")
    use_inline_discount: Optional[bool] = Field(default=UNSET, alias="useInlineDiscount")
    use_inline_vat: Optional[bool] = Field(default=UNSET, alias="useInlineVat")
    exempt_amount: OptionalNullable[float] = Field(default=UNSET, alias="exemptAmount")
    vatable_amount: OptionalNullable[float] = Field(default=UNSET, alias="vatableAmount")
    items: OptionalNullable[list[InlineProductItem]] = UNSET
    document_reference: OptionalNullable[list[UpgradeDocument]] = Field(default=UNSET, alias="documentReference")


class InlineDocumentDict(TypedDict):
    record_id: NotRequired[int]
    contact_code: NotRequired[str | None]
    contact_name: NotRequired[str | None]
    contact_address: NotRequired[str | None]
    contact_tax_id: NotRequired[str | None]
    contact_branch: NotRequired[str | None]
    contact_person: NotRequired[str | None]
    contact_email: NotRequired[str | None]
    contact_number: NotRequired[str | None]
    contact_zip_code: NotRequired[str | None]
    contact_group: NotRequired[int]
    published_on: NotRequired[RFC3339DateTime]
    credit_type: NotRequired[int]
    credit_days: NotRequired[int]
    due_date: NotRequired[RFC3339DateTime]
    sales_name: NotRequired[str | None]
    project_name: NotRequired[str | None]
    reference: NotRequired[str | None]
    is_vat_inclusive: NotRequired[bool]
    use_receipt_deduction: NotRequired[bool]
    sub_total: NotRequired[float]
    discount_percentage: NotRequired[int]
    discount_amount: NotRequired[float]
    total_after_discount: NotRequired[float]
    is_vat: NotRequired[bool]
    vat_amount: NotRequired[float]
    grand_total: NotRequired[float]
    document_show_withholding_tax: NotRequired[bool]
    document_withholding_tax_percentage: NotRequired[int]
    document_withholding_tax_amount: NotRequired[float]
    document_deduction_type: NotRequired[int]
    document_deduction_amount: NotRequired[float]
    remarks: NotRequired[str | None]
    internal_notes: NotRequired[str | None]
    show_signature_or_stamp: NotRequired[bool]
    document_structure_type: NotRequired[str | None]
    external_id: NotRequired[str | None]
    sale_and_purchase_channel: NotRequired[str | None]
    row_index: NotRequired[str | None]
    discount_type: NotRequired[int]
    use_inline_discount: NotRequired[bool]
    use_inline_vat: NotRequired[bool]
    exempt_amount: NotRequired[float | None]
    vatable_amount: NotRequired[float | None]
    items: NotRequired[list[InlineProductItemDict] | None]
    document_reference: NotRequired[list[UpgradeDocumentDict] | None]
