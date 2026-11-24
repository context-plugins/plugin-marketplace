from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .allocation_component import AllocationComponent, AllocationComponentDict
from .allocation_rule_period import AllocationRulePeriod, AllocationRulePeriodDict
from .allocation_value_extraction import AllocationValueExtraction, AllocationValueExtractionDict
from .enums.action import ActionOrStr


class GroupAllocationRule(SdkBaseModel):
    """Allocation rule for a group type allocation. Components can reference other existing allocation rules by using
    the "allocation_rule" dimension type."""

    name: Optional[str] = UNSET
    """Name of the allocation rule."""

    description: Optional[str] = UNSET
    """Description of the allocation rule."""

    action: ActionOrStr
    """Action to perform with this rule."""

    id: Optional[str] = UNSET
    """ID of existing allocation (required for 'update' or 'select' action)."""

    components: Optional[list[AllocationComponent]] = UNSET
    """List of allocation filter components (required for 'create' or 'update' action). Can include components of type
    "allocation_rule" to reference existing allocation rules."""

    formula: Optional[str] = UNSET
    """Formula for combining components (A is the first component, B is the second one, etc.)"""

    value_extraction: OptionalNullable[AllocationValueExtraction] = Field(default=UNSET, alias="valueExtraction")
    """Makes the rule emit a value extracted from the first non-empty source instead of the rule name."""

    validity_periods: OptionalNullable[list[AllocationRulePeriod]] = Field(default=UNSET, alias="validityPeriods")
    """Ordered, non-overlapping date ranges when this rule applies. Empty or absent means the rule always applies."""


class GroupAllocationRuleDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    action: ActionOrStr
    id: NotRequired[str]
    components: NotRequired[list[AllocationComponentDict]]
    formula: NotRequired[str]
    value_extraction: NotRequired[AllocationValueExtractionDict | None]
    validity_periods: NotRequired[list[AllocationRulePeriodDict] | None]
