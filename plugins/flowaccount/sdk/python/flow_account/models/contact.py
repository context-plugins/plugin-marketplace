from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.contact_groups import ContactGroupsOrInt
from .enums.contact_types import ContactTypesOrInt


class Contact(SdkBaseModel):
    id: Optional[int] = UNSET
    name_local: OptionalNullable[str] = Field(default=UNSET, alias="nameLocal")
    name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="nameForeign")
    address_local: OptionalNullable[str] = Field(default=UNSET, alias="addressLocal")
    address_foreign: OptionalNullable[str] = Field(default=UNSET, alias="addressForeign")
    address_local_line2: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine2")
    address_foreign_line2: OptionalNullable[str] = Field(default=UNSET, alias="addressForeignLine2")
    address_local_line3: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine3")
    address_foreign_line3: OptionalNullable[str] = Field(default=UNSET, alias="addressForeignLine3")
    branch: OptionalNullable[str] = UNSET
    branch_foreign: OptionalNullable[str] = Field(default=UNSET, alias="branchForeign")
    company_tax_id: OptionalNullable[str] = Field(default=UNSET, alias="companyTaxId")
    fax: OptionalNullable[str] = UNSET
    phone1: OptionalNullable[str] = UNSET
    phone2: OptionalNullable[str] = UNSET
    phone3: OptionalNullable[str] = UNSET
    websites: OptionalNullable[str] = UNSET
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    modified_by: Optional[int] = Field(default=UNSET, alias="modifiedBy")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    logo_image: OptionalNullable[str] = Field(default=UNSET, alias="logoImage")
    default_credit_days: OptionalNullable[int] = Field(default=UNSET, alias="defaultCreditDays")
    vat_rate: Optional[int] = Field(default=UNSET, alias="vatRate")
    email: OptionalNullable[str] = UNSET
    contact_person: OptionalNullable[str] = Field(default=UNSET, alias="contactPerson")
    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    contact_type: Optional[ContactTypesOrInt] = Field(default=UNSET, alias="contactType")
    """0 = OwnCompany 3 = Client 5 = Vendor 7 = VendorAndClient 9 = ExpenseVendor"""

    contact_group: Optional[ContactGroupsOrInt] = Field(default=UNSET, alias="contactGroup")
    """1 = Individual 3 = Juristic 9 = Undefined"""

    remarks: OptionalNullable[str] = UNSET
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    branch_code: OptionalNullable[str] = Field(default=UNSET, alias="branchCode")
    transaction_id: OptionalNullable[str] = Field(default=UNSET, alias="transactionId")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")
    contact_code: OptionalNullable[str] = Field(default=UNSET, alias="contactCode")
    internal_notes: OptionalNullable[str] = Field(default=UNSET, alias="internalNotes")
    shipping_address: OptionalNullable[str] = Field(default=UNSET, alias="shippingAddress")
    zip_code: OptionalNullable[str] = Field(default=UNSET, alias="zipCode")
    swift_code: OptionalNullable[str] = Field(default=UNSET, alias="swiftCode")
    bank_address: OptionalNullable[str] = Field(default=UNSET, alias="bankAddress")
    use_foreign_bank: OptionalNullable[bool] = Field(default=UNSET, alias="useForeignBank")
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")


class ContactDict(TypedDict):
    id: NotRequired[int]
    name_local: NotRequired[str | None]
    name_foreign: NotRequired[str | None]
    address_local: NotRequired[str | None]
    address_foreign: NotRequired[str | None]
    address_local_line2: NotRequired[str | None]
    address_foreign_line2: NotRequired[str | None]
    address_local_line3: NotRequired[str | None]
    address_foreign_line3: NotRequired[str | None]
    branch: NotRequired[str | None]
    branch_foreign: NotRequired[str | None]
    company_tax_id: NotRequired[str | None]
    fax: NotRequired[str | None]
    phone1: NotRequired[str | None]
    phone2: NotRequired[str | None]
    phone3: NotRequired[str | None]
    websites: NotRequired[str | None]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    modified_by: NotRequired[int]
    is_delete: NotRequired[bool]
    is_default: NotRequired[bool]
    logo_image: NotRequired[str | None]
    default_credit_days: NotRequired[int | None]
    vat_rate: NotRequired[int]
    email: NotRequired[str | None]
    contact_person: NotRequired[str | None]
    is_active: NotRequired[bool]
    contact_type: NotRequired[ContactTypesOrInt]
    contact_group: NotRequired[ContactGroupsOrInt]
    remarks: NotRequired[str | None]
    gallery_id: NotRequired[int | None]
    branch_code: NotRequired[str | None]
    transaction_id: NotRequired[str | None]
    reset_transaction_id: NotRequired[int | None]
    contact_code: NotRequired[str | None]
    internal_notes: NotRequired[str | None]
    shipping_address: NotRequired[str | None]
    zip_code: NotRequired[str | None]
    swift_code: NotRequired[str | None]
    bank_address: NotRequired[str | None]
    use_foreign_bank: NotRequired[bool | None]
    is_migrate: NotRequired[bool]
