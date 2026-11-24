from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NumericValue4(SdkBaseModel):
    """Ends with this number."""

    int64_value: Optional[str] = Field(default=UNSET, alias="int64Value")
    """Integer value"""

    double_value: Optional[float] = Field(default=UNSET, alias="doubleValue")
    """Double value"""


class NumericValue4Dict(TypedDict):
    int64_value: NotRequired[str]
    double_value: NotRequired[float]
