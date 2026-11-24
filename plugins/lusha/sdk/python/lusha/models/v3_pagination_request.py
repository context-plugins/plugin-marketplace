from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V3PaginationRequest(SdkBaseModel):
    page: int = 0
    size: int = 25


class V3PaginationRequestDict(TypedDict):
    page: int
    size: int
