from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrPagination(SdkBaseModel):
    """This object specifies how to query the next set of results."""

    next: Optional[str] = UNSET
    """a hyperlink to the next set of results."""

    search_after: Optional[str] = UNSET
    """the identifier of where to begin searching for the next set of results."""

    size: Optional[int] = UNSET
    """the number of results returned from this query."""


class QrPaginationDict(TypedDict):
    next: NotRequired[str]
    search_after: NotRequired[str]
    size: NotRequired[int]
