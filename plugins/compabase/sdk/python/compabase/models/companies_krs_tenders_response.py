from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsTendersResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsTendersResponseDict(TypedDict):
    krs: NotRequired[str]
