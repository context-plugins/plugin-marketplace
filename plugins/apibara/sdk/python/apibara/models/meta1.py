from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Meta1(SdkBaseModel):
    schema_version: str
    after: int
    next_cursor: int
    has_more: bool
    count: int
    oldest_available_sequence: OptionalNullable[int] = UNSET
    latest_available_sequence: OptionalNullable[int] = UNSET
    retention_days: int
    ordering: Literal["sequence_asc"] = "sequence_asc"


class Meta1Dict(TypedDict):
    schema_version: str
    after: int
    next_cursor: int
    has_more: bool
    count: int
    oldest_available_sequence: NotRequired[int | None]
    latest_available_sequence: NotRequired[int | None]
    retention_days: int
    ordering: Literal["sequence_asc"]
