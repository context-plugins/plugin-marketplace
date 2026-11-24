from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EmployeesInLinkedInFilter(SdkBaseModel):
    """Filter companies by LinkedIn-reported employee count. Both ``min`` and ``max`` are optional — provide either or
    both."""

    min: Optional[int] = UNSET
    """Minimum employee count (inclusive)"""

    max: Optional[int] = UNSET
    """Maximum employee count (inclusive)"""


class EmployeesInLinkedInFilterDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
