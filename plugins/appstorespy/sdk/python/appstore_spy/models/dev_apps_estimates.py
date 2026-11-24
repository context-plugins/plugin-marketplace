from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DevAppsEstimates(SdkBaseModel):
    month: str
    downloads: Optional[int] = UNSET
    revenue: Optional[int] = UNSET


class DevAppsEstimatesDict(TypedDict):
    month: str
    downloads: NotRequired[int]
    revenue: NotRequired[int]
