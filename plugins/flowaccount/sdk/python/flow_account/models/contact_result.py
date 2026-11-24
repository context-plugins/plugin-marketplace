from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.bank_account_type import BankAccountTypeOrInt
from .enums.contact_groups import ContactGroupsOrInt
from .enums.contact_types import ContactTypesOrInt
from .media import Media, MediaDict


class ContactResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    contact_type: Optional[ContactTypesOrInt] = Field(default=UNSET, alias="contactType")
    """0 = OwnCompany 3 = Client 5 = Vendor 7 = VendorAndClient 9 = ExpenseVendor"""

    code: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    address_local: OptionalNullable[str] = Field(default=UNSET, alias="addressLocal")
    address_local_line2: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine2")
    address_local_line3: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine3")
    tax_id: OptionalNullable[str] = Field(default=UNSET, alias="taxId")
    branch: OptionalNullable[str] = UNSET
    branch_code: OptionalNullable[str] = Field(default=UNSET, alias="branchCode")
    contact_person: OptionalNullable[str] = Field(default=UNSET, alias="contactPerson")
    email: OptionalNullable[str] = UNSET
    mobile: OptionalNullable[str] = UNSET
    default_credit_days: OptionalNullable[int] = Field(default=UNSET, alias="defaultCreditDays")
    office: OptionalNullable[str] = UNSET
    fax: OptionalNullable[str] = UNSET
    website: OptionalNullable[str] = UNSET
    shipping_address: OptionalNullable[str] = Field(default=UNSET, alias="shippingAddress")
    internal_notes: OptionalNullable[str] = Field(default=UNSET, alias="internalNotes")
    remarks: OptionalNullable[str] = UNSET
    zip_code: OptionalNullable[str] = Field(default=UNSET, alias="zipCode")
    bank_id: OptionalNullable[int] = Field(default=UNSET, alias="bankId")
    bank_name: OptionalNullable[str] = Field(default=UNSET, alias="bankName")
    bank_branch: OptionalNullable[str] = Field(default=UNSET, alias="bankBranch")
    bank_account_number: OptionalNullable[str] = Field(default=UNSET, alias="bankAccountNumber")
    swift_code: OptionalNullable[str] = Field(default=UNSET, alias="swiftCode")
    bank_address: OptionalNullable[str] = Field(default=UNSET, alias="bankAddress")
    use_foreign_bank: Optional[bool] = Field(default=UNSET, alias="useForeignBank")
    bank_account_type: Optional[BankAccountTypeOrInt] = Field(default=UNSET, alias="bankAccountType")
    contact_group: Optional[ContactGroupsOrInt] = Field(default=UNSET, alias="contactGroup")
    """1 = Individual 3 = Juristic 9 = Undefined"""

    media: OptionalNullable[list[Media]] = UNSET
    qr_code: Optional[Media] = Field(default=UNSET, alias="qrCode")


class ContactResultDict(TypedDict):
    id: NotRequired[int]
    contact_type: NotRequired[ContactTypesOrInt]
    code: NotRequired[str | None]
    name: NotRequired[str | None]
    address_local: NotRequired[str | None]
    address_local_line2: NotRequired[str | None]
    address_local_line3: NotRequired[str | None]
    tax_id: NotRequired[str | None]
    branch: NotRequired[str | None]
    branch_code: NotRequired[str | None]
    contact_person: NotRequired[str | None]
    email: NotRequired[str | None]
    mobile: NotRequired[str | None]
    default_credit_days: NotRequired[int | None]
    office: NotRequired[str | None]
    fax: NotRequired[str | None]
    website: NotRequired[str | None]
    shipping_address: NotRequired[str | None]
    internal_notes: NotRequired[str | None]
    remarks: NotRequired[str | None]
    zip_code: NotRequired[str | None]
    bank_id: NotRequired[int | None]
    bank_name: NotRequired[str | None]
    bank_branch: NotRequired[str | None]
    bank_account_number: NotRequired[str | None]
    swift_code: NotRequired[str | None]
    bank_address: NotRequired[str | None]
    use_foreign_bank: NotRequired[bool]
    bank_account_type: NotRequired[BankAccountTypeOrInt]
    contact_group: NotRequired[ContactGroupsOrInt]
    media: NotRequired[list[MediaDict] | None]
    qr_code: NotRequired[MediaDict]
