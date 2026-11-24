from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsEuGrantsResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsEuGrantsResponseDict(TypedDict):
    krs: NotRequired[str]
