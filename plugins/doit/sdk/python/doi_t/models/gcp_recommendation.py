from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.service3 import Service3OrStr


class GcpRecommendation(SdkBaseModel):
    """A CUD purchase recommendation for a (service, region) scope."""

    policy: Optional[str] = UNSET
    """Coverage target policy configured for this product line and region scope (built-in or customer-defined)."""

    region: Optional[str] = UNSET
    """Region scope for this recommendation, in ``lower_snake_case`` wire form (for example ``us_east1``). ``global``
    for ``compute``; a concrete region for ``cloud_sql``."""

    service: Optional[Service3OrStr] = UNSET
    """PS4C product line (``gcp_service``) this recommendation belongs to."""

    current_commitment: Optional[float] = Field(default=UNSET, alias="currentCommitment")
    """Active hourly commitment ($/h) currently applied to this billing account and product line, including commitments
    already purchased."""

    recommended_commitment: Optional[float] = Field(default=UNSET, alias="recommendedCommitment")
    """Recommended total hourly commitment ($/h) based on usage patterns and your commitment policy. Designed to
    increase savings while managing underutilization risk."""

    potential_additional_savings: Optional[float] = Field(default=UNSET, alias="potentialAdditionalSavings")
    """Estimated additional monthly savings ($/month) from applying the recommended commitment relative to
    ``currentCommitment``."""

    estimated_average_coverage: Optional[float] = Field(default=UNSET, alias="estimatedAverageCoverage")
    """Estimated average coverage of eligible spend if the recommended commitment were in place, as a fraction from 0 to
    1 (for example, ``0.5517`` is 55.17%). Same scale as ``esr`` and the inventory utilization and coverage fields."""


class GcpRecommendationDict(TypedDict):
    policy: NotRequired[str]
    region: NotRequired[str]
    service: NotRequired[Service3OrStr]
    current_commitment: NotRequired[float]
    recommended_commitment: NotRequired[float]
    potential_additional_savings: NotRequired[float]
    estimated_average_coverage: NotRequired[float]
