from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CurrentVisitorsResponse(SdkBaseModel):
    site_id: Optional[int] = UNSET
    visitors: Optional[int] = UNSET


class CurrentVisitorsResponseDict(TypedDict):
    site_id: NotRequired[int]
    visitors: NotRequired[int]
