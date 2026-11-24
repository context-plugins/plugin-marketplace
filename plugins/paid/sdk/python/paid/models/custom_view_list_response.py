from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_view_summary import CustomViewSummary, CustomViewSummaryDict


class CustomViewListResponse(SdkBaseModel):
    views: list[CustomViewSummary]


class CustomViewListResponseDict(TypedDict):
    views: list[CustomViewSummaryDict]
