from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_crunchbase_response import CompanyCrunchbaseResponse, CompanyCrunchbaseResponseDict
from .company_linkedin_response import CompanyLinkedinResponse, CompanyLinkedinResponseDict


class CompanySocialResponse(SdkBaseModel):
    crunchbase: Optional[CompanyCrunchbaseResponse] = UNSET
    linkedin: Optional[CompanyLinkedinResponse] = UNSET


class CompanySocialResponseDict(TypedDict):
    crunchbase: NotRequired[CompanyCrunchbaseResponseDict]
    linkedin: NotRequired[CompanyLinkedinResponseDict]
