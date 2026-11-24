from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyProfile(SdkBaseModel):
    symbol: Optional[str] = UNSET
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    industry: Optional[str] = UNSET
    sector: Optional[str] = UNSET
    country: Optional[str] = UNSET
    ceo: Optional[str] = UNSET
    website: Optional[str] = UNSET
    description: Optional[str] = UNSET
    exchange: Optional[str] = UNSET
    currency: Optional[str] = UNSET


class CompanyProfileDict(TypedDict):
    symbol: NotRequired[str]
    company_name: NotRequired[str]
    industry: NotRequired[str]
    sector: NotRequired[str]
    country: NotRequired[str]
    ceo: NotRequired[str]
    website: NotRequired[str]
    description: NotRequired[str]
    exchange: NotRequired[str]
    currency: NotRequired[str]
