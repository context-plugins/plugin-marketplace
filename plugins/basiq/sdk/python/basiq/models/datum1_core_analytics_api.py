from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .active import Active, ActiveDict


class Datum1CoreAnalyticsApi(SdkBaseModel):
    date: Optional[Date] = UNSET
    created: Optional[int] = UNSET
    deleted: Optional[int] = UNSET
    active: Optional[Active] = UNSET


class Datum1CoreAnalyticsApiDict(TypedDict):
    date: NotRequired[Date]
    created: NotRequired[int]
    deleted: NotRequired[int]
    active: NotRequired[ActiveDict]
