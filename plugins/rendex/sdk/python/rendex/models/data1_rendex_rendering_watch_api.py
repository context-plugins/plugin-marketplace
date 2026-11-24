from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .watch_run import WatchRun, WatchRunDict


class Data1RendexRenderingWatchApi(SdkBaseModel):
    items: Optional[list[WatchRun]] = UNSET
    next_cursor: Optional[str] = Field(default=UNSET, alias="nextCursor")
    """Pass as cursor to fetch the next page; absent on the last page"""


class Data1RendexRenderingWatchApiDict(TypedDict):
    items: NotRequired[list[WatchRunDict]]
    next_cursor: NotRequired[str]
