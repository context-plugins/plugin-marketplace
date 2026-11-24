from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason_doi_t_budget_suggestions_api import ReasonDoiTBudgetSuggestionsApiOrStr


class BudgetSuggestionDismissRequest(SdkBaseModel):
    """Optional reason for dismissing a budget suggestion."""

    reason: Optional[ReasonDoiTBudgetSuggestionsApiOrStr] = UNSET


class BudgetSuggestionDismissRequestDict(TypedDict):
    reason: NotRequired[ReasonDoiTBudgetSuggestionsApiOrStr]
