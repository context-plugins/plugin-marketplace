from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Result(SdkBaseModel):
    """The result data for this resource. Which fields are populated depends on the resultType. For security_risk:
    critical, high, medium, low. For potential_daily_savings: value. For potential_daily_savings_with_recommendation:
    value, current, recommendation. For potential_daily_savings_with_cluster_agent: value, agentInstalled."""

    value: Optional[float] = UNSET
    """the daily saving amount for this result"""

    critical: Optional[int] = UNSET
    """number of critical security risks"""

    high: Optional[int] = UNSET
    """number of high security risks"""

    medium: Optional[int] = UNSET
    """number of medium security risks"""

    low: Optional[int] = UNSET
    """number of low security risks"""

    current: Optional[str] = UNSET
    """the current state (i.e. current instance type)"""

    recommendation: Optional[str] = UNSET
    """the recommended state (i.e. recommended instance type)"""

    agent_installed: Optional[bool] = Field(default=UNSET, alias="agentInstalled")
    """true if the agent is installed"""


class ResultDict(TypedDict):
    value: NotRequired[float]
    critical: NotRequired[int]
    high: NotRequired[int]
    medium: NotRequired[int]
    low: NotRequired[int]
    current: NotRequired[str]
    recommendation: NotRequired[str]
    agent_installed: NotRequired[bool]
