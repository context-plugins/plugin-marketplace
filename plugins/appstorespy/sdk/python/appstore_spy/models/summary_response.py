from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SummaryResponse(SdkBaseModel):
    total: int
    ipd: int
    revenue: int
    downloads: int
    available: int
    removed: int


class SummaryResponseDict(TypedDict):
    total: int
    ipd: int
    revenue: int
    downloads: int
    available: int
    removed: int
