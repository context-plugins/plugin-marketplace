from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.custom_field_type import CustomFieldTypeOrStr


class CustomFieldResponseDto(SdkBaseModel):
    """DTO representing a custom field response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the custom field"""

    uuid: Optional[str] = UNSET
    """BILL-generated UUID of the custom field"""

    name: Optional[str] = UNSET
    """Custom field name"""

    description: Optional[str] = UNSET
    """Custom field description"""

    type_: Optional[CustomFieldTypeOrStr] = Field(default=UNSET, alias="type")
    multi_select: Optional[bool] = Field(default=UNSET, alias="multiSelect")
    """Set as ``true`` if the custom field can have multiple selected values"""

    allow_custom_values: Optional[bool] = Field(default=UNSET, alias="allowCustomValues")
    """Set as ``true`` if the custom field can have custom values"""

    minimum_amount_for_requirement: Optional[float] = Field(default=UNSET, alias="minimumAmountForRequirement")
    """Minimum transaction amount where the custom field is required"""

    required: Optional[bool] = UNSET
    """Set as ``true`` if the custom field is required for all budgets. The default value is ``false``."""

    global_: Optional[bool] = Field(default=UNSET, alias="global")
    """Set as ``true`` if the custom field applies to all budgets. The default value is ``false``."""

    retired: Optional[bool] = UNSET
    """Set as ``true`` if the custom field is retired"""

    created_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """Created date and time"""

    selected_budget_ids: Optional[list[str]] = Field(default=UNSET, alias="selectedBudgetIds")
    """List of BILL-generated ID values of budgets where the custom field is available"""

    selected_budget_uuids: Optional[list[str]] = Field(default=UNSET, alias="selectedBudgetUuids")
    """List of BILL-generated UUID values of budgets where the custom field is available"""

    required_budget_ids: Optional[list[str]] = Field(default=UNSET, alias="requiredBudgetIds")
    """List of BILL-generated ID values of budgets where the custom field is required"""

    required_budget_uuids: Optional[list[str]] = Field(default=UNSET, alias="requiredBudgetUuids")
    """List of BILL-generated UUID values of budgets where the custom field is required"""


class CustomFieldResponseDtoDict(TypedDict):
    id: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    type_: NotRequired[CustomFieldTypeOrStr]
    multi_select: NotRequired[bool]
    allow_custom_values: NotRequired[bool]
    minimum_amount_for_requirement: NotRequired[float]
    required: NotRequired[bool]
    global_: NotRequired[bool]
    retired: NotRequired[bool]
    created_time: NotRequired[RFC3339DateTime]
    selected_budget_ids: NotRequired[list[str]]
    selected_budget_uuids: NotRequired[list[str]]
    required_budget_ids: NotRequired[list[str]]
    required_budget_uuids: NotRequired[list[str]]
