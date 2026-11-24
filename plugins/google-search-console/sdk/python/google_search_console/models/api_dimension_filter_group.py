from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_dimension_filter import ApiDimensionFilter, ApiDimensionFilterDict
from .enums.group_type import GroupTypeOrStr


class ApiDimensionFilterGroup(SdkBaseModel):
    """A set of ``dimension`` value filters to test against each row. Only rows that pass all filter groups will be
    returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type
    selected. All filter groups are AND'ed together."""

    group_type: Optional[GroupTypeOrStr] = Field(default=UNSET, alias="groupType")
    """Optional. The logic operator between filters of the same group."""

    filters: Optional[list[ApiDimensionFilter]] = UNSET
    """Optional. A list of single-value filters in this group."""


class ApiDimensionFilterGroupDict(TypedDict):
    group_type: NotRequired[GroupTypeOrStr]
    filters: NotRequired[list[ApiDimensionFilterDict]]
