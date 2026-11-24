from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.allocation_dimensions_types import AllocationDimensionsTypesOrStr
from .enums.mode_doi_t_allocations_api import ModeDoiTAllocationsApiOrStr


class AllocationComponent(SdkBaseModel):
    """A filter component used inside allocation rules. When the type is "allocation_rule", the component references
    existing allocation rules (nested allocation rules). A maximum nesting depth of 3 levels is supported, and circular
    references are not allowed."""

    key: str
    """Key of an existing dimension. Examples: "billing_account_id", "country". When type is "allocation_rule", the key
    must be set to "allocation_rule". Use ``GET /analytics/v1/dimensions`` to retrieve all available dimensions."""

    type_: AllocationDimensionsTypesOrStr = Field(alias="type")
    """Dimension filter type for allocation rule components. See ``DimensionsTypes`` for per-value meanings. Allocation
    components do not support ``allocation``, ``attribution``, or ``attribution_group`` types."""

    values: list[str]
    """Values to filter on. When type is "allocation_rule", the values are IDs of existing allocation rules."""

    inverse: bool = False
    """If true, all selected values will be excluded."""

    include_null: bool = Field(default=False, alias="includeNull")
    """Include null values."""

    case_insensitive: bool = Field(default=False, alias="caseInsensitive")
    """If true, string matching is case-insensitive. Effective only for starts_with, ends_with, and contains modes;
    rejected otherwise."""

    mode: ModeDoiTAllocationsApiOrStr
    """Filter mode to apply. When type is "allocation_rule", only "is" and "contains" modes are supported."""


class AllocationComponentDict(TypedDict):
    key: str
    type_: AllocationDimensionsTypesOrStr
    values: list[str]
    inverse: NotRequired[bool]
    include_null: NotRequired[bool]
    case_insensitive: NotRequired[bool]
    mode: ModeDoiTAllocationsApiOrStr
