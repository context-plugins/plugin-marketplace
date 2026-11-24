from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Stats(SdkBaseModel):
    """Engagement counts where the source exposes them."""

    plays: OptionalNullable[int] = UNSET


class StatsDict(TypedDict):
    plays: NotRequired[int | None]
