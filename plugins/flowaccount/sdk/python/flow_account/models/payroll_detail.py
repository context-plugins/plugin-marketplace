from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .bank import Bank, BankDict
from .enums.bank_account_type import BankAccountTypeOrInt
from .enums.conditions_of_withholding_tax import ConditionsOfWithholdingTaxOrInt
from .enums.payroll_detail_status import PayrollDetailStatusOrInt
from .enums.rule_compile_status import RuleCompileStatusOrInt
from .enums.send_email_status import SendEmailStatusOrInt
from .user import User, UserDict

if TYPE_CHECKING:
    from .employee import Employee, EmployeeDict
    from .expense_list import ExpenseList, ExpenseListDict
    from .payroll import Payroll, PayrollDict


class PayrollDetail(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    payroll_id: Optional[int] = Field(default=UNSET, alias="payrollId")
    employee_id: Optional[int] = Field(default=UNSET, alias="employeeId")
    salary: Optional[float] = UNSET
    social_security_value: Optional[float] = Field(default=UNSET, alias="socialSecurityValue")
    commission: Optional[float] = UNSET
    bonus: Optional[float] = UNSET
    deduction: Optional[float] = UNSET
    withholding_tax: Optional[float] = Field(default=UNSET, alias="withholdingTax")
    status: Optional[PayrollDetailStatusOrInt] = UNSET
    """0 = Draft 1 = Awaiting 2 = Reset 3 = Paid 4 = Partial 5 = Rejected 7 = Approved 11 = PushPayAwaiting 13 =
    PushPayProcessed 15 = PushPayRejected 17 = PushPayPartial 19 = PushPayPendingPayments 50 = KConnectAwaiting 52 =
    KConnectProcessed 54 = KConnectRejected 56 = KConnectPendingPayments 58 = KConnectPartialPayments"""

    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    withheld: Optional[float] = UNSET
    date_payment: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="datePayment")
    fee: OptionalNullable[float] = UNSET
    ref: OptionalNullable[str] = UNSET
    transaction_id: OptionalNullable[str] = Field(default=UNSET, alias="transactionId")
    amount: OptionalNullable[float] = UNSET
    pay_status: OptionalNullable[int] = Field(default=UNSET, alias="payStatus")
    remarks: OptionalNullable[str] = UNSET
    expense_id: OptionalNullable[int] = Field(default=UNSET, alias="expenseId")
    overtime: Optional[float] = UNSET
    advance: Optional[float] = UNSET
    other_addition: Optional[float] = Field(default=UNSET, alias="otherAddition")
    other_deduction: Optional[float] = Field(default=UNSET, alias="otherDeduction")
    provident_fund: Optional[float] = Field(default=UNSET, alias="providentFund")
    security_money: Optional[float] = Field(default=UNSET, alias="securityMoney")
    value: Optional[float] = UNSET
    note: OptionalNullable[str] = UNSET
    created_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    created_by: OptionalNullable[int] = Field(default=UNSET, alias="createdBy")
    modified_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    last_modified_by: Optional[int] = Field(default=UNSET, alias="lastModifiedBy")
    employer_social_security: Optional[float] = Field(default=UNSET, alias="employerSocialSecurity")
    allowance: Optional[float] = UNSET
    cola: Optional[float] = UNSET
    medical_expense: Optional[float] = Field(default=UNSET, alias="medicalExpense")
    accommodation: Optional[float] = UNSET
    director_remuneration: Optional[float] = Field(default=UNSET, alias="directorRemuneration")
    method_payment: OptionalNullable[int] = Field(default=UNSET, alias="methodPayment")
    bank_id: OptionalNullable[int] = Field(default=UNSET, alias="bankId")
    account_number: OptionalNullable[str] = Field(default=UNSET, alias="accountNumber")
    account_number_masking: OptionalNullable[str] = Field(default=UNSET, alias="accountNumberMasking")
    employee_title: OptionalNullable[str] = Field(default=UNSET, alias="employeeTitle")
    employee_code: OptionalNullable[str] = Field(default=UNSET, alias="employeeCode")
    employee_first_name: OptionalNullable[str] = Field(default=UNSET, alias="employeeFirstName")
    employee_last_name: OptionalNullable[str] = Field(default=UNSET, alias="employeeLastName")
    employee_first_name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="employeeFirstNameForeign")
    employee_last_name_foreign: OptionalNullable[str] = Field(default=UNSET, alias="employeeLastNameForeign")
    employee_start_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="employeeStartDate")
    is_social_security_registered: Optional[bool] = Field(default=UNSET, alias="isSocialSecurityRegistered")
    bank_branch_code: OptionalNullable[str] = Field(default=UNSET, alias="bankBranchCode")
    account_type: Optional[BankAccountTypeOrInt] = Field(default=UNSET, alias="accountType")
    reference_id: OptionalNullable[str] = Field(default=UNSET, alias="referenceId")
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")
    employee: Optional[Employee] = UNSET
    expense_list: Optional[ExpenseList] = Field(default=UNSET, alias="expenseList")
    payroll: Optional[Payroll] = UNSET
    bank: Optional[Bank] = UNSET
    last_modified_by_user: Optional[User] = Field(default=UNSET, alias="lastModifiedByUser")
    rule_compile_status: Optional[RuleCompileStatusOrInt] = Field(default=UNSET, alias="ruleCompileStatus")
    """1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore"""

    employer_account_branch: OptionalNullable[str] = Field(default=UNSET, alias="employerAccountBranch")
    employer_account_number: OptionalNullable[str] = Field(default=UNSET, alias="employerAccountNumber")
    bank_account_id: OptionalNullable[int] = Field(default=UNSET, alias="bankAccountId")
    payment_remarks: OptionalNullable[str] = Field(default=UNSET, alias="paymentRemarks")
    payroll_payment_id: OptionalNullable[int] = Field(default=UNSET, alias="payrollPaymentId")
    kc_processing_status: OptionalNullable[int] = Field(default=UNSET, alias="kcProcessingStatus")
    department_id: OptionalNullable[int] = Field(default=UNSET, alias="departmentId")
    department_name: OptionalNullable[str] = Field(default=UNSET, alias="departmentName")
    department_code: OptionalNullable[str] = Field(default=UNSET, alias="departmentCode")
    work_days: OptionalNullable[float] = Field(default=UNSET, alias="workDays")
    wage: OptionalNullable[float] = UNSET
    is_social_security_auto_cal: Optional[bool] = Field(default=UNSET, alias="isSocialSecurityAutoCal")
    social_security_percent: float = Field(default=5.0, alias="socialSecurityPercent")
    send_email_status: Optional[SendEmailStatusOrInt] = Field(default=UNSET, alias="sendEmailStatus")
    student_loan: Optional[float] = Field(default=UNSET, alias="studentLoan")
    conditions_withholding_tax: Optional[ConditionsOfWithholdingTaxOrInt] = Field(
        default=UNSET, alias="conditionsWithholdingTax"
    )
    overtime_pnd: OptionalNullable[int] = Field(default=UNSET, alias="overtimePND")
    commission_pnd: OptionalNullable[int] = Field(default=UNSET, alias="commissionPND")
    bonus_pnd: OptionalNullable[int] = Field(default=UNSET, alias="bonusPND")
    allowance_pnd: OptionalNullable[int] = Field(default=UNSET, alias="allowancePND")
    cola_pnd: OptionalNullable[int] = Field(default=UNSET, alias="colaPND")
    medical_expense_pnd: OptionalNullable[int] = Field(default=UNSET, alias="medicalExpensePND")
    accommodation_pnd: OptionalNullable[int] = Field(default=UNSET, alias="accommodationPND")
    director_remuneration_pnd: OptionalNullable[int] = Field(default=UNSET, alias="directorRemunerationPND")
    other_addition_pnd: OptionalNullable[int] = Field(default=UNSET, alias="otherAdditionPND")
    withholding_tax401: Optional[float] = Field(default=UNSET, alias="withholdingTax401")
    withholding_tax402: Optional[float] = Field(default=UNSET, alias="withholdingTax402")
    status_int: Optional[int] = Field(default=UNSET, alias="statusInt")


