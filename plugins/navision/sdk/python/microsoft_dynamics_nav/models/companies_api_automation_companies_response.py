from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation_company import AutomationCompany, AutomationCompanyDict


class CompaniesApiAutomationCompaniesResponse(SdkBaseModel):
    value: Optional[list[AutomationCompany]] = UNSET


class CompaniesApiAutomationCompaniesResponseDict(TypedDict):
    value: NotRequired[list[AutomationCompanyDict]]
