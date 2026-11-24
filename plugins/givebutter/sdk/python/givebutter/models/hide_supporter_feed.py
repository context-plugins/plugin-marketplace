from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideSupporterFeed(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_supporter_feed"] = "hide_supporter_feed"
    value: OptionalNullable[bool] = UNSET


class HideSupporterFeedDict(TypedDict):
    name: Literal["hide_supporter_feed"]
    value: NotRequired[bool | None]
