from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyIndustryData(SdkBaseModel):
    main_industry: str = Field(alias="mainIndustry")
    sub_industry: str = Field(alias="subIndustry")


class CompanyIndustryDataDict(TypedDict):
    main_industry: str
    sub_industry: str
