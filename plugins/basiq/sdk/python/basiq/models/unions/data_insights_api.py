from __future__ import annotations

from typing import TypeAlias

from ..account_verification_data import AccountVerificationData, AccountVerificationDataDict
from ..balance_verification_data import BalanceVerificationData, BalanceVerificationDataDict
from ..expense_ratio_data import ExpenseRatioData, ExpenseRatioDataDict
from ..identity_verification_data import IdentityVerificationData, IdentityVerificationDataDict
from ..income_verification_data import IncomeVerificationData, IncomeVerificationDataDict

DataInsightsApi: TypeAlias = (
    ExpenseRatioData
    | BalanceVerificationData
    | AccountVerificationData
    | IdentityVerificationData
    | IncomeVerificationData
)
"""Input data for the insight. The required fields vary by ``type``."""

DataInsightsApiDict: TypeAlias = (
    ExpenseRatioDataDict
    | BalanceVerificationDataDict
    | AccountVerificationDataDict
    | IdentityVerificationDataDict
    | IncomeVerificationDataDict
)
