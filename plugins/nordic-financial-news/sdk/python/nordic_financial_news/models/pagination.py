from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Pagination(SdkBaseModel):
    count: Optional[int] = UNSET
    next_cursor: OptionalNullable[str] = UNSET


class PaginationDict(TypedDict):
    count: NotRequired[int]
    next_cursor: NotRequired[str | None]
