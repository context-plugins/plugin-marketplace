from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .watch import Watch, WatchDict


class DataRendexRenderingWatchApi(SdkBaseModel):
    items: Optional[list[Watch]] = UNSET
    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")
    """Pass as cursor to fetch the next page; absent on the last page"""


class DataRendexRenderingWatchApiDict(TypedDict):
    items: NotRequired[list[WatchDict]]
    next_cursor: NotRequired[str]
