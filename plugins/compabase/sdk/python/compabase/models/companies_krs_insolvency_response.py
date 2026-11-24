from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsInsolvencyResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsInsolvencyResponseDict(TypedDict):
    krs: NotRequired[str]
