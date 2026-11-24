from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Pagination(SdkBaseModel):
    """Optional. If omitted, defaults to page 0, size 100."""

    page: int = 0
    size: int = 100


class PaginationDict(TypedDict):
    page: NotRequired[int]
    size: NotRequired[int]
