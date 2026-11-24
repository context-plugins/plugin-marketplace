from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company import Company, CompanyDict


class CompaniesResponse(SdkBaseModel):
    value: Optional[list[Company]] = UNSET


class CompaniesResponseDict(TypedDict):
    value: NotRequired[list[CompanyDict]]
