from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.comparison_operator import ComparisonOperatorOrStr


class CommonNameFilter(SdkBaseModel):
    value: str = Field(alias="Value")
    """The value to match against."""

    comparison_operator: ComparisonOperatorOrStr = Field(alias="ComparisonOperator")
    """The comparison operator to use."""


class CommonNameFilterDict(TypedDict):
    value: str
    comparison_operator: ComparisonOperatorOrStr
