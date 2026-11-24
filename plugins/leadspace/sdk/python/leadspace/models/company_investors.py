from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyInvestors(SdkBaseModel):
    cb_url: Optional[str] = UNSET
    last_investor_name: Optional[str] = UNSET
    company_investors: Optional[str] = UNSET


class CompanyInvestorsDict(TypedDict):
    cb_url: NotRequired[str]
    last_investor_name: NotRequired[str]
    company_investors: NotRequired[str]
