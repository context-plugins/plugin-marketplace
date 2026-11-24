from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnalyticsV1BudgetSuggestionsActionsAcceptResponse(SdkBaseModel):
    budget_id: Optional[str] = Field(default=UNSET, alias="budgetId")
    """ID of the budget the suggestion was linked to."""


class AnalyticsV1BudgetSuggestionsActionsAcceptResponseDict(TypedDict):
    budget_id: NotRequired[str]
