from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsFilingTimelinessResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsFilingTimelinessResponseDict(TypedDict):
    krs: NotRequired[str]
