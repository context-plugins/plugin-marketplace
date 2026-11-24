from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TradeHistoryResponsePageData(SdkBaseModel):
    page_number: Optional[int] = UNSET
    page_size: Optional[int] = UNSET
    total_records: Optional[int] = UNSET
    total_pages: Optional[int] = UNSET


class TradeHistoryResponsePageDataDict(TypedDict):
    page_number: NotRequired[int]
    page_size: NotRequired[int]
    total_records: NotRequired[int]
    total_pages: NotRequired[int]
