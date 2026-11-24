from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pagination(SdkBaseModel):
    page_number: Optional[int] = UNSET
    total_pages: Optional[int] = UNSET
    records: Optional[int] = UNSET
    total_records: Optional[int] = UNSET


class PaginationDict(TypedDict):
    page_number: NotRequired[int]
    total_pages: NotRequired[int]
    records: NotRequired[int]
    total_records: NotRequired[int]
