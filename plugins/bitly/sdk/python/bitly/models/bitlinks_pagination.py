from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BitlinksPagination(SdkBaseModel):
    next: Optional[str] = UNSET
    search_after: Optional[str] = UNSET
    size: Optional[int] = UNSET


class BitlinksPaginationDict(TypedDict):
    next: NotRequired[str]
    search_after: NotRequired[str]
    size: NotRequired[int]
