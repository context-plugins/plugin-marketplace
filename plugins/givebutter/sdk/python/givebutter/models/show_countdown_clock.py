from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ShowCountdownClock(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["show_countdown_clock"] = "show_countdown_clock"
    value: OptionalNullable[bool] = UNSET


class ShowCountdownClockDict(TypedDict):
    name: Literal["show_countdown_clock"]
    value: NotRequired[bool | None]
