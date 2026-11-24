from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideOtherOption(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_other_option"] = "hide_other_option"
    value: OptionalNullable[bool] = UNSET


class HideOtherOptionDict(TypedDict):
    name: Literal["hide_other_option"]
    value: NotRequired[bool | None]
