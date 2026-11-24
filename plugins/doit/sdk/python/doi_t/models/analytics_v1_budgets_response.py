from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .budget_list_item import BudgetListItem, BudgetListItemDict
from .risk_aggregations import RiskAggregations, RiskAggregationsDict


class AnalyticsV1BudgetsResponse(SdkBaseModel):
    budgets: Optional[list[BudgetListItem]] = UNSET
    """Array of Budgets"""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token, returned by a previous call, to request the next page of results"""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Budgets rows count"""

    risk_aggregations: Optional[RiskAggregations] = Field(default=UNSET, alias="riskAggregations")
    """Aggregate counts of risk statuses across the full filtered result set (all pages), not just the current page."""


class AnalyticsV1BudgetsResponseDict(TypedDict):
    budgets: NotRequired[list[BudgetListItemDict]]
    page_token: NotRequired[str]
    row_count: NotRequired[int]
    risk_aggregations: NotRequired[RiskAggregationsDict]
