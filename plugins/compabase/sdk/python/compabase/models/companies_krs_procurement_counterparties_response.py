from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsProcurementCounterpartiesResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsProcurementCounterpartiesResponseDict(TypedDict):
    krs: NotRequired[str]
