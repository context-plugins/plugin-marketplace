from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TargetDistribution(SdkBaseModel):
    percentage: float
    """Distribution percentage for the variation"""

    variation: str = Field(alias="_variation")
    """Variation ID or key from ``feature.variations``"""


class TargetDistributionDict(TypedDict):
    percentage: float
    variation: str
