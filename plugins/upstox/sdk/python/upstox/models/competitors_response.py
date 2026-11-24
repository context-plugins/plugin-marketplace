from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .competitor_data import CompetitorData, CompetitorDataDict
from .enums.status import StatusOrStr


class CompetitorsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[CompetitorData]] = UNSET


class CompetitorsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[CompetitorDataDict]]
