from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pagination(SdkBaseModel):
    current_page: Optional[int] = UNSET
    last_page: Optional[int] = UNSET
    per_page: Optional[int] = UNSET
    total: Optional[int] = UNSET


class PaginationDict(TypedDict):
    current_page: NotRequired[int]
    last_page: NotRequired[int]
    per_page: NotRequired[int]
    total: NotRequired[int]
