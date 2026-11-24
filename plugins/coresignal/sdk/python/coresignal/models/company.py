from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Company(SdkBaseModel):
    id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    website: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    industry: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    founded: Optional[int] = UNSET
    size: Optional[str] = UNSET
    employees_count: Optional[int] = UNSET
    followers_count: Optional[int] = UNSET
    description: Optional[str] = UNSET
    headquarters: Optional[str] = UNSET
    country: Optional[str] = UNSET
    region: Optional[str] = UNSET
    locality: Optional[str] = UNSET
    specialities: Optional[list[str]] = UNSET
    technologies: Optional[list[str]] = UNSET
    funding_total_amount: Optional[float] = UNSET
    last_funding_round: Optional[Any] = UNSET
    linkedin_url: Optional[str] = UNSET
    twitter_url: Optional[str] = UNSET
    facebook_url: Optional[str] = UNSET
    crunchbase_url: Optional[str] = UNSET
    last_updated: Optional[RFC3339DateTime] = UNSET


class CompanyDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    website: NotRequired[str]
    domain: NotRequired[str]
    industry: NotRequired[str]
    type_: NotRequired[str]
    founded: NotRequired[int]
    size: NotRequired[str]
    employees_count: NotRequired[int]
    followers_count: NotRequired[int]
    description: NotRequired[str]
    headquarters: NotRequired[str]
    country: NotRequired[str]
    region: NotRequired[str]
    locality: NotRequired[str]
    specialities: NotRequired[list[str]]
    technologies: NotRequired[list[str]]
    funding_total_amount: NotRequired[float]
    last_funding_round: NotRequired[Any]
    linkedin_url: NotRequired[str]
    twitter_url: NotRequired[str]
    facebook_url: NotRequired[str]
    crunchbase_url: NotRequired[str]
    last_updated: NotRequired[RFC3339DateTime]
