from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Recent(SdkBaseModel):
    max_age_s: Optional[float] = UNSET
    factor: Optional[float] = UNSET


class RecentDict(TypedDict):
    max_age_s: NotRequired[float]
    factor: NotRequired[float]
