from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .allocation_component import AllocationComponent, AllocationComponentDict
from .allocation_rule_period import AllocationRulePeriod, AllocationRulePeriodDict


class AllocationRule(SdkBaseModel):
    """Single allocation rule. Components can reference other existing allocation rules by using the "allocation_rule"
    dimension type."""

    components: list[AllocationComponent]
    """List of allocation filter components."""

    formula: str
    """Formula for combining components (A is the first component, B is the second one, etc.)."""

    validity_periods: OptionalNullable[list[AllocationRulePeriod]] = Field(default=UNSET, alias="validityPeriods")
    """Ordered, non-overlapping date ranges when this rule applies. Empty or absent means the rule always applies."""


class AllocationRuleDict(TypedDict):
    components: list[AllocationComponentDict]
    formula: str
    validity_periods: NotRequired[list[AllocationRulePeriodDict] | None]
