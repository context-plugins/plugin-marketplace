from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .paging_cursors import PagingCursors, PagingCursorsDict


class Paging(SdkBaseModel):
    cursors: Optional[PagingCursors] = UNSET
    next: Optional[str] = UNSET
    """URL for the next page of results"""

    previous: Optional[str] = UNSET
    """URL for the previous page of results"""


class PagingDict(TypedDict):
    cursors: NotRequired[PagingCursorsDict]
    next: NotRequired[str]
    previous: NotRequired[str]
