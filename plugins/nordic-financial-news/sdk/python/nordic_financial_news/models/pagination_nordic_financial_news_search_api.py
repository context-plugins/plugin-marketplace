from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .articles import Articles, ArticlesDict
from .companies import Companies, CompaniesDict
from .countries import Countries, CountriesDict
from .exchanges import Exchanges, ExchangesDict
from .indices import Indices, IndicesDict
from .stories import Stories, StoriesDict


class PaginationNordicFinancialNewsSearchApi(SdkBaseModel):
    articles: Optional[Articles] = UNSET
    stories: Optional[Stories] = UNSET
    companies: Optional[Companies] = UNSET
    countries: Optional[Countries] = UNSET
    exchanges: Optional[Exchanges] = UNSET
    indices: Optional[Indices] = UNSET


class PaginationNordicFinancialNewsSearchApiDict(TypedDict):
    articles: NotRequired[ArticlesDict]
    stories: NotRequired[StoriesDict]
    companies: NotRequired[CompaniesDict]
    countries: NotRequired[CountriesDict]
    exchanges: NotRequired[ExchangesDict]
    indices: NotRequired[IndicesDict]
