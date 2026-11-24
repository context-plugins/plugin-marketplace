from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppsEstimates(SdkBaseModel):
    id: str
    month: str
    downloads: Optional[int] = UNSET
    revenue: Optional[int] = UNSET


class AppsEstimatesDict(TypedDict):
    id: str
    month: str
    downloads: NotRequired[int]
    revenue: NotRequired[int]
