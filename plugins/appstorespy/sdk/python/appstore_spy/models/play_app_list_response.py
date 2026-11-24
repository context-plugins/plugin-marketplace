from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detailed_error import DetailedError, DetailedErrorDict
from .new_play_app import NewPlayApp, NewPlayAppDict


class PlayAppListResponse(SdkBaseModel):
    data: Optional[list[NewPlayApp]] = UNSET
    errors: Optional[list[DetailedError]] = UNSET
    total_count: int = 0


class PlayAppListResponseDict(TypedDict):
    data: NotRequired[list[NewPlayAppDict]]
    errors: NotRequired[list[DetailedErrorDict]]
    total_count: NotRequired[int]
