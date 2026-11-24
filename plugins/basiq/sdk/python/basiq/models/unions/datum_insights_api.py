from __future__ import annotations

from typing import TypeAlias

from ..account_insight_data_item import AccountInsightDataItem, AccountInsightDataItemDict
from ..balance_insight_data_item import BalanceInsightDataItem, BalanceInsightDataItemDict
from ..expense_ratio_insight_data_item import ExpenseRatioInsightDataItem, ExpenseRatioInsightDataItemDict
from ..identity_insight_data_item import IdentityInsightDataItem, IdentityInsightDataItemDict

DatumInsightsApi: TypeAlias = (
    ExpenseRatioInsightDataItem | AccountInsightDataItem | BalanceInsightDataItem | IdentityInsightDataItem
)

DatumInsightsApiDict: TypeAlias = (
    ExpenseRatioInsightDataItemDict
    | AccountInsightDataItemDict
    | BalanceInsightDataItemDict
    | IdentityInsightDataItemDict
)
