from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class UsageCounter(SdkBaseModel):
    limit: OptionalNullable[int] = UNSET
    """Configured plan limit for the period. ``null`` if unlimited."""

    used: int
    """Count used in the current period."""


class UsageCounterDict(TypedDict):
    limit: NotRequired[int | None]
    used: int
