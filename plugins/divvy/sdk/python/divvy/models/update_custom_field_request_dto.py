from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UpdateCustomFieldRequestDto(SdkBaseModel):
    """Update a custom field (Description added)"""

    minimum_amount_for_requirement: OptionalNullable[float] = Field(default=UNSET, alias="minimumAmountForRequirement")
    """Minimum transaction amount where the custom field is required"""

    name: OptionalNullable[str] = UNSET
    """Custom field name"""

    description: OptionalNullable[str] = UNSET
    """Custom field description"""

    allow_custom_values: OptionalNullable[bool] = Field(default=UNSET, alias="allowCustomValues")
    """Set as ``true`` if the custom field can have custom values"""

    required: OptionalNullable[bool] = UNSET
    """Set as ``true`` if the custom field is required for all budgets. The default value is ``false``."""

    global_: OptionalNullable[bool] = Field(default=UNSET, alias="global")
    """Set as ``true`` if the custom field applies to all budgets. The default value is ``false``."""

    selected_budget_ids: Optional[list[str]] = Field(default=UNSET, alias="selectedBudgetIds")
    """List of budgets where the custom field is available. Set the budget ID or UUID values."""

    required_budget_ids: Optional[list[str]] = Field(default=UNSET, alias="requiredBudgetIds")
    """List of budgets where the custom field is required. Set the budget ID or UUID values."""


class UpdateCustomFieldRequestDtoDict(TypedDict):
    minimum_amount_for_requirement: NotRequired[float | None]
    name: NotRequired[str | None]
    description: NotRequired[str | None]
    allow_custom_values: NotRequired[bool | None]
    required: NotRequired[bool | None]
    global_: NotRequired[bool | None]
    selected_budget_ids: NotRequired[list[str]]
    required_budget_ids: NotRequired[list[str]]
