from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsFinancialLicensesResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsFinancialLicensesResponseDict(TypedDict):
    krs: NotRequired[str]
