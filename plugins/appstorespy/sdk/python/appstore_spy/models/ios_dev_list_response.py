from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detailed_error import DetailedError, DetailedErrorDict
from .ios_dev import IosDev, IosDevDict


class IosDevListResponse(SdkBaseModel):
    data: Optional[list[IosDev]] = UNSET
    errors: Optional[list[DetailedError]] = UNSET
    total_count: int = 0


class IosDevListResponseDict(TypedDict):
    data: NotRequired[list[IosDevDict]]
    errors: NotRequired[list[DetailedErrorDict]]
    total_count: NotRequired[int]
