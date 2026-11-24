from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rollout import Rollout, RolloutDict
from .target_audience import TargetAudience, TargetAudienceDict
from .target_distribution import TargetDistribution, TargetDistributionDict


class Target(SdkBaseModel):
    id: str = Field(alias="_id")
    """A unique Target ID"""

    name: Optional[str] = UNSET
    """Target name"""

    audience: TargetAudience
    """Audience model describing target segmentation."""

    rollout: Optional[Rollout] = UNSET
    """Rollout sub-document describing how a Target's audience is rolled out"""

    distribution: list[TargetDistribution]
    """Specifies variation distribution percentages for features"""

    bucketing_key: Optional[str] = Field(default=UNSET, alias="bucketingKey")
    """String to bucket users into a specific variation"""


class TargetDict(TypedDict):
    id: str
    name: NotRequired[str]
    audience: TargetAudienceDict
    rollout: NotRequired[RolloutDict]
    distribution: list[TargetDistributionDict]
    bucketing_key: NotRequired[str]
