from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.operation import OperationOrStr
from .numeric_value2 import NumericValue2, NumericValue2Dict


class NumericFilter(SdkBaseModel):
    """Filters for numeric or date values."""

    operation: Optional[OperationOrStr] = UNSET
    """The operation type for this filter."""

    value: Optional[NumericValue2] = UNSET
    """A numeric value or a date value."""


class NumericFilterDict(TypedDict):
    operation: NotRequired[OperationOrStr]
    value: NotRequired[NumericValue2Dict]
