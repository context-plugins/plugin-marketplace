from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BudgetSuggestionAcceptRequest(SdkBaseModel):
    """Links a budget suggestion to an existing budget."""

    budget_id: str = Field(alias="budgetId")
    """ID of the budget (created via POST /analytics/v1/budgets) to link this suggestion to."""

    edited_before_accept: Optional[bool] = Field(default=UNSET, alias="editedBeforeAccept")
    """Whether the customer edited the suggested values before accepting."""


class BudgetSuggestionAcceptRequestDict(TypedDict):
    budget_id: str
    edited_before_accept: NotRequired[bool]
