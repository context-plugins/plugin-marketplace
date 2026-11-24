from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .method_distribution import MethodDistribution, MethodDistributionDict


class Connected(SdkBaseModel):
    total: Optional[int] = UNSET
    distribution: Optional[MethodDistribution] = UNSET


class ConnectedDict(TypedDict):
    total: NotRequired[int]
    distribution: NotRequired[MethodDistributionDict]
