from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .method_distribution1 import MethodDistribution1, MethodDistribution1Dict
from .status_distribution import StatusDistribution, StatusDistributionDict


class NonDeleted(SdkBaseModel):
    count: Optional[int] = UNSET
    status_distribution: Optional[StatusDistribution] = Field(default=UNSET, alias="statusDistribution")
    method_distribution: Optional[MethodDistribution1] = Field(default=UNSET, alias="methodDistribution")


class NonDeletedDict(TypedDict):
    count: NotRequired[int]
    status_distribution: NotRequired[StatusDistributionDict]
    method_distribution: NotRequired[MethodDistribution1Dict]
