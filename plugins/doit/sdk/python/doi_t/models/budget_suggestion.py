from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .amount import Amount, AmountDict
from .enums.confidence import ConfidenceOrStr
from .enums.status_doi_t_budget_suggestions_api import StatusDoiTBudgetSuggestionsApiOrStr
from .scope_chip import ScopeChip, ScopeChipDict


class BudgetSuggestion(SdkBaseModel):
    """An AI-generated budget recommendation."""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    rationale: Optional[str] = UNSET
    """Explanation of why this budget is suggested."""

    confidence: Optional[ConfidenceOrStr] = UNSET
    amount: Optional[Amount] = UNSET
    """Suggested budget amount as a decimal-string value with its currency."""

    time_interval: Optional[str] = Field(default=UNSET, alias="timeInterval")
    alert_thresholds: Optional[list[float]] = Field(default=UNSET, alias="alertThresholds")
    """Suggested alert thresholds as percentages of the amount."""

    scope_chips: Optional[list[ScopeChip]] = Field(default=UNSET, alias="scopeChips")
    """Human-readable summary of the suggested budget scope."""

    config: Optional[Any] = UNSET
    """Draft budget configuration to merge over the create-budget defaults."""

    generated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="generatedTime")
    """Timestamp when the suggestion was generated."""

    status: Optional[StatusDoiTBudgetSuggestionsApiOrStr] = UNSET


class BudgetSuggestionDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    rationale: NotRequired[str]
    confidence: NotRequired[ConfidenceOrStr]
    amount: NotRequired[AmountDict]
    time_interval: NotRequired[str]
    alert_thresholds: NotRequired[list[float]]
    scope_chips: NotRequired[list[ScopeChipDict]]
    config: NotRequired[Any]
    generated_time: NotRequired[RFC3339DateTime]
    status: NotRequired[StatusDoiTBudgetSuggestionsApiOrStr]
