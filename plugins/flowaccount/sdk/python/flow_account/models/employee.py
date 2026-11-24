from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .bank import Bank, BankDict
from .company import Company, CompanyDict
from .enums.conditions_of_withholding_tax import ConditionsOfWithholdingTaxOrInt
from .enums.employee_types import EmployeeTypesOrInt
from .enums.gender_prefix import GenderPrefixOrInt
from .enums.paid_period import PaidPeriod, PaidPeriodOrInt
from .gallery import Gallery, GalleryDict
from .payroll_detail import PayrollDetail, PayrollDetailDict

if TYPE_CHECKING:
    from .department import Department, DepartmentDict


class Employee(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: OptionalNullable[int] = Field(default=UNSET, alias="companyId")
    prefix: Optional[GenderPrefixOrInt] = UNSET
    """1 = Mr 3 = Mrs 5 = Ms"""

    first_name: OptionalNullable[str] = Field(default=UNSET, alias="firstName")
    last_name: OptionalNullable[str] = Field(default=UNSET, alias="lastName")
    salary: Optional[float] = UNSET
    identitfication_number: OptionalNullable[str] = Field(default=UNSET, alias="identitficationNumber")
    passport_number: OptionalNullable[str] = Field(default=UNSET, alias="passportNumber")
    profile_image: OptionalNullable[str] = Field(default=UNSET, alias="profileImage")
    mobile: OptionalNullable[str] = UNSET
    commission: OptionalNullable[float] = UNSET
    remarks: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    bank_id: OptionalNullable[int] = Field(default=UNSET, alias="bankId")
    branch: OptionalNullable[str] = UNSET
    account_number: OptionalNullable[str] = Field(default=UNSET, alias="accountNumber")
    account_type: OptionalNullable[int] = Field(default=UNSET, alias="accountType")
    start_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    internal_note: OptionalNullable[str] = Field(default=UNSET, alias="internalNote")
    is_active: OptionalNullable[bool] = Field(default=UNSET, alias="isActive")
    created_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    created_by: OptionalNullable[int] = Field(default=UNSET, alias="createdBy")
    modified_by: OptionalNullable[int] = Field(default=UNSET, alias="modifiedBy")
    type_: Optional[EmployeeTypesOrInt] = Field(default=UNSET, alias="type")
    code: OptionalNullable[str] = UNSET
    salary_type: Optional[int] = Field(default=UNSET, alias="salaryType")
    social_security_number: OptionalNullable[str] = Field(default=UNSET, alias="socialSecurityNumber")
    employer_social_security_rate: Optional[int] = Field(default=UNSET, alias="employerSocialSecurityRate")
    employee_social_security_rate: Optional[int] = Field(default=UNSET, alias="employeeSocialSecurityRate")
    email: OptionalNullable[str] = UNSET
    dob: OptionalNullable[RFC3339DateTime] = UNSET
    address: OptionalNullable[str] = UNSET
    contact_name: OptionalNullable[str] = Field(default=UNSET, alias="contactName")
    contact_number: OptionalNullable[str] = Field(default=UNSET, alias="contactNumber")
    contact_relationship: OptionalNullable[str] = Field(default=UNSET, alias="contactRelationship")
    office: OptionalNullable[str] = UNSET
    social_security_status: OptionalNullable[int] = Field(default=UNSET, alias="socialSecurityStatus")
    method_payment: OptionalNullable[int] = Field(default=UNSET, alias="methodPayment")
    secondary_email: OptionalNullable[str] = Field(default=UNSET, alias="secondaryEmail")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    social_security_value: Optional[float] = Field(default=UNSET, alias="socialSecurityValue")
    withholding_tax: Optional[float] = Field(default=UNSET, alias="withholdingTax")
    is_head_office: Optional[bool] = Field(default=UNSET, alias="isHeadOffice")
    company_branch: OptionalNullable[str] = Field(default=UNSET, alias="companyBranch")
    marital_status: Optional[int] = Field(default=UNSET, alias="maritalStatus")
    current_address: OptionalNullable[str] = Field(default=UNSET, alias="currentAddress")
    department_id: OptionalNullable[int] = Field(default=UNSET, alias="departmentId")
    first_name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="firstNameForeign")
    last_name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="lastNameForeign")
    is_social_security_registered: Optional[bool] = Field(default=UNSET, alias="isSocialSecurityRegistered")
    bank_branch_code: OptionalNullable[str] = Field(default=UNSET, alias="bankBranchCode")
    id_card: OptionalNullable[int] = Field(default=UNSET, alias="idCard")
    household_registration: OptionalNullable[int] = Field(default=UNSET, alias="householdRegistration")
    nickname: OptionalNullable[str] = UNSET
    nickname_foreign: OptionalNullable[str] = Field(default=UNSET, alias="nicknameForeign")
    line_id: OptionalNullable[str] = Field(default=UNSET, alias="lineId")
    conditions_withholding_tax: Optional[ConditionsOfWithholdingTaxOrInt] = Field(
        default=UNSET, alias="conditionsWithholdingTax"
    )
    paid_period: PaidPeriodOrInt = Field(default=PaidPeriod.VALUE_1, alias="paidPeriod")
    bank: Optional[Bank] = UNSET
    company: Optional[Company] = UNSET
    gallery: Optional[Gallery] = UNSET
    gallery_id_card: Optional[Gallery] = Field(default=UNSET, alias="galleryIdCard")
    gallery_household_registration: Optional[Gallery] = Field(default=UNSET, alias="galleryHouseholdRegistration")
    payroll_detail: OptionalNullable[list[PayrollDetail]] = Field(default=UNSET, alias="payrollDetail")
    department: Optional[Department] = UNSET


class EmployeeDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int | None]
    prefix: NotRequired[GenderPrefixOrInt]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    salary: NotRequired[float]
    identitfication_number: NotRequired[str | None]
    passport_number: NotRequired[str | None]
    profile_image: NotRequired[str | None]
    mobile: NotRequired[str | None]
    commission: NotRequired[float | None]
    remarks: NotRequired[str | None]
    title: NotRequired[str | None]
    gallery_id: NotRequired[int | None]
    bank_id: NotRequired[int | None]
    branch: NotRequired[str | None]
    account_number: NotRequired[str | None]
    account_type: NotRequired[int | None]
    start_date: NotRequired[RFC3339DateTime | None]
    end_date: NotRequired[RFC3339DateTime | None]
    internal_note: NotRequired[str | None]
    is_active: NotRequired[bool | None]
    created_on: NotRequired[RFC3339DateTime | None]
    modified_on: NotRequired[RFC3339DateTime | None]
    created_by: NotRequired[int | None]
    modified_by: NotRequired[int | None]
    type_: NotRequired[EmployeeTypesOrInt]
    code: NotRequired[str | None]
    salary_type: NotRequired[int]
    social_security_number: NotRequired[str | None]
    employer_social_security_rate: NotRequired[int]
    employee_social_security_rate: NotRequired[int]
    email: NotRequired[str | None]
    dob: NotRequired[RFC3339DateTime | None]
    address: NotRequired[str | None]
    contact_name: NotRequired[str | None]
    contact_number: NotRequired[str | None]
    contact_relationship: NotRequired[str | None]
    office: NotRequired[str | None]
    social_security_status: NotRequired[int | None]
    method_payment: NotRequired[int | None]
    secondary_email: NotRequired[str | None]
    is_delete: NotRequired[bool]
    social_security_value: NotRequired[float]
    withholding_tax: NotRequired[float]
    is_head_office: NotRequired[bool]
    company_branch: NotRequired[str | None]
    marital_status: NotRequired[int]
    current_address: NotRequired[str | None]
    department_id: NotRequired[int | None]
    first_name_foreign: NotRequired[str | None]
    last_name_foreign: NotRequired[str | None]
    is_social_security_registered: NotRequired[bool]
    bank_branch_code: NotRequired[str | None]
    id_card: NotRequired[int | None]
    household_registration: NotRequired[int | None]
    nickname: NotRequired[str | None]
    nickname_foreign: NotRequired[str | None]
    line_id: NotRequired[str | None]
    conditions_withholding_tax: NotRequired[ConditionsOfWithholdingTaxOrInt]
    paid_period: NotRequired[PaidPeriodOrInt]
    bank: NotRequired[BankDict]
    company: NotRequired[CompanyDict]
    gallery: NotRequired[GalleryDict]
    gallery_id_card: NotRequired[GalleryDict]
    gallery_household_registration: NotRequired[GalleryDict]
    payroll_detail: NotRequired[list[PayrollDetailDict] | None]
    department: NotRequired[DepartmentDict]
