from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UsageInfo2(SdkBaseModel):
    """Present on rate-limit / quota errors. Omitted otherwise."""

    current: int
    """Current usage value (e.g., calls consumed this period)."""

    limit: int
    """Configured limit for the period."""


class UsageInfo2Dict(TypedDict):
    current: int
    limit: int
