from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .allocation_rule import AllocationRule, AllocationRuleDict
from .group_allocation_rule import GroupAllocationRule, GroupAllocationRuleDict


class CreateAllocationRequest(SdkBaseModel):
    """Request body for creating an allocation."""

    name: str
    """Allocation name."""

    description: str
    """Allocation description."""

    anomaly_detection: Optional[bool] = Field(default=UNSET, alias="anomalyDetection")
    """Whether anomaly detection is enabled for this allocation. Only applicable to single allocations."""

    rule: OptionalNullable[AllocationRule] = UNSET
    """Single allocation rule. Components can reference other existing allocation rules by using the "allocation_rule"
    dimension type."""

    rules: Optional[list[GroupAllocationRule | None]] = UNSET
    unallocated_costs: OptionalNullable[str] = Field(default=UNSET, alias="unallocatedCosts")
    """Custom label for values that do not fit into allocation (required for group type allocation)."""

    folder_id: str = Field(default="root", alias="folderId")
    """Identifier of the folder that contains the allocation. Set to "root" if the allocation is at the top level (not
    in a folder)."""


class CreateAllocationRequestDict(TypedDict):
    name: str
    description: str
    anomaly_detection: NotRequired[bool]
    rule: NotRequired[AllocationRuleDict | None]
    rules: NotRequired[list[GroupAllocationRuleDict | None]]
    unallocated_costs: NotRequired[str | None]
    folder_id: NotRequired[str]
