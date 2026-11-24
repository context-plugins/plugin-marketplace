from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .exchange_summary import ExchangeSummary, ExchangeSummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1ExchangesResponse(SdkBaseModel):
    exchanges: Optional[list[ExchangeSummary]] = UNSET
    pagination: Optional[Pagination] = UNSET


class ApiV1ExchangesResponseDict(TypedDict):
    exchanges: NotRequired[list[ExchangeSummaryDict]]
    pagination: NotRequired[PaginationDict]
