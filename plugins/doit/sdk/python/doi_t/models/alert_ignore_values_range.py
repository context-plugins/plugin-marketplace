from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AlertIgnoreValuesRange(SdkBaseModel):
    """Ignore metric values within these inclusive bounds for percentage-change alerts. Bounds use the metric units, not
    percentage-change units, and must satisfy lowerBound <= upperBound. Omission on PATCH preserves the range; null
    clears it. Changing condition away from percentage-change clears the range; supplying a non-null range with another
    condition is rejected."""

    lower_bound: float = Field(alias="lowerBound")
    upper_bound: float = Field(alias="upperBound")


class AlertIgnoreValuesRangeDict(TypedDict):
    lower_bound: float
    upper_bound: float
