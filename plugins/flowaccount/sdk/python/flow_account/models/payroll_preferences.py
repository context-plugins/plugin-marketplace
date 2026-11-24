from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.k_connect_product_code import KConnectProductCodeOrInt


class PayrollPreferences(SdkBaseModel):
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    is_social_security_registered: Optional[bool] = Field(default=UNSET, alias="isSocialSecurityRegistered")
    employer_account_number: OptionalNullable[str] = Field(default=UNSET, alias="employerAccountNumber")
    employer_account_branch: OptionalNullable[str] = Field(default=UNSET, alias="employerAccountBranch")
    k_corporate_client_code: OptionalNullable[str] = Field(default=UNSET, alias="kCorporateClientCode")
    k_corporate_account_number: OptionalNullable[str] = Field(default=UNSET, alias="kCorporateAccountNumber")
    payroll_bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="payrollBankAccountId")
    k_connect_product_code: Optional[KConnectProductCodeOrInt] = Field(default=UNSET, alias="kConnect_ProductCode")
    """1 = PCT 3 = PPA 5 = PPB"""

    overtime_pnd: OptionalNullable[int] = Field(default=UNSET, alias="overtimePND")
    commission_pnd: OptionalNullable[int] = Field(default=UNSET, alias="commissionPND")
    bonus_pnd: OptionalNullable[int] = Field(default=UNSET, alias="bonusPND")
    allowance_pnd: OptionalNullable[int] = Field(default=UNSET, alias="allowancePND")
    cola_pnd: OptionalNullable[int] = Field(default=UNSET, alias="colaPND")
    medical_expense_pnd: OptionalNullable[int] = Field(default=UNSET, alias="medicalExpensePND")
    accommodation_pnd: OptionalNullable[int] = Field(default=UNSET, alias="accommodationPND")
    director_remuneration_pnd: OptionalNullable[int] = Field(default=UNSET, alias="directorRemunerationPND")
    other_addition_pnd: OptionalNullable[int] = Field(default=UNSET, alias="otherAdditionPND")
    access_k_connect: Optional[bool] = Field(default=UNSET, alias="accessKConnect")


class PayrollPreferencesDict(TypedDict):
    company_id: NotRequired[int]
    is_social_security_registered: NotRequired[bool]
    employer_account_number: NotRequired[str | None]
    employer_account_branch: NotRequired[str | None]
    k_corporate_client_code: NotRequired[str | None]
    k_corporate_account_number: NotRequired[str | None]
    payroll_bank_account_id: NotRequired[int | None]
    k_connect_product_code: NotRequired[KConnectProductCodeOrInt]
    overtime_pnd: NotRequired[int | None]
    commission_pnd: NotRequired[int | None]
    bonus_pnd: NotRequired[int | None]
    allowance_pnd: NotRequired[int | None]
    cola_pnd: NotRequired[int | None]
    medical_expense_pnd: NotRequired[int | None]
    accommodation_pnd: NotRequired[int | None]
    director_remuneration_pnd: NotRequired[int | None]
    other_addition_pnd: NotRequired[int | None]
    access_k_connect: NotRequired[bool]
