from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class UseActualCoverSize(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["use_actual_cover_size"] = "use_actual_cover_size"
    value: OptionalNullable[bool] = UNSET


class UseActualCoverSizeDict(TypedDict):
    name: Literal["use_actual_cover_size"]
    value: NotRequired[bool | None]
