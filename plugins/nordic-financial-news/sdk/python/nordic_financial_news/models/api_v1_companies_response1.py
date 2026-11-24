from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_detail import CompanyDetail, CompanyDetailDict


class ApiV1CompaniesResponse1(SdkBaseModel):
    company: CompanyDetail


class ApiV1CompaniesResponse1Dict(TypedDict):
    company: CompanyDetailDict
