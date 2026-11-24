from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company_preferences import CompanyPreferences, CompanyPreferencesDict
from .company_subscription import CompanySubscription, CompanySubscriptionDict
from .enums.company_type_enum import CompanyTypeEnumOrInt
from .enums.sales_type import SalesTypeOrInt
from .payroll_preferences import PayrollPreferences, PayrollPreferencesDict


class Company(SdkBaseModel):
    id: Optional[int] = UNSET
    name_local: str = Field(alias="nameLocal")
    name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="nameForeign")
    address_local: OptionalNullable[str] = Field(default=UNSET, alias="addressLocal")
    address_foreign: OptionalNullable[str] = Field(default=UNSET, alias="addressForeign")
    company_tax_id: OptionalNullable[str] = Field(default=UNSET, alias="companyTaxId")
    logo_image: OptionalNullable[str] = Field(default=UNSET, alias="logoImage")
    fax: OptionalNullable[str] = UNSET
    phone1: OptionalNullable[str] = UNSET
    phone2: OptionalNullable[str] = UNSET
    phone3: OptionalNullable[str] = UNSET
    websites: OptionalNullable[str] = UNSET
    company_type: Optional[CompanyTypeEnumOrInt] = Field(default=UNSET, alias="companyType")
    """10 = PrivateWithTax 20 = PrivateWithoutTax 30 = Personal 40 = PersonalWithTax 50 = PartnershipLimitedWithTax 60 =
    PartnershipLimitedWithoutTax"""

    created_on: RFC3339DateTime = Field(alias="createdOn")
    modified_on: RFC3339DateTime = Field(alias="modifiedOn")
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    address_local_line2: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine2")
    address_foreign_line2: OptionalNullable[str] = Field(default=UNSET, alias="addressForeignLine2")
    vat_rate: Optional[int] = Field(default=UNSET, alias="vatRate")
    is_vat: bool = Field(default=False, alias="isVat")
    email: OptionalNullable[str] = UNSET
    branch: OptionalNullable[str] = UNSET
    address_local_line3: OptionalNullable[str] = Field(default=UNSET, alias="addressLocalLine3")
    address_foreign_line3: OptionalNullable[str] = Field(default=UNSET, alias="addressForeignLine3")
    contact_person: OptionalNullable[str] = Field(default=UNSET, alias="contactPerson")
    is_active: bool = Field(default=True, alias="isActive")
    remarks: OptionalNullable[str] = UNSET
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    branch_foreign: OptionalNullable[str] = Field(default=UNSET, alias="branchForeign")
    branch_code: OptionalNullable[str] = Field(default=UNSET, alias="branchCode")
    contact_type: int = Field(alias="contactType")
    default_credit_days: OptionalNullable[int] = Field(default=UNSET, alias="defaultCreditDays")
    logo_type: int = Field(alias="logoType")
    is_registered: bool = Field(default=True, alias="isRegistered")
    is_advance: bool = Field(alias="isAdvance")
    address: OptionalNullable[str] = UNSET
    province_id: OptionalNullable[int] = Field(default=UNSET, alias="provinceId")
    amphur_id: OptionalNullable[int] = Field(default=UNSET, alias="amphurId")
    district_id: OptionalNullable[int] = Field(default=UNSET, alias="districtId")
    zip_code: OptionalNullable[str] = Field(default=UNSET, alias="zipCode")
    support_code: OptionalNullable[str] = Field(default=UNSET, alias="supportCode")
    sales_type: Optional[SalesTypeOrInt] = Field(default=UNSET, alias="salesType")
    company_preferences: Optional[CompanyPreferences] = Field(default=UNSET, alias="companyPreferences")
    payroll_preferences: Optional[PayrollPreferences] = Field(default=UNSET, alias="payrollPreferences")
    company_subscription: OptionalNullable[list[CompanySubscription]] = Field(
        default=UNSET, alias="companySubscription"
    )


class CompanyDict(TypedDict):
    id: NotRequired[int]
    name_local: str
    name_foreign: NotRequired[str | None]
    address_local: NotRequired[str | None]
    address_foreign: NotRequired[str | None]
    company_tax_id: NotRequired[str | None]
    logo_image: NotRequired[str | None]
    fax: NotRequired[str | None]
    phone1: NotRequired[str | None]
    phone2: NotRequired[str | None]
    phone3: NotRequired[str | None]
    websites: NotRequired[str | None]
    company_type: NotRequired[CompanyTypeEnumOrInt]
    created_on: RFC3339DateTime
    modified_on: RFC3339DateTime
    is_default: NotRequired[bool]
    address_local_line2: NotRequired[str | None]
    address_foreign_line2: NotRequired[str | None]
    vat_rate: NotRequired[int]
    is_vat: NotRequired[bool]
    email: NotRequired[str | None]
    branch: NotRequired[str | None]
    address_local_line3: NotRequired[str | None]
    address_foreign_line3: NotRequired[str | None]
    contact_person: NotRequired[str | None]
    is_active: NotRequired[bool]
    remarks: NotRequired[str | None]
    gallery_id: NotRequired[int | None]
    branch_foreign: NotRequired[str | None]
    branch_code: NotRequired[str | None]
    contact_type: int
    default_credit_days: NotRequired[int | None]
    logo_type: int
    is_registered: NotRequired[bool]
    is_advance: bool
    address: NotRequired[str | None]
    province_id: NotRequired[int | None]
    amphur_id: NotRequired[int | None]
    district_id: NotRequired[int | None]
    zip_code: NotRequired[str | None]
    support_code: NotRequired[str | None]
    sales_type: NotRequired[SalesTypeOrInt]
    company_preferences: NotRequired[CompanyPreferencesDict]
    payroll_preferences: NotRequired[PayrollPreferencesDict]
    company_subscription: NotRequired[list[CompanySubscriptionDict] | None]
