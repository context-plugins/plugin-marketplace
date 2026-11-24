from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter_expression import FilterExpression, FilterExpressionDict


class FilterExpressionList(SdkBaseModel):
    """A list of filter expressions."""

    expressions: Optional[list[FilterExpression]] = UNSET
    """A list of filter expressions."""


class FilterExpressionListDict(TypedDict):
    expressions: NotRequired[list[FilterExpressionDict]]
