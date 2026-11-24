from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class SqlResponse(SdkBaseModel):
    """``truncated`` is the one to check: true means the row cap cut the answer, so aggregate in SQL."""

    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    rows: list[Any]
    row_count: int
    truncated: bool


class SqlResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    rows: list[Any]
    row_count: int
    truncated: bool
