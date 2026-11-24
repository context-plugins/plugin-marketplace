from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .funding_round import FundingRound, FundingRoundDict


class Company(SdkBaseModel):
    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    websites: Optional[list[str]] = UNSET
    description: Optional[str] = UNSET
    industry: Optional[str] = UNSET
    keywords: Optional[list[str]] = UNSET
    employee_count: Optional[int] = Field(default=UNSET, alias="employeeCount")
    revenue: Optional[str] = UNSET
    founded: Optional[int] = UNSET
    hq_country: Optional[str] = Field(default=UNSET, alias="hqCountry")
    hq_address: Optional[str] = Field(default=UNSET, alias="hqAddress")
    linked_in_url: Optional[str] = Field(default=UNSET, alias="linkedInUrl")
    linked_in_followers_count: Optional[int] = Field(default=UNSET, alias="linkedInFollowersCount")
    phones: Optional[list[str]] = UNSET
    is_public: Optional[bool] = Field(default=UNSET, alias="isPublic")
    stock_exchange: Optional[str] = Field(default=UNSET, alias="stockExchange")
    stock_symbol: Optional[str] = Field(default=UNSET, alias="stockSymbol")
    funding_rounds: Optional[list[FundingRound]] = Field(default=UNSET, alias="fundingRounds")
    parent_organization: Optional[str] = Field(default=UNSET, alias="parentOrganization")
    external_id: Optional[str] = Field(default=UNSET, alias="externalID")
    status: Optional[str] = UNSET


class CompanyDict(TypedDict):
    name: NotRequired[str]
    domain: NotRequired[str]
    websites: NotRequired[list[str]]
    description: NotRequired[str]
    industry: NotRequired[str]
    keywords: NotRequired[list[str]]
    employee_count: NotRequired[int]
    revenue: NotRequired[str]
    founded: NotRequired[int]
    hq_country: NotRequired[str]
    hq_address: NotRequired[str]
    linked_in_url: NotRequired[str]
    linked_in_followers_count: NotRequired[int]
    phones: NotRequired[list[str]]
    is_public: NotRequired[bool]
    stock_exchange: NotRequired[str]
    stock_symbol: NotRequired[str]
    funding_rounds: NotRequired[list[FundingRoundDict]]
    parent_organization: NotRequired[str]
    external_id: NotRequired[str]
    status: NotRequired[str]
