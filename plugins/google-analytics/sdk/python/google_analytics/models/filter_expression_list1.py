from __future__ import annotations

from typing import TYPE_CHECKING

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel

if TYPE_CHECKING:
    from .filter_expression import FilterExpression, FilterExpressionDict


class FilterExpressionList1(SdkBaseModel):
    """The FilterExpressions in or_group have an OR relationship."""

    expressions: Optional[list[FilterExpression]] = UNSET
    """A list of filter expressions."""


class FilterExpressionList1Dict(TypedDict):
    expressions: NotRequired[list[FilterExpressionDict]]
