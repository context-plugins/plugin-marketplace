from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatusDistribution(SdkBaseModel):
    successful: Optional[int] = UNSET
    pending: Optional[int] = UNSET
    failed: Optional[int] = UNSET


class StatusDistributionDict(TypedDict):
    successful: NotRequired[int]
    pending: NotRequired[int]
    failed: NotRequired[int]
