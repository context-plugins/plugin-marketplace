from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompaniesKrsCourtGazetteResponse(SdkBaseModel):
    krs: Optional[str] = UNSET


class CompaniesKrsCourtGazetteResponseDict(TypedDict):
    krs: NotRequired[str]
