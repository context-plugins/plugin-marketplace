from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dimension import DimensionOrStr
from .enums.operator import OperatorOrStr


class ApiDimensionFilter(SdkBaseModel):
    """A filter test to be applied to each row in the data set, where a match can return the row. Filters are string
    comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed
    within their parent filter group, according to the group's group type. You do not need to group by a specified
    dimension to filter against it."""

    dimension: Optional[DimensionOrStr] = UNSET
    expression: Optional[str] = UNSET
    operator: Optional[OperatorOrStr] = UNSET


class ApiDimensionFilterDict(TypedDict):
    dimension: NotRequired[DimensionOrStr]
    expression: NotRequired[str]
    operator: NotRequired[OperatorOrStr]
