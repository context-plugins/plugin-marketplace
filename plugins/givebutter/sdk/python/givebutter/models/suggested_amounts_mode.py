from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SuggestedAmountsMode(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["suggested_amounts_mode"] = "suggested_amounts_mode"
    value: OptionalNullable[str] = UNSET


class SuggestedAmountsModeDict(TypedDict):
    name: Literal["suggested_amounts_mode"]
    value: NotRequired[str | None]
