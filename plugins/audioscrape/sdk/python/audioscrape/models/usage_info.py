from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsageInfo(SdkBaseModel):
    current: int
    """Current usage value (e.g., calls consumed this period)."""

    limit: int
    """Configured limit for the period."""


class UsageInfoDict(TypedDict):
    current: int
    limit: int
