from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsEuFundsResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsEuFundsResponseDict(TypedDict):
    krs: NotRequired[str]
