from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.operator import Operator, OperatorOrStr


class GoalRequest(SdkBaseModel):
    name: str
    path: Optional[str] = UNSET
    """URL path to match."""

    operator: OperatorOrStr = Operator.E
    """e = equals, b = begins with, c = contains."""

    event_name: Optional[str] = UNSET
    """Match a custom event instead of a path."""

    scroll_depth: Optional[int] = UNSET
    """Percent scrolled."""


class GoalRequestDict(TypedDict):
    name: str
    path: NotRequired[str]
    operator: NotRequired[OperatorOrStr]
    event_name: NotRequired[str]
    scroll_depth: NotRequired[int]
