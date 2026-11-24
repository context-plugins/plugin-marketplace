from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detailed_error import DetailedError, DetailedErrorDict
from .new_ios_app import NewIosApp, NewIosAppDict


class IosAppListResponse(SdkBaseModel):
    data: Optional[list[NewIosApp]] = UNSET
    errors: Optional[list[DetailedError]] = UNSET
    total_count: int = 0


class IosAppListResponseDict(TypedDict):
    data: NotRequired[list[NewIosAppDict]]
    errors: NotRequired[list[DetailedErrorDict]]
    total_count: NotRequired[int]
