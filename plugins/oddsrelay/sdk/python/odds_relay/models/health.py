from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .boards import Boards, BoardsDict
from .enums.status3 import Status3OrStr


class Health(SdkBaseModel):
    status: Status3OrStr
    """``degraded`` when a board is past the age bound (``stale_boards``) or cannot be served (``missing_boards``).
    Still HTTP 200."""

    version: str
    boards: dict[str, Boards]
    stale_boards: Optional[list[str]] = UNSET
    max_board_age_s: Optional[float] = UNSET
    missing_boards: Optional[list[str]] = UNSET


class HealthDict(TypedDict):
    status: Status3OrStr
    version: str
    boards: dict[str, BoardsDict]
    stale_boards: NotRequired[list[str]]
    max_board_age_s: NotRequired[float]
    missing_boards: NotRequired[list[str]]
