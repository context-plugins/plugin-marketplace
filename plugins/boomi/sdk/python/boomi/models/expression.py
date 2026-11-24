from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.operator import OperatorOrStr
from .nested_expression import NestedExpression, NestedExpressionDict


class Expression(SdkBaseModel):
    """Filter expression with operator and arguments."""

    operator: Optional[OperatorOrStr] = UNSET
    """Logical operator for combining filter criteria."""

    nested_expression: Optional[list[NestedExpression]] = Field(default=UNSET, alias="nestedExpression")
    """Nested filter expressions."""


class ExpressionDict(TypedDict):
    operator: NotRequired[OperatorOrStr]
    nested_expression: NotRequired[list[NestedExpressionDict]]
