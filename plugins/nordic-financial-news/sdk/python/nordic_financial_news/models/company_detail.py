from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .also_listed_on import AlsoListedOn, AlsoListedOnDict
from .country import Country, CountryDict
from .exchange import Exchange, ExchangeDict
from .index import Index, IndexDict
from .parent_company import ParentCompany, ParentCompanyDict
from .registry import Registry, RegistryDict
from .stock_listing import StockListing, StockListingDict
from .subsidiary import Subsidiary, SubsidiaryDict


class CompanyDetail(SdkBaseModel):
    id: str
    """Unique company identifier"""

    name: str
    """Company name"""

    slug: str
    """URL-friendly company name"""

    ticker: OptionalNullable[str] = UNSET
    """Primary stock ticker (null if unlisted)"""

    former_tickers: list[str]
    """Tickers the company was formerly listed under, from delisted or renamed listings, excluding any that are still a
    current ticker. Always present; empty when none. The ticker filter resolves former tickers as well as the current
    one, so a match on an old ticker still returns the company; this field tells you the ticker you searched by is
    historical."""

    is_active: Optional[bool] = UNSET
    """Whether the company is currently active/operating"""

    exchange: OptionalNullable[Exchange] = UNSET
    """Primary exchange where the company is listed"""

    also_listed_on: list[AlsoListedOn]
    """The company's other active listings, excluding the primary listing above: cross-listings on other exchanges and
    additional share classes (which may be on the same exchange). Always present; empty when the company is
    single-listed or unlisted. The row's ticker/exchange fields are the primary listing only. Company detail
    stock_listings is the authoritative full set."""

    description: OptionalNullable[str] = UNSET
    """Company description"""

    sector: OptionalNullable[str] = UNSET
    """Industry sector"""

    website: OptionalNullable[str] = UNSET
    """Company website"""

    article_count: Optional[int] = UNSET
    """Number of articles mentioning this company"""

    story_count: Optional[int] = UNSET
    """Number of stories mentioning this company"""

    parent_company: OptionalNullable[ParentCompany] = UNSET
    """Parent company, if this is a subsidiary"""

    subsidiaries: Optional[list[Subsidiary]] = UNSET
    """Subsidiary companies"""

    indices: Optional[list[Index]] = UNSET
    """Stock index memberships (e.g. OMXS30)"""

    stock_listings: Optional[list[StockListing]] = UNSET
    """All stock listings across exchanges"""

    country: OptionalNullable[Country] = UNSET
    """Country where the company is domiciled"""

    registry: OptionalNullable[Registry] = UNSET
    """Official company registry data from Nordic registries (e.g. Bolagsverket, PRH). Null if no registry data
    exists."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """When the company was last updated (ISO 8601)"""


class CompanyDetailDict(TypedDict):
    id: str
    name: str
    slug: str
    ticker: NotRequired[str | None]
    former_tickers: list[str]
    is_active: NotRequired[bool]
    exchange: NotRequired[ExchangeDict | None]
    also_listed_on: list[AlsoListedOnDict]
    description: NotRequired[str | None]
    sector: NotRequired[str | None]
    website: NotRequired[str | None]
    article_count: NotRequired[int]
    story_count: NotRequired[int]
    parent_company: NotRequired[ParentCompanyDict | None]
    subsidiaries: NotRequired[list[SubsidiaryDict]]
    indices: NotRequired[list[IndexDict]]
    stock_listings: NotRequired[list[StockListingDict]]
    country: NotRequired[CountryDict | None]
    registry: NotRequired[RegistryDict | None]
    updated_at: NotRequired[RFC3339DateTime]
