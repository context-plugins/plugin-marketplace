from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .expression import Expression, ExpressionDict


class QueryFilter(SdkBaseModel):
    """Filter expression for narrowing query results."""

    expression: Optional[Expression] = UNSET
    """Filter expression with operator and arguments."""


class QueryFilterDict(TypedDict):
    expression: NotRequired[ExpressionDict]
