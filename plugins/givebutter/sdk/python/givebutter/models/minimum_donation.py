from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MinimumDonation(SdkBaseModel):
    """Accepts a ``decimal`` value."""

    name: Literal["minimum_donation"] = "minimum_donation"
    value: OptionalNullable[float] = UNSET


class MinimumDonationDict(TypedDict):
    name: Literal["minimum_donation"]
    value: NotRequired[float | None]
