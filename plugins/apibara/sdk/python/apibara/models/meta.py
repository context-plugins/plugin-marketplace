from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Meta(SdkBaseModel):
    schema_version: Optional[str] = UNSET
    requested_after: Optional[int] = UNSET
    oldest_available_cursor: Optional[int] = UNSET
    oldest_available_sequence: Optional[int] = UNSET
    latest_available_sequence: OptionalNullable[int] = UNSET
    retention_days: Optional[int] = UNSET


class MetaDict(TypedDict):
    schema_version: NotRequired[str]
    requested_after: NotRequired[int]
    oldest_available_cursor: NotRequired[int]
    oldest_available_sequence: NotRequired[int]
    latest_available_sequence: NotRequired[int | None]
    retention_days: NotRequired[int]