class PayrollDetailDict(TypedDict):
    id: NotRequired[int]
    payroll_id: NotRequired[int]
    employee_id: NotRequired[int]
    salary: NotRequired[float]
    social_security_value: NotRequired[float]
    commission: NotRequired[float]
    bonus: NotRequired[float]
    deduction: NotRequired[float]
    withholding_tax: NotRequired[float]
    status: NotRequired[PayrollDetailStatusOrInt]
    is_delete: NotRequired[bool]
    withheld: NotRequired[float]
    date_payment: NotRequired[RFC3339DateTime | None]
    fee: NotRequired[float | None]
    ref: NotRequired[str | None]
    transaction_id: NotRequired[str | None]
    amount: NotRequired[float | None]
    pay_status: NotRequired[int | None]
    remarks: NotRequired[str | None]
    expense_id: NotRequired[int | None]
    overtime: NotRequired[float]
    advance: NotRequired[float]
    other_addition: NotRequired[float]
    other_deduction: NotRequired[float]
    provident_fund: NotRequired[float]
    security_money: NotRequired[float]
    value: NotRequired[float]
    note: NotRequired[str | None]
    created_on: NotRequired[RFC3339DateTime | None]
    created_by: NotRequired[int | None]
    modified_on: NotRequired[RFC3339DateTime | None]
    last_modified_by: NotRequired[int]
    employer_social_security: NotRequired[float]
    allowance: NotRequired[float]
    cola: NotRequired[float]
    medical_expense: NotRequired[float]
    accommodation: NotRequired[float]
    director_remuneration: NotRequired[float]
    method_payment: NotRequired[int | None]
    bank_id: NotRequired[int | None]
    account_number: NotRequired[str | None]
    account_number_masking: NotRequired[str | None]
    employee_title: NotRequired[str | None]
    employee_code: NotRequired[str | None]
    employee_first_name: NotRequired[str | None]
    employee_last_name: NotRequired[str | None]
    employee_first_name_foreign: NotRequired[str | None]
    employee_last_name_foreign: NotRequired[str | None]
    employee_start_date: NotRequired[RFC3339DateTime | None]
    is_social_security_registered: NotRequired[bool]
    bank_branch_code: NotRequired[str | None]
    account_type: NotRequired[BankAccountTypeOrInt]
    reference_id: NotRequired[str | None]
    is_migrate: NotRequired[bool]
    employee: NotRequired[EmployeeDict]
    expense_list: NotRequired[ExpenseListDict]
    payroll: NotRequired[PayrollDict]
    bank: NotRequired[BankDict]
    last_modified_by_user: NotRequired[UserDict]
    rule_compile_status: NotRequired[RuleCompileStatusOrInt]
    employer_account_branch: NotRequired[str | None]
    employer_account_number: NotRequired[str | None]
    bank_account_id: NotRequired[int | None]
    payment_remarks: NotRequired[str | None]
    payroll_payment_id: NotRequired[int | None]
    kc_processing_status: NotRequired[int | None]
    department_id: NotRequired[int | None]
    department_name: NotRequired[str | None]
    department_code: NotRequired[str | None]
    work_days: NotRequired[float | None]
    wage: NotRequired[float | None]
    is_social_security_auto_cal: NotRequired[bool]
    social_security_percent: NotRequired[float]
    send_email_status: NotRequired[SendEmailStatusOrInt]
    student_loan: NotRequired[float]
    conditions_withholding_tax: NotRequired[ConditionsOfWithholdingTaxOrInt]
    overtime_pnd: NotRequired[int | None]
    commission_pnd: NotRequired[int | None]
    bonus_pnd: NotRequired[int | None]
    allowance_pnd: NotRequired[int | None]
    cola_pnd: NotRequired[int | None]
    medical_expense_pnd: NotRequired[int | None]
    accommodation_pnd: NotRequired[int | None]
    director_remuneration_pnd: NotRequired[int | None]
    other_addition_pnd: NotRequired[int | None]
    withholding_tax401: NotRequired[float]
    withholding_tax402: NotRequired[float]
    status_int: NotRequired[int]
