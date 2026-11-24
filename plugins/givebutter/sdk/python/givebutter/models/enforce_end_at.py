from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EnforceEndAt(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["enforce_end_at"] = "enforce_end_at"
    value: OptionalNullable[bool] = UNSET


class EnforceEndAtDict(TypedDict):
    name: Literal["enforce_end_at"]
    value: NotRequired[bool | None]
