from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .method_distribution import MethodDistribution, MethodDistributionDict


class Created(SdkBaseModel):
    count: Optional[int] = UNSET
    method_distribution: Optional[MethodDistribution] = Field(default=UNSET, alias="methodDistribution")


class CreatedDict(TypedDict):
    count: NotRequired[int]
    method_distribution: NotRequired[MethodDistributionDict]
