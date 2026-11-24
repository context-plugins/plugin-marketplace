from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_nordic_financial_news_search_api import (
    PaginationNordicFinancialNewsSearchApi,
    PaginationNordicFinancialNewsSearchApiDict,
)
from .results import Results, ResultsDict


class SearchResult(SdkBaseModel):
    results: Results
    pagination: PaginationNordicFinancialNewsSearchApi


class SearchResultDict(TypedDict):
    results: ResultsDict
    pagination: PaginationNordicFinancialNewsSearchApiDict
