from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideFund(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_fund"] = "hide_fund"
    value: OptionalNullable[bool] = UNSET


class HideFundDict(TypedDict):
    name: Literal["hide_fund"]
    value: NotRequired[bool | None]
