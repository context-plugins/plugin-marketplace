from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1RiskIndicatorsReadingsRequest(SdkBaseModel):
    period: str
    """The whole month the figure is for, YYYY-MM"""

    value: Optional[float] = UNSET
    """The figure: a count, minutes, or a percentage. Omit for a ratio indicator and give numerator and denominator"""

    numerator: Optional[int] = UNSET
    """For a ratio indicator: how many were in the condition counted"""

    denominator: Optional[int] = UNSET
    """For a ratio indicator: how many there were in all"""

    completeness: Optional[float] = UNSET
    """How much of what should have been counted was counted, as a percentage"""

    evidence: str
    """Where the figure comes from: the report, review or system, and where to find it"""

    note: Optional[str] = UNSET


class ApiV1RiskIndicatorsReadingsRequestDict(TypedDict):
    period: str
    value: NotRequired[float]
    numerator: NotRequired[int]
    denominator: NotRequired[int]
    completeness: NotRequired[float]
    evidence: str
    note: NotRequired[str]
