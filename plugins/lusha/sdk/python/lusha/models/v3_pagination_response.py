from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3PaginationResponse(SdkBaseModel):
    page: Optional[int] = UNSET
    size: Optional[int] = UNSET
    total: Optional[int] = UNSET


class V3PaginationResponseDict(TypedDict):
    page: NotRequired[int]
    size: NotRequired[int]
    total: NotRequired[int]
