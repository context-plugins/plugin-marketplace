from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.logical_operator import LogicalOperatorOrStr
from .query_filter import QueryFilter, QueryFilterDict


class FilterGroup(SdkBaseModel):
    """A group of filter conditions joined by a logical operator"""

    logical_operator: Optional[LogicalOperatorOrStr] = Field(default=UNSET, alias="logicalOperator")
    """Logical operator combining the conditions in this group"""

    query_filters: Optional[list[QueryFilter]] = Field(default=UNSET, alias="queryFilters")
    """List of individual field filter conditions"""

    filter_groups: Optional[list[FilterGroup]] = Field(default=UNSET, alias="filterGroups")
    """Nested filter groups for complex query expressions"""


class FilterGroupDict(TypedDict):
    logical_operator: NotRequired[LogicalOperatorOrStr]
    query_filters: NotRequired[list[QueryFilterDict]]
    filter_groups: NotRequired[list[FilterGroupDict]]
