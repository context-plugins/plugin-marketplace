from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ProjectDataPoint(SdkBaseModel):
    date: RFC3339DateTime
    """Date of this datapoint"""

    value: float
    """Number of variable evaluations across the whole project for this data point, grouped by user"""


class ProjectDataPointDict(TypedDict):
    date: RFC3339DateTime
    value: float
