from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Priority(SdkBaseModel):
    """Priority information for this resource result."""

    value: Optional[str] = UNSET
    """The priority level (e.g. Low, Medium, High)."""

    priority_score: Optional[float] = Field(default=UNSET, alias="priorityScore")
    """Numeric priority score."""


class PriorityDict(TypedDict):
    value: NotRequired[str]
    priority_score: NotRequired[float]
