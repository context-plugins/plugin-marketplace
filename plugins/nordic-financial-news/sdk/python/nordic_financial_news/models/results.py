from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .article_summary import ArticleSummary, ArticleSummaryDict
from .company_summary_nordic_financial_news_indices_api import (
    CompanySummaryNordicFinancialNewsIndicesApi,
    CompanySummaryNordicFinancialNewsIndicesApiDict,
)
from .country_summary import CountrySummary, CountrySummaryDict
from .exchange_summary import ExchangeSummary, ExchangeSummaryDict
from .index_summary import IndexSummary, IndexSummaryDict
from .story_summary import StorySummary, StorySummaryDict


class Results(SdkBaseModel):
    articles: Optional[list[ArticleSummary]] = UNSET
    stories: Optional[list[StorySummary]] = UNSET
    companies: Optional[list[CompanySummaryNordicFinancialNewsIndicesApi]] = UNSET
    countries: Optional[list[CountrySummary]] = UNSET
    exchanges: Optional[list[ExchangeSummary]] = UNSET
    indices: Optional[list[IndexSummary]] = UNSET


class ResultsDict(TypedDict):
    articles: NotRequired[list[ArticleSummaryDict]]
    stories: NotRequired[list[StorySummaryDict]]
    companies: NotRequired[list[CompanySummaryNordicFinancialNewsIndicesApiDict]]
    countries: NotRequired[list[CountrySummaryDict]]
    exchanges: NotRequired[list[ExchangeSummaryDict]]
    indices: NotRequired[list[IndexSummaryDict]]
