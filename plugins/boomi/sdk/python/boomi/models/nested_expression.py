from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.operator1 import Operator1OrStr


class NestedExpression(SdkBaseModel):
    argument: Optional[list[str]] = UNSET
    """Filter values."""

    operator: Optional[Operator1OrStr] = UNSET
    """Comparison operator."""

    property: Optional[str] = UNSET
    """Object property to filter on."""


class NestedExpressionDict(TypedDict):
    argument: NotRequired[list[str]]
    operator: NotRequired[Operator1OrStr]
    property: NotRequired[str]
