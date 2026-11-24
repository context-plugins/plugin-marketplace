from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_fees import BankFees, BankFeesDict
from .cash_withdrawals import CashWithdrawals, CashWithdrawalsDict
from .external_transfers import ExternalTransfers, ExternalTransfersDict
from .links_affordability_expenses_api import LinksAffordabilityExpensesApi, LinksAffordabilityExpensesApiDict
from .loan_interests import LoanInterests, LoanInterestsDict
from .loan_repayments import LoanRepayments, LoanRepaymentsDict
from .payment import Payment, PaymentDict


class ExpensesResponse(SdkBaseModel):
    """Container object, containing expenses details.

    The Expenses object returns an aggregated list of expenses by category of spend."""

    type_: str = Field(alias="type")
    """Value of this resource is "expenses"."""

    id: str
    """Uniquely identifies the expenses summary."""

    coverage_days: Optional[int] = Field(default=UNSET, alias="coverageDays")
    """Number of days covered by the summary"""

    bank_fees: BankFees = Field(alias="bankFees")
    """Average monthly amount for given class for defined period"""

    cash_withdrawals: CashWithdrawals = Field(alias="cashWithdrawals")
    """Average monthly amount for given class for defined period"""

    external_transfers: ExternalTransfers = Field(alias="externalTransfers")
    """Average monthly amount for given class for defined period"""

    from_month: str = Field(alias="fromMonth")
    """First 'month' occurrence of expenses categorised going back as far as 13 months."""

    loan_interests: LoanInterests = Field(alias="loanInterests")
    """Average monthly amount for given class for defined period"""

    loan_repayments: LoanRepayments = Field(alias="loanRepayments")
    """Average monthly amount for given class for defined period"""

    payments: list[Payment]
    to_month: str = Field(alias="toMonth")
    """Latest 'month' occurrence of expenses categorised."""

    links: Optional[LinksAffordabilityExpensesApi] = UNSET


class ExpensesResponseDict(TypedDict):
    type_: str
    id: str
    coverage_days: NotRequired[int]
    bank_fees: BankFeesDict
    cash_withdrawals: CashWithdrawalsDict
    external_transfers: ExternalTransfersDict
    from_month: str
    loan_interests: LoanInterestsDict
    loan_repayments: LoanRepaymentsDict
    payments: list[PaymentDict]
    to_month: str
    links: NotRequired[LinksAffordabilityExpensesApiDict]
