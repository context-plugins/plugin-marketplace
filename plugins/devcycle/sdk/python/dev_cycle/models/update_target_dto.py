from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rollout import Rollout, RolloutDict
from .target_audience import TargetAudience, TargetAudienceDict
from .target_distribution import TargetDistribution, TargetDistributionDict


class UpdateTargetDto(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="_id")
    """A unique Target ID"""

    name: Optional[str] = UNSET
    """Target name"""

    rollout: Optional[Rollout] = UNSET
    """Rollout sub-document describing how a Target's audience is rolled out"""

    distribution: list[TargetDistribution]
    """Specifies variation distribution percentages for features"""

    audience: TargetAudience
    """Audience model describing target segmentation."""


class UpdateTargetDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    rollout: NotRequired[RolloutDict]
    distribution: list[TargetDistributionDict]
    audience: TargetAudienceDict
