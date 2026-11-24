from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InsightSummary(SdkBaseModel):
    """Aggregate summary of risks and savings across all resource results for an insight."""

    operational_risks: Optional[float] = Field(default=UNSET, alias="operationalRisks")
    """Total number of operational risks."""

    performance_risks: Optional[float] = Field(default=UNSET, alias="performanceRisks")
    """Total number of performance risks."""

    potential_daily_savings: Optional[float] = Field(default=UNSET, alias="potentialDailySavings")
    """Total potential daily savings in USD."""

    reliability_risks: Optional[float] = Field(default=UNSET, alias="reliabilityRisks")
    """Total number of reliability risks."""

    security_risks: Optional[float] = Field(default=UNSET, alias="securityRisks")
    """Total number of security risks."""

    sustainability_risks: Optional[float] = Field(default=UNSET, alias="sustainabilityRisks")
    """Total number of sustainability risks."""


class InsightSummaryDict(TypedDict):
    operational_risks: NotRequired[float]
    performance_risks: NotRequired[float]
    potential_daily_savings: NotRequired[float]
    reliability_risks: NotRequired[float]
    security_risks: NotRequired[float]
    sustainability_risks: NotRequired[float]
