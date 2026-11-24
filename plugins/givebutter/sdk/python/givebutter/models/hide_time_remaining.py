from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideTimeRemaining(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_time_remaining"] = "hide_time_remaining"
    value: OptionalNullable[bool] = UNSET


class HideTimeRemainingDict(TypedDict):
    name: Literal["hide_time_remaining"]
    value: NotRequired[bool | None]
