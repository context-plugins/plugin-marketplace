from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class UploadFilters(SdkBaseModel):
    event_guid: OptionalNullable[str] = UNSET
    created_at_start: OptionalNullable[str] = UNSET
    created_at_end: OptionalNullable[str] = UNSET
    updated_at_start: OptionalNullable[str] = UNSET
    updated_at_end: OptionalNullable[str] = UNSET
    channel_id: OptionalNullable[str] = UNSET
    title: OptionalNullable[str] = UNSET
    status: OptionalNullable[str] = UNSET


class UploadFiltersDict(TypedDict):
    event_guid: NotRequired[str | None]
    created_at_start: NotRequired[str | None]
    created_at_end: NotRequired[str | None]
    updated_at_start: NotRequired[str | None]
    updated_at_end: NotRequired[str | None]
    channel_id: NotRequired[str | None]
    title: NotRequired[str | None]
    status: NotRequired[str | None]
