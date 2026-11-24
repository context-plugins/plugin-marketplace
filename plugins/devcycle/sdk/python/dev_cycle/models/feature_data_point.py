from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class FeatureDataPoint(SdkBaseModel):
    values: Any
    """Mapping of evaluation variation (variation1, variation2 etc.) to number of evaluations in that variation"""

    date: RFC3339DateTime
    """Date of this data point"""


class FeatureDataPointDict(TypedDict):
    values: Any
    date: RFC3339DateTime
