from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_naics import CompanyNaics, CompanyNaicsDict
from .company_sic import CompanySic, CompanySicDict


class IndustryPrimaryGroupDetailsResponse(SdkBaseModel):
    sic_codes: Optional[list[CompanySic]] = Field(default=UNSET, alias="sicCodes")
    naics_codes: Optional[list[CompanyNaics]] = Field(default=UNSET, alias="naicsCodes")


class IndustryPrimaryGroupDetailsResponseDict(TypedDict):
    sic_codes: NotRequired[list[CompanySicDict]]
    naics_codes: NotRequired[list[CompanyNaicsDict]]
