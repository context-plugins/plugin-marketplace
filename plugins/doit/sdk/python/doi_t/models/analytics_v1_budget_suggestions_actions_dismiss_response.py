from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_doi_t_budget_suggestions_api import Status1DoiTBudgetSuggestionsApiOrStr


class AnalyticsV1BudgetSuggestionsActionsDismissResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """ID of the dismissed suggestion."""

    status: Optional[Status1DoiTBudgetSuggestionsApiOrStr] = UNSET


class AnalyticsV1BudgetSuggestionsActionsDismissResponseDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[Status1DoiTBudgetSuggestionsApiOrStr]
