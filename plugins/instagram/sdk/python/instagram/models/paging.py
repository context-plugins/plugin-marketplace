from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cursors import Cursors, CursorsDict


class Paging(SdkBaseModel):
    cursors: Optional[Cursors] = UNSET
    next: Optional[str] = UNSET
    """URL to fetch next page."""

    previous: Optional[str] = UNSET
    """URL to fetch previous page."""


class PagingDict(TypedDict):
    cursors: NotRequired[CursorsDict]
    next: NotRequired[str]
    previous: NotRequired[str]
