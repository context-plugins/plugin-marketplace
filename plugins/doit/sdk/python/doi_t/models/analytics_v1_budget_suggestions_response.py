from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .budget_suggestion import BudgetSuggestion, BudgetSuggestionDict


class AnalyticsV1BudgetSuggestionsResponse(SdkBaseModel):
    items: Optional[list[BudgetSuggestion]] = UNSET
    """Array of pending budget suggestions."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Number of suggestions returned."""


class AnalyticsV1BudgetSuggestionsResponseDict(TypedDict):
    items: NotRequired[list[BudgetSuggestionDict]]
    row_count: NotRequired[int]
