from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .enums.bank_account_type import BankAccountTypeOrInt
from .enums.paid_period import PaidPeriod, PaidPeriodOrInt
from .enums.payroll_status import PayrollStatusOrInt
from .enums.rule_compile_status import RuleCompileStatusOrInt
from .gallery import Gallery, GalleryDict
from .payroll_detail import PayrollDetail, PayrollDetailDict
from .user import User, UserDict


class Payroll(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    payment_cycle: Optional[int] = Field(default=UNSET, alias="paymentCycle")
    status: Optional[PayrollStatusOrInt] = UNSET
    """0 = Draft 1 = Awaiting 2 = Reset 3 = Paid 4 = Partial 5 = Rejected 7 = Approved 11 = PushPayAwaiting 13 =
    PushPayProcessed 15 = PushPayRejected 17 = PushPayPartial 19 = PushPayPendingPayments 50 = KConnectAwaiting 52 =
    KConnectProcessed 54 = KConnectRejected 56 = KConnectPendingPayments"""

    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    created_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    created_by: OptionalNullable[int] = Field(default=UNSET, alias="createdBy")
    modified_by: OptionalNullable[int] = Field(default=UNSET, alias="modifiedBy")
    expense_id: OptionalNullable[int] = Field(default=UNSET, alias="expenseId")
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    remarks: OptionalNullable[str] = UNSET
    total: Optional[float] = UNSET
    bank_id: OptionalNullable[int] = Field(default=UNSET, alias="bankId")
    account_number: OptionalNullable[str] = Field(default=UNSET, alias="accountNumber")
    add_amount: Optional[float] = Field(default=UNSET, alias="addAmount")
    deduct_amount: Optional[float] = Field(default=UNSET, alias="deductAmount")
    net_total: Optional[float] = Field(default=UNSET, alias="netTotal")
    running_number_type: Optional[int] = Field(default=UNSET, alias="runningNumberType")
    date_payment: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="datePayment")
    document_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="documentDate")
    total_payroll_cash: Optional[float] = Field(default=UNSET, alias="totalPayrollCash")
    total_payroll_transfer: Optional[float] = Field(default=UNSET, alias="totalPayrollTransfer")
    fee: Optional[float] = UNSET
    payment_remarks: OptionalNullable[str] = Field(default=UNSET, alias="paymentRemarks")
    employer_account_number: OptionalNullable[str] = Field(default=UNSET, alias="employerAccountNumber")
    employer_account_branch: OptionalNullable[str] = Field(default=UNSET, alias="employerAccountBranch")
    bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="bankAccountId")
    account_type: Optional[BankAccountTypeOrInt] = Field(default=UNSET, alias="accountType")
    reference_id: OptionalNullable[str] = Field(default=UNSET, alias="referenceId")
    payroll_version: Optional[int] = Field(default=UNSET, alias="payrollVersion")
    company: Optional[Company] = UNSET
    created_by_user: Optional[User] = Field(default=UNSET, alias="createdByUser")
    modified_by_user: Optional[User] = Field(default=UNSET, alias="modifiedByUser")
    payroll_detail: OptionalNullable[list[PayrollDetail]] = Field(default=UNSET, alias="payrollDetail")
    gallery: Optional[Gallery] = UNSET
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")
    rule_compile_status: Optional[RuleCompileStatusOrInt] = Field(default=UNSET, alias="ruleCompileStatus")
    """1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore"""

    is_partial_payments: Optional[bool] = Field(default=UNSET, alias="isPartialPayments")
    paid_period: PaidPeriodOrInt = Field(default=PaidPeriod.VALUE_1, alias="paidPeriod")
    social_security_percent: float = Field(default=5.0, alias="socialSecurityPercent")
    status_int: Optional[int] = Field(default=UNSET, alias="statusInt")


class PayrollDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
    payment_cycle: NotRequired[int]
    status: NotRequired[PayrollStatusOrInt]
    is_delete: NotRequired[bool]
    created_on: NotRequired[RFC3339DateTime | None]
    modified_on: NotRequired[RFC3339DateTime | None]
    created_by: NotRequired[int | None]
    modified_by: NotRequired[int | None]
    expense_id: NotRequired[int | None]
    gallery_id: NotRequired[int | None]
    remarks: NotRequired[str | None]
    total: NotRequired[float]
    bank_id: NotRequired[int | None]
    account_number: NotRequired[str | None]
    add_amount: NotRequired[float]
    deduct_amount: NotRequired[float]
    net_total: NotRequired[float]
    running_number_type: NotRequired[int]
    date_payment: NotRequired[RFC3339DateTime | None]
    document_date: NotRequired[RFC3339DateTime]
    total_payroll_cash: NotRequired[float]
    total_payroll_transfer: NotRequired[float]
    fee: NotRequired[float]
    payment_remarks: NotRequired[str | None]
    employer_account_number: NotRequired[str | None]
    employer_account_branch: NotRequired[str | None]
    bank_account_id: NotRequired[int | None]
    account_type: NotRequired[BankAccountTypeOrInt]
    reference_id: NotRequired[str | None]
    payroll_version: NotRequired[int]
    company: NotRequired[CompanyDict]
    created_by_user: NotRequired[UserDict]
    modified_by_user: NotRequired[UserDict]
    payroll_detail: NotRequired[list[PayrollDetailDict] | None]
    gallery: NotRequired[GalleryDict]
    is_migrate: NotRequired[bool]
    rule_compile_status: NotRequired[RuleCompileStatusOrInt]
    is_partial_payments: NotRequired[bool]
    paid_period: NotRequired[PaidPeriodOrInt]
    social_security_percent: NotRequired[float]
    status_int: NotRequired[int]
