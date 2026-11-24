from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SortOptions(SdkBaseModel):
    field: OptionalNullable[str] = UNSET
    """``"relevance"`` or ``"date"``."""

    order: OptionalNullable[str] = UNSET
    """``"asc"`` or ``"desc"``."""


class SortOptionsDict(TypedDict):
    field: NotRequired[str | None]
    order: NotRequired[str | None]
