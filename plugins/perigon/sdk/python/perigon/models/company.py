from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .symbol_holder import SymbolHolder, SymbolHolderDict
from .web_resources import WebResources, WebResourcesDict


class Company(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    updated_at: OptionalNullable[str] = Field(default=UNSET, alias="updatedAt")
    primary_record_id: OptionalNullable[str] = Field(default=UNSET, alias="primaryRecordId")
    alt_names: OptionalNullable[list[str]] = Field(default=UNSET, alias="altNames")
    domains: OptionalNullable[list[str]] = UNSET
    monthly_visits: OptionalNullable[int] = Field(default=UNSET, alias="monthlyVisits")
    global_rank: OptionalNullable[int] = Field(default=UNSET, alias="globalRank")
    description: OptionalNullable[str] = UNSET
    ceo: OptionalNullable[str] = UNSET
    industry: OptionalNullable[str] = UNSET
    sector: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    full_time_employees: OptionalNullable[int] = Field(default=UNSET, alias="fullTimeEmployees")
    address: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    zip: OptionalNullable[str] = UNSET
    logo: OptionalNullable[str] = UNSET
    favicon: OptionalNullable[str] = UNSET
    is_etf: OptionalNullable[bool] = Field(default=UNSET, alias="isEtf")
    is_actively_trading: OptionalNullable[bool] = Field(default=UNSET, alias="isActivelyTrading")
    is_fund: OptionalNullable[bool] = Field(default=UNSET, alias="isFund")
    is_adr: OptionalNullable[bool] = Field(default=UNSET, alias="isAdr")
    symbols: OptionalNullable[list[SymbolHolder]] = UNSET
    naics: OptionalNullable[str] = UNSET
    sic: OptionalNullable[str] = UNSET
    cusip: OptionalNullable[str] = UNSET
    cik: OptionalNullable[str] = UNSET
    isin: OptionalNullable[str] = UNSET
    year_founded: OptionalNullable[int] = Field(default=UNSET, alias="yearFounded")
    revenue: OptionalNullable[str] = UNSET
    web_resources: Optional[WebResources] = Field(default=UNSET, alias="webResources")


class CompanyDict(TypedDict):
    id: NotRequired[str | None]
    name: NotRequired[str | None]
    updated_at: NotRequired[str | None]
    primary_record_id: NotRequired[str | None]
    alt_names: NotRequired[list[str] | None]
    domains: NotRequired[list[str] | None]
    monthly_visits: NotRequired[int | None]
    global_rank: NotRequired[int | None]
    description: NotRequired[str | None]
    ceo: NotRequired[str | None]
    industry: NotRequired[str | None]
    sector: NotRequired[str | None]
    country: NotRequired[str | None]
    full_time_employees: NotRequired[int | None]
    address: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    zip: NotRequired[str | None]
    logo: NotRequired[str | None]
    favicon: NotRequired[str | None]
    is_etf: NotRequired[bool | None]
    is_actively_trading: NotRequired[bool | None]
    is_fund: NotRequired[bool | None]
    is_adr: NotRequired[bool | None]
    symbols: NotRequired[list[SymbolHolderDict] | None]
    naics: NotRequired[str | None]
    sic: NotRequired[str | None]
    cusip: NotRequired[str | None]
    cik: NotRequired[str | None]
    isin: NotRequired[str | None]
    year_founded: NotRequired[int | None]
    revenue: NotRequired[str | None]
    web_resources: NotRequired[WebResourcesDict]
