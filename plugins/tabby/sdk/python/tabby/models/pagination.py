from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pagination(SdkBaseModel):
    limit: Optional[int] = UNSET
    """Limits the number of returned results."""

    offset: Optional[int] = UNSET
    """Offset from which start returned results."""

    total_count: Optional[int] = UNSET
    """Returned total item count."""


class PaginationDict(TypedDict):
    limit: NotRequired[int]
    offset: NotRequired[int]
    total_count: NotRequired[int]
