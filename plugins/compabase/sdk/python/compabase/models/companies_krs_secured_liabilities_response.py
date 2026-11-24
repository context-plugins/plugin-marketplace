from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsSecuredLiabilitiesResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsSecuredLiabilitiesResponseDict(TypedDict):
    krs: NotRequired[str]
