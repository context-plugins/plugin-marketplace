from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RemoveTipsIncreaseFee(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["remove_tips_increase_fee"] = "remove_tips_increase_fee"
    value: OptionalNullable[bool] = UNSET


class RemoveTipsIncreaseFeeDict(TypedDict):
    name: Literal["remove_tips_increase_fee"]
    value: NotRequired[bool | None]
