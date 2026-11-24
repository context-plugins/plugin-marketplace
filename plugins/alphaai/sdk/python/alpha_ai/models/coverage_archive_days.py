from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CoverageArchiveDays(SdkBaseModel):
    free: int
    """Days; 0 means unlimited."""

    basic: int
    pro: int


class CoverageArchiveDaysDict(TypedDict):
    free: int
    basic: int
    pro: int
