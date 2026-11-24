from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PagingCursors(SdkBaseModel):
    before: Optional[str] = UNSET
    """Cursor pointing to the start of the current page"""

    after: Optional[str] = UNSET
    """Cursor pointing to the end of the current page"""


class PagingCursorsDict(TypedDict):
    before: NotRequired[str]
    after: NotRequired[str]
