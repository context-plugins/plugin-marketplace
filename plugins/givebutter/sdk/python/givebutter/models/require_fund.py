from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RequireFund(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["require_fund"] = "require_fund"
    value: OptionalNullable[bool] = UNSET


class RequireFundDict(TypedDict):
    name: Literal["require_fund"]
    value: NotRequired[bool | None]
