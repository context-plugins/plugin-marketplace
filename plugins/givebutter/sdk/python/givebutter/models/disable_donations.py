from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisableDonations(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_donations"] = "disable_donations"
    value: OptionalNullable[bool] = UNSET


class DisableDonationsDict(TypedDict):
    name: Literal["disable_donations"]
    value: NotRequired[bool | None]
