from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsRealEstateResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsRealEstateResponseDict(TypedDict):
    krs: NotRequired[str]
