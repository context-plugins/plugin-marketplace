from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .allocation_rule import AllocationRule, AllocationRuleDict
from .enums.allocation_type1 import AllocationType1OrStr
from .group_allocation_rule import GroupAllocationRule, GroupAllocationRuleDict


class Allocation(SdkBaseModel):
    """Allocation object, including rules and metadata."""

    id: Optional[str] = UNSET
    """Allocation ID."""

    name: Optional[str] = UNSET
    """Allocation name."""

    description: Optional[str] = UNSET
    """Allocation description."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of allocation (preset or custom)."""

    allocation_type: Optional[AllocationType1OrStr] = Field(default=UNSET, alias="allocationType")
    """Composition type of allocation."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The time when the allocation was created (in UNIX timestamp)."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """Last time the allocation was modified (in UNIX timestamp)."""

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


class AllocationDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    type_: NotRequired[str]
    allocation_type: NotRequired[AllocationType1OrStr]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    anomaly_detection: NotRequired[bool]
    rule: NotRequired[AllocationRuleDict | None]
    rules: NotRequired[list[GroupAllocationRuleDict | None]]
    unallocated_costs: NotRequired[str | None]
    folder_id: NotRequired[str]
