from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateCustomFieldRequestDto(SdkBaseModel):
    """Create a custom field"""

    name: str
    """Custom field name"""

    description: Optional[str] = UNSET
    """Custom field description"""

    multi_select: Optional[bool] = Field(default=UNSET, alias="multiSelect")
    """Set as ``true`` if the custom field can have multiple selected values"""

    allow_custom_values: bool = Field(alias="allowCustomValues")
    """Set as ``true`` if the custom field can have custom values"""

    minimum_amount_for_requirement: Optional[float] = Field(default=UNSET, alias="minimumAmountForRequirement")
    """Minimum transaction amount where the custom field is required"""

    required: bool
    """Set as ``true`` if the custom field is required for all budgets. The default value is ``false``."""

    global_: bool = Field(alias="global")
    """Set as ``true`` if the custom field applies to all budgets. The default value is ``false``."""

    values: Optional[list[str]] = UNSET
    """List of custom field values"""

    selected_budget_ids: Optional[list[str]] = Field(default=UNSET, alias="selectedBudgetIds")
    """List of budgets where the custom field is available. Set the budget ID or UUID values."""

    required_budget_ids: Optional[list[str]] = Field(default=UNSET, alias="requiredBudgetIds")
    """List of budgets where the custom field is required. Set the budget ID or UUID values."""


class CreateCustomFieldRequestDtoDict(TypedDict):
    name: str
    description: NotRequired[str]
    multi_select: NotRequired[bool]
    allow_custom_values: bool
    minimum_amount_for_requirement: NotRequired[float]
    required: bool
    global_: bool
    values: NotRequired[list[str]]
    selected_budget_ids: NotRequired[list[str]]
    required_budget_ids: NotRequired[list[str]]
