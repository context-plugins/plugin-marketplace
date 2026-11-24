from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsPublicAidResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsPublicAidResponseDict(TypedDict):
    krs: NotRequired[str]
