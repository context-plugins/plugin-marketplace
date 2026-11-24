from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DefaultFund(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["default_fund"] = "default_fund"
    value: OptionalNullable[str] = UNSET


class DefaultFundDict(TypedDict):
    name: Literal["default_fund"]
    value: NotRequired[str | None]
