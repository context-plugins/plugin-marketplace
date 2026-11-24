from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .numeric_value1 import NumericValue1, NumericValue1Dict
from .numeric_value4 import NumericValue4, NumericValue4Dict


class BetweenFilter(SdkBaseModel):
    """To express that the result needs to be between two numbers (inclusive)."""

    to_value: Optional[NumericValue4] = Field(default=UNSET, alias="toValue")
    """Ends with this number."""

    from_value: Optional[NumericValue1] = Field(default=UNSET, alias="fromValue")
    """Begins with this number."""


class BetweenFilterDict(TypedDict):
    to_value: NotRequired[NumericValue4Dict]
    from_value: NotRequired[NumericValue1Dict]
