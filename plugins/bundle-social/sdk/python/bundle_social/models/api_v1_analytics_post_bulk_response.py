from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination import Pagination, PaginationDict
from .result import Result, ResultDict


class ApiV1AnalyticsPostBulkResponse(SdkBaseModel):
    results: list[Result]
    pagination: Pagination


class ApiV1AnalyticsPostBulkResponseDict(TypedDict):
    results: list[ResultDict]
    pagination: PaginationDict
